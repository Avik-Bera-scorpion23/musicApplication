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
import {useNavigation} from '@react-navigation/native';

// local imports
import {styles} from '../../themes';
import AHeader from '../../components/common/AHeader';
import ASafeAreaView from '../../components/common/ASafeAreaView';
import {Edit_Dark, Edit_Light, Menu_Dark, Menu_Light} from '../../assets/svgs';
import {moderateScale} from '../../common/constants';
import AText from '../../components/common/AText';
import strings from '../../i18n/strings';
import ASubHeader from '../../components/common/ASubHeader';
import {playlistSearch} from '../../api/constant';
import {StackNav} from '../../navigation/NavigationKeys';
import AButton from '../common/AButtton';
import PlayListCard from '../commonCards/PlayListCard';

const ProfileDetail = ({route}) => {
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();
  const {item, isEdit} = route.params;

  const [isFollowing, setIsFollowing] = useState(item?.isFollowing);

  const onPressMenu = () => {
    if (!!isEdit) {
      navigation.navigate(StackNav.SetUpProfile, {item});
    }
  };

  const onBtnPress = () => {
    if (!!isEdit) {
      navigation.navigate(StackNav.SetUpProfile, {item});
    } else {
      setIsFollowing(!isFollowing);
      item.isFollowing = !item.isFollowing;
    }
  };

  const navigateToFollowerFollowingList = title => {
    navigation.navigate(StackNav.FollowerFollowingList, {
      item,
      title: title,
    });
  };

  const RightIcon = () => {
    const editIcon = colors.dark ? <Edit_Dark /> : <Edit_Light />;
    const menuIcon = colors.dark ? <Menu_Dark /> : <Menu_Light />;
    return (
      <TouchableOpacity style={styles.pr10} onPress={onPressMenu}>
        {!!isEdit ? editIcon : menuIcon}
      </TouchableOpacity>
    );
  };

  const Detail = ({title, subTitle}) => {
    return (
      <TouchableOpacity
        onPress={() => navigateToFollowerFollowingList(subTitle)}
        style={localStyles.detailContainerStyle}>
        <AText type="B24" numberOfLines={1}>
          {title}
        </AText>
        <AText type="M18" color={colors.labelColor}>
          {subTitle}
        </AText>
      </TouchableOpacity>
    );
  };

  const ListHeaderComponent = () => {
    const followButtonTitle = isFollowing ? strings.following : strings.follow;
    const ButtonTitle = !!isEdit ? strings.editProfile : followButtonTitle;
    return (
      <View>
        <View style={localStyles.listHeaderStyle}>
          <Image source={item?.image} style={localStyles.imageStyle} />
          <AText type="B32" style={styles.mt15} numberOfLines={1}>
            {item?.name}
          </AText>
          <AButton
            title={ButtonTitle}
            onPress={onBtnPress}
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
        </View>
        <View
          style={[
            localStyles.followerContainer,
            {
              borderColor: colors.borderColor,
            },
          ]}>
          <Detail title={item?.followers} subTitle={strings.followers} />
          <Detail title={item?.following} subTitle={strings.following} />
        </View>
        <ASubHeader
          textType={'B22'}
          title={strings.playlists}
          isRightButton={true}
          rightButtonTitle={strings.seeAll}
        />
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return <PlayListCard item={item?.detail} index={index} />;
  };

  return (
    <ASafeAreaView>
      <AHeader
        rightIcon={<RightIcon />}
        title={!!isEdit ? strings.profile : null}
      />
      <FlatList
        data={playlistSearch}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={styles.ph20}
        contentContainerStyle={localStyles.playlistStyle}
      />
    </ASafeAreaView>
  );
};

export default ProfileDetail;

const localStyles = StyleSheet.create({
  listHeaderStyle: {
    ...styles.center,
  },
  imageStyle: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(125),
  },
  followButtonStyle: {
    borderWidth: moderateScale(2),
    ...styles.ph25,
    height: moderateScale(46),
    ...styles.mt20,
  },
  followerContainer: {
    borderTopWidth: moderateScale(1),
    borderBottomWidth: moderateScale(1),
    ...styles.pv15,
    ...styles.mv20,
    ...styles.flexRow,
    ...styles.justifyEvenly,
  },
  detailContainerStyle: {
    ...styles.center,
    ...styles.g10,
  },
  playlistStyle: {
    ...styles.g20,
    ...styles.pv10,
  },
});
