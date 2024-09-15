// library import
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

// local import
import {styles} from '../../themes';
import AText from '../common/AText';
import {moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import AButton from '../common/AButtton';
import {BlueTick} from '../../assets/svgs';
import {StackNav} from '../../navigation/NavigationKeys';

const ArtistCard = ({item, index, showLabel = false}) => {
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();

  const [isFollowing, setIsFollowing] = useState(item?.isFollowing);

  const onFollowPress = () => {
    setIsFollowing(!isFollowing);
    item.isFollowing = !item.isFollowing;
  };

  const navigateToArtistDetail = () => {
    navigation.navigate(StackNav.ArtistDetail, {item: item});
  };

  return (
    <TouchableOpacity style={localStyles.root} onPress={navigateToArtistDetail}>
      <Image source={item.image} style={localStyles.imageStyle} />
      <View style={[styles.flex, styles.g10, styles.ml10]}>
        <View style={localStyles.nameContainer}>
          <AText type={'B18'} numberOfLines={1}>
            {item.name}
          </AText>
          <BlueTick />
        </View>
        {!!showLabel && (
          <AText type="m12" color={colors.textColor2} numberOfLines={1}>
            {strings.artist}
          </AText>
        )}
      </View>
      <AButton
        textType={'S14'}
        onPress={onFollowPress}
        title={isFollowing ? strings.following : strings.follow}
        containerStyle={[
          localStyles.followBtn,
          {
            borderColor: colors.primary,
          },
        ]}
        bgColor={isFollowing ? colors.transparent : colors.primary}
        color={!isFollowing ? colors.whiteColor : colors.primary}
      />
    </TouchableOpacity>
  );
};

export default ArtistCard;

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
    ...styles.rowSpaceBetween,
    ...styles.mv10,
  },
  imageStyle: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
  },
  followBtn: {
    ...styles.ph15,
    height: moderateScale(36),
    borderWidth: moderateScale(2),
  },
  nameContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.g5,
  },
});
