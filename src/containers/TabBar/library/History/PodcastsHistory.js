import {FlatList} from 'react-native';
import React from 'react';

// Local imports
import {historyPodcast} from '../../../../api/constant';
import {styles} from '../../../../themes';
import PodcastEpisodeCard from '../../../../components/commonCards/PodcastEpisodeCard';

const PodcastsHistory = () => {
  const renderPodcast = ({item, index}) => (
    <PodcastEpisodeCard item={item} index={index} />
  );

  return (
    <FlatList
      data={historyPodcast}
      renderItem={renderPodcast}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.pt15}
    />
  );
};

export default PodcastsHistory;
