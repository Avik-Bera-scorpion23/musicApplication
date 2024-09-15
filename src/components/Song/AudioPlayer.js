import React from 'react';
import TrackPlayer, {State} from 'react-native-track-player';

export async function setupAudioPlayer() {
  await TrackPlayer.updateOptions({
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_STOP,
    ],
    iosCategory: TrackPlayer.iOSCategory.Playback,
  });
}

export const setupPlayer = async () => {
  try {
    // this method will only reject if player has not been setup yet
    await TrackPlayer.getCurrentTrack();
  } catch {
    await setupAudioPlayer();
  }
};

export async function addTrackToQueue(track) {
  await TrackPlayer.add(track);
}
export async function removeTrackFromQueue(track) {
  await TrackPlayer.remove([track]);
}

export async function resetPlayer() {
  await TrackPlayer.reset();
}

export async function getCurrentTrack() {
  return await TrackPlayer.getCurrentTrack();
}

export async function getTrack(track) {
  return await TrackPlayer.getTrack(track);
}

export async function getQueue() {
  return await TrackPlayer.getQueue();
}

export async function play() {
  await TrackPlayer.play();
}

export async function pause() {
  await TrackPlayer.pause();
}

export async function stop() {
  await TrackPlayer.stop();
}

export async function isPlaying() {
  const state = await TrackPlayer.getState();
  if (state === State.Playing) {
    return true;
  }
  return false;
}

export async function getTrackDuration() {
  const duration = await TrackPlayer.getDuration();
  return duration;
}

export async function getTrackCurrentPosition() {
  const position = await TrackPlayer.getPosition();
  return position;
}

export async function seekTo(value) {
  await TrackPlayer.seekTo(value);
}

export async function nextTrack() {
  await TrackPlayer.skipToNext();
}

export async function previousTrack() {
  await TrackPlayer.skipToPrevious();
}

export async function goToTrack(index) {
  await TrackPlayer.skip(index);
}
