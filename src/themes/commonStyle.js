import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {moderateScale} from '../common/constants';
import {colors} from './colors';
import flex from './flex';
import margin from './margin';

// const mode = useSelector(state => state.theme);
// const isColors = mode.theme === 'light' ? colors.light : colors.dark;

// App Common Styles
export default StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.backgroundColor,
    ...flex.flex,
  },
  innerContainer: {
    paddingHorizontal: moderateScale(20),
    ...margin.mt20,
  },
  generalTitleText: {
    fontSize: moderateScale(24),
    // color: isColors.secondary,
  },
  underLineText: {
    textDecorationLine: 'underline',
  },
  horizontalLine: {
    height: moderateScale(10),
    // backgroundColor: isColors.lightBorder,
    width: '100%',
  },
  shadowStyle: {
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  capitalizeTextStyle: {
    textTransform: 'capitalize',
  },
});
