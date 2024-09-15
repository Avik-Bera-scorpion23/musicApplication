// library imports
import React from 'react';

// local imports
import TopSearchList from './ResultLists/TopSearchList';
import SongSearchList from './ResultLists/SongSearchList';
import ArtistSearchList from './ResultLists/ArtistSearchList';
import AlbumSearchList from './ResultLists/AlbumSearchList';
import PodcastSearchList from './ResultLists/PodcastSearchList';
import PLaylistSearchList from './ResultLists/PlaylistSearchList';
import ProfileSearchList from './ResultLists/ProfileSearchList';

const CommonSearchList = ({currentCategory}) => {
  switch (currentCategory.id) {
    case 1:
      return <TopSearchList />;
    case 2:
      return <SongSearchList />;
    case 3:
      return <ArtistSearchList />;
    case 4:
      return <AlbumSearchList />;
    case 5:
      return <PodcastSearchList />;
    case 6:
      return <PLaylistSearchList />;
    case 7:
      return <ProfileSearchList />;
  }
};

export default CommonSearchList;
