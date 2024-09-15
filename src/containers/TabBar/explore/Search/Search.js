// library imports
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

// local imports
import {styles} from '../../../../themes';
import RecentSearches from './RecentSearches';
import SearchList from './SearchList';
import AInput from '../../../../components/common/AInput';
import {moderateScale, screenWidth} from '../../../../common/constants';
import {Cross_Dark, Cross_Light} from '../../../../assets/svgs';
import ASafeAreaView from '../../../../components/common/ASafeAreaView';

const ExploreSearch = () => {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);

  const BlurredIconStyle = colors.grayScale5;
  const FocusedIconStyle = colors.primary;

  const BlurredStyle = {
    backgroundColor: colors.inputBg,
    borderColor: colors.btnColor1,
  };
  const FocusedStyle = {
    backgroundColor: colors.inputFocusColor,
    borderColor: colors.primary,
  };
  const [search, setSearch] = useState('');
  const [searchInputStyle, setSearchInputStyle] = useState(BlurredStyle);
  const [searchIconStyle, setSearchIconStyle] = useState(BlurredIconStyle);
  const searchInput = useRef(null);

  const onHighlightInput = () => {
    setSearchInputStyle(FocusedStyle);
    setSearchIconStyle(FocusedIconStyle);
  };
  const onUnHighlightInput = () => {
    setSearchInputStyle(BlurredStyle);
    setSearchIconStyle(BlurredIconStyle);
  };

  const onSearchInput = text => setSearch(text);

  const onPressBack = () => navigation.goBack();

  const blurSearchInput = () => {
    searchInput.current.blur();
  };

  const onPressCross = () => {
    setSearch('');
    blurSearchInput();
  };

  const SearchIcon = () => {
    return (
      <Feather name="search" size={moderateScale(20)} color={searchIconStyle} />
    );
  };
  const RightIconInput = () => {
    return (
      <TouchableOpacity style={styles.pr10} onPress={onPressCross}>
        {colors.dark ? <Cross_Dark /> : <Cross_Light />}
      </TouchableOpacity>
    );
  };

  const SearchComponent = () => {
    if (!search) {
      return <RecentSearches />;
    } else {
      return <SearchList search={search} />;
    }
  };

  return (
    <ASafeAreaView>
      <View style={localStyles.inputContainerWrapper}>
        <TouchableOpacity onPress={onPressBack}>
          <Ionicons
            name="arrow-back-outline"
            size={26}
            color={colors.textColor}
          />
        </TouchableOpacity>
        <AInput
          fieldRef={searchInput}
          placeHolder={strings.search}
          _value={search}
          keyBoardType={'default'}
          autoCapitalize={'none'}
          _autoFocus={false}
          insideLeftIcon={() => <SearchIcon />}
          toGetTextFieldValue={onSearchInput}
          inputContainerStyle={[
            {
              backgroundColor: colors.inputBg,
              borderColor: colors.btnColor1,
            },
            localStyles.inputContainerStyle,
            searchInputStyle,
          ]}
          inputBoxStyle={[localStyles.inputBoxStyle]}
          _onFocus={onHighlightInput}
          onBlur={onUnHighlightInput}
          rightAccessory={() => <RightIconInput />}
        />
      </View>
      <SearchComponent />
    </ASafeAreaView>
  );
};

export default ExploreSearch;

const localStyles = StyleSheet.create({
  inputContainerStyle: {
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(1),
    width: screenWidth - moderateScale(80),
  },
  inputContainerWrapper: {
    ...styles.ph20,
    ...styles.rowSpaceBetween,
    ...styles.mb20,
  },
  inputBoxStyle: {
    ...styles.ph15,
  },
});
