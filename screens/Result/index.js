import * as React from 'react'
import { View, Text,Dimensions,TextInput,Keyboard, } from 'react-native';
import Button from '../../components/Button';
import { colors, SVG } from '../../constants';
import * as Clipboard from 'expo-clipboard';
import Lottie from 'lottie-react-native'
const {  height } = Dimensions.get('window');
import Toast from 'react-native-root-toast'; 
import FloatingButton from '../../components/FloatingButton';
const IMAGE_HEIGHT = 280;
const Result = ({ navigation, route }) => {
let BOTTOM=60;
  const { ExtractedResponse } = route.params;
const inputRef=React.useRef();
  const [ExtractedText, setExtractedText] = React.useState(ExtractedResponse);
const [isEditable, setisEditable] = React.useState(false)

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
    const EditingText=()=>{
      if(isEditable){
        setisEditable(false);
        Toast.show('Text Updated Successfully.', {
          duration: Toast.durations.SHORT,
          shadow:true,
          shadowColor:colors.Attention,
          animation:true,
          position:height-110,
          keyboardAvoiding:true,
          containerStyle:{borderRadius:40}
    
        });
      }
      else{
        setisEditable(true);
          Toast.show('You can Edit Now!', {
          duration: Toast.durations.SHORT,
          shadow:true,
          shadowColor:colors.Attention,
          animation:true,
          position:height-110,
          keyboardAvoiding:true,
          backgroundColor:`${colors.primary}70`,
          containerStyle:{borderRadius:40,}
    
        });
      }
    }

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
        <TextInput   
        ref={inputRef}    
 style={{color:colors.primary,fontSize:18}}
   value={ExtractedText} 
   onChangeText={(text)=>setExtractedText(text)}
    multiline={true} 
    editable={isEditable} />
      </View>
      <FloatingButton icon={!isEditable?<SVG.Edit/>:<SVG.Tick/>} onClick={()=>EditingText()} bottom={BOTTOM*2.3}/>
      <FloatingButton icon={<SVG.CopyIcon/>} onClick={()=>copyToClipboard()} bottom={BOTTOM}/>
      
    </View>
  )
}

export default Result