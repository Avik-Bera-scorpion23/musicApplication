// Library import
import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import ActionSheet from 'react-native-actions-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';

// Local import
import {moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import AText from '../common/AText';
import strings from '../../i18n/strings';
import AButton from '../common/AButtton';
import AInput from '../common/AInput';
import typography from '../../themes/typography';
import {playListDropdownData} from '../../api/constant';

const AddNewPlaylistModal = props => {
  const {
    SheetRef,
    onPressCancel,
    newPlaylistName,
    onChangedPlayListName,
    onPressCreate,
  } = props;
  const colors = useSelector(state => state.theme.theme);

  const [currentVisibility, setCurrentVisibility] = useState('public');

  const onChangeVisibility = text => setCurrentVisibility(text);

  const DropDownLeftIcon = () => {
    return (
      <Ionicons
        name={currentVisibility.title == strings.public ? 'eye' : 'eye-off'}
        size={moderateScale(20)}
        color={colors.textColor}
        style={styles.mr10}
      />
    );
  };

  const DropDownRightIcon = () => {
    return (
      <Ionicons
        name={'caret-down'}
        size={moderateScale(20)}
        color={colors.textColor}
        style={styles.mr10}
      />
    );
  };

  return (
    <ActionSheet
      ref={SheetRef}
      isGestureEnabled={true}
      indicatorStyle={{width: moderateScale(100)}}
      containerStyle={[
        localStyles.actionSheetContainer,
        {backgroundColor: colors.btnColor1},
      ]}>
      <AText type={'B24'} style={styles.mv20} align={'center'}>
        {strings.newPlaylist}
      </AText>
      <View
        style={[
          localStyles.container,
          {
            borderColor: colors.borderColor,
          },
        ]}>
        <AInput
          placeholder={strings.playlistNamePlaceHolder}
          placeholderTextColor={colors.grayScale3}
          toGetTextFieldValue={onChangedPlayListName}
          value={newPlaylistName}
          inputContainerStyle={[
            localStyles.inputContainerStyle,
            {
              backgroundColor: colors.inputBg2,
            },
          ]}
          inputBoxStyle={localStyles.inputBoxStyle}
        />

        <Dropdown
          style={[
            localStyles.dropDownStyle,
            {
              backgroundColor: colors.inputBg2,
            },
          ]}
          placeholderStyle={{color: colors.grayScale5}}
          data={playListDropdownData}
          labelField="title"
          valueField="value"
          value={currentVisibility}
          itemTextStyle={[
            localStyles.itemTextStyle,
            {
              color: colors.textColor,
            },
          ]}
          onChange={onChangeVisibility}
          selectedTextStyle={{
            color: colors.textColor,
          }}
          containerStyle={[
            localStyles.listContainerStyle,
            {
              backgroundColor: colors.inputBg,
              borderColor: colors.borderColor,
            },
          ]}
          renderLeftIcon={DropDownLeftIcon}
          renderRightIcon={DropDownRightIcon}
          showsVerticalScrollIndicator={false}
          itemContainerStyle={[localStyles.itemContainerStyle]}
          activeColor={colors.inputBg2}
          iconColor={colors.textColor}
        />
      </View>

      <View style={localStyles.btnContainer}>
        <AButton
          title={strings.cancel}
          textType={'b18'}
          color={colors.dark ? colors.whiteColor : colors.primary}
          containerStyle={localStyles.skipBtnContainer}
          bgColor={colors.dark3}
          onPress={onPressCancel}
        />
        <AButton
          title={strings.create}
          textType={'b18'}
          color={colors.whiteColor}
          containerStyle={localStyles.skipBtnContainer}
          onPress={onPressCreate}
        />
      </View>
    </ActionSheet>
  );
};

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    ...styles.ph20,
  },
  container: {
    ...styles.mb20,
    borderTopWidth: moderateScale(1),
    borderBottomWidth: moderateScale(1),
    ...styles.pv10,
  },
  btnContainer: {
    ...styles.pb20,
    ...styles.rowSpaceAround,
  },
  skipBtnContainer: {
    width: '45%',
  },
  inputContainerStyle: {
    borderWidth: 0,
    borderRadius: moderateScale(15),
  },
  inputBoxStyle: {
    ...styles.ml10,
    ...typography.fontSizes.f16,
    ...typography.fontWeights.SemiBold,
  },
  dropDownStyle: {
    ...styles.ph20,
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(15),
    ...styles.mv10,
  },
  itemContainerStyle: {
    borderRadius: moderateScale(15),
  },
  listContainerStyle: {
    borderRadius: moderateScale(15),
    borderWidth: 1,
  },
  itemTextStyle: {
    fontSize: moderateScale(14),
  },
});

export default AddNewPlaylistModal;
