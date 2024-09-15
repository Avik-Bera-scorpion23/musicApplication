import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import AText from '../../../../../components/common/AText';
import images from '../../../../../assets/images';
import strings from '../../../../../i18n/strings';
import {styles} from '../../../../../themes';
import {moderateScale} from '../../../../../common/constants';

const CommonListEmptyComponent = () => {
  return (
    <View style={styles.center}>
      <Image source={images.notFound} style={localStyles.noFoundImage} />
      <AText type="B24" style={styles.mt20}>
        {strings.notFound}
      </AText>
      <AText type="R18" align="center" style={styles.mt10}>
        {strings.notFoundDesc}
      </AText>
    </View>
  );
};

export default CommonListEmptyComponent;

const localStyles = StyleSheet.create({
  noFoundImage: {
    width: moderateScale(340),
    height: moderateScale(250),
  },
});
