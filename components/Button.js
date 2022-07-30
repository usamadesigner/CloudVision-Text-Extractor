import React from 'react';
import { View ,StyleSheet,Text,Dimensions, TouchableOpacity} from 'react-native'
import { colors } from '../constants';

const { width, height } = Dimensions.get('window');
function Button({outlined,onPress,title,Icon,haveIcon,widthProp,filledColor,borderwidth,textColor}) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container,
            {
                backgroundColor: outlined ? colors.secondary : filledColor || colors.primary,
                borderWidth:borderwidth || 0,
                width:widthProp || width-40,
            }]}>
            <>
            {
                haveIcon ? (
                    <View style={styles.__IconView}>
                {Icon}
            </View>
                ) : (
                        null
                )
            }  
            <Text style={[styles.__ButtonText,{color:textColor}]}>
                {title}
            </Text>
            </>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingVertical: 12,
        borderColor:colors.primary,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    __IconView: {
        marginRight:16
    },
    __ButtonText: {
        fontSize: 16,
    }
})

export default Button;