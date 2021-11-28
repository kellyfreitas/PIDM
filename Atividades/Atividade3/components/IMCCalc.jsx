import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import IMCMsg from "./IMCMsg";

export default class IMCCalc extends Component {

    render() {
        const imc = this.props.peso / (this.props.altura * this.props.altura)

        if (this.props.altura === '0' || this.props.peso === '0')
            return (<Text style={estilos.txtIMC}>
                Tente novamente!
            </Text>)

        if (this.props.altura != null && this.props.peso != null)
            return (
                <View>
                    <Text style={estilos.txtIMC}>
                        Seu IMC é {imc}
                    </Text>
                    <IMCMsg imc={imc} />
                </View>
            )
        return null
    }

}

const estilos = StyleSheet.create(
    {
        txtIMC: {
            fontSize: 22,
            fontWeight: 'bold',
           
        }
    }

)