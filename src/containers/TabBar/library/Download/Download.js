// library import
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// local imports
import {styles} from '../../../../themes';
import ASafeAreaView from '../../../../components/common/ASafeAreaView';
import AHeader from '../../../../components/common/AHeader';
import {
  Menu_Dark,
  Menu_Light,
  Play,
  Play_Transparent,
  Search_Dark,
  Search_Light,
  Shuffle_White,
  Swap_Green,
} from '../../../../assets/svgs';
import {historySong} from '../../../../api/constant';
import {moderateScale} from '../../../../common/constants';
import ASubHeader from '../../../../components/common/ASubHeader';
import MusicCard from '../../../../components/commonCards/MusicCard';
import strings from '../../../../i18n/strings';
import AButton from '../../../../components/common/AButtton';

const Download = () => {
  const colors = useSelector(state => state.theme.theme);

  const onPressSearch = () => {};

  const onPressMenu = () => {};

  const onPressShuffle = () => {};

  const onPressPlay = () => {};

  const Button = ({darkIcon, lightIcon, onPress, style}) => {
    return (
      <TouchableOpacity style={style} onPress={onPress}>
        {colors.dark ? darkIcon : lightIcon}
      </TouchableOpacity>
    );
  };

  const RightIcon = () => {
    return (
      <View style={styles.rowSpaceBetween}>
        <Button
          darkIcon={<Search_Dark />}
          lightIcon={<Search_Light />}
          onPress={onPressSearch}
          style={styles.pr10}
        />
        <Button
          darkIcon={<Menu_Dark />}
          lightIcon={<Menu_Light />}
          onPress={onPressMenu}
        />
      </View>
    );
  };

  const renderSong = ({item, index}) => <MusicCard item={item} index={index} />;

  const renderHeaderComponent = () => {
    return (
      <View>
        <ASubHeader
          textType="B20"
          title={strings.sortBy}
          isRightButton={true}
          rightButtonTitle={strings.recentlyAdded}
          rightIcon={<Swap_Green />}
          style={[
            localStyles.subHeaderStyle,
            {
              borderBottomColor: colors.borderColor,
            },
          ]}
        />
        <View style={localStyles.buttonContainer}>
          <AButton
            title={strings.shuffle}
            frontIcon={<Shuffle_White />}
            textType={'b18'}
            color={colors.whiteColor}
            containerStyle={localStyles.BtnStyle}
            style={styles.ml15}
            onPress={onPressShuffle}
          />
          <AButton
            title={strings.play}
            frontIcon={colors.dark ? <Play_Transparent /> : <Play />}
            textType={'b18'}
            color={colors.dark ? colors.whiteColor : colors.primary}
            bgColor={colors.dark3}
            containerStyle={localStyles.BtnStyle}
            style={styles.ml15}
            onPress={onPressPlay}
          />
        </View>
      </View>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader title={strings.downloads} rightIcon={<RightIcon />} />
      <FlatList
        data={historySong}
        renderItem={renderSong}
        ListHeaderComponent={renderHeaderComponent}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ph20}
      />
    </ASafeAreaView>
  );
};

export default Download;

const localStyles = StyleSheet.create({
  subHeaderStyle: {
    ...styles.pv20,
    borderBottomWidth: moderateScale(1),
    ...styles.mb10,
  },
  buttonContainer: {
    ...styles.flexRow,
    ...styles.g10,
    ...styles.mv15,
  },
  BtnStyle: {
    ...styles.flex,
  },
});
