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

const PlayListCard = ({item}) => {
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();

  const navigateToAlbumDetail = () => {
    navigation.navigate(StackNav.PlaylistDetail, {item: item});
  };

  return (
    <TouchableOpacity
      style={localStyles.itemStyle}
      onPress={navigateToAlbumDetail}>
      <Image source={item.image} style={localStyles.imageStyle} />
      <AText type={'B18'} numberOfLines={2} style={styles.mt10}>
        {item.playlistTitle}
      </AText>
    </TouchableOpacity>
  );
};

export default PlayListCard;

const localStyles = StyleSheet.create({
  titleText: {
    ...styles.mt5,
  },
  itemStyle: {
    ...styles.mr20,
    width: (screenWidth - 60) * 0.5,
  },
  imageStyle: {
    height: (screenWidth - 60) * 0.5,
    width: (screenWidth - 60) * 0.5,
    borderRadius: moderateScale(28),
  },
});
