import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackRoute} from '../NavigationRoutes';
import {StackNav} from '../NavigationKeys';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  // Auth Stack
  function AuthNavigation() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={StackNav.Connect}>
        <Stack.Screen name={StackNav.Connect} component={StackRoute.Connect} />
        <Stack.Screen name={StackNav.Login} component={StackRoute.Login} />
        <Stack.Screen
          name={StackNav.Register}
          component={StackRoute.Register}
        />
        <Stack.Screen
          name={StackNav.SelectInterest}
          component={StackRoute.SelectInterest}
        />
        <Stack.Screen name={StackNav.SetPin} component={StackRoute.SetPin} />
        <Stack.Screen
          name={StackNav.SetUpProfile}
          component={StackRoute.SetUpProfile}
        />
        <Stack.Screen
          name={StackNav.SetSecure}
          component={StackRoute.SetSecure}
        />
        <Stack.Screen
          name={StackNav.ForgotPassword}
          component={StackRoute.ForgotPassword}
        />
        <Stack.Screen
          name={StackNav.ForgotPasswordOtp}
          component={StackRoute.ForgotPasswordOtp}
        />
        <Stack.Screen
          name={StackNav.CreateNewPassword}
          component={StackRoute.CreateNewPassword}
        />
      </Stack.Navigator>
    );
  }

  // Main Stack
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={StackNav.Splash}>
      <Stack.Screen name={StackNav.Splash} component={StackRoute.Splash} />
      <Stack.Screen
        name={StackNav.onBoarding}
        component={StackRoute.OnBoarding}
      />
      <Stack.Screen name={StackNav.Auth} component={AuthNavigation} />
      <Stack.Screen name={StackNav.TabBar} component={StackRoute.TabBar} />
      <Stack.Screen
        name={StackNav.Notification}
        component={StackRoute.Notification}
      />
      <Stack.Screen name={StackNav.Premium} component={StackRoute.Premium} />
      <Stack.Screen
        name={StackNav.SetUpProfile}
        component={StackRoute.SetUpProfile}
      />
      <Stack.Screen
        name={StackNav.NotificationSetting}
        component={StackRoute.NotificationSetting}
      />
      <Stack.Screen name={StackNav.Playback} component={StackRoute.Playback} />
      <Stack.Screen
        name={StackNav.AudioAndVideo}
        component={StackRoute.AudioAndVideo}
      />
      <Stack.Screen
        name={StackNav.DataSaverAndStorage}
        component={StackRoute.DataSaverAndStorage}
      />
      <Stack.Screen name={StackNav.Security} component={StackRoute.Security} />
      <Stack.Screen name={StackNav.Language} component={StackRoute.Language} />
      <Stack.Screen name={StackNav.Payment} component={StackRoute.Payment} />
      <Stack.Screen
        name={StackNav.AddNewCard}
        component={StackRoute.AddNewCard}
      />
      <Stack.Screen
        name={StackNav.ReviewSummary}
        component={StackRoute.ReviewSummary}
      />
      <Stack.Screen
        name={StackNav.CreateNewPassword}
        component={StackRoute.CreateNewPassword}
      />
      <Stack.Screen name={StackNav.SetPin} component={StackRoute.SetPin} />
      <Stack.Screen
        name={StackNav.ExploreList}
        component={StackRoute.ExploreList}
      />
      <Stack.Screen
        name={StackNav.ExplorePodcastList}
        component={StackRoute.ExplorePodcastList}
      />
      <Stack.Screen
        name={StackNav.ChartSongList}
        component={StackRoute.ChartSongList}
      />
      <Stack.Screen
        name={StackNav.ExploreSearch}
        component={StackRoute.ExploreSearch}
      />
      <Stack.Screen
        name={StackNav.TrendingNow}
        component={StackRoute.TrendingNow}
      />
      <Stack.Screen
        name={StackNav.PopularArtist}
        component={StackRoute.PopularArtist}
      />
      <Stack.Screen
        name={StackNav.TopCharts}
        component={StackRoute.TopCharts}
      />
      <Stack.Screen
        name={StackNav.PodcastList}
        component={StackRoute.PodcastList}
      />
      <Stack.Screen
        name={StackNav.PopularPodcastList}
        component={StackRoute.PopularPodcastList}
      />
      <Stack.Screen
        name={StackNav.PopularPodcastArtist}
        component={StackRoute.PopularPodcastArtist}
      />
      <Stack.Screen
        name={StackNav.ExploreTopChart}
        component={StackRoute.ExploreTopChart}
      />
      <Stack.Screen
        name={StackNav.PodcastCategoryList}
        component={StackRoute.PodcastCategoryList}
      />
      <Stack.Screen
        name={StackNav.SongDetail}
        component={StackRoute.SongDetail}
      />
      <Stack.Screen
        name={StackNav.MusicPlayer}
        component={StackRoute.MusicPlayer}
      />
      <Stack.Screen
        name={StackNav.ArtistDetail}
        component={StackRoute.ArtistDetail}
      />
      <Stack.Screen
        name={StackNav.AlbumDetail}
        component={StackRoute.AlbumDetail}
      />
      <Stack.Screen
        name={StackNav.PodcastArtistDetail}
        component={StackRoute.PodcastArtistDetail}
      />
      <Stack.Screen
        name={StackNav.PodcastEpisodeDetail}
        component={StackRoute.PodcastEpisodeDetail}
      />
      <Stack.Screen
        name={StackNav.PlaylistDetail}
        component={StackRoute.PlaylistDetail}
      />
      <Stack.Screen
        name={StackNav.ProfileDetail}
        component={StackRoute.ProfileDetail}
      />
      <Stack.Screen
        name={StackNav.FollowerFollowingList}
        component={StackRoute.FollowerFollowingList}
      />
      <Stack.Screen name={StackNav.History} component={StackRoute.History} />
      <Stack.Screen name={StackNav.Playlist} component={StackRoute.Playlist} />
      <Stack.Screen
        name={StackNav.MyPlayListDetail}
        component={StackRoute.MyPlayListDetail}
      />
      <Stack.Screen name={StackNav.Download} component={StackRoute.Download} />
      <Stack.Screen name={StackNav.Podcast} component={StackRoute.Podcast} />
      <Stack.Screen
        name={StackNav.AlbumList}
        component={StackRoute.AlbumList}
      />
      <Stack.Screen
        name={StackNav.SongsList}
        component={StackRoute.SongsList}
      />
      <Stack.Screen name={StackNav.Artist} component={StackRoute.Artist} />
    </Stack.Navigator>
  );
}
