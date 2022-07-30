import * as React from 'react'
import { View, Text,Dimensions,TextInput,Image } from 'react-native';
import Button from '../../components/Button';
import { colors, SVG } from '../../constants';
import * as Clipboard from 'expo-clipboard';

const { width, height } = Dimensions.get('window');
const Result = ({ navigation, route }) => {
  const { imageUri,ExtractedResponse } = route.params;
  const [ExtractedText, setExtractedText] = React.useState(ExtractedResponse);


  const copyToClipboard = () => {
     Clipboard.setString(ExtractedText);
    };


  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Extracting', headerRight: () => {
        <Button title={"Select new"} textColor={colors.primary} filledColor={colors.Attention} borderwidth={0} haveIcon={true} Icon={<SVG.CopyIcon />} />
      }
  })
  },[navigation])
  return (
    <View style={{flex:1,alignItems:'center',backgroundColor:colors.secondary}}>
      <Image source={{ uri: "data:image/jpg;base64," + imageUri }} style={{marginVertical:20, width: width - 40, height: height / 3, borderRadius: 15 }} />
      <View style={{flex:3,padding:15}}>
        <TextInput style={{color:colors.primary,fontSize:24}} value={ExtractedText} onChangeText={(text)=>setExtractedText(text)} multiline={true}/>
          
    
      </View>
        <View style={{position:"absolute",alignSelf:'center',bottom:60}}>
<Button title={"Copy Content to Clipboard"} textColor={colors.primary} filledColor={colors.Attention} borderwidth={0} haveIcon={true} Icon={<SVG.CopyIcon />} onPress={copyToClipboard}/>
      </View>
      
    </View>
  )
}

export default Result