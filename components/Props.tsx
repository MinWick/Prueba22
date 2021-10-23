import React from 'react'
import { View, Text, StyleSheet  } from 'react-native'


interface props{

    

}


const Props=() => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}
export default Props

const styles = StyleSheet.create({
    input: {
        borderColor: 'blue',
        borderWidth: 3,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'center',
    },
    inputR: {
        borderColor: 'purple',
        borderWidth: 3,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    button: {
        padding:60,
        position: 'absolute',
        right: 20
    }
})