// Library Imports
import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';

// Local Imports
import {colors, styles} from '../../themes';
import {StackNav} from '../../navigation/NavigationKeys';
import {
  ACCESS_TOKEN,
  APP_OPEN_FIRST_TIME,
  moderateScale,
  THEME,
} from '../../common/constants';
import {changeThemeAction} from '../../redux/action/themeAction';
import {App_Logo} from '../../assets/svgs';
import AText from '../../components/common/AText';

const Splash = ({navigation}) => {
  const color = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    asyncProcess();
    SplashScreen.hide();
  }, []);

  const asyncProcess = async () => {
    const DeviceID = await DeviceInfo.getUniqueId();
    console.log('DeviceID>>>>', DeviceID);
    try {
      let asyncData = await AsyncStorage.multiGet([
        THEME,
        APP_OPEN_FIRST_TIME,
        ACCESS_TOKEN,
      ]);
      if (!!asyncData) {
        const themeColor = JSON.parse(asyncData[0][1]);
        const appOpenFirstTime = JSON.parse(asyncData[1][1]);
        const access_token = JSON.parse(asyncData[2][1]);

        if (!!themeColor) {
          if (themeColor === 'light') {
            dispatch(changeThemeAction(colors.light));
          } else {
            dispatch(changeThemeAction(colors.dark));
          }
        }
        if (!!access_token) {
          navigation.reset({
            index: 0,
            routes: [{name: StackNav.TabBar}],
          });
        } else {
          if (!!appOpenFirstTime) {
            navigation.reset({
              index: 0,
              routes: [{name: StackNav.TabBar}],
            });
          } else {
            navigation.reset({
              index: 0,
              routes: [{name: StackNav.onBoarding}],
            });
          }
        }
      }
    } catch (e) {
      console.log('error ', e);
    }
  };

  return (
    <View style={[localStyles.container, {backgroundColor: color.background}]}>
      <View style={localStyles.appInfo}>
        <App_Logo />
        <AText type={'b48'} style={styles.mv20}>
          {strings.appName}
        </AText>
      </View>
      <ActivityIndicator size="large" color={color.darkColor} />
    </View>
  );
};

export default Splash;

const localStyles = StyleSheet.create({
  container: {
    ...styles.itemsCenter,
    ...styles.flex,
    ...styles.justifyCenter,
  },
  appInfo: {
    ...styles.flexRow,
    ...styles.g15,
    ...styles.itemsCenter,
  },
  ActivityContainer: {
    position: 'absolute',
    bottom: moderateScale(120),
  },
});
