//App colors
const LightColor = {
  light: 'light',
  background: '#FFFFFF',
  textColor: '#212121',
  textColor2: '#757575',
  textColor3: '#424242',
  btnColor1: '#FFFFFF',
  borderColor: '#EEEEEE',
  inputBg: '#FAFAFA',
  inputBg2: '#FAFAFA',
  dark3: '#E6F9ED',
  labelColor: '#616161',
  labelColor2: '#424242',
};

const DarkColor = {
  dark: 'dark',
  background: '#181A20',
  textColor: '#ffffff',
  textColor2: '#E0E0E0',
  textColor3: '#FFFFFF',
  btnColor1: '#1F222A',
  borderColor: '#35383F',
  inputBg: '#1F222A',
  inputBg2: '#181A20',
  dark3: '#35383F',
  labelColor: '#E0E0E0',
  labelColor2: '#E0E0E0',
};

// Common colors
export const commonColor = {
  lightColor: '#F5F5F5',
  darkColor: '#000000',
  primary: '#06C149',
  inputFocusColor: '#06C14914',
  whiteColor: '#FFFFFF',
  placeHolderColor: '#9E9E9E',
  alertColor: '#F75555',
  grayScale1: '#F5F5F5',
  grayScale3: '#E0E0E0',
  grayScale5: '#9E9E9E',
  grayScale6: '#757575',
  grayScale7: '#616161',
  grayScale8: '#424242',
  grayScale9: '#212121',
  modalBg: 'rgba(0,0,0,0.35)',
  primary2: '#9BE6B6',
  primary3: '#6ADA92',
  primary4: '#38CD6D',
  primary5: '#06C149',
  transparent: 'rgba(0,0,0,0)',
};

export const colors = {
  light: {
    ...LightColor,
    ...commonColor,
  },

  dark: {
    ...DarkColor,
    ...commonColor,
  },
};
