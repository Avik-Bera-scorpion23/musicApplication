// library import
import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';

// local import
import {styles} from '../../../../../themes';
import ASubHeader from '../../../../../components/common/ASubHeader';
import strings from '../../../../../i18n/strings';
import {podcastEpisodeSearch, podcastSearch} from '../../../../../api/constant';
import PodcastEpisodeCard from '../../../../../components/commonCards/PodcastEpisodeCard';
import {moderateScale} from '../../../../../common/constants';
import PodcastArtistCard from '../../../../../components/commonCards/PodcastArtistCard';
import CommonListEmptyComponent from './CommonListEmptyComponent';

const PodcastSearchList = () => {
  const renderPodcastSearch = ({item, index}) => {
    return <PodcastEpisodeCard item={item} index={index} />;
  };

  const ListEmptyComponent = () => {
    return <CommonListEmptyComponent />;
  };

  const ListHeaderComponent = () => {
    const renderListItem = ({item, index}) => {
      return (
        <PodcastArtistCard
          item={item}
          index={index}
          imageStyle={localStyles.podcastImageStyle}
          showHost={true}
        />
      );
    };

    return (
      <View>
        <ASubHeader
          textType="B24"
          title={strings.podcastAndShow}
          isRightButton={true}
          style={styles.pb20}
          rightButtonTitle={strings.seeAll}
        />
        <FlatList
          data={podcastSearch}
          renderItem={renderListItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <ASubHeader
          textType="B24"
          title={strings.episode}
          isRightButton={true}
          style={styles.pv20}
          rightButtonTitle={strings.seeAll}
        />
      </View>
    );
  };
  return (
    <FlatList
      data={podcastEpisodeSearch}
      renderItem={renderPodcastSearch}
      ListEmptyComponent={ListEmptyComponent}
      ListHeaderComponent={ListHeaderComponent}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={localStyles.listStyle}
    />
  );
};

export default PodcastSearchList;

const localStyles = StyleSheet.create({
  podcastImageStyle: {
    height: moderateScale(160),
    width: moderateScale(160),
    borderRadius: moderateScale(24),
  },
  listStyle: {
    ...styles.ph20,
  },
});
