// library import
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

// local imports
import {styles} from '../../themes';
import AHeader from '../../components/common/AHeader';
import ASafeAreaView from '../../components/common/ASafeAreaView';
import {
  DotMenuDark,
  DotMenuLight,
  Menu_Dark,
  Menu_Light,
  Play,
} from '../../assets/svgs';
import MusicCard from '../../components/commonCards/MusicCard';
import {moderateScale} from '../../common/constants';
import AText from '../../components/common/AText';
import strings from '../../i18n/strings';
import AButton from '../../components/common/AButtton';
import ASubHeader from '../../components/common/ASubHeader';
import {popularSongs} from '../../api/constant';

const ArtistDetail = ({route}) => {
  const colors = useSelector(state => state.theme.theme);
  const {item} = route.params;

  const [isFollowing, setIsFollowing] = useState(item?.isFollowing);

  const onPressMenu = () => {};

  const onFollowPress = () => {
    setIsFollowing(!isFollowing);
    item.isFollowing = !item.isFollowing;
  };

  const RightIcon = () => {
    return (
      <TouchableOpacity style={styles.pr10} onPress={onPressMenu}>
        {colors.dark ? <Menu_Dark /> : <Menu_Light />}
      </TouchableOpacity>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <View>
        <View
          style={[
            localStyles.listHeaderContainerStyle,
            {
              borderBottomColor: colors.borderColor,
            },
          ]}>
          <View style={localStyles.listHeaderStyle}>
            <Image source={item.image} style={localStyles.imageStyle} />
            <AText type="B32" style={styles.mt15} numberOfLines={1}>
              {item.name}
            </AText>
            <AText type="M18" numberOfLines={1} style={styles.mt10}>
              {'55,278,829'} {strings.monthlyListener}
            </AText>
          </View>
          <View style={localStyles.menuContainer}>
            <View style={localStyles.menuInnerContainer}>
              <AButton
                title={isFollowing ? strings.following : strings.follow}
                style={styles.ml5}
                onPress={onFollowPress}
                textType={'B18'}
                containerStyle={[
                  localStyles.followButtonStyle,
                  {
                    borderColor: colors.primary,
                  },
                ]}
                bgColor={isFollowing ? colors.transparent : colors.primary}
                color={!isFollowing ? colors.whiteColor : colors.primary}
              />
              <TouchableOpacity style={styles.ml10}>
                {colors.dark ? <DotMenuDark /> : <DotMenuLight />}
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Play width={moderateScale(44)} height={moderateScale(44)} />
            </TouchableOpacity>
          </View>
        </View>

        <ASubHeader
          textType={'B22'}
          title={strings.popularSongs}
          isRightButton={true}
          rightButtonTitle={strings.seeAll}
          style={localStyles.subHeaderStyle}
        />
      </View>
    );
  };

  const renderMoreLikeThis = ({item, index}) => {
    return (
      <MusicCard
        item={item}
        index={index}
        imageStyle={localStyles.imageStyle}
      />
    );
  };

  return (
    <ASafeAreaView>
      <AHeader rightIcon={<RightIcon />} />
      <FlatList
        data={popularSongs}
        renderItem={renderMoreLikeThis}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.ph20}
        ListHeaderComponent={ListHeaderComponent}
      />
    </ASafeAreaView>
  );
};

export default ArtistDetail;

const localStyles = StyleSheet.create({
  listHeaderContainerStyle: {
    borderBottomWidth: moderateScale(1),
    ...styles.pb20,
  },
  listHeaderStyle: {
    ...styles.center,
  },
  imageStyle: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(125),
  },
  menuContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt10,
  },
  menuInnerContainer: {
    ...styles.flexRow,
    ...styles.mt10,
    ...styles.center,
  },
  followButtonStyle: {
    ...styles.ph25,
    height: moderateScale(46),
    borderWidth: moderateScale(2),
  },
  subHeaderStyle: {
    ...styles.pb10,
    ...styles.pt15,
  },
});
