// Library import
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Local import
import AText from './common/AText';
import AButton from './common/AButtton';
import {getHeight, moderateScale} from '../common/constants';
import {styles} from '../themes';
import strings from '../i18n/strings';
import {BlueTick} from '../assets/svgs';

export default function UserDetailComponent({userName = '', userImage}) {
  const colors = useSelector(state => state.theme.theme);
  const [isFollow, setIsFollow] = React.useState(false);

  const onPressFollow = () => setIsFollow(!isFollow);

  return (
    <View style={localStyles.rootContainer}>
      <TouchableOpacity style={localStyles.userItem}>
        <Image
          source={{
            uri: userImage,
          }}
          style={localStyles.imageStyle}
        />
        <View style={localStyles.userDescription}>
          <AText type="b18" numberOfLines={1} style={styles.mr5}>
            {userName}
          </AText>
          <BlueTick />
        </View>
      </TouchableOpacity>
      <AButton
        title={isFollow ? strings.following : strings.follow}
        color={!isFollow ? colors.whiteColor : colors.primary}
        type="b14"
        containerStyle={[
          localStyles.buttonContainer,
          {
            borderColor: colors.primary,
            backgroundColor: !isFollow ? colors.primary : colors.whiteColor,
          },
        ]}
        bgColor={!isFollow ? colors.primary : colors.whiteColor}
        onPress={onPressFollow}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  rootContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt15,
    ...styles.flex,
  },
  userItem: {
    flex: 1,
    ...styles.rowCenter,
  },
  imageStyle: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    resizeMode: 'cover',
  },
  userDescription: {
    ...styles.mh10,
    ...styles.flex,
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
  buttonContainer: {
    ...styles.ph15,
    height: getHeight(35),
    borderRadius: moderateScale(17),
    borderWidth: moderateScale(2),
  },
});
