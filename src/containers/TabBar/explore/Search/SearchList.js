// library imports
import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

// local imports
import {styles} from '../../../../themes';
import {searchCategory} from '../../../../api/constant';
import AButton from '../../../../components/common/AButtton';
import {moderateScale} from '../../../../common/constants';
import CommonSearchList from './CommonSearchList';

const SearchList = () => {
  const colors = useSelector(state => state.theme.theme);
  const [searchCategoryData, setSearchCategoryData] = useState(searchCategory);
  const [currentCategory, setCurrentCategory] = useState(searchCategory[0]);

  useEffect(() => {
    searchCategory[0].isSelected = true;
    selectCategory(searchCategory[0]);
  }, []);

  const selectCategory = item => {
    let searchCategoryTemp = [...searchCategoryData];
    searchCategoryTemp.map(element => {
      if (element.id == item.id) {
        setCurrentCategory(element);
        element.isSelected = true;
      } else {
        element.isSelected = false;
      }
    }),
      setSearchCategoryData(searchCategoryTemp);
  };

  const RenderSearchCategory = ({item}) => {
    return (
      <AButton
        onPress={() => selectCategory(item)}
        textType={'S16'}
        title={item.name}
        color={item?.isSelected ? colors.whiteColor : colors.primary}
        bgColor={item?.isSelected ? colors.primary : colors.transparent}
        containerStyle={[
          localStyles.categoryButtonStyle,
          {
            borderColor: colors.primary,
          },
        ]}
      />
    );
  };

  return (
    <View style={styles.flex}>
      <FlatList
        data={searchCategoryData}
        renderItem={RenderSearchCategory}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={localStyles.searchedListContainer}
      />
      <CommonSearchList currentCategory={currentCategory} />
    </View>
  );
};

export default SearchList;

const localStyles = StyleSheet.create({
  categoryButtonStyle: {
    ...styles.flex,
    ...styles.center,
    borderWidth: moderateScale(2),
    ...styles.ph15,
    height: moderateScale(44),
    borderRadius: moderateScale(22),
  },
  searchedListContainer: {
    ...styles.ph20,
    ...styles.pb20,
    ...styles.g10,
  },
});
