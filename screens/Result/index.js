import * as React from 'react'
import { View, Text,Dimensions,TextInput,Image, Pressable,Animated } from 'react-native';
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
    };


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Extracted Text',

      headerRight: () => {
        return (
          <Button title={"Select new"} onPress={() => navigation.navigate('Home', {
            imageUri:'',
          })} textColor={colors.secondary} heightProp ={44} filledColor={colors.primary} borderwidth={0} haveIcon={false} widthProp={110} />
          
        )
      }
  })
  },[navigation])
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: colors.secondary }}>
      <Pressable android_ripple={{borderless:true,radius:width-40,color:'#c4c4c4'}}>
        <Image source={{ uri: "data:image/jpg;base64," + imageUri }} style={{elevation:5, marginVertical: 20, width: width - 40, height: height / 3, borderRadius: 15 }} />
        </Pressable>
      <View style={{flex:3,padding:15}}>
        <TextInput style={{color:colors.primary,fontSize:18}} value={ExtractedText} onChangeText={(text)=>setExtractedText(text)} multiline={true}/>
      </View>
        <View style={{position:"absolute",alignSelf:'center',bottom:60}}>
<Button title={"Copy Content to Clipboard"} textColor={colors.primary} filledColor={colors.Attention} borderwidth={0} haveIcon={true} Icon={<SVG.CopyIcon />} onPress={copyToClipboard}/>
      </View>
      
    </View>
  )
}

export default Result