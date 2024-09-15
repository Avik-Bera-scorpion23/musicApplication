// Library import
import {FlatList, StyleSheet, Switch, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Local import
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import AText from '../../../components/common/AText';
import {styles} from '../../../themes';
import AHeader from '../../../components/common/AHeader';
import strings from '../../../i18n/strings';

const Playback = () => {
  const colors = useSelector(state => state.theme.theme);
  const [isEnabled, setIsEnabled] = React.useState({
    switch1: true,
    switch2: true,
    switch3: true,
    switch4: false,
    switch5: true,
    switch6: false,
    switch7: true,
    switch8: true,
    switch9: true,
    switch10: false,
  });

  onPressToggleSwitch = key => {
    setIsEnabled({
      ...isEnabled,
      [key]: !isEnabled[key],
    });
  };

  const SecurityData = [
    {
      title: 'Gapless',
      desc: 'Allows gapless playback.',
      value: isEnabled.switch1,
      toggleSwitch: () => onPressToggleSwitch('switch1'),
    },
    {
      title: 'Automix',
      desc: 'Allows seamless transitions between songs on select playlists.',
      value: isEnabled.switch2,
      toggleSwitch: () => onPressToggleSwitch('switch2'),
    },
    {
      title: 'Allow Explicit Content',
      desc: 'Turn on play explicit content.',
      value: isEnabled.switch3,
      toggleSwitch: () => onPressToggleSwitch('switch3'),
    },
    {
      title: 'Show Unplayable Songs',
      desc: 'Show song that are unplayable.',
      value: isEnabled.switch4,
      toggleSwitch: () => onPressToggleSwitch('switch4'),
    },
    {
      title: 'Normalize Volume',
      desc: 'Set the same volume level for all tracks.',
      value: isEnabled.switch5,
      toggleSwitch: () => onPressToggleSwitch('switch5'),
    },
    {
      title: 'Mono Audio',
      desc: 'Makes tke left and right speakers play the same audio.',
      value: isEnabled.switch6,
      toggleSwitch: () => onPressToggleSwitch('switch6'),
    },
    {
      title: 'Device Broadcast Status',
      desc: 'Allow other apps on your device to see what you are listening to.',
      value: isEnabled.switch7,
      toggleSwitch: () => onPressToggleSwitch('switch7'),
    },
    {
      title: 'Autoplay on This Device',
      desc: 'Autoplay similar songs when your music ends on this app.',
      value: isEnabled.switch8,
      toggleSwitch: () => onPressToggleSwitch('switch8'),
    },
    {
      title: 'Autoplay on Other Devices',
      desc: 'Autoplay similar songs when your music ends on other devices.',
      value: isEnabled.switch9,
      toggleSwitch: () => onPressToggleSwitch('switch9'),
    },
    {
      title: 'Canvas',
      desc: 'Display short, looping visuals on tracks.',
      value: isEnabled.switch10,
      toggleSwitch: () => onPressToggleSwitch('switch10'),
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={localStyles.mainContainer} key={index}>
        <View style={styles.flex}>
          <AText type={'s18'}>{item.title}</AText>
          {item?.desc && (
            <AText type={'m14'} style={styles.mt5}>
              {item?.desc}
            </AText>
          )}
        </View>
        <Switch
          trackColor={{
            false: colors.grayScale3,
            true: colors.primary,
          }}
          thumbColor={colors.whiteColor}
          onValueChange={item?.toggleSwitch}
          value={item?.value}
        />
      </View>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader title={strings.playback} />
      <FlatList
        data={SecurityData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.root}
      />
    </ASafeAreaView>
  );
};

export default Playback;

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph25,
    ...styles.pb20,
    ...styles.pt10,
  },
  mainContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mb20,
  },
});
