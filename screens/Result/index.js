import * as React from 'react'
import { View, Text,Dimensions,TextInput,Keyboard, SliderBase, Pressable, ScrollView } from 'react-native';
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
const [fontSize, setfontSize] = React.useState(18);
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
      headerTitle:  ExtractedResponse!==''?'Extracted Text':'No Text Found',
      headerTitleAlign:'left',
      headerRight:()=>(
        <Pressable onPress={()=>{ fontSize===18?setfontSize(20):fontSize===20? setfontSize(22):fontSize==22?setfontSize(18):setfontSize(20)}}
        android_ripple={{borderless:true,radius:30,color:'#c4c4c4'}}hitSlop={20}
        >
          <Text style={{color:'#000',padding:10}}>
            {
              fontSize===18?
              'Aå'
              :fontSize==20?
              'Aa'
              :
              'AA'
            }
            </Text>
        </Pressable>
      )
      
  })
  },[navigation,fontSize])

  if(ExtractedResponse===""){
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
      
      <View style={{height:'100%',paddingHorizontal:24}}>
        {!isEditable?(
          <ScrollView style={{height:'100%'}} showsVerticalScrollIndicator={false} >
          <Text style={{color:colors.primary,fontSize:fontSize}}>
            {ExtractedText}
          </Text>
        </ScrollView>
        ):(

        <TextInput  
        
        ref={inputRef}    
 style={{height:'100%',color:colors.primary,fontSize:fontSize}}
   value={ExtractedText} 
   placeholder={'You removed all the text'}
   placeholderTextColor="#c4c4c4"
   onChangeText={(text)=>setExtractedText(text)}
    multiline={true} 
    editable={isEditable} />
        )}
        
      </View>
      <FloatingButton icon={!isEditable?<SVG.Edit/>:<SVG.Tick/>} onClick={()=>EditingText()} bottom={BOTTOM*2.3}/>
      <FloatingButton icon={<SVG.CopyIcon/>} onClick={()=>copyToClipboard()} bottom={BOTTOM}/>
      
    </View>
  )
}

export default Result