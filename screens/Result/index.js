import * as React from 'react'
import { View, Text,Dimensions,TextInput,Image, Pressable,Animated, ToastAndroid } from 'react-native';
import Button from '../../components/Button';
import { colors, SVG } from '../../constants';
import * as Clipboard from 'expo-clipboard';

const { width, height } = Dimensions.get('window');

const IMAGE_HEIGHT = 280;
const Result = ({ navigation, route }) => {

  const { imageUri,ExtractedResponse } = route.params;
  const [ExtractedText, setExtractedText] = React.useState(ExtractedResponse);


  const copyToClipboard = () => {
     Clipboard.setString(ExtractedText);
     ToastAndroid.show('Content Copied',1000);
    };


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Extracted Text',
      headerTitleAlign:'left',
      
  })
  },[navigation])
  return (
    <View style={{ flex: 1,marginTop:2,paddingTop:20,  backgroundColor: colors.secondary }}>
      {/* <Pressable android_ripple={{borderless:false,radius:width-100,color:'#c4c4c4'}} style={{marginVertical:20}}>
        <Image source={{ uri: "data:image/jpg;base64," + imageUri }} style={{  width: width - 40, height: height / 3, borderRadius: 15 }} />
        </Pressable> */}
      <View style={{flex:1,paddingHorizontal:24}}>
        <TextInput style={{color:colors.primary,fontSize:18}} value={ExtractedText} onChangeText={(text)=>setExtractedText(text)} multiline={true}/>
      </View>
        <Pressable style={{position:"absolute",alignSelf:'center',backgroundColor:'#fff',bottom:60,right:20,padding:20,borderRadius:150}}
        onPress={()=>copyToClipboard()}
        android_ripple={{borderless:true,radius:40,color:'#c4c4c450'}}
        >
          <SVG.CopyIcon />
          </Pressable>
      
      
    </View>
  )
}

export default Result