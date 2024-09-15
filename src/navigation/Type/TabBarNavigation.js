// Library import
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {StyleSheet, View} from 'react-native';

// Local import
import {TabRoute} from '../NavigationRoutes';
import {TabNav} from '../NavigationKeys';
import {checkPlatform} from '../../utils/helpers';
import {moderateScale} from '../../common/constants';
import AText from '../../components/common/AText';
import strings from '../../i18n/strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Explore_Dark,
  Explore_Light,
  Home_Dark,
  Home_Light,
  Library_Dark,
  Library_Light,
  Profile_Dark,
  Profile_Light,
} from '../../assets/svgs';
import {styles} from '../../themes';

const Tab = createBottomTabNavigator();

export default function TabBarNavigation() {
  const colors = useSelector(state => state.theme.theme);

  const TabText = ({text, focused, icon}) => (
    <View style={localStyles.tabViewContainer}>
      {icon}
      <AText
        type={focused ? 'b14' : 'm14'}
        numberOfLines={1}
        style={styles.mt5}
        color={focused ? colors.primary : colors.grayScale5}>
        {text}
      </AText>
    </View>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          localStyles.tabBarStyle,
          {backgroundColor: colors.background},
        ],
        tabBarShowLabel: false,
      }}
      initialRouteName={TabNav.Home}>
      <Tab.Screen
        name={TabNav.Home}
        component={TabRoute.Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              text={strings.home}
              focused={focused}
              icon={focused ? <Home_Dark /> : <Home_Light />}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Explore}
        component={TabRoute.Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              text={strings.explore}
              focused={focused}
              icon={focused ? <Explore_Dark /> : <Explore_Light />}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Local}
        component={TabRoute.Local}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              text={strings.local}
              focused={focused}
              icon={focused ? <MaterialIcons name="sd-storage" size={24} color="#06C149" /> : <MaterialIcons name="sd-storage" size={24} color="#9E9E9E" /> }
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Library}
        component={TabRoute.Library}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              text={strings.library}
              focused={focused}
              icon={focused ? <Library_Dark /> : <Library_Light />}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Profile}
        component={TabRoute.Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              text={strings.profile}
              focused={focused}
              icon={focused ? <Profile_Dark /> : <Profile_Light />}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const localStyles = StyleSheet.create({
  tabBarStyle: {
    height: checkPlatform() === 'ios' ? moderateScale(100) : moderateScale(60),
    paddingHorizontal: moderateScale(10),
  },
  tabViewContainer: {
    ...styles.center,
  },
});
