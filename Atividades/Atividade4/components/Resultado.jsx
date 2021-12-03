import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";


const IMCMsg = (props) => {
    if (props.imc < 17) return <Text style={estilos.txtMsg}>Muito abaixo do peso</Text>
    if ((props.imc >= 17) && (props.imc <= 18.49)) return <Text style={estilos.txtMsg}>Abaixo do peso</Text>
    if (props.imc >= 18.5 && props.imc <= 24.99) return <Text style={estilos.pesoNormal}>Peso Normal</Text>
    if (props.imc >= 25 && props.imc <= 29.99) return <Text style={estilos.txtMsg}>Acima do peso </Text>
    if (props.imc >= 30 && props.imc <= 34.99) return <Text style={estilos.txtMsg}>Obesidade I</Text>
    if (props.imc >= 35 && props.imc <= 39.99) return <Text style={estilos.txtMsg}>Obesidade II - Severa </Text>
    if (props.imc >= 40) return <Text style={estilos.txtMsg}>Obesidade III - Mórbida </Text>
    else return ''

}


export default class Resultado extends Component {

    render() {

        const imc = this.props.route.params.peso / (this.props.route.params.altura * this.props.route.params.altura)
        if (this.props.route.params.altura === null || this.props.route.params.peso === null)
            return (
                <Text style={estilos.txtIMC}>
                    Campos vázios. Tente Novamente!

                </Text>)

        if (this.props.route.params.altura != null && this.props.route.params.peso != null)
            return (
                <View style={estilos.container}>
                    <Text style={estilos.title}>Resultado</Text>
                    <View style={estilos.agrupar}>
                        <Text style={estilos.txtIMC}>
                            Seu IMC é {this.props.route.params.peso / (this.props.route.params.altura)}
                        </Text>
                        <IMCMsg imc={imc} />
                    </View>

                    <View style={estilos.botao}>
                        <Button
                            title='Home'
                            onPress={() => this.props.navigation.navigate('Home')}
                        />
                    </View>
                </View>
            )
        return null
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
        agrupar: {
            alignItems: 'flex-start',
        },
        txtIMC: {
            fontSize: 22,
            fontWeight: 'bold',
            marginLeft: 10,
            color: '#4d4d4d'

        },
        txtMsg: {
            fontSize: 22,
            fontWeight: 'bold',
            color: 'red',
            marginLeft: 10

        },
        pesoNormal: {
            fontSize: 22,
            fontWeight: 'bold',
            marginLeft: 10,
            color: 'blue'

        },
        botao: {
            width: '35%',
            margin: 20,

        }
    }

)