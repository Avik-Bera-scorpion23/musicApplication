// Library imports
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local imports
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import AHeader from '../../../components/common/AHeader';
import AText from '../../../components/common/AText';
import strings from '../../../i18n/strings';
import {styles} from '../../../themes';
import {PremiumIcon} from '../../../assets/svgs';
import {moderateScale} from '../../../common/constants';
import {StackNav} from '../../../navigation/NavigationKeys';

const PremiumDescriptionData = [
  strings.plansDesc1,
  strings.plansDesc2,
  strings.plansDesc3,
];

const PremiumPlans = [
  {price: '$ 9.99', time: 'month', color: '#FB9400'},
  {price: '$ 19.99', time: '3 month', color: '#9610FF'},
  {price: '$ 49.99', time: '6 month', color: '#FF4D67'},
];

const Premium = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);

  const onPressPlan = itm =>
    navigation.navigate(StackNav.Payment, {
      item: itm,
    });

  const DescriptionData = () => {
    return PremiumDescriptionData.map((item, index) => {
      return (
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
      );
    });
  };

  const subscribePlans = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressPlan(item)}
        key={index}
        style={[localStyles.plansContainer, {backgroundColor: item?.color}]}>
        <PremiumIcon fill={colors.whiteColor} style={styles.selfCenter} />
        <View style={localStyles.plans}>
          <AText type={'b32'}>{item?.price}</AText>
          <AText type={'b18'} color={colors.whiteColor}>
            {' /' + item?.time}
          </AText>
        </View>
        <View
          style={[localStyles.divider, {backgroundColor: colors.whiteColor}]}
        />
        <DescriptionData />
      </TouchableOpacity>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.itemsCenter}>
        <AText type={'b30'} color={colors.primary}>
          {strings.subscribeToPremium}
        </AText>
        <AText
          type={'m18'}
          align={'center'}
          color={colors.dark ? colors.whiteColor : colors.grayScale8}
          style={styles.mv10}>
          {strings.subscribeToPremiumDesc}
        </AText>
      </View>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader />
      <FlatList
        data={PremiumPlans}
        renderItem={subscribePlans}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={localStyles.root}
      />
    </ASafeAreaView>
  );
};

export default Premium;

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    ...styles.pb20,
  },
  plansContainer: {
    ...styles.mt25,
    ...styles.justifyCenter,
    ...styles.selfCenter,
    ...styles.ph20,
    ...styles.pv15,
    width: '95%',
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
});
