// library import
import {ImageBackground, StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// local import
import {styles} from '../../themes';
import ASafeAreaView from '../common/ASafeAreaView';
import AHeader from '../common/AHeader';
import {moderateScale} from '../../common/constants';
import AText from '../common/AText';
import strings from '../../i18n/strings';
import {MusicList} from '../../api/constant';
import MusicCard from './MusicCard';

const ChartSongList = ({route}) => {
  const item = route.params.item;
  const colors = useSelector(state => state.theme.theme);
  const renderItem = ({item, index}) => {
    return (
      <MusicCard
        item={item}
        index={index}
        showIndex={true}
        isShowLabel={false}
      />
    );
  };
  const ListHeaderComponent = () => {
    return (
      <View>
        <ImageBackground
          source={item?.image}
          resizeMode="stretch"
          imageStyle={{borderRadius: moderateScale(24)}}
          style={localStyles.imageBackgroundStyle}>
          <AText
            type={'b24'}
            align={'center'}
            color={colors.whiteColor}
            style={[localStyles.onlyTitleStyle, localStyles.upperCase]}>
            {item.title}
          </AText>
        </ImageBackground>
        <View
          style={[
            localStyles.detailContainer,
            {
              borderBottomColor: colors.borderColor,
            },
          ]}>
          <AText
            type={'b24'}
            align={'center'}
            style={styles.pv15}
            numberOfLines={1}>
            {item.title}
          </AText>
          <AText
            type={'m18'}
            numberOfLines={1}
            align={'center'}
            style={styles.mb15}>
            {strings.mostPlayedAlbum}
          </AText>
          <AText
            type={'s14'}
            numberOfLines={1}
            align={'center'}
            style={styles.mb15}>
            {strings.byHearme}
            {' | '}
            {strings.releaseDate}
          </AText>
        </View>
      </View>
    );
  };
  return (
    <ASafeAreaView>
      <AHeader />
      <View style={styles.ph20}>
        <FlatList
          ListHeaderComponent={ListHeaderComponent}
          data={MusicList}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.pb50}
        />
      </View>
    </ASafeAreaView>
  );
};

export default ChartSongList;

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
  },
  imageBackgroundStyle: {
    width: '100%',
    height: moderateScale(184),
    ...styles.center,
  },
  onlyTitleStyle: {
    paddingHorizontal: moderateScale(120),
  },
  upperCase: {
    textTransform: 'uppercase',
  },
  detailContainer: {
    borderBottomWidth: moderateScale(1),
  },
});
