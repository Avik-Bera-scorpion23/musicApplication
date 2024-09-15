// library import
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

// Local imports
import {albumList} from '../../../../api/constant';
import typography from '../../../../themes/typography';
import {styles} from '../../../../themes';
import ASubHeader from '../../../../components/common/ASubHeader';
import {
  Add_To_Playlist_Dark,
  Add_To_Playlist_Light,
  Close_Dark,
  Close_Light,
  Curved_Play_Dark,
  Curved_Play_Light,
  Delete_Dark,
  Delete_Light,
  DotMenuDark,
  DotMenuLight,
  Download_Dark,
  Download_Light,
  Menu_Dark,
  Menu_Light,
  Profile_Menu_Dark,
  Profile_Menu_Light,
  Search_Dark,
  Search_Light,
  Share_Dark,
  Share_Light,
  Shuffle_Dark,
  Shuffle_White,
  Swap_Green,
} from '../../../../assets/svgs';
import {moderateScale} from '../../../../common/constants';
import ASafeAreaView from '../../../../components/common/ASafeAreaView';
import AHeader from '../../../../components/common/AHeader';
import AText from '../../../../components/common/AText';
import {StackNav} from '../../../../navigation/NavigationKeys';

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
    value: strings.shufflePlay,
    darkIcon: <Shuffle_White width={iconSize} height={iconSize} />,
    lightIcon: <Shuffle_Dark width={iconSize} height={iconSize} />,
  },
  {
    id: 2,
    value: strings.addToPlaylist,
    darkIcon: <Add_To_Playlist_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Add_To_Playlist_Light width={iconSize} height={iconSize} />,
  },
  {
    id: 3,
    value: strings.download,
    darkIcon: <Download_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Download_Light width={iconSize} height={iconSize} />,
  },
  {
    id: 4,
    value: strings.removeLibrary,
    darkIcon: <Delete_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Delete_Light width={iconSize} height={iconSize} />,
  },
  {
    id: 5,
    value: strings.viewArtist,
    darkIcon: <Profile_Menu_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Profile_Menu_Light width={iconSize} height={iconSize} />,
  },
  {
    id: 6,
    value: strings.share,
    darkIcon: <Share_Dark width={iconSize} height={iconSize} />,
    lightIcon: <Share_Light width={iconSize} height={iconSize} />,
  },
];

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

const AlbumCard = ({item, index, colors}) => {
  const navigation = useNavigation();

  const navigateToAlbumDetail = () =>
    navigation.navigate(StackNav.AlbumDetail, {item});

  return (
    <TouchableOpacity
      style={localStyles.itemStyle}
      onPress={navigateToAlbumDetail}>
      <View style={styles.flexRow}>
        <Image source={item.image} style={localStyles.imageStyle} />
        <View style={localStyles.detailContainer}>
          <AText type="B18" numberOfLines={1}>
            {item.albumTitle}
          </AText>
          <AText type="M12" numberOfLines={1}>
            {item.singer} {' | '} {item.releaseYear}
          </AText>
        </View>
        <View style={styles.center}>
          <OptionMenuComponent colors={colors} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const AlbumList = () => {
  const colors = useSelector(state => state.theme.theme);

  const onPressSearch = () => {};

  const onPressMenu = () => {};

  const Button = ({darkIcon, lightIcon, onPress, style}) => {
    return (
      <TouchableOpacity style={style} onPress={onPress}>
        {colors.dark ? darkIcon : lightIcon}
      </TouchableOpacity>
    );
  };

  const RightIcon = () => {
    return (
      <View style={styles.rowSpaceBetween}>
        <Button
          darkIcon={<Search_Dark />}
          lightIcon={<Search_Light />}
          onPress={onPressSearch}
          style={styles.pr10}
        />
        <Button
          darkIcon={<Menu_Dark />}
          lightIcon={<Menu_Light />}
          onPress={onPressMenu}
        />
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return <AlbumCard item={item} index={index} colors={colors} />;
  };

  const ListHeaderComponent = () => {
    return (
      <ASubHeader
        textType="B20"
        title={strings.sortBy}
        isRightButton={true}
        rightButtonTitle={strings.recentlyAdded}
        rightIcon={<Swap_Green />}
        style={[
          localStyles.subHeaderStyle,
          {
            borderBottomColor: colors.borderColor,
          },
        ]}
      />
    );
  };

  return (
    <ASafeAreaView>
      <AHeader rightIcon={<RightIcon />} title={strings.albums} />
      <FlatList
        data={albumList}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mh20}
      />
    </ASafeAreaView>
  );
};

export default AlbumList;

const localStyles = StyleSheet.create({
  subHeaderStyle: {
    ...styles.pv20,
    borderBottomWidth: moderateScale(1),
    ...styles.mb15,
  },
  itemStyle: {
    ...styles.rowSpaceBetween,
    ...styles.pv15,
  },
  imageStyle: {
    height: moderateScale(80),
    width: moderateScale(80),
    borderRadius: moderateScale(20),
  },
  detailContainer: {
    ...styles.ml15,
    ...styles.flex,
    ...styles.justifyCenter,
    ...styles.g10,
  },
  menuOptions: {
    width: moderateScale(200),
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
