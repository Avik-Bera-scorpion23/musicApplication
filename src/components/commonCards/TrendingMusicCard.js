// librairies import
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// Local import
import {styles} from '../../themes';
import AText from '../common/AText';
import {StackNav} from '../../navigation/NavigationKeys';

const TrendingMusicCard = ({item, imageStyle, showSingerName = false}) => {
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();

  const navigateToSongDetail = () => {
    navigation.navigate(StackNav.SongDetail, {item});
  };

  return (
    <TouchableOpacity
      onPress={navigateToSongDetail}
      style={[localStyles.root, {width: imageStyle.width}]}>
      <Image source={item.image} style={imageStyle} />
      <AText type="b18" style={localStyles.textTitle} numberOfLines={2}>
        {item.songTitle}
      </AText>
      {showSingerName && (
        <AText
          type="s14"
          style={localStyles.singerText}
          color={colors.textColor2}
          numberOfLines={1}>
          {item.singer}
        </AText>
      )}
    </TouchableOpacity>
  );
};

export default TrendingMusicCard;

const localStyles = StyleSheet.create({
  root: {
    ...styles.mr20,
  },
  textTitle: {
    ...styles.mt10,
  },
  singerText: {
    ...styles.mt5,
  },
});
