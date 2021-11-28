import React from "react";
import { StyleSheet, Text } from "react-native";



const IMCMsg = (props)=>{
    if (props.imc<17) return <Text style={estilos.txtMsg}> Muito abaixo do peso</Text>
    if ((props.imc>=17) && (props.imc<= 18.49)) return <Text style={estilos.txtMsg}> Abaixo do peso</Text>
    if (props.imc>=18.5 && props.imc<=24.99) return <Text style={estilos.pesoNormal}> Peso Normal</Text>
    if (props.imc>=25 && props.imc<=29.99) return <Text style={estilos.txtMsg}> Acima do peso </Text>
    if (props.imc>=30 && props.imc<=34.99) return <Text style={estilos.txtMsg}> Obesidade I</Text>
    if (props.imc>=35 && props.imc<=39.99) return <Text style={estilos.txtMsg}> Obesidade II - Severa </Text>
    if (props.imc>=40) return <Text style={estilos.txtMsg}> Obesidade III - Mórbida </Text>
    else return ''

}



const estilos =StyleSheet.create(
    {
        txtMsg:{
            fontSize:22,
            fontWeight:'bold',
            color:'red'
         
        },
        pesoNormal:{
            fontSize:22,
            fontWeight:'bold',
            color:'blue'

        }
    }
)
export default IMCMsg