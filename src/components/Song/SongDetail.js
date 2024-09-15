// library import
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

// local import
import {styles} from '../../themes';
import typography from '../../themes/typography';
import ASafeAreaView from '../../components/common/ASafeAreaView';
import AHeader from '../../components/common/AHeader';
import {
  Add_To_Playlist_Dark,
  Add_To_Playlist_Light,
  Close_Dark,
  Close_Light,
  Curved_Play_Dark,
  Curved_Play_Light,
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
  Profile_Menu_Dark,
  Profile_Menu_Light,
  Share_Dark,
  Share_Light,
  Tick_Green,
} from '../../assets/svgs';
import {MoreLikeThis, MusicList, trendingMusic} from '../../api/constant';
import MusicCard from '../../components/commonCards/MusicCard';
import {moderateScale} from '../../common/constants';
import AText from '../../components/common/AText';
import AButton from '../../components/common/AButtton';
import ASubHeader from '../../components/common/ASubHeader';
import strings from '../../i18n/strings';
import {StackNav} from '../../navigation/NavigationKeys';
import {
  addTrackToQueue,
  getCurrentTrack,
  getQueue,
  getTrack,
  goToTrack,
} from './AudioPlayer';
import {usePlaybackState} from 'react-native-track-player';

const iconSize = moderateScale(24);

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
    value: strings.dontPlayThis,
    darkIcon: <Close_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Close_Light width={iconSize} height={iconSize} />,
  },
  {
    id: 2,
    value: strings.viewArtist,
    darkIcon: <Profile_Menu_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Profile_Menu_Light width={iconSize} height={iconSize} />,
  },
  {
    id: 3,
    value: strings.goToAlbum,
    darkIcon: <Curved_Play_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Curved_Play_Light width={iconSize} height={iconSize} />,
  },
  {
    id: 4,
    value: strings.share,
    darkIcon: <Share_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Share_Light width={iconSize} height={iconSize} />,
  },
];

const SongDetail = ({route}) => {
  const {item} = route.params;
  console.log(" ^^^^^^^^^^^^^^^    ", item)
  const navigation = useNavigation();
  const isPlaying = usePlaybackState();
  const colors = useSelector(state => state.theme.theme);

  const [isLiked, setIsLiked] = useState(false);
  const [isAddedToPlaylist, setIsAddedToPlaylist] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const onPressMenu = () => {};

  const onLikePress = () => {
    setIsLiked(!isLiked);
  };

  const onAddToPlaylistPress = () => {
    setIsAddedToPlaylist(!isAddedToPlaylist);
  };

  const onDownloadPress = () => {
    setIsDownloaded(!isDownloaded);
  };

  const navigateToPlayer = async () => {
    if (isPlaying === 'playing') {
      let currentTrackIndex = await getCurrentTrack();
      let currentTrack = await getTrack(currentTrackIndex);
      if (currentTrack.title == item.songTitle) {
      } else {
        let currentQueue = await getQueue();
        let isCurrentItemInQueueIndex = currentQueue.findIndex(track => {
          return item.songTitle == track.title;
        });
        if (isCurrentItemInQueueIndex > -1) {
          await goToTrack(isCurrentItemInQueueIndex);
        } else {
          // await resetPlayer();
        }
      }
    } else {
      let queue = trendingMusic.concat(MusicList).map(item => {
        return {
          id: item?.id,
          url: item?.audio_url,
          title: item?.songTitle,
          artist: item?.singer,
          artwork: item?.image,
        };
      });
      await addTrackToQueue(queue);
      let currentQueue = await getQueue();
      let isCurrentItemInQueueIndex = currentQueue.findIndex(track => {
        return item.songTitle == track.title;
      });
      if (isCurrentItemInQueueIndex > -1) {
        await goToTrack(isCurrentItemInQueueIndex);
      }
    }

    navigation.navigate(StackNav.MusicPlayer, {item});
  };

  const Button = ({darkIcon, lightIcon, greenIcon, isGreen, onPress}) => {
    const defaultIcon = colors.dark === 'dark' ? darkIcon : lightIcon;

    return (
      <TouchableOpacity onPress={onPress} style={styles.mr30}>
        {isGreen ? greenIcon : defaultIcon}
      </TouchableOpacity>
    );
  };

  const MenuItem = ({darkIcon, lightIcon, title, onPress}) => {
    return (
      <View style={localStyles.menuItemStyle}>
        {colors.dark === 'dark' ? darkIcon : lightIcon}
        <AText type={'S14'}>{title}</AText>
      </View>
    );
  };

  const OptionMenuComponent = () => {
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
                />
              </MenuOption>
            )}
          />
        </MenuOptions>
      </Menu>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <View>
        <View
          style={[
            localStyles.listHeaderContainerStyle,
            {
              borderBottomColor: colors.borderColor,
            },
          ]}>
          <View style={localStyles.listHeaderStyle}>
            <Image source={item.image} style={localStyles.imageStyle} />
            <AText type="B32" style={styles.mt15} numberOfLines={1}>
              {item.songTitle}
            </AText>
            <AText
              type="M18"
              color={colors.labelColor2}
              numberOfLines={1}
              style={styles.mt10}>
              {item.singer}
            </AText>
            <AText
              type="M14"
              color={colors.labelColor}
              numberOfLines={1}
              style={styles.mt10}>
              {strings.song} {' | '} {item.length} {strings.mins}
            </AText>
          </View>
          <View style={localStyles.menuContainer}>
            <View style={[styles.rowSpaceBetween]}>
              <Button
                darkIcon={<Heart_Dark width={iconSize} height={iconSize} />}
                lightIcon={<Heart_Light width={iconSize} height={iconSize} />}
                greenIcon={<Heart_Green width={iconSize} height={iconSize} />}
                isGreen={isLiked}
                onPress={onLikePress}
              />
              <Button
                darkIcon={
                  <Add_To_Playlist_Dark width={iconSize} height={iconSize} />
                }
                lightIcon={
                  <Add_To_Playlist_Light width={iconSize} height={iconSize} />
                }
                greenIcon={<Tick_Green width={iconSize} height={iconSize} />}
                isGreen={isAddedToPlaylist}
                onPress={onAddToPlaylistPress}
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
              <OptionMenuComponent />
            </View>
            <AButton
              frontIcon={<Play_White />}
              title={strings.play}
              style={styles.ml5}
              onPress={navigateToPlayer}
              textType={'B18'}
              color={colors.whiteColor}
              containerStyle={localStyles.playButtonStyle}
            />
          </View>
        </View>

        <ASubHeader
          textType={'B22'}
          title={strings.moreLikeThis}
          isRightButton={true}
          rightButtonTitle={strings.seeAll}
          style={styles.pv20}
        />
      </View>
    );
  };

  const renderMoreLikeThis = ({item, index}) => {
    return (
      <MusicCard
        item={item}
        index={index}
        imageStyle={localStyles.imageStyle}
      />
    );
  };

  const RightIcon = () => {
    return (
      <TouchableOpacity style={styles.pr10} onPress={onPressMenu}>
        {colors.dark ? <Menu_Dark /> : <Menu_Light />}
      </TouchableOpacity>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader rightIcon={<RightIcon />} />
      <FlatList
        data={MoreLikeThis}
        renderItem={renderMoreLikeThis}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.ph20}
        ListHeaderComponent={ListHeaderComponent}
      />
    </ASafeAreaView>
  );
};

export default SongDetail;

const localStyles = StyleSheet.create({
  listHeaderContainerStyle: {
    borderBottomWidth: moderateScale(1),
    ...styles.pv20,
  },
  listHeaderStyle: {
    ...styles.center,
  },
  imageStyle: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(30),
  },
  menuContainer: {
    ...styles.rowSpaceBetween,
    ...styles.itemsCenter,
    ...styles.mt15,
  },
  playButtonStyle: {
    ...styles.ph25,
    height: moderateScale(46),
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
