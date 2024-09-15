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
import {Charts} from '../../../api/constant';
import ChartCard from '../../../components/commonCards/ChartCard';
import {screenWidth} from '../../../common/constants';

const TopCharts = () => {
  const colors = useSelector(state => state.theme.theme);
  const [chartsData, setChartsData] = useState([...Charts, ...Charts]);

  const RightIcon = () => {
    return (
      <TouchableOpacity>
        {colors.dark ? <Search_Dark /> : <Search_Light />}
      </TouchableOpacity>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <ChartCard
        item={item}
        index={index}
        imageStyle={localStyles.bigTopChartStyle}
        textAlign="center"
        textType={'b18'}
      />
    );
  };

  return (
    <ASafeAreaView>
      <AHeader title={strings.trendingNow} rightIcon={<RightIcon />} />
      <FlatList
        data={chartsData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.detailList}
        numColumns={2}
      />
    </ASafeAreaView>
  );
};

export default TopCharts;

const localStyles = StyleSheet.create({
  detailList: {
    ...styles.mh20,
    ...styles.mt20,
    ...styles.g20,
    ...styles.pb20,
  },
  bigTopChartStyle: {
    height: (screenWidth - 60) * 0.5,
    width: (screenWidth - 60) * 0.5,
  },
});
