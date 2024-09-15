import {StyleSheet} from 'react-native';
import {moderateScale} from '../common/constants';

// All gap Styles
export default StyleSheet.create({
  g0: {
    gap: 0,
  },
  g5: {
    gap: moderateScale(5),
  },
  g10: {
    gap: moderateScale(10),
  },
  g15: {
    gap: moderateScale(15),
  },
  g20: {
    gap: moderateScale(20),
  },
  g25: {
    gap: moderateScale(25),
  },
});
