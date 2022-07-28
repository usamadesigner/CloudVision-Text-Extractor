import * as React from 'react';
import { View, Text, StyleSheet, Dimensions ,Image} from 'react-native';
import { colors,SVG } from '../../constants';
import Button from '../../components/Button';
import callGoogleVisionAsync from '../../HelperFunction';
import * as ImagePicker from 'expo-image-picker';
const { width, height } = Dimensions.get('window');
const Home = ({ navigation,route }) => {
  const { CapturedImage } = route.params;
    function onCapturewithCamera(){
        navigation.push('CaptureImage');
    }
  async function NavigateToExtraction() {
    try {
   let res = await callGoogleVisionAsync(CapturedImage);
      navigation.navigate("Result", {
        imageUri:CapturedImage,
        ExtractedResponse:res.text
 })
    }
    catch (err) {
      console.log(err);
    }
 

      // navigation.push('Result', {
      //   imageUri:CapturedImage
      // });
  }
  
  return (
    <View style={styles.container}>
          <View style={styles.DummyImage}>
            {
              CapturedImage===''?(
                <SVG.ImageIcon/>
              ):
            (<Image source={{ uri: "data:image/jpg;base64," + CapturedImage }}  style={{height: height / 1.8,width: width - 40,  borderRadius:15}}/>)
            }
           
          </View>
      <View style={{ marginTop: 40 }}>
        {CapturedImage === '' ? (
          <Button title={"Select from Your Gallery"} haveIcon={true} outlined={false} textColor={colors.secondary} Icon={<SVG.ImageGalleryIcon color={colors.secondary} />} />
        ) : (
          <Button title={"Discard Image and Select a New One"} haveIcon={true} outlined={true} textColor={colors.primary} borderwidth={1} Icon={<SVG.CameraIcon color={colors.primary} />} onPress={onCapturewithCamera} />
        )
        }
          </View>
          <View style={{marginVertical:16}}>
          <Text style={styles.OddText}>OR</Text>
        </View>
      <View>
        {CapturedImage === '' ? (
          <Button title={"Capture using Camera"} haveIcon={true} outlined={true}  borderwidth={1} textColor={colors.primary} Icon={<SVG.CameraIcon color={colors.primary} />} onPress={onCapturewithCamera} />
        
        ) : (
          <Button title={"Extract Text"} haveIcon={true} outlined={false} textColor={colors.secondary} Icon={<SVG.ImageGalleryIcon color={colors.secondary} />} onPress={NavigateToExtraction}/>

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