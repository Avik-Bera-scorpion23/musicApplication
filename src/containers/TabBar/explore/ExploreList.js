// global imports
import {SectionList, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// local imports
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import {styles} from '../../../themes';
import AHeader from '../../../components/common/AHeader';
import {Search_Dark, Search_Light} from '../../../assets/svgs';
import ASubHeader from '../../../components/common/ASubHeader';
import {moderateScale, screenWidth} from '../../../common/constants';
import TrendingMusicCard from '../../../components/commonCards/TrendingMusicCard';

const ExploreList = ({route}) => {
  const item = route?.params?.item;
  const colors = useSelector(state => state.theme.theme);

  const onPressMenu = () => {};

  const RightIcon = () => {
    return (
      <TouchableOpacity style={styles.pr10} onPress={onPressMenu}>
        {colors.dark ? <Search_Dark /> : <Search_Light />}
      </TouchableOpacity>
    );
  };

  const renderSectionHeader = ({section: {title}}) => (
    <ASubHeader
      title={title}
      textType="B22"
      style={localStyles.sectionHeaderStyle}
    />
  );

  const renderItem = ({item, index}) => {
    return (
      <TrendingMusicCard
        item={item}
        index={index}
        imageStyle={localStyles.imageStyle}
        showSingerName={true}
      />
    );
  };

  return (
    <ASafeAreaView>
      <AHeader title={item?.title} rightIcon={<RightIcon />} />
      <SectionList
        sections={item?.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.contentContainerStyle}
        style={styles.ml20}
      />
    </ASafeAreaView>
  );
};

export default ExploreList;

const localStyles = StyleSheet.create({
  sectionHeaderStyle: {
    ...styles.mt30,
  },
  contentContainerStyle: {
    ...styles.rowSpaceBetween,
    ...styles.itemsStart,
    flexWrap: 'wrap',
    ...styles.pb10,
  },
  imageStyle: {
    width: (screenWidth - 60) * 0.5,
    height: (screenWidth - 60) * 0.5,
    borderRadius: moderateScale(28),
    ...styles.mt15,
  },
});
