// library import
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// local import
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import AHeader from '../../../components/common/AHeader';
import {styles} from '../../../themes';
import {
  Filter_Dark,
  Filter_Light,
  Menu_Dark,
  Menu_Light,
  Search_Dark,
  Search_Light,
} from '../../../assets/svgs';
import strings from '../../../i18n/strings';
import {podcast, podcastArtist, podcastCategory} from '../../../api/constant';
import {StackNav} from '../../../navigation/NavigationKeys';
import CategoryList from '../../../components/commonCards/CategoryList';
import ASubHeader from '../../../components/common/ASubHeader';
import PodcastSection from './PodcastSection';

const ExplorePodcastList = ({route}) => {
  const item = route?.params?.item;
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();

  const onPressMenu = () => {};

  const onPressFilter = () => {};

  const onPressSearch = () => {};

  const onNavigateToPopularPodcast = item => {
    navigation.navigate(StackNav.PodcastList, {title: item.title});
  };
  const onNavigateToCategories = () => {
    navigation.navigate(StackNav.PodcastCategoryList);
  };

  const Button = ({darkIcon, lightIcon, onPress, style}) => {
    return (
      <TouchableOpacity style={style} onPress={onPress}>
        {colors.dark ? darkIcon : lightIcon}
      </TouchableOpacity>
    );
  };

  const RightIcon = () => {
    return (
      <View style={styles.rowSpaceBetween}>
        <Button
          darkIcon={<Search_Dark />}
          lightIcon={<Search_Light />}
          onPress={onPressSearch}
          style={styles.pr10}
        />
        <Button
          darkIcon={<Filter_Dark />}
          lightIcon={<Filter_Light />}
          onPress={onPressFilter}
          style={styles.pr10}
        />
        <Button
          darkIcon={<Menu_Dark />}
          lightIcon={<Menu_Light />}
          onPress={onPressMenu}
        />
      </View>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader title={item?.title} rightIcon={<RightIcon />} />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <PodcastSection
          title={strings.popularPodcast}
          data={podcast}
          navigateToPath={StackNav.PopularPodcastList}
        />
        <PodcastSection
          title={strings.popularArtist}
          data={podcastArtist}
          navigateToPath={StackNav.PopularPodcastArtist}
        />
        <ASubHeader
          title={strings.categories}
          isRightButton={true}
          rightButtonTitle={strings.seeAll}
          onRightButtonPress={onNavigateToCategories}
          textType="b24"
          style={localStyles.sectionHeaderStyle}
        />
        <CategoryList
          data={podcastCategory}
          onItemPress={onNavigateToPopularPodcast}
        />
      </ScrollView>
    </ASafeAreaView>
  );
};

export default ExplorePodcastList;

const localStyles = StyleSheet.create({
  sectionHeaderStyle: {
    ...styles.ph20,
    ...styles.mv10,
  },
});
