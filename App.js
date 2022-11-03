import React  from 'react';
import {Platform, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,Result,CaptureImage} from './screens';
import { RootSiblingParent } from 'react-native-root-siblings';
import ThemeWrapper from './themes/Themewrapper';
import ThemeProvider  from './themes';
import Menu from './screens/Menu'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <RootSiblingParent>
 <ThemeProvider>
  <ThemeWrapper>
    <NavigationContainer  >
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerTitle: "AI Text Converter",
        headerStyle: { height:Platform.OS=='android'? 80 : 60,}, 
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
        <Stack.Group>
        <Stack.Screen name="Home" component={Home} initialParams={{ CapturedImage: '' }} />
        <Stack.Screen name="Result" component={Result} initialParams={{imageUri:''}} options={{headerShown:true,headerTitleAlign:'left',headerBackButtonMenuEnabled:true}}/>
        <Stack.Screen name="CaptureImage" component={CaptureImage} options={{headerShown:false}}/>
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen  name='Menu' component={Menu} options={{headerShown:false}}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeWrapper>
 </ThemeProvider>
  </RootSiblingParent>
  );
}

export default App;