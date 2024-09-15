// Library Imports
import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

// Local Imports
import ASafeAreaView from '../../components/common/ASafeAreaView';
import AHeader from '../../components/common/AHeader';
import {styles} from '../../themes';
import strings from '../../i18n/strings';
import AButton from '../../components/common/AButtton';
import {moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';
import {userDetail} from '../../api/constant';
import UserDetailComponent from '../../components/UserDetailComponent';
import AText from '../../components/common/AText';
import SuccessModal from '../../components/models/SuccessModal';

const SelectInterest = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const [modalVisible, setModalVisible] = useState(false);

  const onPressSkip = () => setModalVisible(true);
  const onPressModalClose = () => setModalVisible(false);

  const onPressContinue = () => {
    navigation.reset({
      index: 0,
      routes: [{name: StackNav.TabBar}],
    });
  };

  const RenderHeader = () => {
    return <AText type={'M18'}>{strings.followArtistsDesc}</AText>;
  };

  return (
    <ASafeAreaView>
      <AHeader title={strings.followArtists} />
      <View style={localStyles.root}>
        <FlatList
          data={userDetail}
          renderItem={({item}) => (
            <UserDetailComponent
              userName={item?.name}
              userImage={item?.imgUrl}
              userDescription={item?.description}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={RenderHeader}
        />
      </View>
      <View style={localStyles.btnContainer}>
        <AButton
          title={strings.skip}
          textType={'b18'}
          color={!!colors.dark ? colors.whiteColor : colors.primary}
          containerStyle={localStyles.skipBtnContainer}
          bgColor={colors.dark3}
          onPress={onPressSkip}
        />
        <AButton
          title={strings.continue}
          textType={'b18'}
          color={colors.whiteColor}
          containerStyle={localStyles.skipBtnContainer}
          onPress={onPressContinue}
        />
      </View>
      <SuccessModal
        visible={modalVisible}
        onPressModalClose={onPressModalClose}
      />
    </ASafeAreaView>
  );
};

export default SelectInterest;

const localStyles = StyleSheet.create({
  chipMainContainer: {
    ...styles.wrap,
    ...styles.flexRow,
  },
  root: {
    ...styles.ph20,
    ...styles.flex,
  },
  btnContainer: {
    ...styles.p20,
    ...styles.rowSpaceAround,
  },
  chipsContainer: {
    ...styles.ph20,
    ...styles.pv10,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(25),
    ...styles.mt15,
    ...styles.mh5,
  },
  skipBtnContainer: {
    width: '45%',
  },
});
