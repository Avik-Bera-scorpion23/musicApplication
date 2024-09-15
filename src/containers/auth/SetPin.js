// Library import
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import OTPInputView from '@twotalltotems/react-native-otp-input';

// Local import
import ASafeAreaView from '../../components/common/ASafeAreaView';
import AHeader from '../../components/common/AHeader';
import strings from '../../i18n/strings';
import AText from '../../components/common/AText';
import AKeyBoardAvoidWrapper from '../../components/common/AKeyBoardAvoidWrapper';
import {styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import AButton from '../../components/common/AButtton';
import {StackNav} from '../../navigation/NavigationKeys';

const SetPin = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const [pin, setPin] = React.useState('');

  const onPinChange = code => setPin(code);
  const onPressPinContinue = () => navigation.navigate(StackNav.SetSecure);

  return (
    <ASafeAreaView>
      <AHeader title={strings.createNewPin} />
      <AKeyBoardAvoidWrapper contentContainerStyle={styles.flexGrow1}>
        <View style={localStyles.root}>
          <AText type={'r18'} align={'center'}>
            {strings.pinDesc}
          </AText>
          <OTPInputView
            pinCount={4}
            code={pin}
            onCodeChanged={onPinChange}
            autoFocusOnLoad={false}
            codeInputFieldStyle={[
              localStyles.pinInputStyle,
              {
                color: colors.textColor,
                backgroundColor: colors.inputBg,
                borderColor: colors.btnColor1,
              },
            ]}
            codeInputHighlightStyle={{
              backgroundColor: colors.inputFocusColor,
              borderColor: colors.primary,
            }}
            style={localStyles.inputStyle}
            secureTextEntry={true}
          />
        </View>
        <AButton
          textType={'b18'}
          color={colors.whiteColor}
          title={strings.continue}
          onPress={onPressPinContinue}
          containerStyle={localStyles.btnContainerStyle}
        />
      </AKeyBoardAvoidWrapper>
    </ASafeAreaView>
  );
};

export default SetPin;

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph30,
    ...styles.justifyCenter,
    ...styles.flex,
  },
  pinInputStyle: {
    height: moderateScale(60),
    width: moderateScale(75),
    fontSize: moderateScale(26),
    borderRadius: moderateScale(15),
  },
  btnContainerStyle: {
    ...styles.m20,
  },
  inputStyle: {
    height: moderateScale(60),
    ...styles.mv30,
  },
});
