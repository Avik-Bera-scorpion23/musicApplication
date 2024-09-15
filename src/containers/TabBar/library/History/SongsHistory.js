import {FlatList} from 'react-native';
import React from 'react';

// Local imports
import {historySong} from '../../../../api/constant';
import {styles} from '../../../../themes';
import MusicCard from '../../../../components/commonCards/MusicCard';

const SongsHistory = () => {
  const renderSong = ({item, index}) => <MusicCard item={item} index={index} />;

  return (
    <FlatList
      data={historySong}
      renderItem={renderSong}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.pt15}
    />
  );
};

export default SongsHistory;
