import * as React from 'react';
import { View, Text, StyleSheet, Dimensions ,Image} from 'react-native';
import { colors,SVG } from '../../constants';
import Button from '../../components/Button';
import callGoogleVisionAsync from '../../HelperFunction';
import * as ImagePicker from 'expo-image-picker';
import Lottie from 'lottie-react-native';
import { useIsFocused } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const Home = ({ navigation,route }) => {
  const isFocused = useIsFocused();
  const { CapturedImage } = route.params;
  const [loading, setloading] = React.useState(false)
    const [image, setimage] = React.useState({
      uri:'',
      base64:'',
    })
    function onCapturewithCamera(){
        navigation.push('CaptureImage');
    }
React.useEffect(() => {
  setimage({...image,uri:'',base64:''});
}, [])

  async function NavigateToExtraction() {
    try {
      setloading(true);

   let res = await callGoogleVisionAsync(image.base64==''?CapturedImage:image.base64);
   if(res!==undefined || ''){
    setloading(false);
      navigation.navigate("Result", {
        imageUri:image.uri==''?CapturedImage:image.uri,
        ExtractedResponse:res.text
 })
}
    }
    catch (err) {
      setloading(false);
      console.log(err);
    }
  }
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:'Images' ,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 1,
      exif: false,
      isImageMirror:false
    });

    if (!result.cancelled) {
      setimage({...image,uri:result.uri,base64:result.base64});   
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.DummyImage} >
      
      {loading?(
          <View style={{position:'absolute',zIndex:100,alignSelf:'center'}}>
        <Lottie source={require('../../assets/scan.json')} autoPlay style={{ width: '100%', height: 500,opacity:1 }}  />
        </View>
        ):<></>}
            {
              CapturedImage==='' && image.uri==''?(
                
                <SVG.ImageIcon/>
              ):
              image.uri!==''?
            (<Image source={{ uri:  image.uri} }  style={{height: height / 1.8,width: width - 40,  borderRadius:15}}/>):
            (
              <Image source={{ uri:  "data:image/jpg;base64," + CapturedImage} }  style={{height: height / 1.8,width: width - 40,  borderRadius:15}}/>
            )
          }
          </View>
      <View style={{ marginTop: 40 }}>
        {CapturedImage === '' && image.uri=='' ? (
          <Button title={"Select from Your Gallery"} haveIcon={true} outlined={false} textColor={colors.secondary} Icon={<SVG.ImageGalleryIcon color={colors.secondary}  />} onPress={pickImage} />
        ) : (
          <Button title={"Discard Image and Select a New One"} haveIcon={true} outlined={true} textColor={colors.primary} borderwidth={1} Icon={<SVG.CameraIcon color={colors.primary} />} onPress={()=>{setimage({...image,uri:'',base64:''});navigation.setParams({CapturedImage: ''}) }}/>
        )
        }
          </View>
          <View style={{marginVertical:16}}>
          <Text style={styles.OddText}>OR</Text>
        </View>
      <View>
        {CapturedImage === '' && image.uri==='' ? (
          <Button title={"Capture using Camera"} haveIcon={true} outlined={true}  borderwidth={1} textColor={colors.primary} Icon={<SVG.CameraIcon color={colors.primary} />} onPress={onCapturewithCamera} />
        
        ) : (
          <Button title={!loading?"Extract Text":'Extracting Text...'} haveIcon={true} outlined={false} textColor={colors.secondary} Icon={!loading?<SVG.ImageGalleryIcon color={colors.secondary} />: <Lottie source={require('../../assets/scan.json')} autoPlay style={{ width: 80, height: 80,opacity:1 }}  />} onPress={NavigateToExtraction}/>

        )}
      </View>
        
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems:'center'
    },
    DummyImage: {
        justifyContent: 'center',
        alignItems:'center',
        height: height / 1.8,
        width: width - 40,
        backgroundColor: colors.Tertiary,
        borderRadius:15
    },
    OddText: {
        fontSize: 14,
        color:colors.primary,
    }
})

export default Home