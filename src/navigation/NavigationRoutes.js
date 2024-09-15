// Tab Routes
import Home from '../containers/TabBar/home/Home';
import Profile from '../containers/TabBar/profile/Profile';
import Library from '../containers/TabBar/library/Library';
import Explore from '../containers/TabBar/explore/Explore';

// Screens Route
import Login from '../containers/auth/Login';
import Register from '../containers/auth/Register';
import TabBar from './Type/TabBarNavigation';
import Splash from '../containers/auth/Splash';
import OnBoarding from '../containers/OnBoarding';
import Connect from '../containers/auth/Connect';
import SelectInterest from '../containers/auth/SelectInterest';
import SetPin from '../containers/auth/SetPin';
import SetUpProfile from '../containers/auth/SetUpProfile';
import SetSecure from '../containers/auth/SetSecure';
import ForgotPassword from '../containers/auth/ForgotPassword';
import ForgotPasswordOtp from '../containers/auth/ForgotPasswordOtp';
import CreateNewPassword from '../containers/auth/CreateNewPassword';
import Notification from '../containers/TabBar/home/Notification';
import Premium from '../containers/TabBar/profile/Premium';
import NotificationSetting from '../containers/TabBar/profile/NotificationSetting';
import Playback from '../containers/TabBar/profile/Playback';
import AudioAndVideo from '../containers/TabBar/profile/AudioAndVideo';
import DataSaverAndStorage from '../containers/TabBar/profile/DataSaverAndStorage';
import Security from '../containers/TabBar/profile/Security';
import Language from '../containers/TabBar/profile/Language';
import ReviewSummary from '../containers/TabBar/profile/ReviewSummary';
import Payment from '../containers/TabBar/profile/Payment';
import AddNewCard from '../containers/TabBar/profile/AddNewCard';
import ExploreList from '../containers/TabBar/explore/ExploreList';
import ExplorePodcastList from '../containers/TabBar/explore/ExplorePodcastList';
import ChartSongList from '../components/commonCards/ChartSongList';
import ExploreSearch from '../containers/TabBar/explore/Search/Search';
import TrendingNow from '../containers/TabBar/home/TrendingNow';
import PopularArtist from '../containers/TabBar/home/PopularArtist';
import TopCharts from '../containers/TabBar/home/TopCharts';
import PodcastList from '../containers/TabBar/explore/ExplorePodcast/PodcastList';
import PopularPodcastList from '../containers/TabBar/explore/ExplorePodcast/PopularPodcastList';
import PopularPodcastArtist from '../containers/TabBar/explore/ExplorePodcast/PopularPodcastArtist';
import ExploreTopChart from '../containers/TabBar/explore/ExploreTopChart';
import PodcastCategoryList from '../containers/TabBar/explore/ExplorePodcast/PodcastCategoryList';
import SongDetail from '../components/Song/SongDetail';
import MusicPlayer from '../components/Song/MusicPlayer';
import ArtistDetail from '../components/Artist/ArtistDetail';
import AlbumDetail from '../components/Album/AlbumDetail';
import PodcastArtistDetail from '../components/Podcast/PodcastArtistDetails';
import PodcastEpisodeDetail from '../components/Podcast/PodcastEpisodeDetail';
import PlaylistDetail from '../components/PlayList/PlaylistDetail';
import ProfileDetail from '../components/Profile/ProfileDetail';
import FollowerFollowingList from '../components/Profile/FollowerFollowingList';
import History from '../containers/TabBar/library/History/History';
import Playlist from '../containers/TabBar/library/Playlist/Playlist';
import MyPlayListDetail from '../containers/TabBar/library/Playlist/MyPlayListDetail';
import Download from '../containers/TabBar/library/Download/Download';
import Podcast from '../containers/TabBar/library/Podcasts/Podcast';
import AlbumList from '../containers/TabBar/library/Album/AlbumList';
import SongsList from '../containers/TabBar/library/Songs/SongsList';
import Artist from '../containers/TabBar/library/Artists/Artist';
import Local from '../containers/TabBar/local/Local';

export const TabRoute = {
  Home,
  Profile,
  Library,
  Explore,
  Local,
};

export const StackRoute = {
  Login,
  Splash,
  Register,
  TabBar,
  OnBoarding,
  Connect,
  SelectInterest,
  SetPin,
  SetUpProfile,
  SetSecure,
  ForgotPassword,
  ForgotPasswordOtp,
  CreateNewPassword,
  Notification,
  Premium,
  NotificationSetting,
  Playback,
  AudioAndVideo,
  DataSaverAndStorage,
  Security,
  Language,
  ReviewSummary,
  Payment,
  AddNewCard,
  ExploreList,
  ExplorePodcastList,
  ChartSongList,
  ExploreSearch,
  TrendingNow,
  PopularArtist,
  TopCharts,
  PodcastList,
  PopularPodcastList,
  PopularPodcastArtist,
  ExploreTopChart,
  PodcastCategoryList,
  SongDetail,
  MusicPlayer,
  ArtistDetail,
  AlbumDetail,
  PodcastArtistDetail,
  PodcastEpisodeDetail,
  PlaylistDetail,
  ProfileDetail,
  FollowerFollowingList,
  History,
  Playlist,
  MyPlayListDetail,
  Download,
  Podcast,
  AlbumList,
  SongsList,
  Artist,
};
