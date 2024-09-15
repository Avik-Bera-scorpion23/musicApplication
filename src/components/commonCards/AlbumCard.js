// library import
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

//local import
import {moderateScale, screenWidth} from '../../common/constants';
import AText from '../common/AText';
import {styles} from '../../themes';
import {StackNav} from '../../navigation/NavigationKeys';

const AlbumCard = ({item}) => {
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();

  const navigateToAlbumDetail = () => {
    navigation.navigate(StackNav.AlbumDetail, {item: item});
  };

  const Detail = ({detailText}) => {
    return (
      <AText
        type={'S14'}
        color={colors.labelColor}
        style={localStyles.titleText}
        numberOfLines={1}>
        {detailText}
      </AText>
    );
  };

  return (
    <TouchableOpacity
      style={localStyles.itemStyle}
      onPress={navigateToAlbumDetail}>
      <Image source={item.image} style={localStyles.imageStyle} />
      <AText type={'B20'} style={styles.mt10} numberOfLines={1}>
        {item.albumTitle}
      </AText>
      <Detail detailText={item.singer} />
      <Detail detailText={item.releaseYear} />
    </TouchableOpacity>
  );
};

export default AlbumCard;

const localStyles = StyleSheet.create({
  titleText: {
    ...styles.mt5,
  },
  itemStyle: {
    width: (screenWidth - 60) * 0.5,
    ...styles.mr20,
  },
  imageStyle: {
    height: (screenWidth - 60) * 0.5,
    width: (screenWidth - 60) * 0.5,
    borderRadius: moderateScale(28),
  },
});
