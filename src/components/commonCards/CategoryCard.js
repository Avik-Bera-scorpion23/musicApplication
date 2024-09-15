// library import
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

//local import
import {moderateScale, screenWidth} from '../../common/constants';
import AText from '../common/AText';
import {styles} from '../../themes';

const CategoryCard = ({item, onItemPress = () => {}}) => {
  const colors = useSelector(state => state.theme.theme);

  return (
    <TouchableOpacity
      style={localStyles.itemStyle}
      onPress={() => onItemPress(item)}>
      <ImageBackground
        source={item.backgroundGradient}
        imageStyle={{borderRadius: moderateScale(24)}}
        style={localStyles.backgroundGradientStyle}>
        <AText
          type={'B18'}
          style={localStyles.titleText}
          color={colors.whiteColor}>
          {item.title}
        </AText>
        <Image
          source={item.image}
          style={localStyles.imageStyle}
          resizeMode={'cover'}
        />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const localStyles = StyleSheet.create({
  titleText: {
    ...styles.mt20,
    ...styles.ml20,
  },
  itemStyle: {
    ...styles.mr10,
    overflow: 'hidden',
    borderRadius: moderateScale(24),
  },
  backgroundGradientStyle: {
    height: (screenWidth - 60) * 0.35,
    width: (screenWidth - 50) * 0.5,
    overflow: 'hidden',
  },
  imageStyle: {
    height: moderateScale(80),
    width: moderateScale(80),
    position: 'absolute',
    bottom: moderateScale(-10),
    right: moderateScale(-10),
    transform: [{rotate: '30deg'}],
    borderRadius: moderateScale(15),
  },
});
