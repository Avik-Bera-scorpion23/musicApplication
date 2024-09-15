// library import
import {FlatList, StyleSheet} from 'react-native';
import React from 'react';

//local import
import {styles} from '../../themes';
import CategoryCard from './CategoryCard';

const CategoryList = ({data, onItemPress = () => {}}) => {
  const RenderCategoryItem = ({item, index}) => {
    return <CategoryCard item={item} index={index} onItemPress={onItemPress} />;
  };
  return (
    <FlatList
      data={data}
      renderItem={RenderCategoryItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={localStyles.categoryListStyle}
    />
  );
};

export default CategoryList;

const localStyles = StyleSheet.create({
  categoryListStyle: {
    ...styles.ph20,
    ...styles.g10,
    ...styles.pb20,
  },
});
