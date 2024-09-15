// library import
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

// local imports
import {styles} from '../../themes';
import ASafeAreaView from '../../components/common/ASafeAreaView';
import AHeader from '../common/AHeader';
import {
  Add_To_Playlist_Dark,
  Add_To_Playlist_Light,
  DotMenuDark,
  DotMenuLight,
  Download_Dark,
  Download_Green,
  Download_Light,
  Heart_Dark,
  Heart_Green,
  Heart_Light,
  Menu_Dark,
  Menu_Light,
  Play_White,
  Share_Dark,
  Share_Light,
  Tick_Green,
} from '../../assets/svgs';
import {moderateScale} from '../../common/constants';
import AText from '../common/AText';
import strings from '../../i18n/strings';
import AButton from '../common/AButtton';
import {podcastDataPoints} from '../../api/constant';

const PodcastEpisodeDetail = ({route}) => {
  const colors = useSelector(state => state.theme.theme);
  const {item} = route.params;

  const ICON_SIZE = moderateScale(24);

  const [isLiked, setIsLiked] = useState(false);
  const [isAddedToPlaylist, setIsAddedToPlaylist] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const onPressMenu = () => {};

  const navigateToPlayer = () => {};

  const onLikePress = () => setIsLiked(!isLiked);

  const onAddToPlaylistPress = () => setIsAddedToPlaylist(!isAddedToPlaylist);

  const onDownloadPress = () => setIsDownloaded(!isDownloaded);

  const onSharePress = () => {};

  const RightIcon = () => {
    return (
      <TouchableOpacity style={styles.pr10} onPress={onPressMenu}>
        {colors.dark ? <Menu_Dark /> : <Menu_Light />}
      </TouchableOpacity>
    );
  };

  const Button = ({darkIcon, lightIcon, greenIcon, isGreen, onPress}) => {
    const defaultIcon = colors.dark === 'dark' ? darkIcon : lightIcon;
    return (
      <TouchableOpacity onPress={onPress}>
        {isGreen ? greenIcon : defaultIcon}
      </TouchableOpacity>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={localStyles.itemContainer}>
        <AText type="B16" color={colors.labelColor} style={styles.ph5}>
          .
        </AText>
        <AText
          type="M16"
          style={localStyles.pointTextStyle}
          color={colors.labelColor}>
          {item?.text}
        </AText>
      </View>
    );
  };

  const renderHeaderComponent = () => {
    return (
      <View>
        <View style={localStyles.titleContainer}>
          <Image
            source={item?.image}
            style={localStyles.podcastEpisodeDetailImage}
          />
          <View style={localStyles.titleTextContainer}>
            <AText type="B18" numberOfLines={1}>
              {item?.host}
            </AText>
            <AText type="M12" numberOfLines={1} color={colors.labelColor}>
              {item?.host}
            </AText>
          </View>
        </View>
        <View style={styles.mb15}>
          <AText type="M14" numberOfLines={1} color={colors.labelColor}>
            {strings.oneDayAgo} {'  |  '} {item?.length} {strings.mins}
          </AText>
        </View>
        <View style={styles.mb15}>
          <AText type="B24" numberOfLines={3}>
            {item?.title}
          </AText>
        </View>
        <View style={styles.rowSpaceBetween}>
          <AButton
            frontIcon={<Play_White />}
            title={strings.play}
            style={styles.ml5}
            onPress={navigateToPlayer}
            textType={'B18'}
            color={colors.whiteColor}
            containerStyle={localStyles.playButtonStyle}
          />
          <Button
            darkIcon={<Heart_Dark width={ICON_SIZE} height={ICON_SIZE} />}
            lightIcon={<Heart_Light width={ICON_SIZE} height={ICON_SIZE} />}
            greenIcon={<Heart_Green width={ICON_SIZE} height={ICON_SIZE} />}
            isGreen={isLiked}
            onPress={onLikePress}
          />
          <Button
            darkIcon={
              <Add_To_Playlist_Dark width={ICON_SIZE} height={ICON_SIZE} />
            }
            lightIcon={
              <Add_To_Playlist_Light width={ICON_SIZE} height={ICON_SIZE} />
            }
            greenIcon={<Tick_Green width={ICON_SIZE} height={ICON_SIZE} />}
            isGreen={isAddedToPlaylist}
            onPress={onAddToPlaylistPress}
          />
          <Button
            darkIcon={<Download_Dark width={ICON_SIZE} height={ICON_SIZE} />}
            lightIcon={<Download_Light width={ICON_SIZE} height={ICON_SIZE} />}
            greenIcon={<Download_Green width={ICON_SIZE} height={ICON_SIZE} />}
            isGreen={isDownloaded}
            onPress={onDownloadPress}
          />
          <Button
            darkIcon={<Share_Dark width={ICON_SIZE} height={ICON_SIZE} />}
            lightIcon={<Share_Light width={ICON_SIZE} height={ICON_SIZE} />}
            onPress={onSharePress}
          />
          <Button
            darkIcon={<DotMenuDark width={ICON_SIZE} height={ICON_SIZE} />}
            lightIcon={<DotMenuLight width={ICON_SIZE} height={ICON_SIZE} />}
          />
        </View>
        <AText
          type={'M16'}
          color={colors.textColor3}
          style={localStyles.podcastTextStyle}>
          {strings.podcastText}
        </AText>
        <AText type={'B16'} style={styles.mv15}>
          {strings.podcastTextTitle}
        </AText>
      </View>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader rightIcon={<RightIcon />} />
      <FlatList
        data={podcastDataPoints}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeaderComponent}
        contentContainerStyle={styles.ph20}
      />
    </ASafeAreaView>
  );
};

export default PodcastEpisodeDetail;

const localStyles = StyleSheet.create({
  titleContainer: {
    ...styles.rowCenter,
    ...styles.mv20,
  },
  podcastEpisodeDetailImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(20),
  },
  titleTextContainer: {
    ...styles.flex,
    ...styles.ml20,
    ...styles.g15,
    ...styles.selfCenter,
  },
  buttonContainer: {
    ...styles.rowSpaceBetween,
  },
  playButtonStyle: {
    ...styles.ph25,
    height: moderateScale(40),
  },
  itemContainer: {
    ...styles.flexRow,
  },
  pointTextStyle: {
    ...styles.flex,
    lineHeight: 25,
    ...styles.ml10,
  },
  podcastTextStyle: {
    lineHeight: 25,
    ...styles.mt15,
  },
});
