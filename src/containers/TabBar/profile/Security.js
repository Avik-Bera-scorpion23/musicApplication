// Library import
import {
  FlatList,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

// Local import
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import AText from '../../../components/common/AText';
import {styles} from '../../../themes';
import {moderateScale} from '../../../common/constants';
import AHeader from '../../../components/common/AHeader';
import strings from '../../../i18n/strings';
import AButton from '../../../components/common/AButtton';
import {StackNav} from '../../../navigation/NavigationKeys';

const Security = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const [isEnabled, setIsEnabled] = React.useState({
    rememberMe: true,
    faceId: false,
    biometricId: true,
  });

  const SecurityData = [
    {
      title: strings.rememberMe,
      rightIcon: true,
      value: isEnabled.rememberMe,
      toggleSwitch: () =>
        setIsEnabled({
          ...isEnabled,
          rememberMe: isEnabled.rememberMe ? false : true,
        }),
    },
    {
      title: strings.faceId,
      rightIcon: true,
      value: isEnabled.faceId,
      toggleSwitch: () =>
        setIsEnabled({
          ...isEnabled,
          faceId: isEnabled.faceId ? false : true,
        }),
    },
    {
      title: strings.biometricId,
      rightIcon: true,
      value: isEnabled.biometricId,
      toggleSwitch: () =>
        setIsEnabled({
          ...isEnabled,
          biometricId: isEnabled.biometricId ? false : true,
        }),
    },
    {
      title: strings.googleAuthenticator,
    },
  ];

  const onPressChnagePin = () => navigation.navigate(StackNav.SetPin);
  const onPressChnagePassword = () =>
    navigation.navigate(StackNav.CreateNewPassword);

  const renderData = ({item, index}) => {
    return (
      <TouchableOpacity style={localStyles.settingsContainer}>
        <AText type="s18">{item.title}</AText>
        <View style={localStyles.rightContainer}>
          {item?.rightIcon ? (
            <Switch
              trackColor={{
                false: colors.grayScale3,
                true: colors.primary,
              }}
              thumbColor={colors.whiteColor}
              onValueChange={item?.toggleSwitch}
              value={item?.value}
            />
          ) : (
            <Ionicons
              name="chevron-forward-outline"
              size={moderateScale(20)}
              color={colors.dark ? colors.whiteColor : colors.grayScale9}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader title={strings.security} />
      <View style={styles.ph20}>
        <FlatList
          data={SecurityData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderData}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
        <AButton
          title={strings.changePin}
          textType={'b18'}
          containerStyle={[localStyles.btnContainer]}
          color={colors.dark ? colors.whiteColor : colors.primary}
          bgColor={colors.dark3}
          onPress={onPressChnagePin}
        />
        <AButton
          title={strings.changePassword}
          textType={'b18'}
          containerStyle={[localStyles.btnContainer]}
          color={colors.dark ? colors.whiteColor : colors.primary}
          bgColor={colors.dark3}
          onPress={onPressChnagePassword}
        />
      </View>
    </ASafeAreaView>
  );
};

export default Security;

const localStyles = StyleSheet.create({
  settingsContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.mt20,
  },
  rightContainer: {
    ...styles.flex,
    ...styles.rowEnd,
  },
  btnContainer: {
    ...styles.center,
    width: '100%',
    alignSelf: 'center',
    ...styles.mt25,
  },
});
