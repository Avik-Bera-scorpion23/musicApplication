// Library import
import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local import
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import AHeader from '../../../components/common/AHeader';
import strings from '../../../i18n/strings';
import AText from '../../../components/common/AText';
import {styles} from '../../../themes';
import {moderateScale} from '../../../common/constants';
import {notificationData} from '../../../api/constant';

const NotificationSetting = () => {
  const colors = useSelector(state => state.theme.theme);

  const renderItem = ({item, index}) => {
    return (
      <View style={localStyles.mainContainer} key={index}>
        <View style={styles.flex}>
          <AText type={'s18'}>{item.title}</AText>
          {item?.desc && (
            <AText type={'m14'} style={styles.mt5}>
              {item?.desc}
            </AText>
          )}
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={moderateScale(20)}
          color={colors.textColor}
        />
      </View>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader title={strings.notification} />
      <FlatList
        data={notificationData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.root}
      />
    </ASafeAreaView>
  );
};

export default NotificationSetting;

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph25,
    ...styles.pb20,
    ...styles.pt10,
  },
  mainContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mb20,
  },
});
