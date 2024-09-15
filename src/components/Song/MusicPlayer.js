// library import
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import TrackPlayer, {
  usePlaybackState,
  useProgress,
  Event,
  useTrackPlayerEvents,
} from 'react-native-track-player';

// local import
import {styles} from '../../themes';
import ASafeAreaView from '../../components/common/ASafeAreaView';
import {
  ArrowUpDark,
  ArrowUpLight,
  Backward_Dark,
  Backward_Light,
  Cast_Dark,
  Cast_Light,
  DotMenuDark,
  DotMenuLight,
  Forward_Dark,
  Forward_Light,
  Menu_Dark,
  Menu_Light,
  Next_Dark,
  Next_Light,
  Pause,
  Play,
  Previous_Dark,
  Previous_Light,
  Speed_Dark,
  Speed_Light,
  Timer_Dark,
  Timer_Light,
} from '../../assets/svgs';
import AHeader from '../../components/common/AHeader';
import {moderateScale, screenWidth} from '../../common/constants';
import AText from '../../components/common/AText';
import SliderComponent from './SliderComponent';
import {
  play,
  pause,
  getCurrentTrack,
  previousTrack,
  nextTrack,
  seekTo,
  getTrack,
} from './AudioPlayer';
import strings from '../../i18n/strings';

const events = [
  Event.PlaybackQueueEnded,
  Event.PlaybackState,
  Event.PlaybackTrackChanged,
  Event.RemoteNext,
  Event.RemotePause,
  Event.RemotePlay,
  Event.RemotePrevious,
  Event.RemoteStop,
  Event.PlaybackError,
];

const MusicPlayer = ({route}) => {
  const isPlaying = usePlaybackState();
  let {position, duration} = useProgress();

  const colors = useSelector(state => state.theme.theme);
  const [paused, setIsPaused] = useState(true);
  const [currentTrack, setCurrentTrack] = useState({});

  useEffect(() => {
    async function startMusicPlay() {
      setCurrentTrackInfo();
      setIsPaused(false);
      play();
    }
    startMusicPlay();
  }, []);

  useTrackPlayerEvents(events, async event => {
    if (event.type === Event.PlaybackTrackChanged) {
      setCurrentTrackInfo();
    }
  });

  const setCurrentTrackInfo = async () => {
    let currentTrackIndex = await getCurrentTrack();
    let currentTrackInfo = await getTrack(
      currentTrackIndex ? currentTrackIndex : 0,
    );
    setCurrentTrack(currentTrackInfo);
  };

  useEffect(() => {
    if (isPlaying === 'playing') {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  }, [isPlaying]);

  const onPressMenu = () => {};

  const onBackWardPress = async () => {
    await seekTo(position - 10);
  };

  const onForWardPress = async () => {
    await seekTo(position + 10);
  };

  const onNextPress = async () => {
    await nextTrack();
    await setCurrentTrackInfo();
  };

  const onPreviousPress = async () => {
    await previousTrack();
    await setCurrentTrackInfo();
  };

  const onPlayPause = async () => {
    if (!paused) {
      pause();
    } else {
      play();
    }
  };

  const RightIcon = () => {
    return (
      <TouchableOpacity style={styles.pr10} onPress={onPressMenu}>
        {colors.dark ? <Menu_Dark /> : <Menu_Light />}
      </TouchableOpacity>
    );
  };

  const Button = ({darkIcon, lightIcon, onPressButton}) => {
    return (
      <TouchableOpacity onPress={onPressButton}>
        {colors.dark ? darkIcon : lightIcon}
      </TouchableOpacity>
    );
  };

  const PlayPauseButton = () => {
    return (
      <TouchableOpacity onPress={onPlayPause}>
        {!paused ? (
          <Pause width={moderateScale(80)} height={moderateScale(80)} />
        ) : (
          <Play width={moderateScale(80)} height={moderateScale(80)} />
        )}
      </TouchableOpacity>
    );
  };

  const Lyrics = () => {
    return (
      <View style={styles.center}>
        {colors.dark ? <ArrowUpDark /> : <ArrowUpLight />}
        <AText type="B18" align="center">
          {strings.lyrics}
        </AText>
        <View
          style={[
            localStyles.lyricsContainer,
            {
              backgroundColor: colors.dark ? colors.btnColor1 : colors.dark3,
            },
          ]}>
          <AText type="B24" style={{lineHeight: 50}}>
            {strings.songLyrics}
          </AText>
        </View>
      </View>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader rightIcon={<RightIcon />} />
      <ScrollView style={styles.ph20} showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: currentTrack?.artwork?.uri}}
          style={localStyles.imageStyle}
        />
        <View
          style={[
            localStyles.detailContainer,
            {borderBottomColor: colors.borderColor},
          ]}>
          <AText type="B32" numberOfLines={1}>
            {currentTrack?.title}
          </AText>
          <AText type="M18" numberOfLines={1}>
            {currentTrack?.artist}
          </AText>
        </View>

        <SliderComponent isPlaying={isPlaying} />

        <View style={localStyles.controlContainer}>
          <Button
            darkIcon={<Previous_Dark />}
            lightIcon={<Previous_Light />}
            onPressButton={onPreviousPress}
          />
          <Button
            darkIcon={<Backward_Dark />}
            lightIcon={<Backward_Light />}
            onPressButton={onBackWardPress}
          />
          <PlayPauseButton />
          <Button
            darkIcon={<Forward_Dark />}
            lightIcon={<Forward_Light />}
            onPressButton={onForWardPress}
          />
          <Button
            darkIcon={<Next_Dark />}
            lightIcon={<Next_Light />}
            onPressButton={onNextPress}
          />
        </View>
        <View style={localStyles.controlContainer}>
          <Button
            darkIcon={<Speed_Dark />}
            lightIcon={<Speed_Light />}
            onPressButton={() => {}}
          />
          <Button
            darkIcon={<Timer_Dark />}
            lightIcon={<Timer_Light />}
            onPressButton={() => {}}
          />
          <Button
            darkIcon={<Cast_Dark />}
            lightIcon={<Cast_Light />}
            onPressButton={() => {}}
          />
          <Button
            darkIcon={<DotMenuDark />}
            lightIcon={<DotMenuLight />}
            onPressButton={() => {}}
          />
        </View>
        <View style={localStyles.lyricSeparator}>
          <Lyrics />
        </View>
      </ScrollView>
    </ASafeAreaView>
  );
};

export default MusicPlayer;

const localStyles = StyleSheet.create({
  imageStyle: {
    height: screenWidth - moderateScale(70),
    width: screenWidth - moderateScale(40),
    borderRadius: moderateScale(40),
    ...styles.mv15,
  },
  detailContainer: {
    ...styles.center,
    borderBottomWidth: moderateScale(1),
    ...styles.pb20,
    ...styles.g10,
  },
  controlContainer: {
    ...styles.rowSpaceAround,
    ...styles.mt15,
  },
  lyricSeparator: {
    ...styles.center,
    ...styles.mt20,
  },
  lyricsContainer: {
    ...styles.p20,
    ...styles.mt20,
    borderRadius: moderateScale(30),
    height: screenWidth / 0.7,
  },
});
