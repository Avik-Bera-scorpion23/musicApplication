import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { addTrackToQueue, getCurrentTrack, getQueue, getTrack, goToTrack } from '../../../components/Song/AudioPlayer';
import { MusicList, trendingMusic } from '../../../api/constant';
import { usePlaybackState } from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';
import { StackNav } from '../../../navigation/NavigationKeys';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale } from '../../../common/constants';
// import {moderateScale} from '../../common/constants';


const LocalMusic = ({item}) => {


    const [result, setResult] = useState(item ? item : null);
    const [click, setClick] = useState(true);
    const isPlaying = usePlaybackState();
    const navigation = useNavigation();
    const Play= <Ionicons name="play" size={30} color="#06C149" />;
    const Pause= <Ionicons name="pause" size={30} color="#06C149" />;




    const navigateToPlayer = async () => {

      setClick(!click);
        
        if (isPlaying === 'playing') {
          let currentTrackIndex = await getCurrentTrack();
          let currentTrack = await getTrack(currentTrackIndex);
          if (currentTrack.title == result?.songTitle) {
          } else {
            let currentQueue = await getQueue();
            let isCurrentItemInQueueIndex = currentQueue.findIndex(track => {
              return result?.songTitle == track.title;
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
              id: result?.id ,
              url: result?.audio_url,
              title: result?.songTitle,
              artist: result?.singer,
              artwork: result?.image,
            };
          });
          await addTrackToQueue(queue);
          let currentQueue = await getQueue();
          let isCurrentItemInQueueIndex = currentQueue.findIndex(track => {
            return result?.songTitle == track.title;
          });
          if (isCurrentItemInQueueIndex > -1) {
            await goToTrack(isCurrentItemInQueueIndex);
          }
        }
    
        navigation.navigate(StackNav.MusicPlayer, {result});
      };


    const formatDuration = (duration) => {
        const minutes = Math.floor(duration / 60000);
        const seconds = ((duration % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      };
    

  return (    
          <View style={styles.card}>
           <View>
           <Text style={styles.title}>{item?.songTitle.length >=16 ? item?.songTitle.substring(0,12)+"..." : item?.songTitle }</Text>
           <Text style={styles.text}>Artist: {item?.singer.length >=12? item?.singer.substring(0,12)+"..." : item?.singer }</Text>
           <Text style={styles.text}>Duration: {item?.length}</Text>
           </View>

           <View style={{alignSelf:'center', }}>
            <TouchableOpacity style={styles.button11} onPress={navigateToPlayer}  >
              {/* <Text style={styles.buttonText}>Play Song</Text> */}
              <Text>{click ? Play : Pause}</Text> 
              
            </TouchableOpacity>
            </View>
           
                  
         </View>      
  );
}

export default LocalMusic;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#f8f8f8',
        backgroundColor: 'black' ,
        padding: moderateScale(10),
      },
      card: {
        backgroundColor: 'black' ,
        // backgroundColor: '#fff',
        borderRadius: 10,
        padding: moderateScale(15),
        marginVertical: moderateScale(3) ,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        flexDirection:'row',
        justifyContent : 'space-between',
        color: '#fff',
      },
      title: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        marginBottom: moderateScale(5),
        color: '#fff',
      },
      text: {
        fontSize: moderateScale(14),
        marginBottom: moderateScale(5),
        color: '#fff',
      },
      button: {
        marginTop: moderateScale(10) ,
        backgroundColor: '#007bff',
        paddingVertical: moderateScale(10) ,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: moderateScale(16) ,
        fontWeight: 'bold',
      },
      button11: { 
        backgroundColor: 'transparent',
        paddingVertical: moderateScale(10) ,
        borderRadius: 5,
        alignItems: 'center',
       } ,
})