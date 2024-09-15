// Libraries import
import React from 'react';
import {Modal, StyleSheet, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

// Local import
import {Modal_Icon, ReviewSummary} from '../../assets/svgs';
import {moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import {commonColor, styles} from '../../themes';
import AText from '../common/AText';
import AButton from '../common/AButtton';

const SuccessModal = props => {
  const colors = useSelector(state => state.theme.theme);

  const {visible, onPressModalClose, success = false} = props;
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={localStyles.modalMainContainer}>
        <View style={[localStyles.root, {backgroundColor: colors.inputBg}]}>
          {success ? <ReviewSummary /> : <Modal_Icon />}
          <TouchableOpacity disabled={success} onPress={onPressModalClose}>
            <AText
              type={'b24'}
              color={colors.primary}
              align={'center'}
              style={styles.mt25}>
              {strings.congratulations}
            </AText>
          </TouchableOpacity>
          <AText type={'r16'} align={'center'} style={styles.mt15}>
            {success ? strings.modalDesc2 : strings.modalDesc}
          </AText>
          {success && (
            <AButton
              title={strings.ok}
              onPress={onPressModalClose}
              textType={'b16'}
              containerStyle={localStyles.btnContainer}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const localStyles = StyleSheet.create({
  root: {
    ...styles.p30,
    ...styles.m25,
    borderRadius: moderateScale(48),
    ...styles.itemsCenter,
  },
  modalMainContainer: {
    ...styles.flex,
    ...styles.center,
    backgroundColor: commonColor.modalBg,
  },
  btnContainer: {
    ...styles.mt20,
    width: moderateScale(230),
  },
});

export default SuccessModal;
