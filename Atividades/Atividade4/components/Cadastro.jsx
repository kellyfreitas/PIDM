import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

export default class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = { nome: null, idade: null, email: null }
    }
    render() {
        return (
            <View style={estilos.container}>
                <Text style={estilos.title}> Cadastre-se </Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu nome"
                    onChangeText={
                        (nome) => { this.setState({ nome }) }
                    }
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite sua idade"
                    onChangeText={
                        (idade) => { this.setState({ idade }) }
                    }
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu email"
                    onChangeText={
                        (email) => { this.setState({ email }) }
                    }
                />
                <View style={estilos.botao}>
                    <Button
                        title='OK'
                        onPress={
                            // () => this.props.navigation.push('Perfil', { nome: this.state.nome, idade: this.state.idade, email: this.state.email })}
                            () => this.props.navigation.navigate('Perfil', { nome: this.state.nome, idade: this.state.idade, email: this.state.email })}
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
        input: {
            height: 50,
            width: "87%",
            fontSize: 18,
            borderColor: '#b3b3b3',
            borderWidth: 1.5,
            paddingLeft: 20,
            margin: 10,
            borderRadius: 2

        }
    }

)