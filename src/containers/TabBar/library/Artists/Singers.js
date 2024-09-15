// library import
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// Local imports
import {Artist, moreArtists} from '../../../../api/constant';
import {styles} from '../../../../themes';
import ASubHeader from '../../../../components/common/ASubHeader';
import {DotMenuDark, DotMenuLight, Swap_Green} from '../../../../assets/svgs';
import {moderateScale} from '../../../../common/constants';
import AText from '../../../../components/common/AText';
import {StackNav} from '../../../../navigation/NavigationKeys';

const SingerCard = ({item, index, colors}) => {
  const navigation = useNavigation();

  const navigateToAlbumDetail = () =>
    navigation.navigate(StackNav.ArtistDetail, {item});

  const onPressMenu = () => {};

  return (
    <TouchableOpacity
      style={localStyles.itemStyle}
      onPress={navigateToAlbumDetail}>
      <Image source={item.image} style={localStyles.imageStyle} />
      <View style={localStyles.detailContainer}>
        <AText type="B18" numberOfLines={1}>
          {item.name}
        </AText>
        <AText type="M12" numberOfLines={1}>
          {20 + ' '}
          {strings.songs}
        </AText>
      </View>
      <TouchableOpacity style={styles.rowCenter} onPress={onPressMenu}>
        {colors.dark ? <DotMenuDark /> : <DotMenuLight />}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const Singers = () => {
  const colors = useSelector(state => state.theme.theme);

  const renderItem = ({item, index}) => {
    return <SingerCard item={item} index={index} colors={colors} />;
  };
  const ListHeaderComponent = () => {
    return (
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
    );
  };

  return (
    <FlatList
      data={[...Artist, ...moreArtists]}
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Singers;

const localStyles = StyleSheet.create({
  subHeaderStyle: {
    ...styles.pv20,
    borderBottomWidth: moderateScale(1),
    ...styles.mb15,
  },
  itemStyle: {
    ...styles.flexRow,
    ...styles.pv15,
  },
  imageStyle: {
    height: moderateScale(80),
    width: moderateScale(80),
    borderRadius: moderateScale(40),
  },
  detailContainer: {
    ...styles.ml15,
    ...styles.flex,
    ...styles.justifyCenter,
    ...styles.g10,
  },
});
