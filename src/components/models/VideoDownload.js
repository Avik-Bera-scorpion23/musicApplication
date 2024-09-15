// Library import
import {ImageBackground, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import ActionSheet from 'react-native-actions-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';

// Custom import
import {moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import AText from '../common/AText';
import strings from '../../i18n/strings';
import AButton from '../common/AButtton';
import images from '../../assets/images';
import DownloadingModal from './DownloadingModal';
import {videoQuality} from '../../api/constant';

const VideoDownload = props => {
  const {SheetRef} = props;
  const colors = useSelector(state => state.theme.theme);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(true);
  const [pixel, setPixel] = useState('');

  const onPressDownload = () => setIsDownloading(true);

  const onPressCancle = () => SheetRef.current?.hide();

  const onPressHide = () => setIsDownloading(false);

  const onChangePixel = text => setPixel(text);

  return (
    <ActionSheet
      ref={SheetRef}
      isGestureEnabled={true}
      containerStyle={[
        localStyles.actionSheetContainer,
        {backgroundColor: colors.background},
      ]}>
      <View style={localStyles.bottomContainer}>
        <AText type={'b24'} style={styles.pv10} align={'center'}>
          {strings.download}
        </AText>
        <View
          style={[
            localStyles.ratingContainer,
            {borderColor: colors.borderColor},
          ]}>
          <View style={[styles.rowSpaceBetween, styles.mb20]}>
            <AText type="b20">{'Episodes'}</AText>
            <Dropdown
              style={[
                localStyles.dropdownStyle,
                {
                  borderColor: colors.inputBg,
                  color: colors.primary,
                },
              ]}
              placeholderStyle={{color: colors.grayScale5}}
              data={videoQuality}
              maxHeight={moderateScale(180)}
              labelField="label"
              valueField="value"
              placeholder={'720p'}
              value={pixel}
              itemTextStyle={{
                color: colors.textColor,
                fontSize: moderateScale(14),
              }}
              onChange={onChangePixel}
              selectedTextStyle={{
                color: colors.primary,
              }}
              showsVerticalScrollIndicator={false}
              itemContainerStyle={{
                backgroundColor: colors.inputBg,
              }}
              activeColor={colors.inputBg}
              iconColor={colors.primary}
            />
          </View>
          <View>
            <ImageBackground
              resizeMode="cover"
              source={images.homeBanner}
              imageStyle={{borderRadius: moderateScale(10)}}
              style={[localStyles.episodeContainer]}>
              {isDownloaded ? (
                <Ionicons
                  name="checkmark-circle"
                  size={moderateScale(26)}
                  color={colors.primary}
                  style={styles.mr5}
                />
              ) : (
                <Ionicons
                  name="ios-play-circle"
                  size={moderateScale(26)}
                  color={colors.whiteColor}
                  style={styles.mr5}
                />
              )}
              <AText
                type="b16"
                style={localStyles.episodeText}
                color={colors.whiteColor}>
                {'Episode 1'}
              </AText>
            </ImageBackground>
          </View>
        </View>
      </View>
      <View style={localStyles.btnContainer}>
        <AButton
          title={strings.cancel}
          textType={'b18'}
          color={colors.dark ? colors.whiteColor : colors.primary}
          containerStyle={[localStyles.skipBtnContainer]}
          bgColor={colors.dark3}
          onPress={onPressCancle}
        />
        <AButton
          title={strings.download}
          textType={'b18'}
          color={colors.whiteColor}
          containerStyle={[localStyles.skipBtnContainer]}
          onPress={onPressDownload}
        />
      </View>
      <DownloadingModal
        visible={isDownloading}
        onPressModalClose={onPressHide}
      />
    </ActionSheet>
  );
};

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    ...styles.p20,
  },
  bottomContainer: {
    ...styles.ph10,
    ...styles.mb20,
  },
  ratingContainer: {
    ...styles.pv20,
    borderTopWidth: moderateScale(1),
    borderBottomWidth: moderateScale(1),
    ...styles.mt20,
  },
  btnContainer: {
    ...styles.ph10,
    ...styles.rowSpaceBetween,
    ...styles.mb25,
  },
  skipBtnContainer: {
    width: '45%',
  },
  episodeContainer: {
    height: moderateScale(110),
    width: moderateScale(150),
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScale(5),
    ...styles.center,
  },
  episodeText: {
    left: moderateScale(10),
    bottom: moderateScale(10),
    position: 'absolute',
  },
  dropdownStyle: {
    width: moderateScale(80),
  },
});

export default VideoDownload;
