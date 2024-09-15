// Library import
import {
  SectionList,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

// Local import
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import AText from '../../../components/common/AText';
import {styles} from '../../../themes';
import {moderateScale} from '../../../common/constants';
import AHeader from '../../../components/common/AHeader';
import strings from '../../../i18n/strings';

const DataSaverAndStorage = () => {
  const colors = useSelector(state => state.theme.theme);
  const [isEnabled, setIsEnabled] = React.useState({
    audioQuality: true,
    streamAudioOnly: true,
    downloadOnlyUsing: true,
  });

  const onPressSwitch = key => {
    setIsEnabled({
      ...isEnabled,
      [key]: !isEnabled[key],
    });
  };

  const SecurityData = [
    {
      title: strings.dataSaver,
      data: [
        {
          title: strings.audioQuality,
          desc: strings.high,
          rightIcon: true,
          value: isEnabled.audioQuality,
          toggleSwitch: () => onPressSwitch('audioQuality'),
        },
      ],
    },
    {
      title: strings.podcasts,
      data: [
        {
          title: strings.downloadAudioOnly,
          desc: strings.downloadAudioOnlyDesc,
          rightIcon: true,
          value: isEnabled.downloadOnlyUsing,
          toggleSwitch: () => onPressSwitch('downloadOnlyUsing'),
        },
        {
          title: strings.streamAudioOnly,
          desc: strings.streamAudioOnlyDesc,
          rightIcon: true,
          value: isEnabled.streamAudioOnly,
          toggleSwitch: () => onPressSwitch('streamAudioOnly'),
        },
      ],
    },
    {
      title: strings.storage,
      data: [
        {
          title: 'Other Apps',
          rightDesc: '75.4 GB',
        },
        {
          title: 'Cache',
          rightDesc: '120.6 MB',
        },
        {
          title: 'Free Space',
          rightDesc: '50.3 GB',
        },
        {
          title: strings.removeAllDownloads,
          desc: strings.removeAllDownloadsDesc,
        },
        {
          title: strings.clearCache,
          desc: strings.clearCacheDesc,
        },
      ],
    },
  ];

  const RenderData = data => {
    return (
      <TouchableOpacity style={localStyles.settingsContainer}>
        <View style={styles.flex}>
          <AText type={'s18'}>{data.item.title}</AText>
          {!!data?.item.desc && (
            <AText type="m14" style={styles.mt5}>
              {data?.item.desc}
            </AText>
          )}
        </View>
        <View style={localStyles.rightContainer}>
          {!!data?.item.rightDesc && (
            <AText type="s18" style={styles.mr10}>
              {data?.item.rightDesc}
            </AText>
          )}
          {!!data?.item?.rightIcon ? (
            <Switch
              trackColor={{
                false: colors.grayScale3,
                true: colors.primary,
              }}
              thumbColor={colors.whiteColor}
              onValueChange={data?.item?.toggleSwitch}
              value={data?.item?.value}
            />
          ) : (
            <Ionicons
              name="chevron-forward-outline"
              size={moderateScale(20)}
              color={colors.dark ? colors.whiteColor : colors.grayScale9}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const renderHeader = ({section}) => {
    return (
      <AText type="b20" style={styles.mt20}>
        {section?.title}
      </AText>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader title={strings.audioAndVideo} />
      <View style={styles.ph20}>
        <SectionList
          sections={SecurityData}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <RenderData item={item} />}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={renderHeader}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ASafeAreaView>
  );
};

export default DataSaverAndStorage;

const localStyles = StyleSheet.create({
  settingsContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.mt20,
  },
  rightContainer: {
    ...styles.flex,
    ...styles.rowEnd,
  },
});
