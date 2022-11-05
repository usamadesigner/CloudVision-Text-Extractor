import React from "react";
import { View, Text } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Stacks from "./Stack";
import { SVG } from "../constants";
import { useTheme } from "../themes";
import Animated from "react-native-reanimated";
import { CameraIcon } from "../constants/Svg";

const Drawers = createDrawerNavigator();

const Contact = () => {
    return (
        <View style={{flex:1,justifyContent:'center'}}>
            <Text>
Contact us
            </Text>
        </View>
    )
}
const About = () => {
    return (
        <View>
            <Text>
                Rate us
            </Text>
        </View>
    )
}



const Drawer = () => {
    const { theme } = useTheme();

    return (
        <Drawers.Navigator screenOptions={{
            drawerHideStatusBarOnOpen: true,
            lazy: true, drawerIcon: () => { <SVG.MenuIcon color={theme.primary} /> },
            drawerType: 'back',
            freezeOnBlur:true,
            drawerContentContainerStyle: { flex: 1, backgroundColor: theme.background },
            drawerActiveBackgroundColor: theme.primary,
            drawerActiveTintColor: theme.secondary,
            unmountOnBlur: true,
            swipeMinDistance:200,
            swipeEnabled:true,
            drawerInactiveTintColor: theme.primary
        }}
        >
            <Drawers.Screen name="Main" component={Stacks} options={{ headerShown: false, title: 'Home',}} />
            <Drawers.Screen name="GetinTouch" component={Contact} />
            <Drawers.Screen name="AboutUs" component={About} />
        </Drawers.Navigator>
    );
}

export default Drawer;