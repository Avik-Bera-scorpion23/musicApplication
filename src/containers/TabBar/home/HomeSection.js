// libraries import
import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// Local import
import {styles} from '../../../themes';
import ASubHeader from '../../../components/common/ASubHeader';
import {StackNav} from '../../../navigation/NavigationKeys';
import TrendingMusicCard from '../../../components/commonCards/TrendingMusicCard';
import PopularArtistCard from '../../../components/commonCards/PopularArtistCard';
import ChartCard from '../../../components/commonCards/ChartCard';
import {moderateScale} from '../../../common/constants';

const HomeSection = ({title, data, navigateToPath}) => {
  const navigation = useNavigation();
  

  const GetRenderItem = ({item, index}) => {
    switch (navigateToPath) {
      case StackNav.TrendingNow:
        return (
          <TrendingMusicCard
            item={item}
            index={index}
            imageStyle={localStyles.trendingImageStyle}
          />
        );
      case StackNav.PopularArtist:
        return (
          <PopularArtistCard
            item={item}
            index={index}
            imageStyle={localStyles.artistImageStyle}
          />
        );
      case StackNav.TopCharts:
        return (
          <ChartCard
            item={item}
            index={index}
            imageStyle={localStyles.topChartStyle}
            textType={'b18'}
          />
        );
    }
  };

  const renderListItem = ({item, index}) => {
    return <GetRenderItem item={item} index={index} />;
  };

  const navigateToList = () => {
    navigation.navigate(navigateToPath);
  };

  return (
    <View style={styles.mv15}>
      <ASubHeader
        title={title}
        isRightButton={true}
        rightButtonTitle={strings.seeAll}
        onRightButtonPress={navigateToList}
        textType="b24"
        style={styles.ph20}
      />
      <FlatList
        data={data}
        renderItem={renderListItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={localStyles.listStyle}
        contentContainerStyle={styles.ph20}
      />
    </View>
  );
};

export default HomeSection;

const localStyles = StyleSheet.create({
  listStyle: {
    ...styles.mt15,
  },
  artistImageStyle: {
    height: moderateScale(160),
    width: moderateScale(160),
    borderRadius: moderateScale(80),
  },
  trendingImageStyle: {
    height: moderateScale(160),
    width: moderateScale(160),
    borderRadius: moderateScale(24),
  },
  topChartStyle: {
    height: moderateScale(160),
    width: moderateScale(160),
  },
});
