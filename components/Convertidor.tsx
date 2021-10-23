/*import React from 'react'
import { View, Text, TextInput, StyleSheet, Button, } from 'react-native';

export const Convertidor = () => {

   // const [cantidad, setCantidad] = useState( 0 )

const handleDolar =() =>{
    setCantidad(cantidad * 35.15)
}

    return (
     <View>
         <Text styles={styles.texto}>Hola</Text>
        <Button styles={styles.buttom}> prees</Button>
     </View>
    )
}

export default Convertidor

const styles = StyleSheet.create({
    texto:{
        color:"black",
        backgroundColor:"blue"
    },
    buttom:{
        backgroundColor:"blue"
    }   
})*/
import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, } from 'react-native';

function Convertidor() {

    const [cordoba, setCordoba] = useState('')
    const [dolar, setDolar] = useState('')
    const [Euro, setEuro] = useState(0)

    const handleCordoba = (texto: string) => {
        setCordoba(texto)
    }
    const handleDolar = (texto: string) => {
        setDolar(texto)
    }
    const handleEuro = (texto: string) => {
        const number = parseFloat(texto)
        setEuro(number)
    }

    const handleCalcular = () => {
        

    }

    return (
        <View>

            <Text
                style={{
                    fontSize: 25,
                    paddingVertical: 60,
                }}
            >
                Convertidor
            </Text>
                 <Text>
                     Cordoba
                </Text>
                <TextInput
                style={styles.inputError}
                />


            <Text>Resultado:</Text>
            <TextInput 
                style={styles.inputError}
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
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'center',
    },
    inputError: {
        borderColor: 'red',
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