import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useState} from 'react';
import ASafeAreaView from '../../components/common/ASafeAreaView';
import AHeader from '../../components/common/AHeader';
import strings from '../../i18n/strings';
import {styles} from '../../themes';
import AText from '../../components/common/AText';
import {useSelector} from 'react-redux';
import {
  Email_Icon,
  ForgotPassword_Dark,
  ForgotPassword_Light,
  Sms_Icon,
} from '../../assets/svgs';
import {moderateScale} from '../../common/constants';
import AButton from '../../components/common/AButtton';
import {StackNav} from '../../navigation/NavigationKeys';

const ForgotPassword = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const [isSelected, setIsSelected] = useState('sms');

  const ModeData = [
    {
      id: 1,
      title: strings.viaSms,
      icon: <Sms_Icon />,
      msgId: '+1 233 456 78 90',
      onPress: () => onPressSms(),
    },
    {
      id: 2,
      title: strings.viaEmail,
      icon: <Email_Icon />,
      msgId: 'qweew********1233@gmai.com',
      onPress: () => onPressEmail(),
    },
  ];

  const onPressSms = () => {
    setIsSelected(isSelected === 'sms' ? '' : 'sms');
  };

  const onPressEmail = () => {
    setIsSelected(isSelected === 'email' ? '' : 'email');
  };

  const onPressPinContinue = () =>
    navigation.navigate(StackNav.ForgotPasswordOtp);

  const RenderMode = memo(({title, icon, msgId, onPress, isActive}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[
          localStyles.mainContainer,
          {
            borderColor: isActive ? colors.primary : colors.borderColor,
          },
        ]}>
        {icon}
        <View style={[styles.ml20, styles.flex]}>
          <AText type={'m14'} color={colors.grayScale6}>
            {title}
          </AText>
          <AText style={styles.mt10} type={'b16'}>
            {msgId}
          </AText>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <ASafeAreaView>
      <AHeader title={strings.forgotPassword} />
      <ScrollView bounces={false} contentContainerStyle={localStyles.root}>
        <View style={[styles.mv20, styles.selfCenter]}>
          {colors.dark ? <ForgotPassword_Dark /> : <ForgotPassword_Light />}
        </View>
        <AText type={'r18'}>{strings.forgotPasswordDesc}</AText>
        <RenderMode
          title={strings.viaSms}
          icon={<Sms_Icon />}
          msgId="+1 233 456 78 90"
          onPress={() => onPressSms()}
          isActive={isSelected === 'sms'}
        />
        <RenderMode
          title={strings.viaEmail}
          icon={<Email_Icon />}
          msgId="qweew********1233@gmai.com"
          onPress={() => onPressEmail()}
          isActive={isSelected === 'email'}
        />
        <AButton
          textType={'b18'}
          color={colors.whiteColor}
          title={strings.continue}
          onPress={onPressPinContinue}
          containerStyle={styles.mt30}
        />
      </ScrollView>
    </ASafeAreaView>
  );
};

export default ForgotPassword;

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    ...styles.selfCenter,
  },
  mainContainer: {
    ...styles.p15,
    ...styles.flexRow,
    ...styles.mt20,
    ...styles.itemsCenter,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(30),
  },
});
