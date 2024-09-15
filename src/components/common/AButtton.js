//Library Imports
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

//Local Imports
import {moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import AText from './AText';

const AButton = ({
  title,
  textType,
  color,
  onPress,
  containerStyle,
  style,
  icon = null,
  frontIcon = null,
  children,
  bgColor = null,
  ...props
}) => {
  const colors = useSelector(state => state.theme.theme);
  return (
    <TouchableOpacity
      style={[
        localStyle.btnContainer,
        styles.rowCenter,
        containerStyle,
        bgColor
          ? {backgroundColor: bgColor}
          : {backgroundColor: colors.primary},
      ]}
      onPress={onPress}
      {...props}>
      {/* If Icon Added In Button Front Side */}
      {frontIcon}
      {/* Text In Button */}
      <AText type={textType} style={style} color={color}>
        {title}
      </AText>
      {/* If Icon Added In Button Back Side */}
      {icon}
      {children}
    </TouchableOpacity>
  );
};

const localStyle = StyleSheet.create({
  btnContainer: {
    height: moderateScale(50),
    borderRadius: moderateScale(25),
  },
});

export default AButton;
