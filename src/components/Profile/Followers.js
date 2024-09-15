// library imports
import {FlatList} from 'react-native';
import React from 'react';

// local imports
import {styles} from '../../themes';
import {followers} from '../../api/constant';
import ProfileCard from '../commonCards/ProfileCard';

const Followers = () => {
  const renderItem = ({item, index}) => {
    return (
      <ProfileCard
        item={item}
        index={index}
        showIndex={false}
        isShowLabel={false}
      />
    );
  };

  return (
    <FlatList
      data={followers}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.pt15}
    />
  );
};

export default Followers;
