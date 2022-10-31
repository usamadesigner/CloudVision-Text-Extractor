import * as React from 'react'
import { View, Text,Dimensions,TextInput,Image, Pressable, } from 'react-native';
import Button from '../../components/Button';
import { colors, SVG } from '../../constants';
import * as Clipboard from 'expo-clipboard';
import Lottie from 'lottie-react-native'
const {  height } = Dimensions.get('window');
import Toast from 'react-native-root-toast'; 
const IMAGE_HEIGHT = 280;
const Result = ({ navigation, route }) => {

  const { ExtractedResponse } = route.params;
  const [ExtractedText, setExtractedText] = React.useState(ExtractedResponse);


  const copyToClipboard = () => {
     Clipboard.setString(ExtractedText);
     Toast.show('Text Copied Successfully.', {
      duration: Toast.durations.LONG,
      shadow:true,
      shadowColor:colors.Attention,
      animation:true,
      position:height-110,
      keyboardAvoiding:true,
      containerStyle:{borderRadius:40}

    });
    };


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:  ExtractedText!==''?'Extracted Text':'No Text Found',
      headerTitleAlign:'left',
      
  })
  },[navigation])
  if(ExtractedText===""){
    return(
      <View style={{flex:1,zIndex:100,alignItems:'center',justifyContent:"center",backgroundColor:colors.secondary}}>
      <Lottie source={require('../../assets/empty.json')} autoPlay style={{ width: '100%', height: height/1.7,opacity:1 }}  />
      <View style={{position:'absolute',bottom:60}}>

      <Button title={'Let\'s try a new one'} filledColor={colors.Attention} onPress={()=>navigation.navigate('Home',{
        CapturedImage:''
      })}/>
      </View>
      </View>
    );
  }
  else
  return (
    <View style={{ flex: 1,marginTop:2,paddingTop:20,  backgroundColor: colors.secondary }}>
      {/* <Pressable android_ripple={{borderless:false,radius:width-100,color:'#c4c4c4'}} style={{marginVertical:20}}>
        <Image source={{ uri: "data:image/jpg;base64," + imageUri }} style={{  width: width - 40, height: height / 3, borderRadius: 15 }} />
        </Pressable> */}
      <View style={{flex:1,paddingHorizontal:24}}>
        <TextInput style={{color:colors.primary,fontSize:18}} value={ExtractedText} onChangeText={(text)=>setExtractedText(text)} multiline={true}/>
      </View>
        <Pressable style={{
          position:"absolute",
          alignSelf:'center',
          backgroundColor:'#fff',
          bottom:60,
          right:20,
          padding:20,
          borderRadius:150,
          shadowColor:`${colors.primary}40`,
          shadowOffset:{
            width:0,
            height:2
          },
          shadowOpacity:0.5,
          shadowRadius:10,
          elevation:2
        }}
        onPress={()=>copyToClipboard()}
        android_ripple={{borderless:true,radius:40,color:'#c4c4c450'}}
        >
          <SVG.CopyIcon />
          </Pressable>
      
      
    </View>
  )
}

export default Result