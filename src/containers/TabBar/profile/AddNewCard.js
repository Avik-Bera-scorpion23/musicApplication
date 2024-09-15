// Library import
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

// Local Imports
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import AHeader from '../../../components/common/AHeader';
import strings from '../../../i18n/strings';
import {styles} from '../../../themes';
import {moderateScale} from '../../../common/constants';
import images from '../../../assets/images';
import AKeyBoardAvoidWrapper from '../../../components/common/AKeyBoardAvoidWrapper';
import AInput from '../../../components/common/AInput';
import AButton from '../../../components/common/AButtton';
import {
  validateCardNumber,
  validateCvv,
  validateName,
} from '../../../utils/validators';

const AddNewCard = () => {
  const colors = useSelector(state => state.theme.theme);

  const BlurredStyle = {
    backgroundColor: colors.inputBg,
    borderColor: colors.btnColor1,
  };
  const FocusedStyle = {
    backgroundColor: colors.inputFocusColor,
    borderColor: colors.primary,
  };
  const BlurredIconStyle = colors.grayScale5;
  const FocusedIconStyle = colors.primary;

  const [cardName, setCardName] = React.useState('');
  const [cardNumber, setCardNumber] = React.useState('');
  const [cardNameError, setCardNameError] = React.useState('');
  const [cardNumberError, setCardNumberError] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [expiryDateError, setExpiryDateError] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [cvvError, setCvvError] = React.useState('');
  const [expiryDateIcon, setExpiryDateIcon] = React.useState(BlurredIconStyle);
  const [cardNumberInputStyle, setCardNumberInputStyle] =
    React.useState(BlurredStyle);
  const [expiryDateInputStyle, setExpiryDateInputStyle] =
    React.useState(BlurredStyle);
  const [cvvInputStyle, setCvvInputStyle] = React.useState(BlurredStyle);
  const [cardNameInputStyle, setCardNameInputStyle] =
    React.useState(BlurredStyle);
  const [datePickerVisible, setDatePickerVisible] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);

  const onFocusInput = onHighlight => onHighlight(FocusedStyle);
  const onFocusIcon = onHighlight => onHighlight(FocusedIconStyle);
  const onBlurInput = onUnHighlight => onUnHighlight(BlurredStyle);
  const onBlurIcon = onUnHighlight => onUnHighlight(BlurredIconStyle);

  useEffect(() => {
    if (
      !!cardName &&
      !!cardNumber &&
      !!expiryDate &&
      !!cvv &&
      !cardNameError &&
      !cardNumberError &&
      !expiryDateError &&
      !cvvError
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [
    cardName,
    cardNumber,
    expiryDate,
    cvv,
    cardNameError,
    cardNumberError,
    expiryDateError,
    cvvError,
  ]);

  const onChangeCardName = text => {
    const {msg} = validateName(text);
    setCardName(text);
    setCardNameError(msg);
  };

  const onFocusCardName = () => onFocusInput(setCardNameInputStyle);
  const onBlurCardName = () => onBlurInput(setCardNameInputStyle);

  const onChangeCardNumber = text => {
    const {msg} = validateCardNumber(text);
    setCardNumber(text);
    setCardNumberError(msg);
  };

  const onFocusCardNumber = () => onFocusInput(setCardNumberInputStyle);
  const onBlurCardNumber = () => onBlurInput(setCardNumberInputStyle);

  const onChangeExpiryDate = text => {
    setExpiryDate(text);
    if (text.length === 0) {
      setExpiryDateError('Expiry Date is required');
    } else {
      setExpiryDateError('');
    }
  };

  const onFocusExpiryDate = () => {
    onFocusInput(setExpiryDateInputStyle);
    onFocusIcon(setExpiryDateIcon);
  };

  const onBlurExpiryDate = () => {
    onBlurInput(setExpiryDateInputStyle);
    onBlurIcon(setExpiryDateIcon);
  };

  const onChangeCvv = text => {
    const {msg} = validateCvv(text);
    setCvv(text);
    setCvvError(msg);
  };

  const onFocusCvv = () => onFocusInput(setCvvInputStyle);
  const onBlurCvv = () => onBlurInput(setCvvInputStyle);

  const onPressCalender = () => setDatePickerVisible(true);

  const handleDateConfirm = date => {
    var expiryDate = date.toISOString().split('T')[0];
    const month = expiryDate.split('-')[1];
    const year = expiryDate.split('-')[0];
    setExpiryDate(month + '/' + year);
    setDatePickerVisible(false);
  };

  const hideDatePicker = () => setDatePickerVisible(false);

  const RightIcon = () => {
    return (
      <TouchableOpacity style={styles.ph10}>
        <Ionicons
          name="scan"
          size={moderateScale(26)}
          color={colors.textColor}
        />
      </TouchableOpacity>
    );
  };

  const RightCalenderIcon = () => {
    return (
      <TouchableOpacity onPress={onPressCalender} style={styles.ph10}>
        <Ionicons
          name="calendar"
          size={moderateScale(26)}
          color={expiryDateIcon}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader title={strings.addNewCard} rightIcon={<RightIcon />} />
      <AKeyBoardAvoidWrapper contentContainerStyle={[styles.ph20]}>
        <Image source={images.creditCard} style={localStyles.creditCardImage} />
        <View
          style={[localStyles.divider, {backgroundColor: colors.borderColor}]}
        />
        <AInput
          label={strings.cardName}
          placeholder={strings.cardName}
          keyboardType="default"
          maxLength={16}
          _value={cardName}
          _errorText={cardNameError}
          autoCapitalize={'none'}
          toGetTextFieldValue={onChangeCardName}
          inputContainerStyle={[
            {backgroundColor: colors.inputBg},
            localStyles.inputContainerStyle,
            cardNameInputStyle,
          ]}
          inputBoxStyle={[localStyles.inputBoxStyle]}
          _onFocus={onFocusCardName}
          onBlur={onBlurCardName}
        />
        <AInput
          label={strings.cardNumber}
          placeholder={strings.cardNumber}
          keyboardType="number-pad"
          maxLength={16}
          _value={cardNumber}
          _errorText={cardNumberError}
          autoCapitalize={'none'}
          toGetTextFieldValue={onChangeCardNumber}
          inputContainerStyle={[
            {backgroundColor: colors.inputBg},
            localStyles.inputContainerStyle,
            cardNumberInputStyle,
          ]}
          inputBoxStyle={[localStyles.inputBoxStyle]}
          _onFocus={onFocusCardNumber}
          onBlur={onBlurCardNumber}
        />
        <View style={[styles.flexRow, styles.justifyBetween, styles.pb10]}>
          <AInput
            label={strings.expiryDate}
            placeholder={strings.expiryDate}
            keyboardType="number-pad"
            maxLength={10}
            _value={expiryDate}
            _errorText={expiryDateError}
            autoCapitalize={'none'}
            toGetTextFieldValue={onChangeExpiryDate}
            inputContainerStyle={[
              {backgroundColor: colors.inputBg},
              localStyles.dateContainer,
              expiryDateInputStyle,
            ]}
            inputBoxStyle={[localStyles.inputBoxStyle]}
            _onFocus={onFocusExpiryDate}
            onBlur={onBlurExpiryDate}
            _editable={false}
            rightAccessory={() => <RightCalenderIcon />}
          />
          <DateTimePickerModal
            isVisible={datePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
            date={new Date()}
            minimumDate={new Date()}
          />
          <AInput
            label={strings.cvv}
            placeholder={strings.cvv}
            keyboardType="number-pad"
            maxLength={3}
            _value={cvv}
            _errorText={cvvError}
            autoCapitalize={'none'}
            toGetTextFieldValue={onChangeCvv}
            inputContainerStyle={[
              {backgroundColor: colors.inputBg},
              localStyles.dateContainer,
              cvvInputStyle,
            ]}
            inputBoxStyle={[localStyles.inputBoxStyle]}
            _onFocus={onFocusCvv}
            onBlur={onBlurCvv}
          />
        </View>
      </AKeyBoardAvoidWrapper>
      <AButton
        title={strings.add}
        textType={'b18'}
        containerStyle={[styles.mv10, styles.mh20]}
        color={colors.whiteColor}
        bgColor={isDisabled ? colors.grayScale5 : colors.primary}
        disabled={isDisabled}
        // onPress={onPressContinue}
      />
    </ASafeAreaView>
  );
};

export default AddNewCard;

const localStyles = StyleSheet.create({
  creditCardImage: {
    width: moderateScale(360),
    height: moderateScale(220),
    resizeMode: 'contain',
    ...styles.selfCenter,
    ...styles.mv20,
  },
  divider: {
    height: moderateScale(1),
    width: '100%',
    ...styles.mv10,
  },
  inputContainerStyle: {
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(1),
  },
  inputBoxStyle: {
    ...styles.ph15,
  },
  dateContainer: {
    width: moderateScale(170),
    borderRadius: moderateScale(15),
  },
});
