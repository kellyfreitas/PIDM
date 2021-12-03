import React, {Component} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Sobre extends Component {
    render(){
        return (
            <View style={estilos.container}>
                <Text style={estilos.title}>Sobre</Text>
                <Text style={estilos.texto}>Essa é a atividade 04 da disciplina de Projeto de Interface Web para Dispositivos Móveis</Text>


                <View style={estilos.botao}>
                <Button
                    title= 'Home'
                    onPress={()=>this.props.navigation.goBack()}
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
            fontSize: 28,
            fontWeight: 'bold',
            margin: 10,
            color: '#4d4d4d'
        },
    
        botao: {
            width: '35%',
            margin: 20,

        },
        texto:{
            fontSize: 20,
            fontWeight: 400,
            color: '#4d4d4d',
            marginLeft:25,
            marginRight:25

        }

    }

)