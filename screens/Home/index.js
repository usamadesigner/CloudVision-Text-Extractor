import { View, Text, StyleSheet, Dimensions ,Image} from 'react-native';
import * as React from 'react';
import { colors,SVG } from '../../constants';
import Button from '../../components/Button';

const { width, height } = Dimensions.get('window');
const Home = ({ navigation,route }) => {
  const {Image} =route.params;
  const [Picture, setPicture] = React.useState(null);
    function onCapturewithCamera(){
        navigation.push('CaptureImage');
    }
    React.useEffect(()=>{
      if(Image){
        setPicture(Image)
      }
      else{
        setPicture(null)
      }
     
    },[])
  return (
    <View style={styles.container}>
          <View style={styles.DummyImage}>
            {
              Picture===null?(
                <SVG.ImageIcon/>
              ):
             ( <Image source={{ uri: "data:image/jpg;base64," + Picture?.base64 }}/>)
            }
           
          </View>
          <View style={{marginTop:40}}>
          <Button title={"Select from Your Gallery"} haveIcon={true} outlined={false} Icon={<SVG.ImageGalleryIcon color={colors.secondary}/>}  />
          </View>
          <View style={{marginVertical:16}}>
          <Text style={styles.OddText}>OR</Text>
        </View>
          <View>
          <Button title={"Capture using Camera"} haveIcon={true}  outlined={true} Icon={<SVG.CameraIcon color={colors.primary}/>} onPress={onCapturewithCamera} />
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