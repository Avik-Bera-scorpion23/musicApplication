// library imports
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

// local imports
import {styles} from '../../../../themes';
import ASafeAreaView from '../../../../components/common/ASafeAreaView';
import AHeader from '../../../../components/common/AHeader';
import {
  DotMenuDark,
  DotMenuLight,
  Download_Dark,
  Download_Green,
  Download_Light,
  Heart_Dark,
  Heart_Green,
  Heart_Light,
  Play,
  Play_Transparent,
  Search_Dark,
  Search_Light,
  Share_Dark,
  Share_Light,
  Shuffle_White,
} from '../../../../assets/svgs';
import {playlistSong} from '../../../../api/constant';
import MusicCard from '../../../../components/commonCards/MusicCard';
import {moderateScale} from '../../../../common/constants';
import AText from '../../../../components/common/AText';
import AButton from '../../../../components/common/AButtton';
import strings from '../../../../i18n/strings';

const MyPlayListDetail = ({route}) => {
  const {item} = route?.params;
  const iconSize = moderateScale(24);
  const colors = useSelector(state => state.theme.theme);

  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const onPressSearch = () => {};

  const onLikePress = () => setIsLiked(!isLiked);

  const onDownloadPress = () => setIsDownloaded(!isDownloaded);

  const onSharePress = () => {};

  const onDotMenuPress = () => {};

  const onPressShuffle = () => {};

  const onPressPlay = () => {};

  const RightIcon = () => {
    return (
      <TouchableOpacity onPress={onPressSearch}>
        {colors.dark ? <Search_Dark /> : <Search_Light />}
      </TouchableOpacity>
    );
  };

  const renderItem = ({item, index}) => {
    return <MusicCard item={item} index={index} />;
  };

  const ListHeaderComponent = () => {
    const Button = ({darkIcon, lightIcon, greenIcon, isGreen, onPress}) => {
      const defaultIcon = colors.dark === 'dark' ? darkIcon : lightIcon;
      return (
        <TouchableOpacity onPress={onPress}>
          {isGreen ? greenIcon : defaultIcon}
        </TouchableOpacity>
      );
    };
    return (
      <View
        style={[
          localStyles.headerComponentStyle,
          {
            borderBottomColor: colors.borderColor,
          },
        ]}>
        <View style={styles.flexRow}>
          <Image source={item?.image} style={localStyles.imageStyle} />
          <View style={localStyles.detailContainer}>
            <AText type={'B24'} numberOfLines={1}>
              {item?.title}
            </AText>
            <AText type={'S14'} numberOfLines={1}>
              {strings.playlist} {' | '} {item?.numberOfSongs} {strings.songs}
            </AText>
            <View style={localStyles.btnContainer}>
              <Button
                darkIcon={<Heart_Dark width={iconSize} height={iconSize} />}
                lightIcon={<Heart_Light width={iconSize} height={iconSize} />}
                greenIcon={<Heart_Green width={iconSize} height={iconSize} />}
                isGreen={isLiked}
                onPress={onLikePress}
              />
              <Button
                darkIcon={<Download_Dark width={iconSize} height={iconSize} />}
                lightIcon={
                  <Download_Light width={iconSize} height={iconSize} />
                }
                greenIcon={
                  <Download_Green width={iconSize} height={iconSize} />
                }
                isGreen={isDownloaded}
                onPress={onDownloadPress}
              />
              <Button
                darkIcon={<Share_Dark width={iconSize} height={iconSize} />}
                lightIcon={<Share_Light width={iconSize} height={iconSize} />}
                onPress={onSharePress}
              />
              <Button
                darkIcon={<DotMenuDark width={iconSize} height={iconSize} />}
                lightIcon={<DotMenuLight width={iconSize} height={iconSize} />}
                onPress={onDotMenuPress}
              />
            </View>
          </View>
        </View>
        <View style={localStyles.buttonContainer}>
          <AButton
            title={strings.shuffle}
            frontIcon={<Shuffle_White />}
            textType={'b18'}
            color={colors.whiteColor}
            containerStyle={localStyles.BtnStyle}
            style={styles.ml15}
            onPress={onPressShuffle}
          />
          <AButton
            title={strings.play}
            frontIcon={colors.dark ? <Play_Transparent /> : <Play />}
            textType={'b18'}
            color={colors.dark ? colors.whiteColor : colors.primary}
            bgColor={colors.dark3}
            containerStyle={localStyles.BtnStyle}
            style={styles.ml15}
            onPress={onPressPlay}
          />
        </View>
      </View>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader rightIcon={<RightIcon />} />
      <FlatList
        data={playlistSong}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={styles.p20}
        showsVerticalScrollIndicator={false}
      />
    </ASafeAreaView>
  );
};

export default MyPlayListDetail;

const localStyles = StyleSheet.create({
  imageStyle: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(25),
  },
  detailContainer: {
    ...styles.flex,
    ...styles.justifyCenter,
    ...styles.ml15,
    ...styles.g10,
  },
  btnContainer: {
    ...styles.flexRow,
    ...styles.g25,
    ...styles.itemsCenter,
  },
  BtnStyle: {
    ...styles.flex,
  },
  buttonContainer: {
    ...styles.flexRow,
    ...styles.g10,
    ...styles.mt25,
  },
  headerComponentStyle: {
    ...styles.pb25,
    ...styles.mb20,
    borderBottomWidth: moderateScale(1),
  },
});
