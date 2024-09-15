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

const AudioAndVideo = () => {
  const colors = useSelector(state => state.theme.theme);
  const [isEnabled, setIsEnabled] = React.useState({
    autoAdjustQuality: true,
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
      title: strings.audioQuality,
      data: [
        {
          title: strings.wiFiStreaming,
          desc: strings.high,
        },
        {
          title: strings.dataCellularStreaming,
          desc: strings.automatic,
        },
        {
          title: strings.autoAdjustQuality,
          rightIcon: true,
          value: isEnabled.autoAdjustQuality,
          toggleSwitch: () => onPressSwitch('autoAdjustQuality'),
        },
        {
          title: strings.downloads,
          desc: strings.normal,
        },
        {
          title: strings.downloadOnlyUsing,
          rightIcon: true,
          value: isEnabled.downloadOnlyUsing,
          toggleSwitch: () => onPressSwitch('downloadOnlyUsing'),
        },
        {
          title: strings.Equalizer,
        },
      ],
    },
    {
      title: strings.security,
      data: [
        {
          title: strings.wiFiStreaming,
          desc: strings.high,
        },
        {
          title: strings.dataCellularStreaming,
          desc: strings.medium,
        },
      ],
    },
  ];

  const RenderData = data => {
    return (
      <TouchableOpacity style={localStyles.settingsContainer}>
        <AText style={styles.flex} type="s18">
          {data.item.title}
        </AText>
        <View style={localStyles.rightContainer}>
          {!!data?.item.desc && (
            <AText type="s18" style={styles.mr10}>
              {data?.item.desc}
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

export default AudioAndVideo;

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
