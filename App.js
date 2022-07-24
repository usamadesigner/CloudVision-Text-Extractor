import React  from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,Result,CaptureImage} from './screens';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerTitle: "AI Text Converter",
        headerTransparent: true,
        headerStyle: { height: 100 }, 
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
        <Stack.Screen name="Home" component={Home} initialParams={{Image:''}} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="CaptureImage" component={CaptureImage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;