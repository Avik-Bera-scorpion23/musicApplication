// library import
import {FlatList, StyleSheet} from 'react-native';
import React from 'react';

//local import
import {styles} from '../../../../../themes';
import AlbumCard from '../../../../../components/commonCards/AlbumCard';
import {albumSearch} from '../../../../../api/constant';
import CommonListEmptyComponent from './CommonListEmptyComponent';

const AlbumSearchList = () => {
  const ListEmptyComponent = () => {
    return <CommonListEmptyComponent />;
  };

  const RenderCategoryItem = ({item, index}) => {
    return <AlbumCard item={item.detail} index={index} />;
  };
  return (
    <FlatList
      data={albumSearch}
      ListEmptyComponent={ListEmptyComponent}
      renderItem={RenderCategoryItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={localStyles.categoryListStyle}
    />
  );
};

export default AlbumSearchList;

const localStyles = StyleSheet.create({
  categoryListStyle: {
    ...styles.ph20,
    ...styles.g20,
    ...styles.pv10,
  },
});
