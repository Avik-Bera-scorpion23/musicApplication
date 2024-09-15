// library imports
import {FlatList, View} from 'react-native';
import React from 'react';

// local imports
import {styles} from '../../../../../themes';
import MusicCard from '../../../../../components/commonCards/MusicCard';
import ArtistCard from '../../../../../components/commonCards/ArtistCard';
import {topSearch} from '../../../../../api/constant';
import CommonListEmptyComponent from './CommonListEmptyComponent';

const TopSearchList = () => {
  const ListEmptyComponent = () => {
    return <CommonListEmptyComponent />;
  };

  const RenderSearchedItem = ({item, index}) => {
    return (
      <View>
        {!!(item?.category == 'Song') ? (
          <MusicCard
            item={item?.detail}
            index={index}
            showIndex={false}
            isShowLabel={true}
          />
        ) : (
          <ArtistCard item={item?.detail} index={index} showLabel={true} />
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={topSearch}
      renderItem={RenderSearchedItem}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={ListEmptyComponent}
      contentContainerStyle={styles.ph20}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TopSearchList;
