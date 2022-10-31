import { View, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../constants'
const FloatingButton = (props) => {
  return (
    <Pressable style={{
        position:"absolute",
        alignSelf:'center',
        backgroundColor:'#fff',
        bottom:props.bottom,
        right:20,
        padding:20,
        borderRadius:150,
        shadowColor:`${colors.primary}40`,
        shadowOffset:{
          width:0,
          height:2
        },
        shadowOpacity:0.5,
        shadowRadius:10,
        elevation:2
      }}
      onPress={props.onClick}
      android_ripple={{borderless:true,radius:40,color:'#c4c4c450'}}
      >
        {props.icon}
        </Pressable>
  )
}

export default FloatingButton