// libraries import
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// Local import
import {styles} from '../../themes';
import AText from '../common/AText';
import {moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';

const ChartCard = ({item, imageStyle, textAlign, textType}) => {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);

  const onPressChart = () =>
    navigation.navigate(StackNav.ChartSongList, {item: item});

  const TitleWithRegion = () => {
    return (
      <View>
        <View
          style={[
            localStyles.typeText,
            {
              borderBottomColor: colors.whiteColor,
            },
          ]}>
          <AText
            type={'b24'}
            align={'center'}
            color={colors.whiteColor}
            numberOfLines={1}
            style={localStyles.upperCase}>
            {item.type}
          </AText>
        </View>
        <AText
          type="b14"
          color={colors.whiteColor}
          numberOfLines={1}
          align="center"
          style={styles.pt10}>
          {item.region}
        </AText>
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPressChart}
      style={[localStyles.root, {width: imageStyle.width}]}>
      <View style={[localStyles.imageContainer]}>
        <ImageBackground
          source={item.image}
          imageStyle={{borderRadius: moderateScale(24)}}
          style={[localStyles.imageStyle, imageStyle]}>
          {!!item?.showOnlyTitle && (
            <AText
              type={'b24'}
              align={'center'}
              color={colors.whiteColor}
              style={[localStyles.onlyTitleStyle, localStyles.upperCase]}
              numberOfLines={5}>
              {item.title}
            </AText>
          )}
          {!!!item?.showOnlyTitle && <TitleWithRegion />}
        </ImageBackground>
      </View>
      <AText
        type={textType}
        style={localStyles.textTitle}
        numberOfLines={2}
        align={textAlign}>
        {item.title}
      </AText>
    </TouchableOpacity>
  );
};

export default ChartCard;

const localStyles = StyleSheet.create({
  root: {
    ...styles.mr20,
  },
  imageContainer: {
    borderRadius: moderateScale(24),
    ...styles.center,
  },
  imageStyle: {
    ...styles.center,
    ...styles.ph5,
  },
  textTitle: {
    ...styles.mt10,
  },
  typeText: {
    ...styles.pb10,
    ...styles.ph5,
    borderBottomWidth: moderateScale(1),
  },
  onlyTitleStyle: {
    ...styles.ph20,
  },
  upperCase: {
    textTransform: 'uppercase',
  },
});
