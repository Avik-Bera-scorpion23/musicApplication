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
import {screenWidth} from '../../../common/constants';
import ChartCard from '../../../components/commonCards/ChartCard';

const ExploreTopCharts = ({route}) => {
  const item = route.params.item;
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

  const renderTopChart = ({item, index}) => {
    return (
      <ChartCard
        item={item}
        index={index}
        imageStyle={localStyles.chartImageStyle}
        textType={'B20'}
      />
    );
  };

  return (
    <ASafeAreaView>
      <AHeader title={item.title} rightIcon={<RightIcon />} />
      <SectionList
        sections={item.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTopChart}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.contentContainerStyle}
        style={[styles.ml20]}
      />
    </ASafeAreaView>
  );
};

export default ExploreTopCharts;

const localStyles = StyleSheet.create({
  sectionHeaderStyle: {
    ...styles.mt30,
    width: screenWidth,
  },
  contentContainerStyle: {
    ...styles.rowSpaceBetween,
    ...styles.itemsStart,
    flexWrap: 'wrap',
    ...styles.pb10,
  },
  chartImageStyle: {
    width: (screenWidth - 60) * 0.5,
    height: (screenWidth - 60) * 0.5,
    ...styles.mt15,
  },
});
