import audio from '../assets/audio';
import images from '../assets/images';
import strings from '../i18n/strings';
import {StackNav} from '../navigation/NavigationKeys';

const renderChips = [
  'Action',
  'Drama',
  'Comedy',
  'Ecchi',
  'Adventure',
  'Mecha',
  'Romance',
  'Fantasy',
  'Horror',
  'Mystery',
  'Psychological',
  'Sci-Fi',
  'Slice of Life',
  'Sports',
  'Thriller',
  'Supernatural',
  'Historical',
  'Music',
  'Game',
  'Harem',
];

const FilterData = [
  {
    title: 'Sort',
    data: ['Popularity', 'Latest Release', 'Rating'],
  },
  {
    title: 'Categories',
    data: ['Episodes', 'Movies', 'OVA', 'Specials'],
  },
  {
    title: 'Region',
    data: ['All', 'Asia', 'Japanese', 'Korean', 'China', 'Thailand'],
  },
  {
    title: 'Genre',
    data: [
      'All',
      'Action',
      'Drama',
      'Comedy',
      'Mystery',
      'Adventure',
      'Romance',
    ],

    title: 'Release Year',
    data: ['All', '2020', '2019'],
  },
];

const ProfileSetting = [
  {
    id: 1,
    title: strings.profile,
    icon: 'person-outline',
    route: StackNav.ProfileDetail,
    header: strings.profile,
  },
  {
    id: 2,
    title: strings.notification,
    icon: 'notifications-outline',
    route: StackNav.NotificationSetting,
  },
  {
    id: 3,
    title: strings.audioAndVideo,
    icon: 'mic-outline',
    route: StackNav.AudioAndVideo,
  },
  {
    id: 4,
    title: strings.playback,
    icon: 'play-outline',
    route: StackNav.Playback,
  },
  {
    id: 7,
    title: strings.dataSaverAndStorage,
    icon: 'server-outline',
    route: StackNav.DataSaverAndStorage,
  },
  {
    id: 8,
    title: strings.security,
    icon: 'information-circle-outline',
    route: StackNav.Security,
  },
  {
    id: 5,
    title: strings.language,
    icon: 'options-outline',
    value: 'English(US)',
    route: StackNav.Language,
  },
  {
    id: 6,
    title: strings.darkMode,
    icon: 'contrast-outline',
    rightIcon: 'rightIcon',
  },
];

const videoQuality = [
  {label: '1080p', value: '1080p'},
  {label: '720p', value: '720p'},
  {label: '480p', value: '480p'},
  {label: '240p', value: '240p'},
  {label: '144p', value: '144p'},
];

const languageData = [
  {
    title: 'Suggested',
    data: [{lnName: 'English(US)'}, {lnName: 'English(UK)'}],
  },
  {
    title: 'Language',
    data: [
      {
        lnName: 'English',
      },
      {
        lnName: 'Spanish',
      },
      {
        lnName: 'French',
      },
      {
        lnName: 'German',
      },
      {
        lnName: 'Italian',
      },
      {
        lnName: 'Portuguese',
      },
      {
        lnName: 'Russian',
      },
      {
        lnName: 'Turkish',
      },
      {
        lnName: 'Chinese',
      },
      {
        lnName: 'Japanese',
      },
      {
        lnName: 'Korean',
      },
      {
        lnName: 'Arabic',
      },
      {
        lnName: 'Hindi',
      },
      {
        lnName: 'Indonesian',
      },
      {
        lnName: 'Malay',
      },
      {
        lnName: 'Thai',
      },
    ],
  },
];

const trendingMusic = [
  {
    id: 1,
    songTitle: 'Without You - The Kid LAROI',
    image: images.trending1,
    singer: 'Beyonce',
    audio_url: audio.audio1,
    length: '03:58',
  },
  {
    id: 2,
    songTitle: 'Save Your Tears The Weeknd & Ari',
    image: images.trending2,
    singer: 'Conan Gray',
    audio_url: audio.audio2,
    length: '03:58',
  },
  {
    id: 3,
    songTitle: 'Shades of Love - Ania Szarmach',
    image: images.trending3,
    singer: 'Warren Hue',
    audio_url: audio.audio3,
    length: '03:58',
  },
];
const moreTrendingMusic = [
  {
    id: 4,
    songTitle: 'Save Your Tears The Weeknd & Ariana Grande',
    image: images.trending4,
    singer: 'Beyonce',
    audio_url: audio.audio4,
    length: '03:58',
  },
  {
    id: 5,
    songTitle: 'Kiss Me More - Doja Cat Featuring SZA',
    image: images.trending5,
    singer: 'Conan Gray',
    audio_url: audio.audio1,
    length: '03:58',
  },
  {
    id: 6,
    songTitle: 'Forever After All - Luke Combs',
    image: images.trending6,
    singer: 'Warren Hue',
    audio_url: audio.audio2,
    length: '03:58',
  },
];
const Artist = [
  {
    id: 1,
    name: 'Ariana Grande',
    image: images.artist2,
  },
  {
    id: 2,
    name: 'The Weeknd',
    image: images.artist1,
  },
  {
    id: 3,
    name: 'Acidrap',
    image: images.artist3,
  },
];
const moreArtists = [
  {
    id: 4,
    name: 'Ryan Jones',
    image: images.artist4,
  },
  {
    id: 5,
    name: 'Jamie Gray',
    image: images.artist5,
  },
  {
    id: 6,
    name: 'Troye Sivan',
    image: images.artist6,
  },
  {
    id: 7,
    name: 'BABY METAL',
    image: images.artist7,
  },
  {
    id: 8,
    name: 'Ariana Grande',
    image: images.artist8,
  },
];
const Charts = [
  {
    id: 1,
    type: 'TOP 100',
    region: 'Global',
    title: 'TOP 100 - Global',
    image: images.gradient1,
  },
  {
    id: 2,
    type: 'TOP 100',
    region: 'United States',
    title: 'TOP 100 - United States',
    image: images.gradient2,
  },
  {
    id: 3,
    type: 'TOP HITS',
    region: 'Indonesia',
    title: 'TOP HITS - Indonesia',
    image: images.gradient3,
  },
];

const NotificationSongs = [
  {
    id: 1,
    title: strings.newMusicReleaseToday,
    data: [
      {
        id: 1,
        image: images.notification1,
        type: 'Album',
        singer: 'Beyonce',
        title: strings.today, // Set to section's title
        songTitle: 'BREAK MY SOUL',
        length: '04:36',
      },
      {
        id: 2,
        image: images.notification2,
        type: 'Single',
        singer: 'Conan Gray',
        title: strings.today, // Set to section's title
        songTitle: 'Disaster',
        length: '03:58',
      },
      {
        id: 3,
        image: images.notification3,
        type: 'Single',
        singer: 'Warren Hue',
        title: strings.today, // Set to section's title
        songTitle: 'HANDSOME',
        length: '04:45',
      },
      // Add more items to the list if needed
    ],
  },
  {
    id: 2,
    title: strings.yesterday,
    data: [
      {
        id: 1,
        image: images.notification4,
        type: 'Single',
        singer: 'Imagine Dragons',
        title: strings.yesterday, // Set to section's title
        songTitle: 'Sharks',
        length: '05:23',
      },
      {
        id: 2,
        image: images.notification5,
        type: 'Album',
        singer: 'Romantic Echoes',
        title: strings.yesterday, // Set to section's title
        songTitle: 'Fly Me To The Sun',
        length: '04:20',
      },
      {
        id: 3,
        image: images.notification6,
        type: 'Single',
        singer: 'Sunwich',
        title: strings.yesterday, // Set to section's title
        songTitle: 'The Bended Man',
        length: '03:48',
      },
      {
        id: 4,
        image: images.notification7,
        type: 'Single',
        singer: 'Alexander 23',
        title: strings.yesterday, // Set to section's title
        songTitle: 'Somebody’s Nobody',
        length: '03:57',
      },
      // Add more items to the list if needed
    ],
  },
  {
    id: 3,
    title: strings.older,
    data: [
      {
        id: 1,
        image: images.notification3,
        type: 'Playlist',
        singer: 'Ed Sheeran',
        title: strings.older, // Set to section's title
        songTitle: 'FEEL THE MOMENT',
        length: '5:10',
      },
      // Add more items to the list if needed
    ],
  },
];

const NotificationPodcasts = [
  {
    id: 1,
    title: strings.newPodcastReleaseToday,
    data: [
      {
        id: 1,
        podcastNumber: 837,
        image: images.podcast1,
        guest: 'Tristan Harris',
        host: 'Apple Talk',
        title:
          '837: Tristan Harris | Exploring the Impact of Technology on Society',
        podcastTitle: 'Exploring the Impact of Technology on Society',
        length: '45:18',
        is_liked: true,
        is_downloaded: false,
        is_added_to_playlist: true,
      },
      {
        id: 2,
        podcastNumber: 593,
        image: images.podcast2,
        guest: 'Dallas Taylor',
        host: 'What a Day',
        title: '593: Dallas Taylor | The Art of Sound Design and Storytelling',
        podcastTitle: 'The Art of Sound Design and Storytelling',
        length: '47:55',
        is_liked: false,
        is_downloaded: true,
        is_added_to_playlist: false,
      },
      {
        id: 3,
        podcastNumber: 690,
        image: images.podcast3,
        guest: 'Jane McGonigal',
        host: 'The Jordan Harbinger Show',
        title: '690: Jane McGonigal | Building Resilience Through Gamification',
        podcastTitle: 'Building Resilience Through Gamification',
        length: '42:30',
        is_liked: true,
        is_downloaded: true,
        is_added_to_playlist: false,
      },
      // Add more podcast episodes to the list if needed
    ],
  },
  {
    id: 2,
    title: strings.yesterday,
    data: [
      {
        id: 1,
        podcastNumber: 621,
        image: images.podcast4,
        guest: 'Reid Hoffman',
        host: 'Invest Like The Best',
        title: '621 : Reid Hoffman | Navigating Entrepreneurial Challenges',
        podcastTitle: 'Navigating Entrepreneurial Challenges in Modern Times',
        length: '42:55',
        is_liked: false,
        is_downloaded: false,
        is_added_to_playlist: true,
      },
      {
        id: 2,
        podcastNumber: 687,
        image: images.podcast5,
        guest: 'Amy Webb',
        host: 'SaaS & Scotch',
        title:
          '687: Amy Webb | Forecasting Technological Trends for the Future',
        podcastTitle: 'Forecasting Technological Trends for the Future',
        length: '44:37',
        is_liked: true,
        is_downloaded: false,
        is_added_to_playlist: true,
      },
      {
        id: 3,
        podcastNumber: 450,
        image: images.podcast5,
        guest: 'Bill Sullivan',
        host: 'Inspirational Minds',
        title:
          '450: Bill Sullivan | The Intersection of Science and Philosophy',
        podcastTitle: 'The Intersection of Science and Philosophy',
        length: '46:22',
        is_liked: false,
        is_downloaded: true,
        is_added_to_playlist: false,
      },
      // Add more podcast episodes to the list if needed
    ],
  },
  {
    id: 3,
    title: strings.older,
    data: [
      {
        id: 1,
        podcastNumber: 230,
        image: images.podcast1,
        guest: 'Mike Rowe',
        host: 'Tech Talks Radio',
        title: strings.older,
        podcastTitle:
          'Uncovering Hidden Gems: A Journey into Historical Mysteries',
        length: '50:29',
        is_liked: true,
        is_downloaded: true,
        is_added_to_playlist: true,
      },
      // Add more podcast episodes to the list if needed
    ],
  },
];

const TopCharts = [
  {
    id: 1,
    title: strings.weeklyAlbumChart,
    data: [
      {
        id: 1,
        type: 'Top Albums',
        region: 'Global',
        title: 'Top Albums Global',
        image: images.gradient1,
        showOnlyTitle: true,
      },
      {
        id: 2,
        type: 'Top Albums',
        region: 'United States',
        title: 'Top Albums United States',
        showOnlyTitle: true,
        image: images.gradient4,
      },
    ],
  },
  {
    id: 2,
    title: strings.weeklySongChart,
    data: [
      {
        id: 1,
        type: 'Top Songs',
        region: 'Global',
        title: 'Top Albums Global',
        showOnlyTitle: true,
        image: images.greenGradient2,
      },
      {
        id: 2,
        type: 'Top Songs',
        region: 'United States',
        title: 'Top Songs United States',
        showOnlyTitle: true,
        image: images.orangeGradient2,
      },
    ],
  },
  {
    id: 1,
    title: strings.dailyViralChart,
    data: [
      {
        id: 1,
        type: 'Viral 50',
        region: 'Global',
        title: 'Viral 50 Global',
        showOnlyTitle: false,
        image: images.blueGradient2,
      },
      {
        id: 2,
        type: 'Viral 50',
        region: 'United States',
        title: 'Viral 50 United States',
        showOnlyTitle: false,
        image: images.redGradient2,
      },
    ],
  },
];

const NewReleases = [
  {
    id: 1,
    title: strings.bestNewRelease,
    data: [
      {
        id: 1,
        songTitle: 'Positions',
        singer: 'Ariana Grande',
        image: images.artist2,
      },
      {
        id: 1,
        songTitle: 'Motomami',
        singer: 'The Weeknd',
        image: images.artist1,
      },
    ],
  },
  {
    id: 2,
    title: strings.newAlbumsSingle,
    data: [
      {
        id: 1,
        songTitle: 'Pain',
        singer: 'Ryan Jones',
        image: images.artist4,
      },
      {
        id: 2,
        songTitle: 'Shades of Love',
        singer: 'Ania Szarmach',
        image: images.trending2,
      },
      {
        id: 3,
        songTitle: 'Lorem Ipsum Dolor Sit Amet tempor',
        singer: 'Artists Name',
        image: images.trending3,
      },
      {
        id: 4,
        songTitle: 'Lorem Ipsum Dolor Sit Amet tempor',
        singer: 'Artists Name',
        image: images.artist1,
      },
    ],
  },
];

const podcast = [
  {
    id: 1,
    podcastNumber: 837,
    image: images.podcast3,
    guest: 'Tristan Harris',
    host: 'Apple Talk',
    podcastTitle: 'Exploring the Impact of Technology on Society',
    title:
      '837: Tristan Harris | Exploring the Impact of Technology on Society ',
    length: '45:18',
    is_liked: true,
    is_downloaded: false,
    is_added_to_playlist: true,
  },
  {
    id: 2,
    podcastNumber: 593,
    image: images.podcast5,
    guest: 'Dallas Taylor',
    host: 'What a Day',
    title: '593: Dallas Taylor | The Art of Sound Design and Storytelling',
    podcastTitle: 'The Art of Sound Design and Storytelling',
    length: '47:55',
    is_liked: false,
    is_downloaded: true,
    is_added_to_playlist: false,
  },
  {
    id: 3,
    podcastNumber: 690,
    image: images.podcast6,
    guest: 'Jane McGonigal',
    host: 'The Jordan Harbinger Show',
    title: '690: Jane McGonigal | Building Resilience Through Gamification',
    podcastTitle: 'Building Resilience Through Gamification',
    length: '42:30',
    is_liked: true,
    is_downloaded: true,
    is_added_to_playlist: false,
  },
];

const morePodcast = [
  {
    id: 1,
    podcastNumber: 691,
    image: images.podcast14,
    guest: 'Shaquille O’Neal',
    host: 'Apple Talk',
    podcastTitle: 'Circling Back on Flat Earth Theory',
    title: '691: Shaquille O’Neal | Circling Back on Flat Earth Theory ',
    length: '48:26',
    is_liked: true,
    is_downloaded: false,
    is_added_to_playlist: true,
  },
  {
    id: 2,
    podcastNumber: 692,
    image: images.podcast15,
    guest: 'Jane McGonigal',
    host: 'What a Day',
    title: '692: Jane McGonigal | How to see the future and be ready for it',
    podcastTitle: 'How to see the future and be ready for it',
    length: '47:55',
    is_liked: false,
    is_downloaded: true,
    is_added_to_playlist: false,
  },
];

const podcastArtist = [
  {
    id: 1,
    title: 'Dr. Death',
    image: images.podcast7,
    host: 'Wondery',
  },
  {
    id: 2,
    title: 'Apple Talk',
    image: images.podcast1,
    host: 'Georgia Dow & Rene Ritchie',
  },
  {
    id: 3,
    title: 'What a Day',
    image: images.podcast2,
    host: "Tre'vell Anderson",
  },
];

const podcastCategory = [
  {
    id: 1,
    title: 'Buisness',
    image: images.podcast8,
    data: TopCharts,
    backgroundGradient: images.purpleGradient,
  },
  {
    id: 1,
    title: 'Politics',
    image: images.podcast9,
    data: TopCharts,
    backgroundGradient: images.redGradient,
  },
  {
    id: 1,
    title: 'Music',
    image: images.podcast10,
    data: TopCharts,
    backgroundGradient: images.blueGradient,
  },
  {
    id: 1,
    title: 'Comedy',
    image: images.podcast11,
    data: TopCharts,
    backgroundGradient: images.orangeGradient,
  },
];

const MusicList = [
  {
    id: 1,
    isPlaying: false,
    songTitle: 'HANDSOME',
    singer: 'Warren Hue',
    length: '03:58',
    image: images.notification5,
    audio_url: audio.audio4,
  },
  {
    id: 2,
    isPlaying: false,
    songTitle: 'Sharks',
    singer: 'Imagine Dragons',
    length: '03:58',
    image: images.song3,
    audio_url: audio.audio5,
  },
  {
    id: 3,
    isPlaying: false,
    songTitle: 'Somebody’s Nobody',
    singer: 'Alexander 23',
    length: '03:58',
    image: images.notification3,
    audio_url: audio.audio6,
  },
  {
    id: 4,
    isPlaying: false,
    songTitle: 'BREAK MY SOUL',
    singer: 'Beyonce',
    length: '03:58',
    image: images.notification6,
    audio_url: audio.audio7,
  },
  {
    id: 5,
    isPlaying: false,
    songTitle: 'Disaster',
    singer: 'Conan Gray',
    length: '03:58',
    image: images.notification2,
    audio_url: audio.audio8,
  },
  {
    id: 6,
    isPlaying: false,
    songTitle: 'The Bended Man',
    singer: 'Sunwich',
    length: '03:58',
    image: images.song2,
    audio_url: audio.audio9,
  },
  {
    id: 7,
    isPlaying: false,
    songTitle: 'Fly Me To The Sun',
    singer: 'Romantic Echoes',
    length: '03:58',
    image: images.song1,
    audio_url: audio.audio10,
  },
];

const recentSearch = [
  {id: 1, query: 'Ariana Grande'},
  {id: 2, query: 'Morgan Wallen'},
  {id: 3, query: 'Justin Bieber'},
  {id: 4, query: 'Drake'},
  {id: 5, query: 'Olivia Rodrigo'},
  {id: 6, query: 'The Weeknd'},
  {id: 7, query: 'Taylor Swift'},
  {id: 8, query: 'Juice Wrld'},
  // Add more search items as needed
];

const searchCategory = [
  {id: 1, name: 'Top', isSelected: false},
  {id: 2, name: 'Songs', isSelected: false},
  {id: 3, name: 'Artists', isSelected: false},
  {id: 4, name: 'Albums', isSelected: false},
  {id: 5, name: 'Podcasts', isSelected: false},
  {id: 6, name: 'Playlists', isSelected: false},
  {id: 7, name: 'Profiles', isSelected: false},
  // Add more categories as needed
];

const topSearch = [
  {
    id: 1,
    category: 'Song',
    detail: {
      id: 1,
      isPlaying: false,
      songTitle: 'Firework',
      singer: 'Katy Perry',
      length: '03:58',
      image: images.top4,
      audio_url: audio.audio1,
    },
  },
  {
    id: 2,
    category: 'Artist',
    detail: {
      id: 1,
      name: 'Katy Perry',
      image: images.top5,
      isFollowing: false,
    },
  },
  {
    id: 3,
    category: 'Song',
    detail: {
      id: 2,
      isPlaying: false,
      songTitle: 'Firework - Accoustic',
      singer: 'The Mayries',
      length: '03:58',
      image: images.top2,
      audio_url: audio.audio2,
    },
  },
  {
    id: 4,
    category: 'Song',
    detail: {
      id: 3,
      isPlaying: false,
      songTitle: 'Last Friday Night',
      singer: 'Katy Perry',
      length: '03:58',
      image: images.top6,
      audio_url: audio.audio3,
    },
  },
  {
    id: 5,
    category: 'Artist',
    detail: {
      id: 2,
      name: 'Clean Bandit',
      image: images.trending1,
      isFollowing: true,
    },
  },
  {
    id: 6,
    category: 'Song',
    detail: {
      id: 4,
      isPlaying: false,
      songTitle: 'Firework Cover',
      singer: 'The Sappear',
      length: '03:58',
      image: images.top1,
      audio_url: audio.audio4,
    },
  },
  {
    id: 7,
    category: 'Song',
    detail: {
      id: 5,
      isPlaying: false,
      songTitle: 'Teenage Dream',
      singer: 'Katy Perry',
      length: '03:58',
      image: images.song1,
      audio_url: audio.audio1,
    },
  },
  {
    id: 8,
    category: 'Song',
    detail: {
      id: 6,
      isPlaying: false,
      songTitle: 'Roar',
      singer: 'Katy Perry',
      length: '03:58',
      image: images.top3,
      audio_url: audio.audio1,
    },
  },
];

const songSearch = [
  {
    id: 1,
    category: 'Song',
    detail: {
      id: 1,
      isPlaying: false,
      songTitle: 'Starboy',
      singer: 'The Weeknd, Daft Punk',
      length: '03:58',
      image: images.artist1,
      audio_url: audio.audio1,
    },
  },
  {
    id: 2,
    category: 'Song',
    detail: {
      id: 2,
      isPlaying: false,
      songTitle: 'Starboy Speed Up',
      singer: 'Just Lowkey',
      length: '03:58',
      image: images.song6,
      audio_url: audio.audio2,
    },
  },
  {
    id: 3,
    category: 'Song',
    detail: {
      id: 3,
      isPlaying: false,
      songTitle: 'Die For You',
      singer: 'The Weeknd',
      length: '03:58',
      image: images.song5,
      audio_url: audio.audio3,
    },
  },
  {
    id: 4,
    category: 'Song',
    detail: {
      id: 4,
      isPlaying: false,
      songTitle: 'Blinding Lights',
      singer: 'The Weeknd',
      length: '03:58',
      image: images.top6,
      audio_url: audio.audio4,
    },
  },
  {
    id: 5,
    category: 'Song',
    detail: {
      id: 5,
      isPlaying: false,
      songTitle: 'The Hills',
      singer: 'The Weeknd',
      length: '03:58',
      image: images.song4,
      audio_url: audio.audio1,
    },
  },
  {
    id: 6,
    category: 'Song',
    detail: {
      id: 6,
      isPlaying: false,
      songTitle: 'I Feel It Coming',
      singer: 'The Weeknd, Daft Punk',
      length: '03:58',
      image: images.song7,
      audio_url: audio.audio2,
    },
  },
  {
    id: 7,
    category: 'Song',
    detail: {
      id: 6,
      isPlaying: false,
      songTitle: 'Call Out My Name',
      singer: 'The Weeknd',
      image: images.artist8,
      length: '03:58',
      audio_url: audio.audio3,
    },
  },
  {
    id: 8,
    category: 'Song',
    detail: {
      id: 6,
      isPlaying: false,
      songTitle: 'Save Your Tears',
      singer: 'The Weeknd',
      image: images.artist7,
      length: '03:58',
      audio_url: audio.audio4,
    },
  },
];

const artistSearch = [
  {
    id: 1,
    category: 'Artist',
    detail: {
      id: 2,
      name: 'Ariana Grande',
      image: images.artist2,
      isFollowing: false,
    },
  },
  {
    id: 2,
    category: 'Artist',
    detail: {
      id: 1,
      name: 'Katy Perry',
      image: images.top5,
      isFollowing: true,
    },
  },
  {
    id: 3,
    category: 'Artist',
    detail: {
      id: 4,
      name: 'The Weeknd',
      image: images.artist1,
      isFollowing: false,
    },
  },
  {
    id: 4,
    category: 'Artist',
    detail: {
      id: 5,
      name: 'Acidrap',
      image: images.artist3,
      isFollowing: true,
    },
  },
  {
    id: 5,
    category: 'Artist',
    detail: {
      id: 2,
      name: 'Ryan Jones',
      image: images.artist4,
      isFollowing: false,
    },
  },
  {
    id: 6,
    category: 'Artist',
    detail: {
      id: 7,
      name: 'Troye Sivan',
      image: images.artist6,
      isFollowing: false,
    },
  },
  {
    id: 7,
    category: 'Artist',
    detail: {
      id: 8,
      name: 'James Gray',
      image: images.artist5,
      isFollowing: true,
    },
  },
  {
    id: 8,
    category: 'Artist',
    detail: {
      id: 9,
      name: 'Clean Bandit',
      image: images.trending1,
      isFollowing: false,
    },
  },
];

const podcastEpisodeSearch = [
  {
    id: 1,
    podcastNumber: 688,
    image: images.podcast13,
    guest: 'A-Rod',
    host: 'Twenty Thousand Hertz',
    podcastTitle: 'Still Having a Ball After All',
    title: '688: A-Rod | Still Having a Ball After All ',
    length: '49:26',
    is_liked: false,
    is_downloaded: false,
    is_added_to_playlist: false,
  },
  {
    id: 2,
    podcastNumber: 837,
    image: images.podcast12,
    guest: 'Amy Webb',
    host: 'Hidden Brain',
    title: '837: Amy Webb | Changing Lives with Synthetic Biology',
    podcastTitle: 'Changing Lives with Synthetic Biology',
    length: '54:48',
    is_liked: false,
    is_downloaded: false,
    is_added_to_playlist: false,
  },
  {
    id: 3,
    podcastNumber: 593,
    image: images.podcast5,
    guest: 'Chris Voss',
    host: 'SaaS & Scotch',
    title: '690: Chris Voss | Hostage Negotiation Tactics for Ever...',
    podcastTitle: 'Hostage Negotiation Tactics for Ever..',
    length: '43:37',
    is_liked: false,
    is_downloaded: false,
    is_added_to_playlist: false,
  },
];
const podcastSearch = [
  {
    id: 1,
    title: 'The Jordan Harbinger Show',
    image: images.podcast3,
    host: 'Jordan Harbinger',
  },
  {
    id: 2,
    title: 'Apple Talk',
    image: images.podcast1,
    host: 'Georgia Dow & Rene Ritchie',
  },
  {
    id: 3,
    title: 'Dr. Death',
    image: images.podcast7,
    host: 'Wondery',
  },
];

const albumSearch = [
  {
    id: 1,
    category: 'Album',
    detail: {
      id: 1,
      image: images.artist8,
      albumTitle: 'Sweetener',
      singer: 'Ariana Grande',
      releaseYear: 2018,
    },
  },
  {
    id: 2,
    category: 'Album',
    detail: {
      id: 2,
      image: images.artist2,
      albumTitle: 'Dangerous Woman',
      singer: 'Ariana Grande',
      releaseYear: 2016,
    },
  },
  {
    id: 3,
    category: 'Album',
    detail: {
      id: 3,
      image: images.album3,
      albumTitle: 'Yours Truly',
      singer: 'Ariana Grande',
      releaseYear: 2013,
    },
  },
  {
    id: 4,
    category: 'Album',
    detail: {
      id: 4,
      image: images.album2,
      albumTitle: 'My Everything',
      singer: 'Ariana Grande',
      releaseYear: 2014,
    },
  },
  {
    id: 5,
    category: 'Album',
    detail: {
      id: 5,
      image: images.album1,
      albumTitle: 'Dangerous Woman',
      singer: 'Ariana Grande',
      releaseYear: 2015,
    },
  },
  {
    id: 6,
    category: 'Album',
    detail: {
      id: 6,
      image: images.album4,
      albumTitle: 'Sweetener',
      singer: 'Ariana Grande',
      releaseYear: 2015,
    },
  },
];

const playlistSearch = [
  {
    id: 1,
    category: 'Playlist',
    detail: {
      id: 1,
      image: images.artist8,
      playlistTitle: 'Ariana Grande - All Songs ',
      singer: 'Ariana Grande',
      releaseYear: 2018,
    },
  },
  {
    id: 2,
    category: 'Playlist',
    detail: {
      id: 2,
      image: images.playList1,
      playlistTitle: 'Ariana Grande - Top Greatest Hits',
      singer: 'Ariana Grande',
      releaseYear: 2016,
    },
  },
  {
    id: 3,
    category: 'Playlist',
    detail: {
      id: 3,
      image: images.album4,
      playlistTitle: 'Ariana Grande - Most Listened Songs',
      singer: 'Ariana Grande',
      releaseYear: 2013,
    },
  },
  {
    id: 4,
    category: 'Playlist',
    detail: {
      id: 4,
      image: images.album2,
      playlistTitle: 'Ariana Grande - Complete Albums',
      singer: 'Ariana Grande',
      releaseYear: 2014,
    },
  },
  {
    id: 5,
    category: 'Playlist',
    detail: {
      id: 5,
      image: images.album1,
      playlistTitle: 'Ariana Grande - Most Popular Songs',
      singer: 'Ariana Grande',
      releaseYear: 2015,
    },
  },
  {
    id: 6,
    category: 'Playlist',
    detail: {
      id: 6,
      image: images.artist2,
      playlistTitle: 'Ariana Grande - Best of the Best',
      singer: 'Ariana Grande',
      releaseYear: 2015,
    },
  },
];

const profileSearch = [
  {
    id: 1,
    category: 'Profile',
    detail: {
      id: 1,
      name: 'Jenny Wilson',
      followers: '9,489',
      image: images.profile1,
      isFollowing: true,
      following: '2,475',
    },
  },
  {
    id: 1,
    category: 'Profile',
    detail: {
      id: 2,
      name: 'Jenny Foose',
      followers: '8,811',
      image: images.profile2,
      isFollowing: false,
      following: '1,475',
    },
  },
  {
    id: 1,
    category: 'Profile',
    detail: {
      id: 3,
      name: 'Jenny Hanlin',
      followers: '3,933',
      image: images.profile3,
      isFollowing: true,
      following: '1,475',
    },
  },
  {
    id: 1,
    category: 'Profile',
    detail: {
      id: 4,
      name: 'Jenny Winkles',
      followers: '4,846',
      image: images.profile4,
      isFollowing: false,
      following: '1,475',
    },
  },
  {
    id: 1,
    category: 'Profile',
    detail: {
      id: 5,
      name: 'Jenny Ballentine',
      followers: '1,439',
      image: images.profile5,
      isFollowing: true,
      following: '1,475',
    },
  },
  {
    id: 1,
    category: 'Profile',
    detail: {
      id: 6,
      name: 'Jenny Wigington',
      followers: '2,798',
      image: images.profile6,
      isFollowing: false,
      following: '1,475',
    },
  },
  {
    id: 1,
    category: 'Profile',
    detail: {
      id: 7,
      name: 'Jenny Vandyne',
      followers: '7,791',
      image: images.profile7,
      isFollowing: false,
      following: '1,475',
    },
  },
];

const followers = [
  {
    id: 1,
    name: 'GeneralBase',
    followers: '8,829',
    image: images.profile1,
    isFollowing: false,
    following: '2,475',
  },
  {
    id: 2,
    name: 'EssenceVital',
    followers: '4,152',
    image: images.trending6,
    isFollowing: false,
    following: '1,475',
  },
  {
    id: 3,
    name: 'MafiaContent',
    followers: '4,600',
    image: images.notification2,
    isFollowing: true,
    following: '1,475',
  },
  {
    id: 4,
    name: 'ReportDown',
    followers: '9,359',
    image: images.follower1,
    isFollowing: false,
    following: '9,359',
  },
  {
    id: 5,
    name: 'CrawlerSporty',
    followers: '5,560',
    image: images.notification6,
    isFollowing: true,
    following: '5,560',
  },
  {
    id: 6,
    name: 'CandyWisdom',
    followers: '9,462',
    image: images.follower2,
    isFollowing: false,
    following: '9,462',
  },
  {
    id: 7,
    name: 'AmericaWarm',
    followers: '1,148',
    image: images.trending5,
    isFollowing: false,
    following: '1,148',
  },
];

const historyData = [
  {
    id: 1,
    category: 'Podcast',
    detail: {
      id: 2,
      podcastNumber: 687,
      image: images.podcast5,
      guest: 'Amy Webb',
      host: 'SaaS & Scotch',
      title: '687: Amy Webb | Forecasting Technological Trends for the Future',
      podcastTitle: 'Forecasting Technological Trends for the Future',
      length: '44:37',
      is_liked: true,
      is_downloaded: false,
      is_added_to_playlist: true,
    },
  },
  {
    id: 2,
    category: 'Artist',
    detail: {
      id: 2,
      title: 'Apple Talk',
      image: images.podcast1,
      host: 'Georgia Dow & Rene Ritchie',
    },
  },
  {
    id: 3,
    category: 'Song',
    detail: {
      id: 1,
      image: images.trending2,
      title: 'Shades of Love - Ania Szarmach',
      singer: 'Ania Szarmach',
      releaseYear: 2018,
    },
  },
];

const historySong = [
  {
    id: 1,
    isPlaying: false,
    songTitle: 'Somebody’s Nobody',
    singer: 'Alexander 23',
    length: '03:58',
    image: images.song9,
    audio_url: audio.audio1,
  },
  {
    id: 2,
    isPlaying: false,
    songTitle: 'Sharks',
    singer: 'Imagine Dragons',
    length: '04:12',
    image: images.top6,
    audio_url: audio.audio2,
  },
  {
    id: 3,
    isPlaying: false,
    songTitle: 'Disaster',
    singer: 'Conan Gray',
    length: '03:45',
    image: images.song9,
    audio_url: audio.audio3,
  },
  {
    id: 4,
    isPlaying: false,
    songTitle: 'HANDSOME',
    singer: 'Warren Hue',
    length: '03:58',
    image: images.top2,
    audio_url: audio.audio4,
  },
  {
    id: 5,
    isPlaying: false,
    songTitle: 'God Is a Woman',
    singer: 'Ariana Grande',
    length: '03:45',
    image: images.artist2,
    audio_url: audio.audio1,
  },
  {
    id: 6,
    isPlaying: false,
    songTitle: 'BREAK MY SOUL',
    singer: 'Beyonce',
    length: '04:21',
    image: images.song10,
    audio_url: audio.audio2,
  },
  {
    id: 7,
    isPlaying: false,
    songTitle: 'The Bended Man',
    singer: 'Sunwich',
    length: '03:58',
    image: images.song2,
    audio_url: audio.audio3,
  },
  {
    id: 8,
    isPlaying: false,
    songTitle: 'The Light Is Coming',
    singer: 'Ariana Grande',
    length: '04:12',
    image: images.artist8,
    audio_url: audio.audio4,
  },
  {
    id: 9,
    isPlaying: false,
    songTitle: 'Fly Me To The Sun',
    singer: 'Romantic Echoes',
    length: '03:45',
    image: images.song1,
    audio_url: audio.audio1,
  },
];

const historyPodcast = [
  {
    id: 1,
    podcastNumber: 837,
    image: images.podcast1,
    guest: 'Tristan Harris',
    host: 'Apple Talk',
    title:
      '837: Tristan Harris | Exploring the Impact of Technology on Society',
    podcastTitle: 'Exploring the Impact of Technology on Society',
    length: '45:18',
    is_liked: true,
    is_downloaded: false,
    is_added_to_playlist: true,
  },
  {
    id: 2,
    podcastNumber: 593,
    image: images.podcast2,
    guest: 'Dallas Taylor',
    host: 'What a Day',
    title: '593: Dallas Taylor | The Art of Sound Design and Storytelling',
    podcastTitle: 'The Art of Sound Design and Storytelling',
    length: '47:55',
    is_liked: false,
    is_downloaded: true,
    is_added_to_playlist: false,
  },
  {
    id: 3,
    podcastNumber: 690,
    image: images.podcast3,
    guest: 'Jane McGonigal',
    host: 'The Jordan Harbinger Show',
    title: '690: Jane McGonigal | Building Resilience Through Gamification',
    podcastTitle: 'Building Resilience Through Gamification',
    length: '42:30',
    is_liked: true,
    is_downloaded: true,
    is_added_to_playlist: false,
  },
  {
    id: 4,
    podcastNumber: 621,
    image: images.podcast4,
    guest: 'Reid Hoffman',
    host: 'Invest Like The Best',
    title: '621 : Reid Hoffman | Navigating Entrepreneurial Challenges',
    podcastTitle: 'Navigating Entrepreneurial Challenges in Modern Times',
    length: '42:55',
    is_liked: false,
    is_downloaded: false,
    is_added_to_playlist: true,
  },
  {
    id: 5,
    podcastNumber: 687,
    image: images.podcast5,
    guest: 'Amy Webb',
    host: 'SaaS & Scotch',
    title: '687: Amy Webb | Forecasting Technological Trends for the Future',
    podcastTitle: 'Forecasting Technological Trends for the Future',
    length: '44:37',
    is_liked: true,
    is_downloaded: false,
    is_added_to_playlist: true,
  },
  {
    id: 6,
    podcastNumber: 450,
    image: images.podcast5,
    guest: 'Bill Sullivan',
    host: 'Inspirational Minds',
    title: '450: Bill Sullivan | The Intersection of Science and Philosophy',
    podcastTitle: 'The Intersection of Science and Philosophy',
    length: '46:22',
    is_liked: false,
    is_downloaded: true,
    is_added_to_playlist: false,
  },
  {
    id: 7,
    podcastNumber: 230,
    image: images.podcast1,
    guest: 'Mike Rowe',
    host: 'Tech Talks Radio',
    title: strings.older,
    podcastTitle: 'Uncovering Hidden Gems: A Journey into Historical Mysteries',
    length: '50:29',
    is_liked: true,
    is_downloaded: true,
    is_added_to_playlist: true,
  },
];

const playList = [
  {
    id: 1,
    title: 'My Favorite Pop Songs',
    numberOfSongs: 345,
    image: images.top2,
  },
  {
    id: 2,
    title: '90s Old Song',
    numberOfSongs: 127,
    image: images.playList5,
  },
  {
    id: 3,
    title: 'Legend Rock Song',
    numberOfSongs: 98,
    image: images.playList2,
  },
  {
    id: 4,
    title: 'My Favorite Acoustic Song',
    numberOfSongs: 163,
    image: images.playList3,
  },
  {
    id: 5,
    title: 'Memories of Love',
    numberOfSongs: 159,
    image: images.playList4,
  },
];

const categoryData = [
  {
    id: 1,
    title: 'Charts',
    image: images.artist2,
    data: TopCharts,
    backgroundGradient: images.greenGradient,
  },
  {
    id: 2,
    title: 'Podcasts',
    image: images.podcast3,
    data: NewReleases,
    backgroundGradient: images.purpleGradient,
  },
  {
    id: 3,
    title: 'New Releases',
    image: images.trending1,
    data: NewReleases,
    backgroundGradient: images.yellowGradient,
  },
  {
    id: 4,
    title: 'Only You',
    data: NewReleases,
    image: images.onlyYou,
    backgroundGradient: images.blueGradient,
  },
  {
    id: 5,
    title: 'Pop',
    data: NewReleases,
    image: images.pop,
    backgroundGradient: images.redGradient,
  },
  {
    id: 6,
    title: 'K-Pop',
    data: NewReleases,
    image: images.kPop,
    backgroundGradient: images.orangeGradient,
  },
  {
    id: 7,
    title: 'Rock',
    data: NewReleases,
    image: images.rock,
    backgroundGradient: images.tealGradient,
  },
  {
    id: 8,
    title: 'Hip-Hop',
    data: NewReleases,
    image: images.artist3,
    backgroundGradient: images.brownGradient,
  },
  {
    id: 9,
    title: 'Jazz',
    data: NewReleases,
    image: images.jazz,
    backgroundGradient: images.greyGradient,
  },
  {
    id: 10,
    title: 'Romance',
    data: NewReleases,
    image: images.artist8,
    backgroundGradient: images.cyanGradient,
  },
];

const userDetail = [
  {
    name: 'Dracel Steward',
    description: 'arianacooper | 24.5M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
  },
  {
    name: 'John Doe',
    description: 'johndoe | 10M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Jane Smith',
    description: 'janesmith | 5M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHVzZXIlMjBwcm9maWxlJTIwd2l0aCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Bob Johnson',
    description: 'bobjohnson | 2M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Sara Wilson',
    description: 'sarawilson | 1M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Tom Wilson',
    description: 'tomwilson | 500K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Alice Brown',
    description: 'alicebrown | 250K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Emily Davis',
    description: 'emilydavis | 100K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Mark Lee',
    description: 'marklee | 50K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Laura Lee',
    description: 'lauralee | 10K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
];

const OnBoardingSlide = [
  {
    text: 'We provide high quality products just for you',
    image: images.onBoarding,
  },
  {
    text: 'Your satisfaction is our number one priority',
    image: images.onBoarding,
  },
  {
    text: "Let's fulfill your daily needs with Evone right now!",
    image: images.onBoarding,
  },
];

const MoreLikeThis = [
  {
    id: 1,
    isPlaying: false,
    songTitle: 'Die For You',
    singer: 'The Weeknd',
    image: images.song5,
    length: '04:20',
    audio_url: audio.audio1,
  },
  {
    id: 2,
    isPlaying: false,
    songTitle: 'Blinding Lights',
    singer: 'The Weeknd',
    image: images.top6,
    length: '03:58',
    audio_url: audio.audio2,
  },
  {
    id: 5,
    isPlaying: false,
    songTitle: 'The Hills',
    singer: 'The Weeknd',
    image: images.song4,
    length: '04:20',
    audio_url: audio.audio3,
  },
];
const popularSongs = [
  {
    id: 1,
    isPlaying: false,
    songTitle: 'Side to Side',
    singer: 'Ariana Grande',
    image: images.artist8,
    length: '04:20',
    audio_url: audio.audio1,
  },
  {
    id: 2,
    isPlaying: false,
    songTitle: '7 Rings',
    singer: 'Ariana Grande',
    image: images.artist2,
    length: '03:58',
    audio_url: audio.audio2,
  },
  {
    id: 5,
    isPlaying: false,
    songTitle: 'Stuck With U',
    singer: 'Ariana Grande',
    image: images.artist8,
    length: '04:20',
    audio_url: audio.audio3,
  },
];

const podcastDataPoints = [
  {
    id: 1,
    text: 'The real-world experience Shaq endured preparing for a political race in 2020.',
  },
  {
    id: 2,
    text: 'How Shaq assembled what he calls The Panel to help manage not only his career but all his important life decisions — and how you can do the same.',
  },
  {
    id: 3,
    text: 'Why Shaq doesn’t consider himself a celebrity (and why that still isn’t a good reason to bug him in the middle of dinner).',
  },
  {
    id: 4,
    text: 'How Shaq manages his emotions so he stays non-reactive on and off the court.',
  },
  {
    id: 5,
    text: 'Does Shaq really believe in the Flat Earth Theory?',
  },
  {
    id: 6,
    text: 'And much more...view here --',
  },
];

const playlistSong = [
  {
    id: 1,
    isPlaying: false,
    songTitle: 'The Bended Man',
    singer: 'Sunwich',
    length: '03:58',
    image: images.song2,
    audio_url: audio.audio3,
  },
  {
    id: 2,
    isPlaying: false,
    songTitle: 'God Is a Woman',
    singer: 'Ariana Grande',
    length: '03:45',
    image: images.artist2,
    audio_url: audio.audio1,
  },
  {
    id: 3,
    isPlaying: false,
    songTitle: 'Somebody’s Nobody',
    singer: 'Alexander 23',
    length: '03:58',
    image: images.song9,
    audio_url: audio.audio1,
  },
  {
    id: 4,
    isPlaying: false,
    songTitle: 'HANDSOME',
    singer: 'Warren Hue',
    length: '03:58',
    image: images.top2,
    audio_url: audio.audio4,
  },
  {
    id: 5,
    isPlaying: false,
    songTitle: 'The Light Is Coming',
    singer: 'Ariana Grande',
    length: '04:12',
    image: images.artist8,
    audio_url: audio.audio4,
  },
  {
    id: 6,
    isPlaying: false,
    songTitle: 'Fly Me To The Sun',
    singer: 'Romantic Echoes',
    length: '03:45',
    image: images.song1,
    audio_url: audio.audio1,
  },
];

const notificationData = [
  {
    title: 'Recommended Music',
    desc: 'Push, Email',
  },
  {
    title: 'New Music',
    desc: 'Push',
  },
  {
    title: 'Playlist Updates',
    desc: 'Push, Email',
  },
  {
    title: 'Concert Notifications',
    desc: 'Push, Email',
  },
  {
    title: 'Artist Updates',
    desc: 'Push, Email',
  },
  {
    title: 'Product News',
    desc: 'Email',
  },
  {
    title: 'Hearme Offers',
    desc: 'Push, Email',
  },
  {
    title: 'New Episodes',
    desc: 'Push, Email',
  },
  {
    title: 'Payments & Subscriptions',
    desc: 'Push, Email',
  },
  {
    title: 'New Features',
    desc: 'Push',
  },
  {
    title: 'Security',
    desc: 'Push, Email',
  },
];

const playListDropdownData = [
  {
    id: 1,
    title: strings.public,
    value: 'public',
  },
  {
    id: 2,
    title: strings.private,
    value: 'private',
  },
];

const yourLikesPodcasts = [
  {
    id: 1,
    podcastNumber: 837,
    image: images.podcast1,
    guest: 'Tristan Harris',
    host: 'Apple Talk',
    title:
      '837: Tristan Harris | Exploring the Impact of Technology on Society',
    podcastTitle: 'Exploring the Impact of Technology on Society',
    length: '45:18',
    is_liked: true,
    is_downloaded: false,
    is_added_to_playlist: true,
  },
  {
    id: 2,
    podcastNumber: 593,
    image: images.podcast2,
    guest: 'Dallas Taylor',
    host: 'What a Day',
    title: '593: Dallas Taylor | The Art of Sound Design and Storytelling',
    podcastTitle: 'The Art of Sound Design and Storytelling',
    length: '47:55',
    is_liked: true,
    is_downloaded: true,
    is_added_to_playlist: false,
  },
  {
    id: 3,
    podcastNumber: 621,
    image: images.podcast4,
    guest: 'Reid Hoffman',
    host: 'Invest Like The Best',
    title: '621 : Reid Hoffman | Navigating Entrepreneurial Challenges',
    podcastTitle: 'Navigating Entrepreneurial Challenges in Modern Times',
    length: '42:55',
    is_liked: true,
    is_downloaded: false,
    is_added_to_playlist: true,
  },
  {
    id: 4,
    podcastNumber: 687,
    image: images.podcast5,
    guest: 'Amy Webb',
    host: 'SaaS & Scotch',
    title: '687: Amy Webb | Forecasting Technological Trends for the Future',
    podcastTitle: 'Forecasting Technological Trends for the Future',
    length: '44:37',
    is_liked: true,
    is_downloaded: false,
    is_added_to_playlist: true,
  },
  {
    id: 5,
    podcastNumber: 688,
    image: images.podcast13,
    guest: 'A-Rod',
    host: 'Twenty Thousand Hertz',
    podcastTitle: 'Still Having a Ball After All',
    title: '688: A-Rod | Still Having a Ball After All ',
    length: '49:26',
    is_liked: true,
    is_downloaded: false,
    is_added_to_playlist: false,
  },
];

const queuePodcasts = [
  {
    id: 1,
    podcastNumber: 837,
    image: images.podcast16,
    guest: 'Tristan Harris',
    host: 'Apple Talk',
    title:
      '837: Tristan Harris | Exploring the Impact of Technology on Society',
    podcastTitle: 'Exploring the Impact of Technology on Society',
    length: '45:18',
    is_liked: false,
    is_downloaded: false,
    is_added_to_playlist: true,
  },
  {
    id: 2,
    podcastNumber: 593,
    image: images.podcast17,
    guest: 'Dallas Taylor',
    host: 'What a Day',
    title: '593: Dallas Taylor | The Art of Sound Design and Storytelling',
    podcastTitle: 'The Art of Sound Design and Storytelling',
    length: '47:55',
    is_liked: true,
    is_downloaded: true,
    is_added_to_playlist: true,
  },
  {
    id: 3,
    podcastNumber: 621,
    image: images.podcast18,
    guest: 'Reid Hoffman',
    host: 'Invest Like The Best',
    title: '621 : Reid Hoffman | Navigating Entrepreneurial Challenges',
    podcastTitle: 'Navigating Entrepreneurial Challenges in Modern Times',
    length: '42:55',
    is_liked: false,
    is_downloaded: false,
    is_added_to_playlist: true,
  },
  {
    id: 4,
    podcastNumber: 687,
    image: images.podcast19,
    guest: 'Amy Webb',
    host: 'SaaS & Scotch',
    title: '687: Amy Webb | Forecasting Technological Trends for the Future',
    podcastTitle: 'Forecasting Technological Trends for the Future',
    length: '44:37',
    is_liked: false,
    is_downloaded: false,
    is_added_to_playlist: true,
  },
  {
    id: 5,
    podcastNumber: 688,
    image: images.podcast20,
    guest: 'A-Rod',
    host: 'Twenty Thousand Hertz',
    podcastTitle: 'Still Having a Ball After All',
    title: '688: A-Rod | Still Having a Ball After All ',
    length: '49:26',
    is_liked: false,
    is_downloaded: false,
    is_added_to_playlist: true,
  },
];

const downloadedPodcast = [
  {
    id: 1,
    podcastNumber: 837,
    image: images.podcast21,
    guest: 'Tristan Harris',
    host: 'Apple Talk',
    title:
      '837: Tristan Harris | Exploring the Impact of Technology on Society',
    podcastTitle: 'Exploring the Impact of Technology on Society',
    length: '45:18',
    is_liked: true,
    is_downloaded: true,
    is_added_to_playlist: false,
  },
  {
    id: 2,
    podcastNumber: 593,
    image: images.podcast22,
    guest: 'Dallas Taylor',
    host: 'What a Day',
    title: '593: Dallas Taylor | The Art of Sound Design and Storytelling',
    podcastTitle: 'The Art of Sound Design and Storytelling',
    length: '47:55',
    is_liked: false,
    is_downloaded: true,
    is_added_to_playlist: true,
  },
  {
    id: 3,
    podcastNumber: 621,
    image: images.podcast23,
    guest: 'Reid Hoffman',
    host: 'Invest Like The Best',
    title: '621 : Reid Hoffman | Navigating Entrepreneurial Challenges',
    podcastTitle: 'Navigating Entrepreneurial Challenges in Modern Times',
    length: '42:55',
    is_liked: false,
    is_downloaded: true,
    is_added_to_playlist: true,
  },
  {
    id: 4,
    podcastNumber: 687,
    image: images.podcast14,
    guest: 'Amy Webb',
    host: 'SaaS & Scotch',
    title: '687: Amy Webb | Forecasting Technological Trends for the Future',
    podcastTitle: 'Forecasting Technological Trends for the Future',
    length: '44:37',
    is_liked: true,
    is_downloaded: true,
    is_added_to_playlist: false,
  },
  {
    id: 5,
    podcastNumber: 688,
    image: images.podcast24,
    guest: 'A-Rod',
    host: 'Twenty Thousand Hertz',
    podcastTitle: 'Still Having a Ball After All',
    title: '688: A-Rod | Still Having a Ball After All ',
    length: '49:26',
    is_liked: false,
    is_downloaded: true,
    is_added_to_playlist: false,
  },
];

const albumList = [
  {
    id: 1,
    image: images.album5,
    albumTitle: 'Three Dimensions Deep',
    singer: 'Amber Mark',
    releaseYear: 2022,
  },
  {
    id: 2,
    image: images.album6,
    albumTitle: 'New Road - Ants From Up There',
    singer: 'Black Country',
    releaseYear: 2021,
  },
  {
    id: 3,
    image: images.album7,
    albumTitle: 'We Are The Apocalypse',
    singer: 'Dark Funeral',
    releaseYear: 2019,
  },
  {
    id: 4,
    image: images.album8,
    albumTitle: 'Otherness',
    singer: 'Alexisonfire',
    releaseYear: 2022,
  },
  {
    id: 5,
    image: images.top2,
    albumTitle: 'Rouge Carpet Disaster',
    singer: 'Static Dress',
    releaseYear: 2018,
  },
  {
    id: 6,
    image: images.song8,
    albumTitle: 'Mr. Morale & The Big Stepperes',
    singer: 'Kendrick Lamar',
    releaseYear: 2021,
  },
  {
    id: 7,
    image: images.top6,
    albumTitle: 'The Agony and Ecstasy of Writing',
    singer: 'Watain',
    releaseYear: 2022,
  },
];

const podcasters = [
  {
    id: 1,
    title: 'The Jordan Harbinger Show',
    image: images.podcast3,
    host: 'Jordan Harbinger',
    numberOfEpisode: 692,
  },
  {
    id: 2,
    title: 'Apple Talk',
    image: images.podcast1,
    host: 'Georgia Dow & Rene Ritchie',
    numberOfEpisode: 968,
  },
  {
    id: 3,
    title: 'Dr. Death',
    image: images.podcast7,
    host: 'Wondery',
    numberOfEpisode: 837,
  },

  {
    id: 4,
    title: 'Invest Like The Best',
    image: images.podcast4,
    host: "Patrick O'Shaughnessy",
    numberOfEpisode: 493,
  },
  {
    id: 5,
    title: 'The Breakfast Club',
    image: images.podcast10,
    host: 'DJ Envy',
    numberOfEpisode: 682,
  },
  {
    id: 6,
    title: 'What a Day',
    image: images.podcast2,
    host: "Tre'vell Anderson",
    numberOfEpisode: 934,
  },
  {
    id: 7,
    title: 'SaaS & Scotch',
    image: images.podcast5,
    host: 'Zachary Crockett',
    numberOfEpisode: 837,
  },
];

const myPersonalDetail = {
  id: 1,
  name: 'Souvik Bera',
  followers: '2,739',
  image: images.profile1,
  isFollowing: true,
  following: '2,475',
};

export {
  renderChips,
  FilterData,
  ProfileSetting,
  videoQuality,
  languageData,
  trendingMusic,
  moreTrendingMusic,
  Artist,
  moreArtists,
  Charts,
  NotificationSongs,
  NotificationPodcasts,
  categoryData,
  TopCharts,
  NewReleases,
  podcast,
  podcastArtist,
  podcastCategory,
  MusicList,
  recentSearch,
  searchCategory,
  topSearch,
  userDetail,
  OnBoardingSlide,
  songSearch,
  MoreLikeThis,
  artistSearch,
  popularSongs,
  albumSearch,
  podcastSearch,
  podcastEpisodeSearch,
  morePodcast,
  podcastDataPoints,
  playlistSearch,
  notificationData,
  profileSearch,
  followers,
  historyData,
  historySong,
  historyPodcast,
  playList,
  playListDropdownData,
  playlistSong,
  yourLikesPodcasts,
  queuePodcasts,
  downloadedPodcast,
  albumList,
  podcasters,
  myPersonalDetail,

};
