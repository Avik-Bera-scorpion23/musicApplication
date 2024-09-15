// library import
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Local imports
import {historySong} from '../../../../api/constant';
import {styles} from '../../../../themes';
import ASubHeader from '../../../../components/common/ASubHeader';
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
import {moderateScale} from '../../../../common/constants';
import ASafeAreaView from '../../../../components/common/ASafeAreaView';
import AHeader from '../../../../components/common/AHeader';
import AButton from '../../../../components/common/AButtton';
import MusicCard from '../../../../components/commonCards/MusicCard';

const SongsList = () => {
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

  const renderItem = ({item, index}) => {
    return (
      <MusicCard
        item={item}
        index={index}
        colors={colors}
        showAudioLength={true}
      />
    );
  };
  const ListHeaderComponent = () => {
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
      <AHeader rightIcon={<RightIcon />} title={strings.songs} />
      <FlatList
        data={historySong}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mh20}
      />
    </ASafeAreaView>
  );
};

export default SongsList;

const localStyles = StyleSheet.create({
  subHeaderStyle: {
    ...styles.pv20,
    borderBottomWidth: moderateScale(1),
    ...styles.mb15,
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
