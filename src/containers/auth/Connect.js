// Library Imports
import {StyleSheet, Image, View, TouchableOpacity, PermissionsAndroid, Alert} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { getAll, getAlbums, searchSongs, SortSongFields, SortSongOrder } from "react-native-get-music-files";

// Local Imports
import strings from '../../i18n/strings';
import {styles} from '../../themes';
import AText from '../../components/common/AText';
import {moderateScale} from '../../common/constants';
import ASafeAreaView from '../../components/common/ASafeAreaView';
import AButton from '../../components/common/AButtton';
import {
  Apple_Dark,
  Apple_Light,
  Connect_Dark,
  Connect_Light,
  Facebook_Icon,
  Google_Icon,
} from '../../assets/svgs';
import {StackNav} from '../../navigation/NavigationKeys';
import { getAllMp3Files, requestStoragePermission } from '../../ContextFile';
import { check, PERMISSIONS, request, RESULTS, requestMultiple } from 'react-native-permissions';


const Connect = ({navigation}) => {

  const [data , setData ]= useState([]);
  const colors = useSelector(state => state.theme.theme);
  const onPressSignWithPassword = () =>{  navigation.navigate(StackNav.Login);   }
  const onPressSignUp = () => navigation.navigate(StackNav.Register);

  const [result, setResult] = useState();

  const hasPermissions = async () => {
    if (Platform.OS === 'android') {
      let hasPermission =
        (await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)) ===
        RESULTS.GRANTED || (await check(PERMISSIONS.ANDROID.READ_MEDIA_AUDIO)) ===
        RESULTS.GRANTED;

      if (!hasPermission) {
        hasPermission = await requestMultiple([
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
          PERMISSIONS.ANDROID.READ_MEDIA_AUDIO,
        ]);
      }

      return hasPermission;
    }

    if (Platform.OS === 'ios') {
      let hasPermission =
        (await check(PERMISSIONS.IOS.MEDIA_LIBRARY)) === RESULTS.GRANTED;
      if (!hasPermission) {
        hasPermission =
          (await request(PERMISSIONS.IOS.MEDIA_LIBRARY)) === RESULTS.GRANTED;
      }

      return hasPermission;
    }

    return false;
  };

  const test = async () => {
    const permissions = await hasPermissions();
    if (permissions) {
      const songsResults = await getAll({
        limit: 20,
        offset: 0,
        coverQuality: 50,
        minSongDuration: 1000,
        sortOrder: SortSongOrder.DESC,
        sortBy: SortSongFields.TITLE,
      });
      if (typeof songsResults === 'string') {
        return;
      }
      
      
      const updatedMusicData = songsResults.map(({ cover, ...rest }) => rest);
      setResult(updatedMusicData);
      console.log( ' DDDDD      ',updatedMusicData);

       
      
       
    }
  };

   

  useEffect(() => {
    test();
  }, []);

  return (
    <ASafeAreaView style={localStyles.root}>
      {colors.dark ? <Connect_Dark /> : <Connect_Light />}
      <AText type={'b36'} style={styles.mv20}>
        {strings.letsYouIn}
      </AText>
      <AButton
        title={strings.continueWithFacebook}
        textType={'b18'}
        color={colors.textColor}
        frontIcon={<Facebook_Icon />}
        style={styles.mh10}
        containerStyle={[
          localStyles.btnContainer,
          {borderColor: colors.borderColor},
        ]}
        bgColor={colors.btnColor1}
      />
      <AButton
        title={strings.continueWithGoogle}
        textType={'b18'}
        color={colors.textColor}
        frontIcon={<Google_Icon />}
        style={styles.mh10}
        containerStyle={[
          localStyles.btnContainer,
          {borderColor: colors.borderColor},
        ]}
        bgColor={colors.btnColor1}
      />
      <AButton
        title={strings.continueWithApple}
        textType={'b18'}
        color={colors.textColor}
        frontIcon={colors.dark === 'dark' ? <Apple_Light /> : <Apple_Dark />}
        style={styles.mh10}
        containerStyle={[
          localStyles.btnContainer,
          {borderColor: colors.borderColor},
        ]}
        bgColor={colors.btnColor1}
      />
      <View style={localStyles.divider}>
        <View
          style={[
            localStyles.orContainer,
            {backgroundColor: colors.borderColor},
          ]}
        />
        <AText type={'b18'} style={styles.mh10}>
          {strings.or}
        </AText>
        <View
          style={[
            localStyles.orContainer,
            {backgroundColor: colors.borderColor},
          ]}
        />
      </View>
      <AButton
        title={strings.signWithPassword}
        textType={'b18'}
        color={colors.textColor}
        containerStyle={[localStyles.signBtnContainer]}
        onPress={onPressSignWithPassword}
      />
      <TouchableOpacity
        onPress={onPressSignUp}
        style={localStyles.signUpContainer}>
        <AText type={'b16'}>{strings.dontHaveAccount}</AText>

        <AText type={'b16'} color={colors.primary}>
          {' '}
          {strings.signUp}
        </AText>
      </TouchableOpacity>
    </ASafeAreaView>
  );
};

export default Connect;

const localStyles = StyleSheet.create({
  root: {
    ...styles.center,
    ...styles.flex,
  },
  btnContainer: {
    ...styles.mt20,
    ...styles.center,
    ...styles.ph20,
    width: '90%',
    height: moderateScale(55),
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(1),
  },
  divider: {
    ...styles.rowCenter,
    ...styles.mv30,
  },
  orContainer: {
    height: moderateScale(1),
    width: '40%',
  },
  signBtnContainer: {
    ...styles.center,
    ...styles.ph20,
    width: '90%',
  },
  signUpContainer: {
    ...styles.rowCenter,
    ...styles.mv30,
  },
});
