import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Home extends Component {

    static estiloGeral = {
        headerStyle:
            {
                backgroundColor: '#cbdbff31'
            },
        headerTintColor: '#13293d',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20
        }
    } 
    render() {
        return (
            <View style={estilos.container}>
                <Text style={estilos.title}> Atividade 04 </Text>

                <View style={estilos.botao}>
                    <Button
                        title='Cadastro'
                        onPress={() => this.props.navigation.navigate('Cadastro')}
                    />
                </View>
                <View style={estilos.botao}>
                    <Button
                        title='IMC'
                        onPress={() => this.props.navigation.navigate('imc')}
                    />
                </View>
                <View style={estilos.botao}>
                    <Button
                        title='Sobre'
                        onPress={() => this.props.navigation.navigate('sobre')}
                    />
                </View>
            </View>

        )
    }
}

const estilos = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'column',
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
        botao: {
            width: '65%',
            margin: 15,

        }
    }

)