import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {State, useProgress} from 'react-native-track-player';
import Slider from 'react-native-slider';

// local imports
import {styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import AText from '../../components/common/AText';
import {seekTo} from './AudioPlayer';

const SliderComponent = ({isPlaying}) => {
  const colors = useSelector(state => state.theme.theme);
  let {position, duration} = useProgress();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [sliderTotalLength, setSliderTotalLength] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [totalDuration, setTotalDuration] = useState('0:00');

  useEffect(() => {
    if (position) {
      setSliderPosition(position);
    }
  }, [position]);

  useEffect(() => {
    if (duration) {
      setSliderTotalLength(duration);
    }
  }, [duration]);

  useEffect(() => {
    if (duration) {
      setTotalDuration(formatTime(duration));
    }
  }, [duration]);

  useEffect(() => {
    if (isPlaying == State.Ready || isPlaying == State.Connecting) {
      setCurrentTime('0:00');
      setSliderPosition(0);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (position) {
      setCurrentTime(formatTime(position));
    }
  }, [position]);

  const onSlidingComplete = value => {
    seekTo(value);
  };

  const onSliderValueChange = value => {
    setCurrentTime(formatTime(value));
  };

  const formatTime = totalSeconds => {
    if (totalSeconds) {
      let TotalSeconds = totalSeconds?.toFixed(0);
      const minutes = Math.floor(TotalSeconds / 60);
      const seconds = TotalSeconds % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return '0:00';
  };

  return (
    <View>
      <View style={localStyles.sliderContainer}>
        <Slider
          value={sliderPosition}
          minimumValue={0}
          maximumValue={sliderTotalLength}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor={colors.dark3}
          thumbTintColor={colors.primary}
          onValueChange={onSliderValueChange}
          onSlidingComplete={onSlidingComplete}
          trackStyle={localStyles.sliderTrackStyle}
        />
      </View>

      <View style={localStyles.durationContainer}>
        <AText type="M16" numberOfLines={1}>
          {currentTime}
        </AText>
        <AText type="M16" numberOfLines={1}>
          {totalDuration}
        </AText>
      </View>
    </View>
  );
};

export default SliderComponent;

const localStyles = StyleSheet.create({
  sliderTrackStyle: {
    height: moderateScale(8),
    borderRadius: moderateScale(4),
  },
  sliderContainer: {
    ...styles.mt10,
  },
  durationContainer: {
    ...styles.rowSpaceBetween,
  },
});
