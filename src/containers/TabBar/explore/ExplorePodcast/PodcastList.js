// Library imports
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Local imports
import ASafeAreaView from '../../../../components/common/ASafeAreaView';
import AHeader from '../../../../components/common/AHeader';
import {styles} from '../../../../themes';
import {Search_Dark, Search_Light} from '../../../../assets/svgs';
import {podcast} from '../../../../api/constant';
import {moderateScale, screenWidth} from '../../../../common/constants';
import PodcastCard from '../../../../components/commonCards/PodcastCard';

const PodcastList = ({route}) => {
  const title = route.params?.title;
  const colors = useSelector(state => state.theme.theme);

  const RightIcon = () => {
    return (
      <TouchableOpacity>
        {colors.dark ? <Search_Dark /> : <Search_Light />}
      </TouchableOpacity>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <PodcastCard
        item={item}
        index={index}
        imageStyle={localStyles.podcastImageStyle}
      />
    );
  };

  return (
    <ASafeAreaView>
      <AHeader title={title} rightIcon={<RightIcon />} />
      <FlatList
        data={podcast}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.podcastListStyle}
        numColumns={2}
      />
    </ASafeAreaView>
  );
};

export default PodcastList;

const localStyles = StyleSheet.create({
  podcastListStyle: {
    ...styles.mh20,
    ...styles.mt20,
    ...styles.g20,
    ...styles.pb20,
  },
  podcastImageStyle: {
    height: (screenWidth - 60) * 0.5,
    width: (screenWidth - 60) * 0.5,
    borderRadius: moderateScale(28),
  },
});
