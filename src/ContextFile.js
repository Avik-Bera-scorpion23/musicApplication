
import { PermissionsAndroid } from 'react-native';
import RNFS from 'react-native-fs';
// import { PermissionsAndroid, Platform } from 'react-native';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';





const getAllMp3Files = async () => {
    try {
       const directoryPath = RNFS.DocumentDirectoryPath;

      // Read the directory
      const files = await RNFS.readDir(directoryPath);

      // Filter out only MP3 files
      const mp3Files = files.filter((file) => file.name.endsWith('.mp3'));

      // Map to get the full path of each MP3 file
      const mp3Paths = mp3Files.map((file) => file.path);
      /*console.log("***   ***");
      console.log( "***   ***" , directoryPath);
      console.log( "***   ***" , files);
      console.log( "***   ***" , mp3Files);
      console.log( "***   ***" , mp3Paths);
      console.log("***   ***");*/
      
    //   setMp3Files(mp3Paths);
    } catch (error) {
      console.error('Error reading directory:', error);
    }
  };


  const requestStoragePermission = async () => {
    try {
      
      permissionsAccess();
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'This app needs access to your storage to find MP3 files.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        
        // getAllMp3Files();
      } else {
        console.log('Storage permission denied');
      }

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage permission granted');
        // getAllMp3Files(); // Call the function if permission is granted
      } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
        console.log('Storage permission denied');
      } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        console.log('Storage permission denied permanently, ask the user to enable it from settings.');
      }
    } catch (err) {
      console.warn(err);
    }
  };


  const permissionsAccess= ()=>{

    check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
  .then((result) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log('This feature is not available (on this device / in this context)');
        break;
      case RESULTS.DENIED:
        console.log('The permission has not been requested / is denied but requestable');
        break;
      case RESULTS.LIMITED:
        console.log('The permission is limited: some actions are possible');
        break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;
    }
  })
  .catch((error) => {
    // …
  });
  }


  export { requestStoragePermission , getAllMp3Files , permissionsAccess }