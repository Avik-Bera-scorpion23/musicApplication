// Libraries import
import React from 'react';
import {Modal, StyleSheet, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import * as Progress from 'react-native-progress';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local import
import {moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import {commonColor, styles} from '../../themes';
import AText from '../common/AText';
import AButton from '../common/AButtton';

const DownloadingModal = props => {
  const colors = useSelector(state => state.theme.theme);

  const {visible, onPressModalClose} = props;

  const onPressHide = () => onPressModalClose();

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={localStyles.modalMainContainer}>
        <View style={[localStyles.root, {backgroundColor: colors.inputBg}]}>
          <AText
            type={'b24'}
            style={styles.pv10}
            color={colors.primary}
            align={'center'}>
            {strings.download}
          </AText>

          <AText type={'r16'} align={'center'} style={styles.mt20}>
            {
              'Episode 1 is still downloading... Please wait or hide the process'
            }
          </AText>

          <View
            style={[
              localStyles.downloadingContainer,
              {borderTopColor: colors.borderColor},
            ]}>
            <AText type="b14" style={styles.justifyStart}>
              {'122.8 / 239.5 MB'}
            </AText>
            <AText type="b14" style={styles.itemsEnd} color={colors.primary}>
              {'45%'}
            </AText>
          </View>
          <View style={[localStyles.progressBar]}>
            <Progress.Bar
              progress={0.3}
              width={moderateScale(230)}
              unfilledColor={colors.borderColor}
              borderWidth={0}
              color={colors.primary}
            />
            <TouchableOpacity>
              <Ionicons
                name={'close-circle'}
                size={moderateScale(26)}
                color={colors.primary}
                style={styles.ml10}
              />
            </TouchableOpacity>
          </View>
          <AButton
            title={strings.hide}
            textType={'b18'}
            color={colors.dark ? colors.whiteColor : colors.primary}
            bgColor={colors.dark3}
            containerStyle={styles.mv10}
            onPress={onPressHide}
          />
        </View>
      </View>
    </Modal>
  );
};

const localStyles = StyleSheet.create({
  root: {
    ...styles.p30,
    ...styles.m25,
    borderRadius: moderateScale(40),
    width: '80%',
  },
  modalMainContainer: {
    ...styles.flex,
    ...styles.center,
    backgroundColor: commonColor.modalBg,
  },
  progressBar: {
    ...styles.mb20,
    ...styles.rowCenter,
  },
  downloadingContainer: {
    ...styles.rowSpaceBetween,
    ...styles.pt25,
    ...styles.mt25,
    borderTopWidth: moderateScale(1),
  },
});

export default DownloadingModal;
