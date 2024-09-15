import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// local imports
import strings from '../../../i18n/strings';
import {styles} from '../../../themes';
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import AHeader from '../../../components/common/AHeader';
import {
  AppLogoNoBg,
  Artist_Dark,
  Artist_Light,
  Curved_Download_Dark,
  Curved_Download_Light,
  Curved_Play_Dark,
  Curved_Play_Light,
  Menu_Dark,
  Menu_Light,
  PlayList_Dark,
  PlayList_Light,
  Podcast_Dark,
  Podcast_Light,
  RightArrow_Dark,
  RightArrow_Light,
  Search_Dark,
  Search_Light,
  Song_Dark,
  Song_Light,
} from '../../../assets/svgs';
import {moderateScale} from '../../../common/constants';
import AText from '../../../components/common/AText';
import ASubHeader from '../../../components/common/ASubHeader';
import {historyData} from '../../../api/constant';
import PodcastCard from '../../../components/commonCards/PodcastCard';
import MusicCard from '../../../components/commonCards/MusicCard';
import PodcastArtistCard from '../../../components/commonCards/PodcastArtistCard';
import TrendingMusicCard from '../../../components/commonCards/TrendingMusicCard';
import {StackNav} from '../../../navigation/NavigationKeys';

const menu = [
  {
    id: 1,
    title: strings.playlists,
    darkIcon: <PlayList_Dark />,
    lightIcon: <PlayList_Light />,
    navigateToPath: StackNav.Playlist,
  },
  {
    id: 2,
    title: strings.downloads,
    darkIcon: <Curved_Download_Dark />,
    lightIcon: <Curved_Download_Light />,
    navigateToPath: StackNav.Download,
  },
  {
    id: 3,
    title: strings.podcasts,
    darkIcon: <Podcast_Dark />,
    lightIcon: <Podcast_Light />,
    navigateToPath: StackNav.Podcast,
  },
  {
    id: 4,
    title: strings.albums,
    darkIcon: <Curved_Play_Dark />,
    lightIcon: <Curved_Play_Light />,
    navigateToPath: StackNav.AlbumList,
  },
  {
    id: 5,
    title: strings.songs,
    darkIcon: <Song_Dark />,
    lightIcon: <Song_Light />,
    navigateToPath: StackNav.SongsList,
  },
  {
    id: 6,
    title: strings.artists,
    darkIcon: <Artist_Dark />,
    lightIcon: <Artist_Light />,
    navigateToPath: StackNav.Artist,
  },
];

const Library = () => {
  const colors = useSelector(state => state.theme.theme);

  const navigation = useNavigation();

  const onPressMenu = () => {};

  const onPressSearch = () => {};

  const onPressMenuItem = item => {
    navigation.navigate(item.navigateToPath);
  };

  const onSeeAllPress = () => {
    navigation.navigate(StackNav.History);
  };

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

  const LeftIcon = () => {
    return (
      <View style={styles.pr15}>
        <AppLogoNoBg height={moderateScale(30)} width={moderateScale(30)} />
      </View>
    );
  };

  const renderListHeaderComponent = () => {
    const GetComponent = ({item, index}) => {
      switch (item.category) {
        case 'Podcast':
          return (
            <PodcastCard
              item={item?.detail}
              index={index}
              imageStyle={localStyles.podcastImageStyle}
            />
          );
        case 'Song':
          return (
            <TrendingMusicCard
              item={item?.detail}
              index={index}
              imageStyle={localStyles.trendingMusicImageStyle}
            />
          );
        case 'Artist':
          return (
            <PodcastArtistCard
              item={item?.detail}
              index={index}
              imageStyle={localStyles.artistImageStyle}
            />
          );
        default:
          break;
      }
    };

    const renderListItem = ({item, index}) => {
      return <GetComponent item={item} index={index} />;
    };

    return (
      <View
        style={[
          localStyles.headerContainer,
          {
            borderBottomColor: colors.borderColor,
          },
        ]}>
        <ASubHeader
          textType="B24"
          title={strings.yourHistory}
          isRightButton={true}
          rightButtonTitle={strings.seeAll}
          onRightButtonPress={onSeeAllPress}
        />
        <FlatList
          data={historyData}
          renderItem={renderListItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={localStyles.historyListStyle}
        />
      </View>
    );
  };

  const renderMenu = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressMenuItem(item)}
        style={localStyles.menuItemStyle}>
        <View style={styles.flexRow}>
          {colors.dark ? item.darkIcon : item.lightIcon}
          <AText type="B22" style={styles.ml20}>
            {item.title}
          </AText>
        </View>
        {colors.dark ? <RightArrow_Dark /> : <RightArrow_Light />}
      </TouchableOpacity>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader
        isHideBack={true}
        title={strings.myLibrary}
        isLeftIcon={<LeftIcon />}
        rightIcon={<RightIcon />}
      />
      <FlatList
        data={menu}
        renderItem={renderMenu}
        ListHeaderComponent={renderListHeaderComponent}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.menuListStyle}
      />
    </ASafeAreaView>
  );
};

export default Library;

const localStyles = StyleSheet.create({
  menuListStyle: {
    ...styles.ph20,
  },
  headerContainer: {
    ...styles.mt30,
    ...styles.mb15,
    ...styles.pb10,
    borderBottomWidth: moderateScale(1),
  },
  menuItemStyle: {
    ...styles.rowSpaceBetween,
    ...styles.pv15,
    ...styles.itemsCenter,
  },
  historyListStyle: {
    ...styles.pv20,
  },
  trendingMusicImageStyle: {
    height: moderateScale(160),
    width: moderateScale(160),
    borderRadius: moderateScale(24),
  },
  artistImageStyle: {
    height: moderateScale(160),
    width: moderateScale(160),
    borderRadius: moderateScale(80),
  },
  podcastImageStyle: {
    height: moderateScale(160),
    width: moderateScale(160),
    borderRadius: moderateScale(24),
  },
});
