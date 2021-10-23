import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, } from 'react-native';
import Props from './Props';

function Convertidor() {

    const [cordoba, setCordoba] = useState('')

    const [dolar, setDolar] = useState('')

    const [euro, setEuro] = useState('')
    
    const [multiplicar, setMultiplicar] = useState(0)

    const handleCordoba = (texto: string) => {
        setCordoba(texto)
    }
    const handleDolar = (texto: string) => {
        setDolar(texto)
    }
    const handleEuro = (texto: string) => {
        setEuro(texto)
    }
    const handleMultiplicar = (texto: string)=>{

        const numero = parseFloat(texto)
        
    }

    const handleCalcular = () => {
        
    }

    return (
     <View>

    <Text
        style={{
        fontSize: 25,
        paddingVertical: 60,
    }}>
        Convertidor
    </Text>
             <Text>
                Cordoba
            </Text>
        <TextInput
        style={styles.input}
    />
       <Text>
                Dolar
            </Text>
        <TextInput
        style={styles.input}
    />
       <Text>
                Euro
            </Text>
        <TextInput
        style={styles.input}
    />


    <Text>Resultado:</Text>
        <TextInput 
         style={styles.inputR}
    />

    <View style={styles.button}>
        <Button 
            title="Calcular"
            onPress={handleCalcular}           
    />
    </View>

    </View>
    )

}

export default Convertidor

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