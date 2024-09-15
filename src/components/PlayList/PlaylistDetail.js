// library import
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

// local imports
import {styles} from '../../themes';
import AHeader from '../../components/common/AHeader';
import ASafeAreaView from '../../components/common/ASafeAreaView';
import {
  Add_To_Playlist_Dark,
  Add_To_Playlist_Light,
  DotMenuDark,
  DotMenuLight,
  Heart_Dark,
  Heart_Green,
  Heart_Light,
  Menu_Dark,
  Menu_Light,
  Play_White,
  Tick_Green,
} from '../../assets/svgs';
import MusicCard from '../../components/commonCards/MusicCard';
import {moderateScale} from '../../common/constants';
import AText from '../../components/common/AText';
import strings from '../../i18n/strings';
import AButton from '../../components/common/AButtton';
import ASubHeader from '../../components/common/ASubHeader';
import {popularSongs} from '../../api/constant';
import {StackNav} from '../../navigation/NavigationKeys';

const PlaylistDetail = ({route, navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const {item} = route.params;

  const [isLiked, setIsLiked] = useState(false);
  const [isAddedToPlaylist, setIsAddedToPlaylist] = useState(false);

  const onPressMenu = () => {};

  const onLikePress = () => {
    setIsLiked(!isLiked);
  };

  const onAddToPlaylistPress = () => {
    setIsAddedToPlaylist(!isAddedToPlaylist);
  };

  const navigateToPlayer = () => {
    navigation.navigate(StackNav.MusicPlayer, {item});
  };

  const RightIcon = () => {
    return (
      <TouchableOpacity style={styles.pr10} onPress={onPressMenu}>
        {colors.dark ? <Menu_Dark /> : <Menu_Light />}
      </TouchableOpacity>
    );
  };

  const Button = ({darkIcon, lightIcon, greenIcon, isGreen, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.mr30}>
        {isGreen ? greenIcon : colors.dark === 'dark' ? darkIcon : lightIcon}
      </TouchableOpacity>
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
            <AText
              type="B32"
              style={styles.mt15}
              numberOfLines={2}
              align="center">
              {item.playlistTitle}
            </AText>
            <AText
              type="M18"
              color={colors.labelColor2}
              numberOfLines={1}
              style={styles.mt10}>
              {item.singer}
            </AText>
            <AText
              type="M18"
              color={colors.labelColor}
              numberOfLines={1}
              style={styles.mt10}>
              {strings.playlist} {' | '} {item.releaseYear}
            </AText>
          </View>
          <View style={localStyles.menuContainer}>
            <View style={[styles.rowSpaceBetween]}>
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
              <Button darkIcon={<DotMenuDark />} lightIcon={<DotMenuLight />} />
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
          title={strings.songs}
          isRightButton={true}
          rightButtonTitle={strings.seeAll}
          style={styles.pv10}
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

  return (
    <ASafeAreaView>
      <AHeader rightIcon={<RightIcon />} />
      <FlatList
        data={popularSongs}
        renderItem={renderMoreLikeThis}
        ListHeaderComponent={ListHeaderComponent}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.ph20}
      />
    </ASafeAreaView>
  );
};

export default PlaylistDetail;

const localStyles = StyleSheet.create({
  listHeaderContainerStyle: {
    borderBottomWidth: moderateScale(1),
    ...styles.pb20,
  },
  listHeaderStyle: {
    ...styles.center,
  },
  imageStyle: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(20),
  },
  menuContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt10,
  },
  playButtonStyle: {
    ...styles.ph25,
    height: moderateScale(48),
  },
});
