// library imports
import {FlatList} from 'react-native';
import React from 'react';

// local imports
import {styles} from '../../../../../themes';
import MusicCard from '../../../../../components/commonCards/MusicCard';
import CommonListEmptyComponent from './CommonListEmptyComponent';
import {songSearch} from '../../../../../api/constant';

const SongSearchList = () => {
  const ListEmptyComponent = () => {
    return <CommonListEmptyComponent />;
  };

  const RenderSearchedItem = ({item, index}) => {
    return (
      <MusicCard
        item={item?.detail}
        index={index}
        showIndex={false}
        isShowLabel={false}
      />
    );
  };

  return (
    <FlatList
      data={songSearch}
      renderItem={RenderSearchedItem}
      keyExtractor={(item, index) => index.toString()}
      ListEmptyComponent={ListEmptyComponent}
      contentContainerStyle={styles.ph20}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SongSearchList;
