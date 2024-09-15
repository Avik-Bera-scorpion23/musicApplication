// Libraries import
import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

// Local import
import ASafeAreaView from '../../components/common/ASafeAreaView';
import AHeader from '../../components/common/AHeader';
import strings from '../../i18n/strings';
import AText from '../../components/common/AText';
import {styles} from '../../themes';
import {FingerPrint} from '../../assets/svgs';
import {StackNav} from '../../navigation/NavigationKeys';
import AButton from '../../components/common/AButtton';

const SetSecure = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);

  const onPressContinue = () => {
    navigation.navigate(StackNav.SelectInterest);
  };

  return (
    <ASafeAreaView>
      <AHeader title={strings.setYourFingerprint} />
      <View style={localStyles.root}>
        <AText type={'r18'} align={'center'}>
          {strings.setYourFingerprintDesc1}
        </AText>
        <FingerPrint style={styles.mv50} />
        <AText type={'r18'} align={'center'}>
          {strings.setYourFingerprintDesc2}
        </AText>
      </View>
      <View style={localStyles.btnContainer}>
        <AButton
          title={strings.skip}
          textType={'b18'}
          color={colors.dark ? colors.whiteColor : colors.primary}
          containerStyle={[localStyles.skipBtnContainer]}
          bgColor={colors.dark3}
          onPress={onPressContinue}
        />
        <AButton
          title={strings.continue}
          textType={'b18'}
          color={colors.whiteColor}
          containerStyle={[localStyles.skipBtnContainer]}
          onPress={onPressContinue}
        />
      </View>
    </ASafeAreaView>
  );
};

export default SetSecure;

const localStyles = StyleSheet.create({
  root: {
    ...styles.flexCenter,
    ...styles.ph25,
  },
  btnContainer: {
    ...styles.p20,
    ...styles.rowSpaceAround,
  },
  skipBtnContainer: {
    width: '45%',
  },
});
