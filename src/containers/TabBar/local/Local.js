import { FlatList, StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import ASafeAreaView from '../../../components/common/ASafeAreaView';
import { AppLogoNoBg, Menu_Dark, Menu_Light, Search_Dark, Search_Light, No_Songs_Found } from '../../../assets/svgs';
import { moderateScale } from '../../../common/constants';
import {styles} from '../../../themes';
import { StackNav } from '../../../navigation/NavigationKeys';
import strings from '../../../i18n/strings';
import AHeader from '../../../components/common/AHeader';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { check, PERMISSIONS, request, RESULTS, requestMultiple } from 'react-native-permissions';
import { getAll, getAlbums, searchSongs, SortSongFields, SortSongOrder } from "react-native-get-music-files";
import { addTrackToQueue, getCurrentTrack, getQueue, getTrack, goToTrack } from '../../../components/Song/AudioPlayer';
import { usePlaybackState } from 'react-native-track-player';
import { trendingMusic } from '../../../api/constant';
import LocalMusic from './LocalMusic';



const Local = () => {

    const onPressMenu = () => {};
    const isPlaying = usePlaybackState();
    const [result, setResult] = useState(null);
    const [selected, setSelected] = useState();
    const [item, setItem] = useState(null);
    const colors = useSelector(state => state.theme.theme);
    const navigation = useNavigation();

    useEffect(()=>{
      console.log('result : ', result);
      
    },[result])


    
    const Button = ({darkIcon, lightIcon, onPress, style}) => {
        return (
          <TouchableOpacity style={style} onPress={onPress}>
            {colors.dark ? darkIcon : lightIcon}
          </TouchableOpacity>
        );
      };
    const onPressSearch = () => navigation.navigate(StackNav.ExploreSearch);

    const RightIcon = () => {
        return (
          <View style={styles.rowSpaceBetween}>
            <Button
              darkIcon={<Search_Dark />}
              lightIcon={<Search_Light />}
              onPress={onPressSearch}
              style={styles.pr10}
            />
            <Button
              darkIcon={<Menu_Dark />}
              lightIcon={<Menu_Light />}
              onPress={onPressMenu}
            />
          </View>
        );
      };
    
      const LeftIcon = () => {
        return (
          <View style={styles.pr15}>
            <AppLogoNoBg height={moderateScale(30)} width={moderateScale(30)} />
          </View>
        );
      };

      const hasPermissions = async () => {
        if (Platform.OS === 'android') {
          let hasPermission =
            (await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)) ===
            RESULTS.GRANTED || (await check(PERMISSIONS.ANDROID.READ_MEDIA_AUDIO)) ===
            RESULTS.GRANTED;
    
          if (!hasPermission) {
            hasPermission = await requestMultiple([
              PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
              PERMISSIONS.ANDROID.READ_MEDIA_AUDIO,
            ]);
          }
    
          return hasPermission;
        }
    
        if (Platform.OS === 'ios') {
          let hasPermission =
            (await check(PERMISSIONS.IOS.MEDIA_LIBRARY)) === RESULTS.GRANTED;
          if (!hasPermission) {
            hasPermission =
              (await request(PERMISSIONS.IOS.MEDIA_LIBRARY)) === RESULTS.GRANTED;
          }
    
          return hasPermission;
        }
    
        return false;
      };

      const formatDuration = (duration) => {
        const minutes = Math.floor(duration / 60000);
        const seconds = ((duration % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      };

    
      const test = async () => {
        const permissions = await hasPermissions();
        if (permissions) {
          const songsResults = await getAll({
            limit: 20,
            offset: 0,
            coverQuality: 50,
            minSongDuration: 1000,
            sortOrder: SortSongOrder.DESC,
            sortBy: SortSongFields.TITLE,
          });
          if (typeof songsResults === 'string') {
            return;
          }
          
          
          const updatedMusicData = songsResults.map(({ cover, ...rest }) => rest);
          setResult(updatedMusicData);
    
        }
      };

    const modifyData = (data) => {
     return data?.map((item, index) => ({
        audio_url: item.url,
        id: index + 1,
        image: 22,  // Static image value (as per your example)
        length: formatDuration(item.duration),  // Converts duration from milliseconds to "mm:ss"
        singer: item.artist || "<unknown>",  // Fallback if the artist is unknown
        songTitle: item.title
      }));
    };



      useEffect(()=>{
        test();
      }, []);
           
      useEffect(()=>{     
        const modifiedData = modifyData(result);
        setItem(modifiedData)        
      }, [result]);

     
    
    
      const navigateToPlayer = async (item) => {
        
        if (isPlaying === 'playing') {
          let currentTrackIndex = await getCurrentTrack();
          let currentTrack = await getTrack(currentTrackIndex);
          if (currentTrack.title == item.title) {
          } else {
            let currentQueue = await getQueue();
            let isCurrentItemInQueueIndex = currentQueue.findIndex(track => {
              return item.title == track.title;
            });
            if (isCurrentItemInQueueIndex > -1) {
              await goToTrack(isCurrentItemInQueueIndex);
            } else {
              // await resetPlayer();
            }
          }
        } else {
          let queue = trendingMusic.concat(MusicList).map((item, index) => {
            return {
              id: index,
              url: item?.url,
              title: item?.title,
              artist: item?.artist,
              artwork: item?.image,
            };
          });
          await addTrackToQueue(queue);
          let currentQueue = await getQueue();
          let isCurrentItemInQueueIndex = currentQueue.findIndex(track => {
            return item.title == track.title;
          });
          if (isCurrentItemInQueueIndex > -1) {
            await goToTrack(isCurrentItemInQueueIndex);
          }
        }
    
        navigation.navigate(StackNav.MusicPlayer, {item});
      };


      // Render card for each song
      const renderCard = ( {item} ) =>{
      
       return(  <LocalMusic item={item} /> ); 
         

        // return (
        //   <View style={styles111.card}>
        //     <Text style={styles111.title}>{item.title}</Text>
        //     <Text style={styles111.text}>Album: {item.album}</Text>
        //     <Text style={styles111.text}>Artist: {item.artist}</Text>
        //     <Text style={styles111.text}>Genre: {item.genre}</Text>
        //     <Text style={styles111.text}>Duration: {formatDuration(item.duration)}</Text>
        //     <Pressable style={styles111.button}   >
        //        <Text style={styles111.buttonText}>Play Song</Text>
        //     </Pressable>

            
        //   </View>
        // );


      } 



  return (
    <ASafeAreaView>
      <AHeader
        isHideBack={true}
        title={strings.local}
        isLeftIcon={<LeftIcon />}
        rightIcon={<RightIcon />}
      />

      { result?.length >0  ? 


         <View style={styles111.container}>
         <FlatList
         data={item}
         renderItem={renderCard}
         keyExtractor={(item) => item.id}
         showsVerticalScrollIndicator={false}
         />
         </View> 
         :
         <View style={styles111.elseContainer}>
         <No_Songs_Found/>
         </View> 
      
    
      
    
    }
      
       
    </ASafeAreaView>
  )
}

export default Local

const styles111 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#06C149',
        padding: moderateScale(5),
      },
      card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: moderateScale(15),
        marginVertical: moderateScale(10),
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
      },
      title: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        marginBottom: moderateScale(5),
      },
      text: {
        fontSize: moderateScale(14),
        marginBottom: moderateScale(5),
      },
      button: {
        marginTop: moderateScale(10),
        backgroundColor: '#007bff',
        paddingVertical: moderateScale(10),
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: moderateScale(16),
        fontWeight: 'bold',
      },
      elseContainer:{
        flex: 1,
        justifyContent: 'center' ,
        alignItems: 'center' ,
        backgroundColor: '#06C149',
      },
      elseContainerSVG:{
 
      }
})