import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const Button = () => {
   const[cantidad, setCantidad] = useState (20) 

    const handlePlus = () => {
        setCantidad(cantidad + 1) 
    }
    const handleSubtract = () => {
        setCantidad(cantidad - 1) 
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>
                {cantidad}
            </Text>
            <TouchableOpacity onPress={handlePlus}
             style={[
                 style.button,
                 style.left
                 
             ]}>

            <Text style={style.textButton}>+1</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSubtract} 
            style={[

                style.button,
                style.rigth
                
            ]}>
            <Text style={style.textButton}>-1</Text>
            </TouchableOpacity>
        </View>
    )

}

export default Button
const style = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'

    },
    title:{
        fontSize: 40,
        color:'black',
    },
    button:{
        backgroundColor: 'blue',
        borderRadius: 100,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems:'center'
    },
    rigth:{
        position:'absolute',
        bottom:20,
        right:20
    },
    left:{
        position:'absolute',
        bottom:20,
        left:20
    },
    textButton: {
        color:'white'
    }
})

