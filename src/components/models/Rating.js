// Library import
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ActionSheet from 'react-native-actions-sheet';
import * as Progress from 'react-native-progress';

// Custom import
import {moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import AText from '../common/AText';
import strings from '../../i18n/strings';
import AButton from '../common/AButtton';
import images from '../../assets/images';

const RatingModal = props => {
  const {SheetRef, onPressSubmit} = props;
  const colors = useSelector(state => state.theme.theme);

  const [rating, setRating] = React.useState('');

  const onPressCancle = () => SheetRef.current?.hide();

  const renderStar = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressReview(index)}
        style={styles.mh10}>
        <Image
          source={rating < index ? images.emptyStar : images.filStar}
          style={localStyles.starContainer}
        />
      </TouchableOpacity>
    );
  };

  const onPressReview = index => {
    setRating(index);
  };

  return (
    <ActionSheet
      ref={SheetRef}
      isGestureEnabled={true}
      containerStyle={[
        localStyles.actionSheetContainer,
        {backgroundColor: colors.background},
      ]}>
      <View style={localStyles.bottomContainer}>
        <AText type={'b24'} align={'center'}>
          {strings.giveRating}
        </AText>
        <View
          style={[
            localStyles.ratingContainer,
            {borderColor: colors.borderColor},
          ]}>
          <View>
            <View style={[styles.flexRow, styles.itemsEnd]}>
              <AText type={'b46'}>{'9.8'}</AText>
              <AText type={'b22'} style={styles.mb5}>
                {'/10'}
              </AText>
            </View>
            <AText type={'m14'} style={styles.mv5}>
              {'(69,575 users)'}
            </AText>
          </View>

          <View
            style={[localStyles.divider, {backgroundColor: colors.borderColor}]}
          />
          <View>
            {['1', '2', '3', '4', '5'].map((item, index) => (
              <View key={index} style={[styles.rowCenter, styles.mv5]}>
                <AText type={'s16'} style={styles.mr10}>
                  {item}
                </AText>
                <Progress.Bar
                  progress={item / 5}
                  width={moderateScale(190)}
                  color={colors.primary}
                />
              </View>
            ))}
          </View>
        </View>
        <View style={styles.center}>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={renderStar}
            keyExtractor={item => item.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={localStyles.btnContainer}>
        <AButton
          title={strings.cancel}
          textType={'b18'}
          color={colors.dark ? colors.whiteColor : colors.primary}
          containerStyle={[localStyles.skipBtnContainer]}
          bgColor={colors.dark3}
          onPress={onPressCancle}
        />
        <AButton
          title={strings.submit}
          textType={'b18'}
          color={colors.whiteColor}
          containerStyle={[localStyles.skipBtnContainer]}
          onPress={onPressSubmit}
        />
      </View>
    </ActionSheet>
  );
};

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    ...styles.p20,
  },
  bottomContainer: {
    ...styles.ph10,
    ...styles.mb20,
  },
  ratingContainer: {
    ...styles.pv20,
    borderTopWidth: moderateScale(1),
    borderBottomWidth: moderateScale(1),
    ...styles.mv20,
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
  divider: {
    ...styles.mh20,
    height: moderateScale(100),
    width: moderateScale(1),
  },
  btnContainer: {
    ...styles.p10,
    ...styles.rowSpaceAround,
    ...styles.mb20,
  },
  skipBtnContainer: {
    width: '45%',
  },
  starContainer: {
    height: moderateScale(30),
    width: moderateScale(30),
  },
});

export default RatingModal;
