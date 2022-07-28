import React  from 'react';
import {Platform,Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,Result,CaptureImage} from './screens';
import { colors, SVG } from './constants';
import Button from './components/Button';
const { width } = Dimensions.get('window');

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerTitle: "AI Text Converter",
        // headerTransparent: true,
        headerStyle: { height:Platform.OS=='android'? 80 : 60}, 
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
        <Stack.Screen name="Home" component={Home} initialParams={{CapturedImage:''}} />
        <Stack.Screen name="Result" component={Result} initialParams={{imageUri:''}}/>
        <Stack.Screen name="CaptureImage" component={CaptureImage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;