import * as React from 'react'
import { View, Text,Dimensions,TextInput,Image } from 'react-native';
import Button from '../../components/Button';
import { colors, SVG } from '../../constants';

const { width, height } = Dimensions.get('window');
const Result = ({ navigation, route }) => {
  const { imageUri } = route.params;
  const [ExtractedText, setExtractedText] = React.useState('');
  React.useEffect(() => {
    navigation.setOptions({headerTitle:'Extracting'})
  },[])
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image source={{ uri: "data:image/jpg;base64," + imageUri }} style={{ width: width - 40, height: height / 3, borderRadius: 15 }} />
      <View style={{flex:1, justifyContent:"center",alignItems:'center'}}>
        <Text style={{lineHeight:1.4,color:colors.primary}}>
          {ExtractedText || `asfasfsaffffffffffffffff`}
        </Text>
        <View style={{position:"absolute",alignSelf:'center',bottom:60}}>
<Button title={"Copy Content to Clipboard"} textColor={colors.primary} filledColor={colors.Attention} borderwidth={0} haveIcon={true} Icon={<SVG.CopyIcon />}/>
      </View>
      </View>
      
    </View>
  )
}

export default Result