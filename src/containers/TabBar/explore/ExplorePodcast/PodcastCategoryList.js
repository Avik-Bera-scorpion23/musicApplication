// Library imports
import {TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

// Local imports
import ASafeAreaView from '../../../../components/common/ASafeAreaView';
import AHeader from '../../../../components/common/AHeader';
import {Search_Dark, Search_Light} from '../../../../assets/svgs';
import {podcastCategory} from '../../../../api/constant';
import CategoryList from '../../../../components/commonCards/CategoryList';
import {StackNav} from '../../../../navigation/NavigationKeys';

const PodcastCategoryList = () => {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);

  const RightIcon = () => {
    return (
      <TouchableOpacity>
        {colors.dark ? <Search_Dark /> : <Search_Light />}
      </TouchableOpacity>
    );
  };
  const onNavigateToPodcastCategory = item => {
    navigation.navigate(StackNav.PodcastList, {title: item.title});
  };

  return (
    <ASafeAreaView>
      <AHeader title={strings.categories} rightIcon={<RightIcon />} />
      <CategoryList
        data={podcastCategory}
        onItemPress={onNavigateToPodcastCategory}
      />
    </ASafeAreaView>
  );
};

export default PodcastCategoryList;
