import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View,Button,Image,StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibary from 'expo-media-library';

export default function CaptureImage({navigation}) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [haslibraryPermission, sethaslibraryPermission] = useState(null)
  const [type, setType] = useState('back');
  const ChangeType=()=>{
    setType(type === 'back' ? 'front' : 'back');
  }
const [pic, setpic] = useState('')
  useEffect(() => {
    (async () => {
      const { Camerastatus } = await Camera.requestCameraPermissionsAsync();
      const { librarystatus } = await MediaLibary.requestPermissionsAsync();
    
      setHasCameraPermission(Camerastatus === 'granted');
      sethaslibraryPermission(librarystatus === 'granted'); 
    })();
  }, []);

  if (hasCameraPermission === undefined || haslibraryPermission===undefined) {
    return <Text>Requesting Permissions</Text>;
  }
 else if (hasCameraPermission===null) {
    return <Text>No access to camera</Text>;
  }

  let takePicture =async () => {
    let options = {
      quality: 0,
      base64: true,
      exif: false,
      isImageMirror:false
    };
    let newpic = await cameraRef.current.takePictureAsync(options);

    setpic(newpic);
    navigation.navigate('Home',{
      Image:newpic
    })
  }
  if (pic) {
    let savePhoto = () => {
      MediaLibary.saveToLibraryAsync(pic.uri).then((res) => {
        console.log('being save',res);
        setpic(undefined);
      })
    }
  
    // return (
    //   <SafeAreaView style={{ flex: 1,alignSelf:'stretch' }}>
       
    //    <Image style={{ height:500,width:'100%' }} source={{ uri: "data:image/jpg;base64," + pic.base64 }} />
    // {
    //       pic == undefined ?
    //         <Button title="Discard" onPress={()=>setpic(undefined)} /> :
    //         <Button title="save Pic"  onPress={()=>savePhoto()}/>
    // } 
    //   </SafeAreaView>
    // )
  }
  return (
    <SafeAreaView style={styles.camera}>
      <StatusBar />
      <Camera style={styles.camera}
        ref={cameraRef}
        type={type}
        autoFocus={true}
        ratio={'16:9'}
        useCamera2Api={false}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
           
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              takePicture();
            }}>
            
            <Text style={styles.text}> Capture  </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonContainer: {
    flex:1,
    flexDirection: 'row',
    margin: 20,
   
  },
  button: {
    flex: 1,
    borderRadius: 10,
    padding:10,
    backgroundColor:'#ffff',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000000',
  },
});
