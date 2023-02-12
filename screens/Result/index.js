import * as React from 'react'
import { View, Text, Dimensions, TextInput, Pressable, ScrollView } from 'react-native';
import Button from '../../components/Button';
import { SVG } from '../../constants';
import * as Clipboard from 'expo-clipboard';
import Lottie from 'lottie-react-native'
const { height } = Dimensions.get('window');
import Toast from 'react-native-root-toast';
import FloatingButton from '../../components/FloatingButton';
import { useTheme } from '../../themes';


const Result = ({ navigation, route }) => {
  let BOTTOM = 60;
  const { ExtractedResponse } = route.params;
  const inputRef = React.useRef();
  const [ExtractedText, setExtractedText] = React.useState(ExtractedResponse);
  const [isEditable, setisEditable] = React.useState(false)
  const [fontSize, setfontSize] = React.useState(18);
  const { theme } = useTheme();
  const copyToClipboard = () => {
    Clipboard.setStringAsync(ExtractedText);
    Toast.show('Text Copied Successfully.', {
      duration: Toast.durations.LONG,
      shadow: true,
      shadowColor: theme.Attention,
      animation: true,
      position: height - 110,
      keyboardAvoiding: true,
      textColor: theme.secondary,
      backgroundColor: theme.primary,
      containerStyle: { borderRadius: 40 }

    });
  };
  const EditingText = () => {
    if (isEditable) {
      setisEditable(false);
      Toast.show('Text Updated Successfully.', {
        duration: Toast.durations.SHORT,
        shadow: true,
        textColor: theme.secondary,
        backgroundColor: theme.primary,
        shadowColor: theme.Attention,
        animation: true,
        position: height - 110,
        keyboardAvoiding: true,
        containerStyle: { borderRadius: 40 }

      });
    }
    else {
      setisEditable(true);
      Toast.show('You can Edit Now!', {
        duration: Toast.durations.SHORT,
        shadow: true,
        textColor: theme.secondary,
        backgroundColor: theme.primary,
        shadowColor: theme.Attention,
        animation: true,
        position: height - 110,
        keyboardAvoiding: true,
        containerStyle: { borderRadius: 40, }

      });
    }
  }

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: ExtractedResponse !== '' ? 'Extracted Text' : 'No Text Found',
      headerStyle: { backgroundColor: theme.background },
      headerTitleStyle: { color: theme.primary },
      headerTitleAlign: 'left',
      headerRight: () => (
        <Pressable onPress={() => { fontSize === 18 ? setfontSize(20) : fontSize === 20 ? setfontSize(22) : fontSize == 22 ? setfontSize(18) : setfontSize(20) }}
          android_ripple={{ borderless: true, radius: 30, color: '#c4c4c4' }} hitSlop={20}
        >
          <Text style={{ color: theme.primary, padding: 10 }}>
            {
              fontSize === 18 ?
                'Aå'
                : fontSize == 20 ?
                  'Aa'
                  :
                  'AA'
            }
          </Text>
        </Pressable>
      )

    })
  }, [navigation, fontSize])

  if (ExtractedResponse === "") {
    return (
      <View style={{ flex: 1, zIndex: 100, alignItems: 'center', justifyContent: "center", backgroundColor: theme.background }}>
        <Lottie source={require('../../assets/empty.json')} autoPlay style={{ width: '100%', height: height / 1.7, opacity: 1 }} />
        <View style={{ position: 'absolute', bottom: 60 }}>
          <Button title={'Let\'s try a new one'} filledColor={theme.Attention} onPress={() => navigation.navigate('Home', {
            CapturedImage: ''
          })} />
        </View>
      </View>
    );
  }
  else
    return (
      <View style={{ flex: 1, marginTop: 1, paddingTop: 20, backgroundColor: theme.background }}>
        <View style={{ paddingHorizontal: 15,zIndex:-100  }}>
          {!isEditable ? (
            <ScrollView style={{ backgroundColor: theme.background  }} showsVerticalScrollIndicator={false} >
              <Text style={{ color: theme.primary, fontSize: fontSize }}>
                {ExtractedText}
              </Text>
            </ScrollView>
          ) : (
            <TextInput
              ref={inputRef}
              style={{ color: theme.primary, fontSize: fontSize}}
              value={ExtractedText}
              placeholder={'You removed all the text'}
              placeholderTextColor="#c4c4c4"
              onChangeText={(text) => setExtractedText(text)}
              multiline={true}
              editable={isEditable} />
          )}
        </View>
        <FloatingButton icon={isEditable ? <SVG.Tick color={theme.primary} /> : <SVG.Edit color={theme.primary} />} onClick={() => EditingText()} bottom={BOTTOM * 2.3} />
        <FloatingButton icon={<SVG.CopyIcon color={theme.primary}/>} onClick={() => copyToClipboard()} bottom={BOTTOM} />
      </View>
    )
}
export default Result;