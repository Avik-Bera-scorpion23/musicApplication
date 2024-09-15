// Library import
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local import
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import AHeader from '../../../components/common/AHeader';
import strings from '../../../i18n/strings';
import {styles} from '../../../themes';
import {PremiumIcon} from '../../../assets/svgs';
import AText from '../../../components/common/AText';
import {useSelector} from 'react-redux';
import {moderateScale} from '../../../common/constants';
import AButton from '../../../components/common/AButtton';
import SuccessModal from '../../../components/models/SuccessModal';
import {TabNav} from '../../../navigation/NavigationKeys';

const PremiumDescriptionData = [
  strings.plansDesc1,
  strings.plansDesc2,
  strings.plansDesc3,
];

const ReviewSummary = ({navigation, route}) => {
  const colors = useSelector(state => state.theme.theme);
  const {item} = route.params;
  console.log('item>>>>', item);
  const [modalVisible, setModalVisible] = useState(false);

  const DescriptionData = () => {
    return PremiumDescriptionData.map((item, index) => (
      <View key={index} style={localStyles.descContainer}>
        <Ionicons
          name={'checkmark'}
          color={colors.whiteColor}
          size={moderateScale(26)}
        />
        <AText type={'m16'} style={styles.mh10} color={colors.whiteColor}>
          {item}
        </AText>
      </View>
    ));
  };

  const onPressModalClose = () => {
    setModalVisible(false);
    navigation.navigate(TabNav.Profile);
  };

  const onPressConfirmPayment = () => setModalVisible(true);

  const onPressChange = () => navigation.goBack();

  return (
    <ASafeAreaView>
      <AHeader title={strings.reviewSummary} />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ph20}>
        <View
          style={[localStyles.plansContainer, {backgroundColor: item?.color}]}>
          <PremiumIcon style={styles.selfCenter} />
          <View style={localStyles.plans}>
            <AText type={'b32'} color={colors.whiteColor}>
              {item?.price}
            </AText>
            <AText type={'b18'} color={colors.whiteColor}>
              {' /' + item?.time}
            </AText>
          </View>
          <View
            style={[localStyles.divider, {backgroundColor: colors.whiteColor}]}
          />
          <DescriptionData />
        </View>
        <View
          style={[
            localStyles.amountContainer,
            {
              backgroundColor: colors.dark ? colors.inputBg : colors.grayScale1,
            },
          ]}>
          <View style={[styles.rowSpaceBetween, styles.mb10]}>
            <AText type={'m14'}>{strings.amount}</AText>
            <AText type={'s16'}>{item?.price}</AText>
          </View>
          <View style={[styles.rowSpaceBetween, styles.mb15]}>
            <AText type={'m14'}>{strings.tax}</AText>
            <AText type={'s16'}>{'$ 1.99'}</AText>
          </View>
          <View
            style={[
              localStyles.totalContainer,
              {borderTopColor: colors.dark ? colors.dark3 : colors.grayScale3},
            ]}>
            <AText type={'m14'}>{strings.total}</AText>
            <AText type={'s16'}>{item?.price}</AText>
          </View>
        </View>
        <View
          style={[
            localStyles.cardContainer,
            {
              backgroundColor: colors.dark ? colors.inputBg : colors.grayScale1,
            },
          ]}>
          <View style={styles.rowCenter}>
            <Ionicons
              name={'card'}
              color={colors.primary}
              size={moderateScale(26)}
              style={styles.mr10}
            />
            <AText type={'m16'}>{'*********** 9087'}</AText>
          </View>
          <TouchableOpacity onPress={onPressChange}>
            <AText type={'m16'} color={colors.primary}>
              {strings.change}
            </AText>
          </TouchableOpacity>
        </View>
        <SuccessModal
          visible={modalVisible}
          success={true}
          onPressModalClose={onPressModalClose}
        />
      </ScrollView>
      <AButton
        title={strings.confirmPayment}
        textType={'b18'}
        color={colors.whiteColor}
        onPress={onPressConfirmPayment}
        containerStyle={styles.mh25}
      />
    </ASafeAreaView>
  );
};

export default ReviewSummary;

const localStyles = StyleSheet.create({
  plansContainer: {
    ...styles.mt25,
    ...styles.justifyCenter,
    ...styles.ph20,
    ...styles.pv15,
    ...styles.pt25,
    width: '100%',
    borderRadius: moderateScale(32),
  },
  divider: {
    height: moderateScale(2),
    ...styles.mb15,
    width: '100%',
  },
  plans: {
    ...styles.rowCenter,
    ...styles.mv20,
    ...styles.selfCenter,
  },
  descContainer: {
    ...styles.mb10,
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
  amountContainer: {
    ...styles.mt25,
    ...styles.p20,
    borderRadius: moderateScale(20),
  },
  totalContainer: {
    ...styles.rowSpaceBetween,
    borderTopWidth: moderateScale(1),
    ...styles.pt15,
  },
  cardContainer: {
    ...styles.mv25,
    ...styles.p20,
    ...styles.rowSpaceBetween,
    borderRadius: moderateScale(20),
  },
});
