import React, { useEffect, useState } from "react"
import { Button, ScrollView, StyleSheet,  View } from 'react-native'
import { TextInput } from "react-native-gesture-handler"
import firebase from "../firebase/firebase_config"

const EditAluno = (props) => {

    const initialState = { id:'', nome:'', sobrenome:'', curso:'', ira:'' }
    const [aluno, setAluno] = useState(initialState)


    useEffect(() => {
        getAlunoById(props.route.params.alunoId)

    }, [])

    const getAlunoById = async (id) => {

        const dbRef = firebase.db.collection('alunos').doc(id)
        const doc = await dbRef.get()
        const aluno = doc.data()
        setAluno({ ...aluno, id: doc.id })
    }

    const deletarAluno = async () => {
        const dbRef = firebase.db.collection('alunos').doc(props.route.params.alunoId)
        await dbRef.delete()
        props.navigation.navigate('ListAluno')
    }

    const handleChangeText = (value, prop) => {
        setAluno({ ...aluno, [prop]: value })
    }

    const AtualizarAluno = async () => {

        const alunoRef = firebase.db.collection('alunos').doc(aluno.id)
        await alunoRef.set({
            nome: aluno.nome,
            sobrenome: aluno.sobrenome,
            curso: aluno.curso,
            ira: aluno.ira
        })
        setAluno(initialState)
        props.navigation.navigate('ListAluno')

    }

    return (
        <ScrollView style={estilos.container}>
            <View style={estilos.campoInput}>
                <TextInput
                    placeholder="Nome"
                    style={estilos.input}
                    value={aluno.nome}
                    onChangeText={(value) => handleChangeText(value, 'nome')}

                />
            </View>

            <View style={estilos.campoInput}>
                <TextInput
                    placeholder="Sobrenome"
                    style={estilos.input}
                    value={aluno.sobrenome}
                    onChangeText={(value) => handleChangeText(value, 'sobrenome')}

                />
            </View>

            <View style={estilos.campoInput}>
                <TextInput
                    placeholder="Curso"
                    style={estilos.input}
                    value={aluno.curso}
                    onChangeText={(value) => handleChangeText(value, 'curso')}

                />
            </View>

            <View style={estilos.campoInput}>
                <TextInput
                    placeholder="Ira"
                    style={estilos.input}
                    value={aluno.ira}
                    onChangeText={(value) => handleChangeText(value, 'ira')}

                />
            </View>

            <View style={estilos.botao}>
                <Button
                    title="Atualizar"
                    color='#5E96FE'
                    onPress={() => AtualizarAluno()}
                
                />
            </View>

            <View style={estilos.botao}>
                <Button
                    title="Excluir"
                    color='#FE5E5E'
                    onPress={() => deletarAluno()}
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
            padding: 30
        },
        botao: {
            margin: 13,
        },
        input: {
            fontSize: 18,
            paddingLeft: 8
        },
        campoInput: {
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#b1b1b1'
        }
    }
)
export default EditAluno