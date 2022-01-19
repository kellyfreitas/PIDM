import React, { useState } from 'react'
import { ScrollView, Button,  TextInput, View, StyleSheet } from 'react-native'
import firebase from '../firebase/firebase_config'

const AddAluno = (props) => {
    const initialState = { nome: '', sobrenome: '', curso: '', ira: '' }
    const [state, setState] = useState(initialState)

    const addNovoAluno = async () => {
        try{
            await firebase.db.collection('alunos')
                       .add({
                           nome: state.nome,
                           sobrenome: state.sobrenome,
                           curso: state.curso,
                           ira: state.ira
                       })
                    props.navigation.navigate('ListAluno')
        }catch(error){
            console.log(error)
        }
    }

    const handleChangeText =(value, name) => {
        setState ({...state,[name]:value})
    }

    return (
        <ScrollView style={estilos.container}>
            <View  style={estilos.campoInput}>
                <TextInput
                    placeholder="Nome"
                    value={state.nome}
                    style={estilos.input}
                    onChangeText={(value)=>handleChangeText(value, 'nome')}
                />
            </View>

            <View  style={estilos.campoInput}>
                <TextInput
                    placeholder="Sobrenome"
                    value={state.sobrenome}
                    style={estilos.input}
                    onChangeText={(value)=>handleChangeText(value, 'sobrenome')}

                />
            </View>

            <View  style={estilos.campoInput}>
                <TextInput
                    placeholder="Curso"
                    value={state.curso}
                    style={estilos.input}
                    onChangeText={(value)=>handleChangeText(value, 'curso')}

                />
            </View>

            <View  style={estilos.campoInput}>
                <TextInput
                    placeholder="Ira"
                    value={state.ira}
                    style={estilos.input}
                    onChangeText={(value)=>handleChangeText(value, 'ira')}

                />
            </View>


            <View style={estilos.botao} >
                <Button
                    title="Adicionar Aluno"
                    onPress={() => addNovoAluno()}
                />
            </View>


        </ScrollView>
    )
}
const estilos = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#cbdbff31',
            padding:30
            
        },
        botao: {
            margin: 20,
        },
        input: {
            height: 25,
            fontSize: 18,
        },
        campoInput:{
            padding:0,
            top: 0,
            marginBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#cccccc' 
    
        }
    }
)

export default AddAluno