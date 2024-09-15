// Library import
import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ActionSheet from 'react-native-actions-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local import
import AText from '../common/AText';
import {moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import AButton from '../common/AButtton';
import strings from '../../i18n/strings';

const DeleteDownloads = ({sheetRef, item}) => {
  const colors = useSelector(state => state.theme.theme);

  const onPressCancel = () => sheetRef.current?.setModalVisible(false);

  const onPressContinue = () => sheetRef.current?.setModalVisible(false);

  return (
    <ActionSheet
      ref={sheetRef}
      isGestureEnabled={true}
      indicatorStyle={true}
      containerStyle={[
        localStyles.actionSheetContainer,
        {backgroundColor: colors.background},
      ]}>
      <AText type="b20" color={colors.alertColor} align={'center'}>
        {strings.delete}
      </AText>
      <View
        style={[
          localStyles.divider,
          {
            backgroundColor: colors.dark
              ? colors.grayScale8
              : colors.grayScale3,
          },
        ]}
      />
      <AText type="b20" align={'center'} style={styles.mb20}>
        {strings.deleteDownloadDescription}
      </AText>
      <View style={localStyles.mainCardContainer}>
        <ImageBackground
          resizeMode="cover"
          source={item.image}
          imageStyle={{borderRadius: moderateScale(10)}}
          style={localStyles.imageContainer}>
          <Ionicons
            name="ios-play-circle"
            size={moderateScale(26)}
            color={colors.whiteColor}
            style={styles.mr5}
          />
        </ImageBackground>
        <View style={localStyles.detailsContainer}>
          <AText type="b18" numberOfLines={2}>
            {item.title}
          </AText>

          <AText
            type="m14"
            style={styles.mt5}
            color={colors.dark ? colors.grayScale3 : colors.grayScale8}
            numberOfLines={1}>
            {'Episodes 1080'}
          </AText>

          <View
            style={[
              localStyles.categoryContainer,
              {backgroundColor: colors.inputFocusColor},
            ]}>
            <AText type="s14" color={colors.primary} numberOfLines={1}>
              {'246.56 MB'}
            </AText>
          </View>
        </View>
      </View>
      <View
        style={[
          localStyles.divider,
          {
            backgroundColor: colors.dark
              ? colors.grayScale8
              : colors.grayScale3,
          },
        ]}
      />
      <View style={localStyles.btnContainer}>
        <AButton
          title={strings.cancel}
          textType={'b18'}
          color={colors.dark ? colors.whiteColor : colors.primary}
          containerStyle={[localStyles.skipBtnContainer]}
          bgColor={colors.dark3}
          onPress={onPressCancel}
        />
        <AButton
          title={strings.yesDelete}
          textType={'b18'}
          color={colors.whiteColor}
          containerStyle={[localStyles.skipBtnContainer]}
          onPress={onPressContinue}
        />
      </View>
    </ActionSheet>
  );
};

export default DeleteDownloads;

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    ...styles.p20,
  },
  mainCardContainer: {
    ...styles.flexRow,
    ...styles.mb15,
    ...styles.itemsCenter,
  },
  categoryContainer: {
    borderRadius: moderateScale(10),
    ...styles.p10,
    ...styles.mt10,
    ...styles.selfStart,
  },
  detailsContainer: {
    ...styles.flex,
    ...styles.ml5,
  },
  imageContainer: {
    height: moderateScale(110),
    width: moderateScale(150),
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScale(5),
    ...styles.center,
  },
  divider: {
    height: moderateScale(1),
    ...styles.mv15,
  },
  btnContainer: {
    ...styles.p20,
    ...styles.rowSpaceAround,
  },
  skipBtnContainer: {
    width: '45%',
  },
});
