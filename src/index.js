import {LogBox, Platform, StatusBar, View} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {useSelector} from 'react-redux';
import AppNavigator from './navigation';
import {styles} from './themes';
import TrackPlayer from 'react-native-track-player';

const App = () => {

  

  useEffect(() => {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
   
    setupPlayer();
  }, []);
  const colors = useSelector(state => state.theme.theme);

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
  };

  return (
    <View style={styles.flex}>
      <StatusBar
        barStyle={colors.dark === 'dark' ? 'light-content' : 'dark-content'}
      />
      <AppNavigator />
    </View>
  );
};

export default App;
