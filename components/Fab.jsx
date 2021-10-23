import React from 'react'
import { View, Text, style } from 'react-native'

interface Props{
    positition: 'br' | 'bl';
    size?: 'sm' | 'md' | 'lg';
    title: string;
    onPress: () => void
}

const FloatingActionButton = ({ size, positition, title, onPress}) => {
    return (
        <TouchableOpacity onPress={handlePlus}
        style={[
            style.button,
            positition === 'br' ? style.rigth: style.left,
            size === 'sm' ? style.sm : null,
            size === 'lg' ? style.sm : null
        ]}/>
    )
}

export default  Fab

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
    sm:{
        height: 30,
        width: 30,
    },
    lg:{
        height: 70,
        width: 70,
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