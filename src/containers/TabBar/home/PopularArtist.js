// Library imports
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

// Local imports
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import AHeader from '../../../components/common/AHeader';
import {styles} from '../../../themes';
import {Search_Dark, Search_Light} from '../../../assets/svgs';
import strings from '../../../i18n/strings';
import {Artist, moreArtists} from '../../../api/constant';
import PopularArtistCard from '../../../components/commonCards/PopularArtistCard';
import {moderateScale, screenWidth} from '../../../common/constants';

const PopularArtist = () => {
  const colors = useSelector(state => state.theme.theme);
  const [artistData, setArtistData] = useState([...Artist, ...moreArtists]);

  const RightIcon = () => {
    return (
      <TouchableOpacity>
        {colors.dark ? <Search_Dark /> : <Search_Light />}
      </TouchableOpacity>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <PopularArtistCard
        item={item}
        index={index}
        imageStyle={localStyles.artistImageBigStyle}
      />
    );
  };

  return (
    <ASafeAreaView>
      <AHeader title={strings.trendingNow} rightIcon={<RightIcon />} />
      <FlatList
        data={artistData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.detailList}
        numColumns={2}
      />
    </ASafeAreaView>
  );
};

export default PopularArtist;

const localStyles = StyleSheet.create({
  detailList: {
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
