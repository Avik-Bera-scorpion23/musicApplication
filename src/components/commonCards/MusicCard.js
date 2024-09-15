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
import typography from '../../themes/typography';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

// local import
import {styles} from '../../themes';
import AText from '../common/AText';
import {moderateScale} from '../../common/constants';
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
  Download_Light,
  Heart_Dark,
  Heart_Light,
  Pause,
  Play,
  Profile_Menu_Dark,
  Profile_Menu_Light,
  Share_Dark,
  Share_Light,
} from '../../assets/svgs';
import {StackNav} from '../../navigation/NavigationKeys';

const iconSize = moderateScale(20);

const menuData = [
  {
    id: 1,
    value: strings.like,
    darkIcon: <Heart_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Heart_Light width={iconSize} height={iconSize} />,
  },
  {
    id: 2,
    value: strings.addToPlaylist,
    darkIcon: <Add_To_Playlist_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Add_To_Playlist_Light width={iconSize} height={iconSize} />,
  },
  {
    id: 3,
    value: strings.dontPlayThis,
    darkIcon: <Close_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Close_Light width={iconSize} height={iconSize} />,
  },
  {
    id: 4,
    value: strings.download,
    darkIcon: <Download_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Download_Light width={iconSize} height={iconSize} />,
  },
  {
    id: 5,
    value: strings.viewArtist,
    darkIcon: <Profile_Menu_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Profile_Menu_Light width={iconSize} height={iconSize} />,
  },
  {
    id: 6,
    value: strings.goToAlbum,
    darkIcon: <Curved_Play_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Curved_Play_Light width={iconSize} height={iconSize} />,
  },
  {
    id: 7,
    value: strings.share,
    darkIcon: <Share_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Share_Light width={iconSize} height={iconSize} />,
  },
];
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

const OptionMenuComponent = ({colors}) => {
  const MenuItem = ({darkIcon, lightIcon, title, onPress}) => {
    return (
      <View style={localStyles.menuItemStyle}>
        {colors.dark === 'dark' ? darkIcon : lightIcon}
        <AText type={'S14'}>{title}</AText>
      </View>
    );
  };
  return (
    <Menu>
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

const MusicCard = ({
  item,
  showIndex = false,
  isShowLabel = false,
  showAudioLength = false,
}) => {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);

  const [playing, setPlaying] = useState(item?.isPlaying);

  const onPlayPausePress = () => {
    setPlaying((item.isPlaying = !item.isPlaying));
  };

  const navigateToDetail = () => {
    navigation.navigate(StackNav.SongDetail, {item});
  };

  const CommonDetail = ({title, subtitle}) => {
    return (
      <View style={localStyles.commonDetail}>
        <AText type="m12" color={colors.textColor2} numberOfLines={1}>
          {title}
        </AText>
        {(isShowLabel || showAudioLength) && (
          <View style={localStyles.commonDetail}>
            <AText type="m12" color={colors.textColor2} numberOfLines={1}>
              |
            </AText>
            <AText type="m12" color={colors.textColor2} numberOfLines={1}>
              {isShowLabel && subtitle}
              {showAudioLength && item.length}
            </AText>
          </View>
        )}
      </View>
    );
  };

  return (
    <TouchableOpacity onPress={navigateToDetail} style={localStyles.root}>
      {showIndex && (
        <AText type={'B18'} style={localStyles.indexStyle}>
          {item.id}
        </AText>
      )}
      <Image source={item.image} style={localStyles.imageStyle} />
      <View style={[styles.flex, styles.g10, styles.ml15]}>
        <AText type={'B18'} numberOfLines={1}>
          {item.songTitle}
        </AText>
        <CommonDetail title={item.singer} subtitle={'song'} />
      </View>
      <View style={localStyles.menuContainer}>
        <TouchableOpacity onPress={onPlayPausePress}>
          {playing ? <Pause /> : <Play />}
        </TouchableOpacity>
        <OptionMenuComponent colors={colors} />
      </View>
    </TouchableOpacity>
  );
};

export default MusicCard;

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
    ...styles.rowSpaceBetween,
    ...styles.mv10,
  },
  indexStyle: {
    ...styles.p10,
    ...styles.pr20,
    ...styles.center,
  },
  imageStyle: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(20),
  },
  menuContainer: {
    ...styles.flexRow,
    ...styles.justifyEnd,
    ...styles.itemsCenter,
    ...styles.g15,
  },
  commonDetail: {
    ...styles.flexRow,
    gap: moderateScale(10),
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
