import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Sobre from "./Sobre";
import Cadastro from './Cadastro';
import Perfil from './Perfil';
import IMC from './IMC';
import Resultado from './Resultado';

const PilhaPrincipal = createStackNavigator()
const PilhaModal = createStackNavigator()



function PilhaPrincipalTelas(){
    return(
        <PilhaPrincipal.Navigator
            initialRouteName='Home'
            screenOptions={Home.estiloGeral}
        >
            <PilhaPrincipal.Screen 
                name='Home' 
                component={Home}
                options={{title:'Tela Inicial'}} />
            <PilhaPrincipal.Screen 
                name='Cadastro' 
                component={Cadastro} 
                 />
            <PilhaPrincipal.Screen 
                name='imc' 
                component={IMC}
                options={{title: 'Calculadora imc'}} />
            <PilhaPrincipal.Screen 
                name='Resultado' 
                component={Resultado} />
            <PilhaPrincipal.Screen 
                name='sobre' 
                component={Sobre} 
                options={{title: 'Sobre'}}/>


        </PilhaPrincipal.Navigator>
    )
}

function PilhaModalTelas(){
    return(
        <NavigationContainer>
            <PilhaModal.Navigator>
                <PilhaModal.Screen 
                    name='Principal' 
                    component={PilhaPrincipalTelas}
                    options={{headerShown:false}} 
                    />
                <PilhaModal.Screen 
                    name='Perfil' 
                    component={Perfil}
                    options={Home.estiloGeral,{headerShown:false}} />

            </PilhaModal.Navigator>
        </NavigationContainer>
        

    )
}

export default PilhaModalTelas



