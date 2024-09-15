// library import
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

//local imports
import {styles} from '../../themes';
import typography from '../../themes/typography';
import {moderateScale} from '../../common/constants';
import AText from '../common/AText';
import strings from '../../i18n/strings';
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
  Play,
  Podcast_Dark,
  Podcast_Light,
  Share_Dark,
  Share_Light,
  Tick_Dark,
  Tick_Green,
  Tick_Light,
} from '../../assets/svgs';
import {StackNav} from '../../navigation/NavigationKeys';

const iconSize = moderateScale(20);

const optionsStyles = colors => {
  return {
    optionWrapper: {
      borderBottomWidth: moderateScale(1),
      borderBottomColor: colors.borderColor,
    },
    optionTouchable: {
      activeOpacity: 70,
    },
    optionText: {
      color: colors.textColor,
      ...typography.fontSizes.f14,
      ...typography.fontWeights.SemiBold,
      ...styles.pv10,
    },
  };
};

const menuData = [
  {
    id: 1,
    value: strings.markAsPlayed,
    darkIcon: <Tick_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Tick_Light width={iconSize} height={iconSize} />,
  },
  {
    id: 2,
    value: strings.goToPodcast,
    darkIcon: <Podcast_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Podcast_Light width={iconSize} height={iconSize} />,
  },
  {
    id: 3,
    value: strings.share,
    darkIcon: <Share_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Share_Light width={iconSize} height={iconSize} />,
  },
];

const MenuItem = ({darkIcon, lightIcon, title, colors}) => {
  return (
    <View style={localStyles.menuItemStyle}>
      {colors.dark === 'dark' ? darkIcon : lightIcon}
      <AText type={'S14'}>{title}</AText>
    </View>
  );
};

const OptionMenuComponent = ({colors}) => {
  return (
    <Menu rendererProps={{preferredPlacement: 'bottom'}}>
      <MenuTrigger>
        {colors.dark ? (
          <DotMenuDark width={iconSize} height={iconSize} />
        ) : (
          <DotMenuLight width={iconSize} height={iconSize} />
        )}
      </MenuTrigger>
      <MenuOptions
        optionsContainerStyle={[
          localStyles.menuOptions,
          {
            backgroundColor: colors.btnColor1,
          },
        ]}
        customStyles={optionsStyles(colors)}>
        <FlatList
          data={menuData}
          renderItem={({item, index}) => (
            <MenuOption value={index + 1}>
              <MenuItem
                darkIcon={item.darkIcon}
                lightIcon={item.lightIcon}
                title={item.value}
                colors={colors}
              />
            </MenuOption>
          )}
        />
      </MenuOptions>
    </Menu>
  );
};

const PodcastEpisodeCard = ({item, showHost = true}) => {
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(item?.is_liked);
  const [isAddedToPlaylist, setIsAddedToPlaylist] = useState(
    item?.is_added_to_playlist,
  );
  const [isDownloaded, setIsDownloaded] = useState(item?.is_downloaded);

  const navigateToEpisode = () => {
    navigation.navigate(StackNav.PodcastEpisodeDetail, {item});
  };

  const onDownloadPress = () => {
    setIsDownloaded(!isDownloaded);
    item.is_downloaded = !item.is_downloaded;
  };

  const onAddToPlaylistPress = () => {
    setIsAddedToPlaylist(!isAddedToPlaylist);
    item.is_added_to_playlist = !item.is_added_to_playlist;
  };

  const onLikePress = () => {
    setIsLiked(!isLiked);
    item.is_liked = !item.is_liked;
  };

  const CommonDetail = ({title, subtitle}) => {
    return (
      <View style={localStyles.commonDetailStyle}>
        {!!showHost && (
          <View style={localStyles.commonDetailStyle}>
            <AText
              type="m12"
              color={colors.textColor2}
              numberOfLines={1}
              style={styles.shrink}>
              {title}
            </AText>
            <AText
              type="m12"
              color={colors.textColor2}
              numberOfLines={1}
              style={styles.shrink}>
              |
            </AText>
          </View>
        )}
        <AText
          type="m12"
          color={colors.textColor2}
          numberOfLines={1}
          style={styles.shrink}>
          {subtitle}
        </AText>
      </View>
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

  return (
    <TouchableOpacity
      onPress={navigateToEpisode}
      style={[localStyles.cardContainer]}>
      <Image source={item.image} style={localStyles.imageStyle} />
      <View style={localStyles.detailContainer}>
        <AText type="B18" numberOfLines={2}>
          {item.podcastNumber} : {item.guest} | {item.podcastTitle}
        </AText>
        <CommonDetail title={item.host} subtitle={item.length + strings.mins} />
        <View style={styles.rowSpaceBetween}>
          <View style={localStyles.buttonContainer}>
            <Button
              darkIcon={<Heart_Dark />}
              lightIcon={<Heart_Light />}
              greenIcon={<Heart_Green />}
              isGreen={isLiked}
              onPress={onLikePress}
            />
            <Button
              darkIcon={<Add_To_Playlist_Dark />}
              lightIcon={<Add_To_Playlist_Light />}
              greenIcon={<Tick_Green />}
              isGreen={isAddedToPlaylist}
              onPress={onAddToPlaylistPress}
            />
            <Button
              darkIcon={<Download_Dark />}
              lightIcon={<Download_Light />}
              greenIcon={<Download_Green />}
              isGreen={isDownloaded}
              onPress={onDownloadPress}
            />
            <OptionMenuComponent colors={colors} />
          </View>
          <TouchableOpacity style={styles.selfEnd}>
            <Play />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PodcastEpisodeCard;

const localStyles = StyleSheet.create({
  cardContainer: {
    ...styles.flex,
    ...styles.rowSpaceBetween,
    ...styles.mv10,
    ...styles.g15,
  },
  detailContainer: {
    ...styles.flex,
    ...styles.g10,
  },
  imageStyle: {
    width: moderateScale(115),
    height: moderateScale(115),
    borderRadius: moderateScale(24),
  },
  commonDetailStyle: {
    ...styles.flexRow,
    ...styles.g5,
  },
  buttonContainer: {
    ...styles.flexRow,
    ...styles.g10,
  },
  menuOptions: {
    width: moderateScale(180),
    borderRadius: moderateScale(15),
    ...styles.mt30,
    ...styles.center,
  },
  menuItemStyle: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.pv10,
    ...styles.mv5,
    ...styles.g10,
  },
});
