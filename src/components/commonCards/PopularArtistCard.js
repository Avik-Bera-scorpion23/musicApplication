// libraries import
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// Local import
import {styles} from '../../themes';
import AText from '../common/AText';
import {StackNav} from '../../navigation/NavigationKeys';

const PopularArtistCard = ({item, imageStyle}) => {
  const navigation = useNavigation();

  const navigateToArtistDetail = () => {
    navigation.navigate(StackNav.ArtistDetail, {item: item});
  };

  return (
    <TouchableOpacity
      onPress={navigateToArtistDetail}
      style={[
        localStyles.root,
        {
          width: imageStyle.width,
        },
      ]}>
      <Image source={item.image} style={imageStyle} />
      <AText
        type="b18"
        style={localStyles.textTitle}
        numberOfLines={1}
        align="center">
        {item.name}
      </AText>
    </TouchableOpacity>
  );
};

export default PopularArtistCard;

const localStyles = StyleSheet.create({
  root: {
    ...styles.mr20,
    ...styles.center,
  },
  textTitle: {
    ...styles.mt10,
  },
});
