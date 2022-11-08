import React from "react";
import { View, Text, Pressable, Linking, Platform } from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer";
import Stacks from "./Stack";
import { SVG } from "../constants";
import { useTheme } from "../themes";
import OrgLogo from '../constants/Svg/OrgLogo';
import { useNavigation } from "@react-navigation/native";

const Drawers = createDrawerNavigator();
const Contact = () => {

    //Function to Open Location 
    function openMap(){
        const url = Platform.select({
            ios: `maps:0,0?q=Taxila, Rawalpindi, Punjab, Pakistan`,
            android: `geo:0,0?q=Taxila, Rawalpindi, Punjab, Pakistan`,
          })
        Linking.openURL(url);  
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
            <View style={{ width: 334, height: 180, marginTop: 24, alignItems: 'center', justifyContent: 'center', shadowOffset: { width: 0, height: 3 }, shadowColor: '#c4c4c4', shadowRadius: 5, shadowOpacity: 0.2, backgroundColor: '#fff', borderRadius: 20,elevation:2 }}>
                <OrgLogo />
            </View>
            <View style={{ margin: 20,width:'100%'}}>
                <Pressable onPress={()=>openMap()} style={{padding:20,width:'100%',borderRadius:10}} android_ripple={{borderless:false,radius:300,color:'#c4c4c4'}}>
                <Text style={{ fontSize: 16, fontWeight: '400', fontStyle: 'normal', textAlign: 'center', color: '#3E7FFF',marginBottom:16 }} textBreakStrategy="highQuality">📍 Wah Cantt , Pakistan</Text>
                </Pressable>
               <Pressable onPress={()=>Linking.openURL(`tel:00923219520029`)} style={{padding:20,width:'100%',borderRadius:10}} android_ripple={{borderless:false,radius:300,color:'#c4c4c4'}}>
                <Text style={{ fontSize: 16, fontWeight: '400', fontStyle: 'normal', textAlign: 'center', color: '#3E7FFF',marginBottom:16 }} textBreakStrategy="highQuality">🤙 00923219520029</Text>
               </Pressable>
               <Pressable onPress={()=>Linking.openURL(`whatsapp://send?phone=+923219520029`)} style={{padding:20,width:'100%',borderRadius:10}} android_ripple={{borderless:false,radius:300,color:'#c4c4c4'}} >
                <Text style={{ fontSize: 16, fontWeight: '400', fontStyle: 'normal',textAlign: 'center', color: '#3E7FFF',marginBottom:16 }} textBreakStrategy="highQuality"> 📞 Call us On Whatsapp</Text>
               </Pressable>
                <Pressable onPress={()=>Linking.openURL('mailto:ghareebdevelopers@gmail.com')} style={{padding:20,width:'100%',borderRadius:10}} android_ripple={{borderless:false,radius:300,color:'#c4c4c4'}} >
                    <Text style={{ fontSize: 16, fontWeight: '400', fontStyle: 'normal', textAlign: 'center', color: '#3E7FFF',marginBottom:16 }} textBreakStrategy="highQuality">📨 ghareebdevelopers@gmail.com</Text>
                </Pressable>

            </View>
        </View>
    )
}
const About = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
            <View style={{ width: 334, height: 180, marginTop: 24, alignItems: 'center', justifyContent: 'center', shadowOffset: { width: 0, height: 3 }, shadowColor: '#c4c4c4', shadowRadius: 5, shadowOpacity: 0.2, backgroundColor: '#fff', borderRadius: 20 }}>
                <OrgLogo />
            </View>
            <View style={{ margin: 28 }}>
                <Text style={{ fontSize: 14, fontWeight: '400', fontStyle: 'normal', lineHeight: 28, textAlign: 'left' }} textBreakStrategy="highQuality">
                    We are a Duo Developers from Pakistan working
                    on projects that can make an impact or bring a
                    change in our system by helping young minds and
                    encouraging them to learn skills that matter rather
                    than wasting time in their early stage of life.
                </Text>
                <Text style={{ fontSize: 14, fontWeight: '400', fontStyle: 'normal', lineHeight: 28, textAlign: 'left' }} textBreakStrategy="highQuality">
                    For any inquiry or Project that you would like to
                    have hire us for or would like to get a course that could help you become a better Developer <Pressable onPress={() => navigation.navigate('GetinTouch')} style={{ marginBottom: 2 }} hitSlop={25}><Text style={{ color: '#3E7FFF' }}>Contact Us here</Text></Pressable>
                </Text>
            </View>
        </View>
    )
}



const Drawer = () => {
    const { theme } = useTheme();

    return (
        <Drawers.Navigator screenOptions={{
            lazy: true, drawerIcon: () => { <SVG.MenuIcon color={theme.primary} /> },
            drawerType: 'back',
            freezeOnBlur: true,
            drawerContentContainerStyle: { flex: 1, backgroundColor: theme.background },
            drawerActiveBackgroundColor: theme.primary,
            drawerActiveTintColor: theme.secondary,
            unmountOnBlur: true,
            swipeMinDistance: 200,
            swipeEnabled: true,
            drawerInactiveTintColor: theme.primary
        }}
        >
            <Drawers.Screen name="Main" component={Stacks} options={{ headerShown: false, title: 'Home', }} />
            <Drawers.Screen name="GetinTouch" component={Contact} options={{ headerTitle: "Get In Touch" }} />
            <Drawers.Screen name="AboutUs" component={About} options={{ headerTitle: "About Us" }} />
        </Drawers.Navigator>
    );
}

export default Drawer;