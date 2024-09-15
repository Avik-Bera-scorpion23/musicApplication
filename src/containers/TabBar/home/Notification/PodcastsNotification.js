import {StyleSheet, SectionList, View} from 'react-native';
import React from 'react';

// Local imports
import {NotificationPodcasts} from '../../../../api/constant';
import {styles} from '../../../../themes';
import ASubHeader from '../../../../components/common/ASubHeader';
import PodcastEpisodeCard from '../../../../components/commonCards/PodcastEpisodeCard';

const PodcastsNotification = () => {
  const renderPodcastNotification = ({item, index}) => (
    <PodcastEpisodeCard item={item} index={index} />
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
        sections={NotificationPodcasts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderPodcastNotification}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.pt15}
      />
    </View>
  );
};

export default PodcastsNotification;

const localStyles = StyleSheet.create({
  sectionHeaderStyle: {
    ...styles.mv5,
  },
});
