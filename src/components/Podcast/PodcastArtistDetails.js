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
  Notification_Icon_Dark,
  Notification_Icon_Light,
  Share_Dark,
  Share_Light,
} from '../../assets/svgs';
import {moderateScale} from '../../common/constants';
import AText from '../../components/common/AText';
import strings from '../../i18n/strings';
import AButton from '../../components/common/AButtton';
import ASubHeader from '../../components/common/ASubHeader';
import {morePodcast} from '../../api/constant';
import PodcastEpisodeCard from '../../components/commonCards/PodcastEpisodeCard';

const PodcastArtistDetail = ({route}) => {
  const colors = useSelector(state => state.theme.theme);
  const {item} = route.params;

  const [isFollowing, setIsFollowing] = useState(item?.isFollowing);
  const [detailNumberOfLine, setDetailNumberOfLine] = useState(3);

  const onPressMenu = () => {};

  const onFollowPress = () => {
    setIsFollowing(!isFollowing);
    item.isFollowing = !item.isFollowing;
  };

  const onNotificationPress = () => {};

  const onSharePress = () => {};

  const onDotMenuPress = () => {};

  const onPressViewMoreLess = () => {
    if (detailNumberOfLine === 3) {
      setDetailNumberOfLine(0);
    } else {
      setDetailNumberOfLine(3);
    }
  };

  const RightIcon = () => {
    return (
      <TouchableOpacity style={styles.pr10} onPress={onPressMenu}>
        {colors.dark ? <Menu_Dark /> : <Menu_Light />}
      </TouchableOpacity>
    );
  };

  const Button = ({darkIcon, lightIcon, onPressButton}) => {
    return (
      <TouchableOpacity onPress={onPressButton}>
        {colors.dark ? darkIcon : lightIcon}
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
            <AText
              type="B32"
              style={styles.mt15}
              numberOfLines={2}
              align="center">
              {item.title}
            </AText>
            <AText
              type="M18"
              numberOfLines={1}
              color={colors.labelColor2}
              style={styles.mt10}>
              {item.host}
            </AText>
          </View>
          <View style={localStyles.menuContainer}>
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
            <View style={localStyles.menuInnerContainer}>
              <Button
                darkIcon={<Notification_Icon_Dark />}
                lightIcon={<Notification_Icon_Light />}
                onPress={onNotificationPress}
              />
              <Button
                darkIcon={<Share_Dark />}
                lightIcon={<Share_Light />}
                onPress={onSharePress}
              />
              <Button
                darkIcon={<DotMenuDark />}
                lightIcon={<DotMenuLight />}
                onPress={onDotMenuPress}
              />
            </View>
          </View>
          <TouchableOpacity onPress={onPressViewMoreLess} style={styles.mt10}>
            <AText type="M16" numberOfLines={detailNumberOfLine}>
              {strings.podcastDetail}
            </AText>
            <AText color={colors.primary} style={styles.flex}>
              {detailNumberOfLine === 3 ? strings.viewMore : strings.viewLess}
            </AText>
          </TouchableOpacity>
        </View>

        <ASubHeader
          textType={'B22'}
          title={strings.episode}
          isRightButton={true}
          rightButtonTitle={strings.seeAll}
          style={localStyles.subHeaderStyle}
        />
      </View>
    );
  };

  const renderMoreLikeThis = ({item, index}) => {
    return <PodcastEpisodeCard item={item} index={index} showHost={false} />;
  };

  return (
    <ASafeAreaView>
      <AHeader rightIcon={<RightIcon />} />
      <FlatList
        data={morePodcast}
        renderItem={renderMoreLikeThis}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.ph20}
        ListHeaderComponent={ListHeaderComponent}
      />
    </ASafeAreaView>
  );
};

export default PodcastArtistDetail;

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
    borderRadius: moderateScale(30),
  },
  menuContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt20,
    ...styles.mb10,
  },
  menuInnerContainer: {
    ...styles.rowSpaceAround,
    ...styles.g20,
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
