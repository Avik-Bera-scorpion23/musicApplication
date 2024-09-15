import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

//local imports
import {styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import AText from '../common/AText';
import AButton from '../common/AButtton';
import strings from '../../i18n/strings';
import {DotMenuDark, DotMenuLight, Play} from '../../assets/svgs';
import {StackNav} from '../../navigation/NavigationKeys';

const SongCard = ({item, index}) => {
  const colors = useSelector(state => state.theme.theme);

  const navigation = useNavigation();

  const navigateToSongDetail = () => {
    navigation.navigate(StackNav.SongDetail, {item});
  };

  const CommonDetail = ({title, subtitle}) => {
    return (
      <View style={localStyles.commonDetail}>
        <AText type="m12" color={colors.textColor2} numberOfLines={1}>
          {title}
        </AText>
        <AText type="m12" color={colors.textColor2} numberOfLines={1}>
          |
        </AText>
        <AText type="m12" color={colors.textColor2} numberOfLines={1}>
          {subtitle}
        </AText>
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={navigateToSongDetail}
      style={[localStyles.cardContainer]}>
      <View style={localStyles.detailContainer}>
        <Image source={item.image} style={localStyles.image} />
        <View style={localStyles.commonDetailContainer}>
          <CommonDetail
            title={item.title}
            subtitle={item.length + strings.mins}
          />
          <AText type="B18" numberOfLines={1}>
            {item.songTitle}
          </AText>
          <CommonDetail title={item.singer} subtitle={item.type} />
        </View>
      </View>
      <View style={localStyles.buttonContainer}>
        <AButton icon={<Play />} bgColor={colors.transparent} />
        <AButton
          icon={colors.dark === 'dark' ? <DotMenuDark /> : <DotMenuLight />}
          bgColor={colors.transparent}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SongCard;

const localStyles = StyleSheet.create({
  cardContainer: {
    ...styles.flex,
    ...styles.rowSpaceBetween,
    ...styles.mv10,
  },
  detailContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    width: '80%',
  },
  image: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(24),
  },
  commonDetailContainer: {
    ...styles.flex,
    ...styles.g10,
    ...styles.selfCenter,
    ...styles.ml10,
    ...styles.pv5,
  },
  commonDetail: {
    ...styles.flexRow,
    gap: moderateScale(10),
  },
  buttonContainer: {
    ...styles.flexRow,
    ...styles.g10,
  },
});
