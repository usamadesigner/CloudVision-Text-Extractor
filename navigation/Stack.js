import React  from 'react';
import {Platform} from 'react-native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,Result,CaptureImage} from '../screens';

const Stack=createNativeStackNavigator();
const Stacks=()=>{
    return(
        <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name="Home" component={Home} initialParams={{ CapturedImage: '' }}  options={{headerTitle: "AI Text Converter",
        headerStyle: { height:Platform.OS=='android'? 80 : 60,}, 
        headerTitleAlign: 'center',
        headerShadowVisible: false,}}/>
        <Stack.Screen name="Result" component={Result} initialParams={{imageUri:''}} options={{headerShown:true,headerTitleAlign:'left',headerBackButtonMenuEnabled:true}} />
        <Stack.Screen name="CaptureImage" component={CaptureImage} options={{headerShown:false}}/>
      </Stack.Navigator>
    );
}
export default Stacks;