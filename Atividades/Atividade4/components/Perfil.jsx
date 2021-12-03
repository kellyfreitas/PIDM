import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native';

export default class Perfil extends Component {
    render() {

        let img = { uri: 'https://image.flaticon.com/icons/png/512/64/64495.png' }
        return (
            <View style={estilos.container}>
                <Text style={estilos.title}> Perfil </Text>
                <Image
                    source={img}
                    style={estilos.foto}
                />
                <View style={estilos.agrupar}>
                    <Text style={estilos.title, estilos.txt}>
                        Nome: {this.props.route.params.nome}
                    </Text>
                    <Text style={estilos.title,estilos.txt}>
                        Idade: {this.props.route.params.idade}
                    </Text>
                    <Text style={estilos.title, estilos.txt}>
                        Email: {this.props.route.params.email}
                    </Text>
                </View>
                <View style={estilos.botao}>
                    <Button
                        title='Home'
                        onPress={() => this.props.navigation.navigate('Home')}
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
        agrupar: {
            alignItems: 'flex-start',
        },
        title: {
            fontSize: 28,
            fontWeight: 'bold',
            margin: 5,
            color: '#4d4d4d',

        },
        txt: {
            fontSize: 18,
            fontWeight:500

        },
        botao: {
            width: '35%',
            margin: 20,

        },
        foto: {
            width: 100,
            height: 100,
            borderRadius: 53,
            marginBottom: '10px'
        }
    }

)