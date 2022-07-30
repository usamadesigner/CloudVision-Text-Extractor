import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View,StatusBar, Dimensions, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibary from 'expo-media-library';
import Button from '../../components/Button';
import { colors, SVG } from '../../constants';
const { width } = Dimensions.get('window');

export default function CaptureImage({navigation}) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [haslibraryPermission, sethaslibraryPermission] = useState(null);
  const [type, setType] = useState('back');
  const ChangeType=()=>{
    setType(type === 'back' ? 'front' : 'back');
  }

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
      navigation.navigate('Home',{
        CapturedImage:newpic.base64
      })
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar />
      <Camera style={styles.camera}
        ref={cameraRef}
        type={type}
        autoFocus={true}
        ratio={'16:9'}
        flashMode={'on'}
        useCamera2Api={false}
      >
        <View style={{ position: 'absolute', right: 20, top: 24 }}>
          <SVG.Flip />
        </View>
        <View style={styles.buttonContainer}>
          <View style={{flex:1}}>
          <Button title={"Discard"} haveIcon={true} Icon={<SVG.CancelIcon color={colors.Tertiary}/>} textColor={colors.secondary} onPress={ChangeType}  borderwidth={0} widthProp={width / 2 - 40} />
          </View>
          <View >
            <Button title={"Capture"} haveIcon={true} Icon={<SVG.CaptureIcon />} onPress={takePicture}   widthProp={width / 2 - 40} borderwidth={0} filledColor={colors.Attention} />
            </View>
          </View>
      </Camera>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  camera: {
    flex: 1,
    justifyContent: 'center',
 alignItems:'center'
  },
  buttonContainer: {
    flex: 1,
    position:'absolute',
    bottom: 40,
    marginHorizontal:20,
    justifyContent: 'space-evenly',
    alignItems:'center',
    flexDirection: 'row',
  },

});
