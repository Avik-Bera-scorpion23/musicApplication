// Library import
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

// Local Imports
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import AHeader from '../../../components/common/AHeader';
import strings from '../../../i18n/strings';
import {moderateScale} from '../../../common/constants';
import {styles} from '../../../themes';
import AText from '../../../components/common/AText';
import {
  Apple_Dark,
  Apple_Light,
  Facebook_Icon,
  Google_Icon,
} from '../../../assets/svgs';
import AButton from '../../../components/common/AButtton';
import {StackNav} from '../../../navigation/NavigationKeys';

const Payment = ({navigation, route}) => {
  const colors = useSelector(state => state.theme.theme);
  const {item} = route.params;
  const [isSelected, setIsSelected] = useState('');

  const paymentData = [
    {
      title: strings.paypal,
      icon: <Facebook_Icon style={styles.mh10} />,
    },
    {
      title: strings.applePay,
      icon: [
        colors.dark ? (
          <Apple_Light style={styles.mh10} />
        ) : (
          <Apple_Dark style={styles.mh10} />
        ),
      ],
    },
    {
      title: strings.googlePay,
      icon: <Google_Icon style={styles.mh10} />,
    },
  ];

  const RightIcon = () => {
    return (
      <TouchableOpacity style={styles.ph10}>
        <Ionicons
          name="scan"
          size={moderateScale(26)}
          color={colors.textColor}
        />
      </TouchableOpacity>
    );
  };

  const onPressAddNewCard = () => navigation.navigate(StackNav.AddNewCard);

  const renderPaymentItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        style={[
          localStyles.selectContainer,
          {
            backgroundColor: colors.dark ? colors.inputBg : colors.grayScale1,
          },
        ]}>
        <View style={styles.rowCenter}>
          {item.icon}
          <AText type={'b18'}>{item.title}</AText>
        </View>
        <Ionicons
          name={
            isSelected === item.title ? 'radio-button-on' : 'radio-button-off'
          }
          size={moderateScale(24)}
          color={colors.primary}
        />
      </TouchableOpacity>
    );
  };

  const onPressItem = item => setIsSelected(item.title);

  const onPressContinue = () =>
    navigation.navigate(StackNav.ReviewSummary, {item: item});

  return (
    <ASafeAreaView>
      <AHeader title={strings.payment} rightIcon={<RightIcon />} />
      <View style={[styles.ph20, styles.flex]}>
        <AText type={'r16'} style={styles.mv15}>
          {strings.paymentDesc}
        </AText>
        {paymentData.map((item, index) => {
          return renderPaymentItem({item});
        })}
        <AButton
          title={strings.addNewCard}
          textType={'b18'}
          containerStyle={styles.mv30}
          color={colors.dark ? colors.whiteColor : colors.primary}
          bgColor={colors.dark3}
          onPress={onPressAddNewCard}
        />
      </View>
      <View style={styles.ph20}>
        <AButton
          title={strings.continue}
          textType={'b18'}
          containerStyle={styles.mv10}
          color={colors.whiteColor}
          bgColor={colors.primary}
          onPress={onPressContinue}
        />
      </View>
    </ASafeAreaView>
  );
};

export default Payment;

const localStyles = StyleSheet.create({
  selectContainer: {
    ...styles.rowSpaceBetween,
    ...styles.ph15,
    ...styles.pv25,
    ...styles.mt20,
    borderRadius: moderateScale(16),
  },
});
