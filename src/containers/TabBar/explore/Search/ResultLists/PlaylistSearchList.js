// library import
import {FlatList, StyleSheet} from 'react-native';
import React from 'react';

//local import
import {styles} from '../../../../../themes';
import {playlistSearch} from '../../../../../api/constant';
import PlayListCard from '../../../../../components/commonCards/PlayListCard';
import CommonListEmptyComponent from './CommonListEmptyComponent';

const PLaylistSearchList = () => {
  const ListEmptyComponent = () => {
    return <CommonListEmptyComponent />;
  };

  const renderItem = ({item, index}) => {
    return <PlayListCard item={item.detail} index={index} />;
  };
  return (
    <FlatList
      data={playlistSearch}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={localStyles.categoryListStyle}
    />
  );
};

export default PLaylistSearchList;

const localStyles = StyleSheet.create({
  categoryListStyle: {
    ...styles.ph20,
    ...styles.g20,
    ...styles.pv10,
  },
});
