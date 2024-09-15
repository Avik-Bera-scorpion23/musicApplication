// Library import
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// Local import
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import images from '../../../assets/images';
import {styles} from '../../../themes';
import {
  Notification_Icon_Dark,
  Notification_Icon_Light,
  Search_Dark,
  Search_Light,
} from '../../../assets/svgs';
import {moderateScale} from '../../../common/constants';
import AText from '../../../components/common/AText';
import strings from '../../../i18n/strings';
import {StackNav} from '../../../navigation/NavigationKeys';
import {Artist, Charts, trendingMusic} from '../../../api/constant';
import HomeSection from './HomeSection';

const Home = () => {
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();

  const onPressSearch = () => navigation.navigate(StackNav.ExploreSearch);

  const onPressNotification = () => navigation.navigate(StackNav.Notification);

  const RightIcon = () => {
    return (
      <View style={styles.rowCenter}>
        <TouchableOpacity onPress={onPressSearch}>
          {colors.dark ? <Search_Dark /> : <Search_Light />}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressNotification} style={styles.ml15}>
          {colors.dark ? (
            <Notification_Icon_Dark />
          ) : (
            <Notification_Icon_Light />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ASafeAreaView>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.pb20}>
        <View style={localStyles.headerContainer}>
          <Image
            resizeMode="cover"
            source={images.profile2}
            style={localStyles.imageContainer}
          />
          <View style={localStyles.userNameContainer}>
            <AText
              type="r16"
              color={colors.textColor2}
              style={styles.flex}
              numberOfLines={1}>
              {strings.goodMorning}
            </AText>
            <AText
              type="b20"
              color={colors.textColor}
              style={styles.flex}
              numberOfLines={1}>
              {strings.userName}
            </AText>
          </View>
          <RightIcon />
        </View>
        <HomeSection
          title={strings.trendingNow}
          data={trendingMusic}
          navigateToPath={StackNav.TrendingNow}
        />
        <HomeSection
          title={strings.popularArtist}
          data={Artist}
          navigateToPath={StackNav.PopularArtist}
        />
        <HomeSection
          title={strings.topCharts}
          data={Charts}
          navigateToPath={StackNav.TopCharts}
        />
      </ScrollView>
    </ASafeAreaView>
  );
};

export default Home;

const localStyles = StyleSheet.create({
  imageContainer: {
    height: moderateScale(55),
    width: moderateScale(55),
    borderRadius: moderateScale(55 / 2),
  },
  headerContainer: {
    ...styles.rowCenter,
    ...styles.mv15,
    ...styles.ph25,
  },
  userNameContainer: {
    ...styles.ml15,
    ...styles.mr5,
    width: '60%',
  },
});
