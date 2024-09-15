// Library import
import {
  Image,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, {createRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Local import
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import AHeader from '../../../components/common/AHeader';
import strings from '../../../i18n/strings';
import {AppLogoNoBg, Menu_Dark, Menu_Light} from '../../../assets/svgs';
import {colors, styles} from '../../../themes';
import {
  ACCESS_TOKEN,
  getHeight,
  moderateScale,
  THEME,
} from '../../../common/constants';
import images from '../../../assets/images';
import AText from '../../../components/common/AText';
import {ProfileSetting, myPersonalDetail} from '../../../api/constant';
import {changeThemeAction} from '../../../redux/action/themeAction';
import {setAsyncStorageData} from '../../../utils/helpers';
import {StackNav} from '../../../navigation/NavigationKeys';
import LogOut from '../../../components/models/LogOut';
import AButton from '../../../components/common/AButtton';

const Profile = ({navigation}) => {
  const color = useSelector(state => state.theme.theme);
  const language = useSelector(state => state.profile.language);
  const LogOutSheetRef = createRef();
  const dispatch = useDispatch();

  const [isEnabled, setIsEnabled] = useState(!!color.dark);

  const onPressMenu = () => {};

  const onPressLightTheme = () => {
    setAsyncStorageData(THEME, 'light');
    dispatch(changeThemeAction(colors.light));
  };

  const onPressDarkTheme = () => {
    setAsyncStorageData(THEME, 'dark');
    dispatch(changeThemeAction(colors.dark));
  };

  const toggleSwitch = val => {
    if (val) {
      onPressDarkTheme();
    } else {
      onPressLightTheme();
    }
    setIsEnabled(previousState => !previousState);
  };

  const onPressPremium = () => {
    navigation.navigate(StackNav.Premium);
  };

  const onPressEditProfile = () =>
    navigation.navigate(StackNav.SetUpProfile, {title: strings.editProfile});

  const onPressItem = item => {
    if (item.title === strings.profile) {
      console.log(item);
      
      navigation.navigate(item.route, {
        title: item.header,
        item: myPersonalDetail,
        isEdit: true,
      });
    } else {
      navigation.navigate(item.route, {title: item.header});
    }
  };

  const onPressLogOutBtn = () => LogOutSheetRef?.current?.show();

  const onPressYesLogOut = async () => {
    try {
      await AsyncStorage.removeItem(ACCESS_TOKEN);
      LogOutSheetRef?.current?.hide();
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: StackNav.Auth}],
        });
      }, 500);
      return true;
    } catch (exception) {
      return false;
    }
  };

  const onPressCancel = () => LogOutSheetRef?.current?.hide();

  const RightIcon = () => {
    return (
      <TouchableOpacity style={styles.pr10} onPress={onPressMenu}>
        {color.dark ? <Menu_Dark /> : <Menu_Light />}
      </TouchableOpacity>
    );
  };

  const LeftIcon = () => {
    return (
      <View style={styles.pr10}>
        <AppLogoNoBg height={moderateScale(30)} width={moderateScale(30)} />
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        disabled={item.title === strings.darkMode}
        onPress={() => onPressItem(item)}
        key={index}
        activeOpacity={item.rightIcon ? 1 : 0.5}
        style={[localStyles.settingsContainer, styles.mt20]}>
        <Ionicons
          name={item.icon}
          size={moderateScale(30)}
          color={color.dark ? color.whiteColor : color.darkColor}
        />
        <AText type="s18" style={styles.ml15}>
          {item.title}
        </AText>
        <View style={localStyles.rightContainer}>
          {!!item.value && (
            <AText type="s18" style={styles.mr10}>
              {language}
            </AText>
          )}
          {!!item.rightIcon ? (
            <Switch
              trackColor={{
                false: color.grayScale3,
                true: color.primary,
              }}
              thumbColor={color.whiteColor}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          ) : (
            <Ionicons
              name="chevron-forward-outline"
              size={moderateScale(20)}
              color={color.primary}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const renderFooterComponent = () => {
    return (
      <TouchableOpacity
        onPress={onPressLogOutBtn}
        style={[localStyles.settingsContainer, styles.mt20]}>
        <Ionicons
          name={'log-out-outline'}
          size={moderateScale(30)}
          color={color.alertColor}
        />
        <AText type="s18" color={color.alertColor} style={styles.ml15}>
          {strings.logout}
        </AText>
      </TouchableOpacity>
    );
  };

  const renderHeaderComponent = () => {
    return (
      <View style={styles.mt10}>
        <View style={styles.rowCenter}>
          <TouchableOpacity onPress={onPressEditProfile} style={styles.mb20}>
            <Image
              source={color.dark ? images.userDark : images.userLight}
              style={localStyles.userImage}
            />
            <MaterialIcon
              name="pencil-box"
              size={moderateScale(30)}
              color={color.primary}
              style={localStyles.editIcon}
            />
          </TouchableOpacity>
          <View style={[styles.mh20, styles.flex]}>
            <AText type="b24">{'Souvik Bera'}</AText>
            <AText type="m14" style={styles.mt10}>
              {'Souvik08@gmail.com'}
            </AText>
          </View>
        </View>
        {/* <ImageBackground
          source={images.premiumSubscription}
          onPress={onPressPremium}
          imageStyle={{borderRadius: moderateScale(32)}}
          resizeMode="cover"
          style={localStyles.premiumContainer}>
          <View style={localStyles.imageInnerContainer}>
            <AText type="b24" color={color.whiteColor}>
              {strings.joinPremium}
            </AText>
            <AText type="r12" color={color.whiteColor} style={styles.mv5}>
              {strings.joinPremiumDesc}
            </AText>
            <AButton
              title={strings.getPremium}
              onPress={onPressPremium}
              containerStyle={localStyles.premiumBtnContainer}
              textType={'s16'}
              color={color.primary}
              bgColor={color.whiteColor}
            />
          </View>
        </ImageBackground> */}
      </View>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader
        isHideBack={true}
        title={strings.profile}
        isLeftIcon={<LeftIcon />}
        rightIcon={<RightIcon />}
      />
      <FlatList
        data={ProfileSetting}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.root}
        ListFooterComponent={renderFooterComponent}
        ListHeaderComponent={renderHeaderComponent}
      />
      <LogOut
        SheetRef={LogOutSheetRef}
        onPressLogOut={onPressYesLogOut}
        onPressCancel={onPressCancel}
      />
    </ASafeAreaView>
  );
};

export default Profile;

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    ...styles.pb20,
  },
  image: {
    ...styles.mt20,
    ...styles.alignSelfCenter,
    ...styles.mh20,
    ...styles.mv20,
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: moderateScale(50),
  },
  userImage: {
    width: moderateScale(100),
    height: moderateScale(100),
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  premiumContainer: {
    ...styles.mv10,
    ...styles.justifyCenter,
    height: getHeight(170),
    width: '100%',
  },
  imageInnerContainer: {
    ...styles.ml20,
    width: '55%',
  },
  premiumBtnContainer: {
    height: moderateScale(32),
    width: moderateScale(120),
    borderRadius: moderateScale(16),
    ...styles.mt5,
  },
  settingsContainer: {
    ...styles.mt10,
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
  rightContainer: {
    ...styles.flex,
    ...styles.rowEnd,
  },
});
