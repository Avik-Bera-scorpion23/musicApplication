// library imports
import {FlatList} from 'react-native';
import React from 'react';

// local imports
import {styles} from '../../../../../themes';
import ArtistCard from '../../../../../components/commonCards/ArtistCard';
import {artistSearch} from '../../../../../api/constant';
import CommonListEmptyComponent from './CommonListEmptyComponent';

const ArtistSearchList = () => {
  const ListEmptyComponent = () => {
    return <CommonListEmptyComponent />;
  };

  const RenderSearchedItem = ({item, index}) => {
    return <ArtistCard item={item?.detail} index={index} />;
  };

  return (
    <FlatList
      data={artistSearch}
      renderItem={RenderSearchedItem}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={ListEmptyComponent}
      contentContainerStyle={[styles.ph20]}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ArtistSearchList;
