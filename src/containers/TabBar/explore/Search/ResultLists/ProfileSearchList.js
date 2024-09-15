// library imports
import {FlatList} from 'react-native';
import React from 'react';

// local imports
import {styles} from '../../../../../themes';
import {profileSearch} from '../../../../../api/constant';
import ProfileCard from '../../../../../components/commonCards/ProfileCard';
import CommonListEmptyComponent from './CommonListEmptyComponent';

const ProfileSearchList = () => {
  const ListEmptyComponent = () => {
    return <CommonListEmptyComponent />;
  };

  const RenderSearchedItem = ({item, index}) => {
    return (
      <ProfileCard
        item={item?.detail}
        index={index}
        showIndex={false}
        isShowLabel={false}
      />
    );
  };

  return (
    <FlatList
      data={profileSearch}
      renderItem={RenderSearchedItem}
      ListEmptyComponent={ListEmptyComponent}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.ph20}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProfileSearchList;
