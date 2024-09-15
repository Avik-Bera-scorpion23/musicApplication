// library imports
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

// local imports
import {recentSearch} from '../../../../api/constant';
import AText from '../../../../components/common/AText';
import {styles} from '../../../../themes';
import {Cross_Dark, Cross_Light} from '../../../../assets/svgs';
import ASubHeader from '../../../../components/common/ASubHeader';

const RecentSearches = () => {
  const [recentSearchData, setRecentSearchData] = useState(recentSearch);
  const colors = useSelector(state => state.theme.theme);

  const removeRecentSearch = index => {
    setRecentSearchData(
      recentSearchData.filter(
        (item, currentSearchIndex) => currentSearchIndex !== index,
      ),
    );
  };

  const RenderRecentSearches = ({item, index}) => {
    return (
      <View style={localStyles.recentSearchItem}>
        <AText type="M18">{item.query}</AText>
        <TouchableOpacity onPress={() => removeRecentSearch(index)}>
          {colors.dark ? <Cross_Dark /> : <Cross_Light />}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.ph20}>
      <ASubHeader
        title={'Recent Searches'}
        textType="B20"
        isRightButton={true}
        rightButtonTitle={strings.clearAll}
        onRightButtonPress={() => setRecentSearchData([])}
        style={[
          localStyles.subHeader,
          {
            borderBottomColor: colors.borderColor,
          },
        ]}
      />
      <FlatList
        data={recentSearchData}
        renderItem={RenderRecentSearches}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecentSearches;

const localStyles = StyleSheet.create({
  recentSearchItem: {
    ...styles.rowSpaceBetween,
    ...styles.mv10,
  },
  subHeader: {
    ...styles.pb20,
    borderBottomWidth: 1,
  },
});
