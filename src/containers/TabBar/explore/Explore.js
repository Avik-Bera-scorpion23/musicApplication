// library imports
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';

// local imports
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import {styles} from '../../../themes';
import AHeader from '../../../components/common/AHeader';
import strings from '../../../i18n/strings';
import {
  AppLogoNoBg,
  Menu_Dark,
  Menu_Light,
  Search_Dark,
  Search_Light,
} from '../../../assets/svgs';
import {moderateScale} from '../../../common/constants';
import {categoryData} from '../../../api/constant';
import CategoryCard from '../../../components/commonCards/CategoryCard';
import {StackNav} from '../../../navigation/NavigationKeys';

const Explore = () => {
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();

  const onPressMenu = () => {};
  const onPressSearch = () => navigation.navigate(StackNav.ExploreSearch);

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
          darkIcon={<Menu_Dark />}
          lightIcon={<Menu_Light />}
          onPress={onPressMenu}
        />
      </View>
    );
  };

  const LeftIcon = () => {
    return (
      <View style={styles.pr15}>
        <AppLogoNoBg height={moderateScale(30)} width={moderateScale(30)} />
      </View>
    );
  };

  const navigateToExploreList = item => {
    if (item.title == strings.podcasts) {
      navigation.navigate(StackNav.ExplorePodcastList, {
        item: item,
      });
    } else if (item.title == strings.charts) {
      navigation.navigate(StackNav.ExploreTopChart, {
        item: item,
      });
    } else {
      navigation.navigate(StackNav.ExploreList, {
        item: item,
      });
    }
  };

  const RenderCategoryItem = ({item, index}) => {
    return (
      <CategoryCard
        item={item}
        index={index}
        onItemPress={navigateToExploreList}
      />
    );
  };

  return (
    <ASafeAreaView>
      <AHeader
        isHideBack={true}
        title={strings.explore}
        isLeftIcon={<LeftIcon />}
        rightIcon={<RightIcon />}
      />
      <FlatList
        data={categoryData}
        renderItem={RenderCategoryItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.categoryListStyle}
      />
    </ASafeAreaView>
  );
};

export default Explore;

const localStyles = StyleSheet.create({
  categoryListStyle: {
    ...styles.ph20,
    ...styles.g10,
    ...styles.pb20,
    ...styles.pt10,
  },
});
