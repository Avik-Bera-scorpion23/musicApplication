// library import
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {createRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// local imports
import {commonColor, styles} from '../../../../themes';
import ASafeAreaView from '../../../../components/common/ASafeAreaView';
import AHeader from '../../../../components/common/AHeader';
import {
  DotMenuDark,
  DotMenuLight,
  Heart_White,
  Menu_Dark,
  Menu_Light,
  Plus_White,
  Search_Dark,
  Search_Light,
  Swap_Green,
} from '../../../../assets/svgs';
import {playList} from '../../../../api/constant';
import {moderateScale} from '../../../../common/constants';
import AText from '../../../../components/common/AText';
import ASubHeader from '../../../../components/common/ASubHeader';
import AddNewPlaylistModal from '../../../../components/models/AddNewPlaylistModal';
import {StackNav} from '../../../../navigation/NavigationKeys';

const PlayListCard = ({item, colors}) => {
  const navigation = useNavigation();

  const navigateToDetail = () => {
    navigation.navigate(StackNav.MyPlayListDetail, {item});
  };
  return (
    <TouchableOpacity
      onPress={navigateToDetail}
      style={localStyles.playListItemStyle}>
      <View style={styles.flexRow}>
        <Image source={item.image} style={localStyles.playlistImage} />
        <View style={localStyles.playListDetailContainer}>
          <AText type="B18" numberOfLines={1}>
            {item.title}
          </AText>
          <AText type="M12">
            {item.numberOfSongs} {strings.songs}
          </AText>
        </View>
        <TouchableOpacity style={styles.center}>
          {colors.dark ? <DotMenuDark /> : <DotMenuLight />}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const Playlist = () => {
  const colors = useSelector(state => state.theme.theme);
  const AddNewPlaylistSheetRef = createRef();
  const [newPlaylistName, setNewPlaylistName] = useState('');

  const onPressSearch = () => {};

  const onPressMenu = () => {};

  const onChangedPlayListName = val => {
    setNewPlaylistName(val);
  };

  const onAddNewPlaylistPress = () => {
    AddNewPlaylistSheetRef?.current?.show();
  };

  const onPressCancel = () => AddNewPlaylistSheetRef?.current?.hide();

  const onPressCreate = () => AddNewPlaylistSheetRef?.current?.hide();

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

  const renderPlaylist = ({item, index}) => {
    return <PlayListCard item={item} index={index} colors={colors} />;
  };

  const renderHeaderComponent = () => {
    return (
      <View>
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
        <TouchableOpacity
          style={localStyles.controlContainer}
          onPress={onAddNewPlaylistPress}>
          <View style={localStyles.iconContainer}>
            <Plus_White />
          </View>
          <AText type="B18" style={styles.ml15}>
            {strings.addNewPlaylist}
          </AText>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.controlContainer}>
          <TouchableOpacity style={localStyles.iconContainer}>
            <Heart_White />
          </TouchableOpacity>
          <View style={localStyles.playListDetailContainer}>
            <AText type="B18">{strings.yourLikes}</AText>
            <AText type="M12">
              {'340'} {strings.songs}
            </AText>
          </View>
          <TouchableOpacity style={styles.center}>
            {colors.dark ? <DotMenuDark /> : <DotMenuLight />}
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader title={strings.playlists} rightIcon={<RightIcon />} />
      <FlatList
        data={playList}
        renderItem={renderPlaylist}
        ListHeaderComponent={renderHeaderComponent}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ph20}
      />
      <AddNewPlaylistModal
        SheetRef={AddNewPlaylistSheetRef}
        onPressCancel={onPressCancel}
        newPlaylistName={newPlaylistName}
        onChangedPlayListName={onChangedPlayListName}
        onPressCreate={onPressCreate}
      />
    </ASafeAreaView>
  );
};

export default Playlist;

const localStyles = StyleSheet.create({
  playlistImage: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(20),
  },
  playListItemStyle: {
    ...styles.rowSpaceBetween,
    ...styles.pv10,
  },
  playListDetailContainer: {
    ...styles.justifyCenter,
    ...styles.ml15,
    ...styles.g10,
    ...styles.flex,
  },
  iconContainer: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
    backgroundColor: commonColor.primary,
    ...styles.center,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    shadowColor: commonColor.primary,
  },
  controlContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.pv10,
  },
  subHeaderStyle: {
    ...styles.pv20,
    borderBottomWidth: moderateScale(1),
    ...styles.mb10,
  },
});
