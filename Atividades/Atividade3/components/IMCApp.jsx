import React, { Component } from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import IMCCalc from "./IMCCalc";


export default class IMCApp extends Component {
    constructor(props) {
        super(props)
        this.state = { altura: null, peso: null, clicar: false }
    }

    acaoButton = () => {
        
        if (this.state.altura != null || this.state.peso != null) {
            this.setState({ clicar: true })
        }
    }
    
    calculoIMC() {
        if (this.state.clicar)
            return (
                <IMCCalc
                    peso={this.state.peso}
                    altura={this.state.altura}
                />
            )
        return null
    }

    render() {
        return (
            <View style={estilos.container}>
                <Text style={estilos.title}>Calculadora IMC</Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Digite sua altura"
                    onChangeText={
                        (altura) => { this.setState({ altura }) }}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu peso"
                    onChangeText={
                        (novoPeso) => { this.setState({ peso: novoPeso }) }
                    }
                />

                <View style={estilos.botao}>
                    <Button
                        title='Calcular meu IMC'
                        onPress={this.acaoButton}
                    />
                </View>
                {this.calculoIMC()}


            </View>
        )
    }
}

const estilos = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#cbdbff31'

        },
        title: {
            fontSize: 26,
            fontWeight: 'bold',
            margin: 10,
            color: '#4d4d4d'
        },
        input: {
            height: 50,
            width: "87%",
            fontSize: 18,
            borderColor: '#b3b3b3',
            borderWidth: 1.5,
            paddingLeft: 20,
            margin: 10,
            borderRadius: 2

        },
        botao: {
            width: '87%',
            margin: 15,

        }

    }
)