// libraries imports
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Local import
import {styles} from '../../themes';
import AText from './AText';

const ASubHeader = ({
  textType,
  title,
  isRightButton = false,
  style,
  rightButtonTitle,
  rightIcon = null,
  onRightButtonPress = () => {},
}) => {
  const colors = useSelector(state => state.theme.theme);
  return (
    <View style={[localStyles.headerStyle, style]}>
      <AText type={textType}>{title}</AText>
      {isRightButton && (
        <TouchableOpacity
          onPress={onRightButtonPress}
          style={localStyles.rightTextStyle}>
          <AText type="b16" color={colors.primary5}>
            {rightButtonTitle}
          </AText>
          {rightIcon && rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ASubHeader;

const localStyles = StyleSheet.create({
  headerStyle: {
    ...styles.rowSpaceBetween,
  },
  rightTextStyle: {
    ...styles.flexRow,
    ...styles.g10,
  },
});
