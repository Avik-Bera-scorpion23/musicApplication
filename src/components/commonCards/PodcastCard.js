// libraries import
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// Local import
import {styles} from '../../themes';
import AText from '../common/AText';
import {StackNav} from '../../navigation/NavigationKeys';

const PodcastCard = ({item, imageStyle}) => {
  const navigation = useNavigation();

  const navigateToPodcastDetail = () => {
    navigation.navigate(StackNav.PodcastEpisodeDetail, {item});
  };
  return (
    <TouchableOpacity
      onPress={navigateToPodcastDetail}
      style={[localStyles.root, {width: imageStyle.width}]}>
      <Image source={item.image} style={imageStyle} />
      <AText type="b18" style={localStyles.textTitle} numberOfLines={2}>
        {item.title}
      </AText>
    </TouchableOpacity>
  );
};

export default PodcastCard;

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
