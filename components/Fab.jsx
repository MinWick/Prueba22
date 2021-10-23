import React from 'react'
import { View, Text, style } from 'react-native'

/*interface Props{
    positition: 'br' | 'bl';
    size?: 'sm' | 'md' | 'lg';
    title: string;
    onPress: () => void
}*/

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
