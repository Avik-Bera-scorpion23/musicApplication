import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from '../../themes';
import {useNavigation} from '@react-navigation/native';
import AText from './AText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

export default function AHeader(props) {
  const {title, onPressBack, rightIcon, isHideBack, isLeftIcon} = props;
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);

  const goBack = () => navigation.goBack();
  return (
    <View style={[localStyles.container]}>
      <View style={[styles.rowStart, styles.flex]}>
        {!isHideBack && (
          <TouchableOpacity style={styles.pr15} onPress={onPressBack || goBack}>
            <Ionicons
              name="arrow-back-outline"
              size={26}
              color={colors.textColor}
            />
          </TouchableOpacity>
        )}
        {!!isLeftIcon && isLeftIcon}

        <AText
          numberOfLines={1}
          style={[styles.pr10, styles.mr10]}
          type={'B24'}>
          {title}
        </AText>
      </View>
      {!!rightIcon && rightIcon}
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.pv15,
    ...styles.center,
  },
});
