// Library import
import {SectionList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local import
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import AHeader from '../../../components/common/AHeader';
import strings from '../../../i18n/strings';
import AText from '../../../components/common/AText';
import {styles} from '../../../themes';
import {moderateScale} from '../../../common/constants';
import {changeLanguageAction} from '../../../redux/action/profileAction';
import {languageData} from '../../../api/constant';

const Language = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const language = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = React.useState(language);

  const RenderHeader = ({title}) => {
    return (
      <AText type="b20" style={styles.mt20}>
        {title}
      </AText>
    );
  };

  const onPressItem = item => {
    dispatch(changeLanguageAction(item));
    setIsSelected(item);
  };

  const RenderData = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item.lnName)}
        style={localStyles.settingsContainer}>
        <AText type="s18">{item.lnName}</AText>
        <View style={localStyles.rightContainer}>
          <Ionicons
            name={
              isSelected === item.lnName
                ? 'radio-button-on'
                : 'radio-button-off'
            }
            size={moderateScale(24)}
            color={colors.primary}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader title={strings.language} />
      <View style={styles.ph20}>
        <SectionList
          sections={languageData}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <RenderData item={item} />}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({section: {title}}) => (
            <RenderHeader title={title} />
          )}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ASafeAreaView>
  );
};

export default Language;

const localStyles = StyleSheet.create({
  settingsContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt20,
  },
});
