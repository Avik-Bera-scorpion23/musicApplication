import {SectionList, StyleSheet, View} from 'react-native';
import React from 'react';

// Local imports
import {NotificationSongs} from '../../../../api/constant';
import {styles} from '../../../../themes';
import ASubHeader from '../../../../components/common/ASubHeader';
import SongCard from '../../../../components/commonCards/SongCard';

const SongsNotification = () => {
  const renderSongNotification = ({item, index}) => (
    <SongCard item={item} index={index} />
  );

  const renderSectionHeader = ({section: {title}}) => (
    <ASubHeader
      title={title}
      textType="b18"
      style={localStyles.sectionHeaderStyle}
    />
  );

  return (
    <View>
      <SectionList
        sections={NotificationSongs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderSongNotification}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.pt15}
      />
    </View>
  );
};

export default SongsNotification;

const localStyles = StyleSheet.create({
  sectionHeaderStyle: {
    ...styles.mv5,
  },
});
