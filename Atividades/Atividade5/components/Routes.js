import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import AddAluno from './AddAluno'
import EditAluno from './EditAluno'
import ListAluno from './ListAluno'

const MyStack = createStackNavigator()

function PilhaPrincipal() {
    return (
        <NavigationContainer>
            <MyStack.Navigator
                initialRouteName='ListAluno'
                screenOptions={
                    {
                        headerStyle:
                        {
                            backgroundColor: '#cbdbff31'
                        },
                        headerTintColor: '#13293d',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                        }
                    }
                }
            >
                <MyStack.Screen
                    name='AddAluno'
                    component={AddAluno}
                    options={{ title: 'Adicionar novo aluno' }}
                />


                <MyStack.Screen
                    name='EditAluno'
                    component={EditAluno}
                    options={{ title: 'Editar Aluno' }}
                />

                <MyStack.Screen
                    name='ListAluno'
                    component={ListAluno}
                    options={{ title: 'Lista Alunos' }}
                />
            </MyStack.Navigator>

        </NavigationContainer>
    )
}

export default PilhaPrincipal

