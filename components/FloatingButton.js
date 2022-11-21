import { View, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../constants'
import { useTheme } from '../themes';
const FloatingButton = (props) => {
  const {theme}=useTheme();
  return (
    <Pressable style={{
        position:"absolute",
        alignSelf:'center',
        zIndex:10000,
        backgroundColor:theme.background,
        bottom:props.bottom,
        right:20,
        padding:20,
        borderRadius:40,
        shadowColor:`${colors.primary}20`,
        shadowOffset:{
          width:0,
          height:2
        },
        shadowOpacity:0.5,
        shadowRadius:10,
      }}
      onPress={props.onClick}
      android_ripple={{borderless:true,radius:40,color:'#c4c4c450'}}
      >
        {props.icon}
        </Pressable>
  )
}

export default FloatingButton