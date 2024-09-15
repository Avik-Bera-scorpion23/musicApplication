// Library imports
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Local imports
import ASafeAreaView from '../../../../components/common/ASafeAreaView';
import AHeader from '../../../../components/common/AHeader';
import {styles} from '../../../../themes';
import {Search_Dark, Search_Light} from '../../../../assets/svgs';
import strings from '../../../../i18n/strings';
import {podcastArtist} from '../../../../api/constant';
import {moderateScale, screenWidth} from '../../../../common/constants';
import PodcastArtistCard from '../../../../components/commonCards/PodcastArtistCard';

const PopularPodcastArtist = () => {
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
      <PodcastArtistCard
        item={item}
        index={index}
        imageStyle={localStyles.artistImageBigStyle}
      />
    );
  };

  return (
    <ASafeAreaView>
      <AHeader title={strings.popularArtist} rightIcon={<RightIcon />} />
      <FlatList
        data={podcastArtist}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.artistListStyle}
        numColumns={2}
      />
    </ASafeAreaView>
  );
};

export default PopularPodcastArtist;

const localStyles = StyleSheet.create({
  artistListStyle: {
    ...styles.mh20,
    ...styles.mt20,
    ...styles.g20,
    ...styles.pb20,
  },
  artistImageBigStyle: {
    height: (screenWidth - 60) * 0.5,
    width: (screenWidth - 60) * 0.5,
    borderRadius: moderateScale(100),
  },
});
