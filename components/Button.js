import React from 'react';
import { View ,StyleSheet,Text,Dimensions, TouchableOpacity} from 'react-native'
import { colors } from '../constants';

const { width, height } = Dimensions.get('window');
function Button({outlined,onPress,title,Icon,haveIcon}) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container,
            {
                backgroundColor: outlined ? colors.secondary : colors.primary,
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
            <Text style={[styles.__ButtonText,{color:outlined?colors.primary:colors.secondary}]}>
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
        width: width - 40,
        borderWidth: 1,
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