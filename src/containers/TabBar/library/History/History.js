// Library Imports
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

// Local Imports
import ASafeAreaView from '../../../../components/common/ASafeAreaView';
import AHeader from '../../../../components/common/AHeader';
import strings from '../../../../i18n/strings';
import {
  Menu_Dark,
  Menu_Light,
  Search_Dark,
  Search_Light,
} from '../../../../assets/svgs';
import {styles} from '../../../../themes';
import {moderateScale} from '../../../../common/constants';
import AText from '../../../../components/common/AText';
import SongsHistory from './SongsHistory';
import PodcastsHistory from './PodcastsHistory';

const SongsRoute = () => <SongsHistory />;

const PodcastsRoute = () => <PodcastsHistory />;

const renderScene = SceneMap({
  songs: SongsRoute,
  podcasts: PodcastsRoute,
});

const routes = [
  {key: 'songs', title: strings.songs},
  {key: 'podcasts', title: strings.podcasts},
];

const History = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const [index, setIndex] = useState(0);

  const onPressSearch = () => {};

  const onPressMenu = () => {};

  const renderLabel = ({focused, route}) => {
    return (
      <AText type="s18" color={focused ? colors.primary : colors.grayScale5}>
        {route.title}
      </AText>
    );
  };

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={[
          localStyles.tabIndicator,
          {backgroundColor: colors.primary},
        ]}
        renderLabel={renderLabel}
        style={[
          localStyles.tabBar,
          {
            backgroundColor: colors.transparent,
            borderBottomColor: colors.grayScale3,
          },
        ]}
      />
    );
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
          darkIcon={<Menu_Dark />}
          lightIcon={<Menu_Light />}
          onPress={onPressMenu}
        />
      </View>
    );
  };

  return (
    <ASafeAreaView style={localStyles.root}>
      <AHeader title={strings.history} rightIcon={<RightIcon />} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        style={styles.mh20}
      />
    </ASafeAreaView>
  );
};

export default History;

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
  },
  tabBar: {
    borderBottomWidth: moderateScale(1),
  },
  tabIndicator: {
    height: moderateScale(2),
    borderRadius: moderateScale(10),
    bottom: moderateScale(-1),
  },
});
