// librairies import
import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// Local import
import {styles} from '../../../themes';
import ASubHeader from '../../../components/common/ASubHeader';
import {StackNav} from '../../../navigation/NavigationKeys';
import {moderateScale} from '../../../common/constants';
import PodcastCard from '../../../components/commonCards/PodcastCard';
import PodcastArtistCard from '../../../components/commonCards/PodcastArtistCard';

const PodcastSection = ({title, data, navigateToPath}) => {
  const navigation = useNavigation();

  const GetRenderItem = ({item, index}) => {
    switch (navigateToPath) {
      case StackNav.PopularPodcastList:
        return (
          <PodcastCard
            item={item}
            index={index}
            imageStyle={localStyles.podcastImageStyle}
          />
        );
      case StackNav.PopularPodcastArtist:
        return (
          <PodcastArtistCard
            item={item}
            index={index}
            imageStyle={localStyles.artistImageStyle}
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

export default PodcastSection;

const localStyles = StyleSheet.create({
  listStyle: {
    ...styles.mt15,
  },
  artistImageStyle: {
    height: moderateScale(160),
    width: moderateScale(160),
    borderRadius: moderateScale(80),
  },
  podcastImageStyle: {
    height: moderateScale(160),
    width: moderateScale(160),
    borderRadius: moderateScale(24),
  },
});
