import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {styles} from '../../themes';
import {useSelector} from 'react-redux';

const ASafeAreaView = ({children, ...props}) => {
  const colors = useSelector(state => state.theme.theme);
  return (
    <SafeAreaView {...props} style={[localStyles(colors, props.style).root]}>
      {children}
    </SafeAreaView>
  );
};

export default ASafeAreaView;

const localStyles = (colors, style) =>
  StyleSheet.create({
    root: {
      ...styles.flex,
      backgroundColor: colors.background,
      ...style,
    },
  });
