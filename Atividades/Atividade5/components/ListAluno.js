import React , {useEffect, useState} from "react"
import { Button} from 'react-native'
import { Avatar, ListItem } from "react-native-elements"
import {ScrollView} from'react-native-gesture-handler'
import firebase from "../firebase/firebase_config"

const ListAluno = (props)=>{

    const [alunos,setAlunos] = useState([])


    useEffect(()=> {
        firebase.db.collection('alunos').onSnapshot(
            (queryOnSnapshot) => {
                const alunos = []
                queryOnSnapshot.docs.forEach(
                    (doc)=> {
                        const {nome, sobrenome, curso, ira} = doc.data()
                        alunos.push({id: doc.id, nome, sobrenome, curso,ira})
                    }
                )
                setAlunos(alunos)
            }
        )
    },[])


    return (
        <ScrollView style={{backgroundColor:'#cbdbff31'}}> 

            <Button 
                onPress={()=> props.navigation.navigate('AddAluno')}
                title="Inserir Aluno"
                
            />


            {
                alunos.map(
                    (aluno) => {
                        return(
                            <ListItem key={aluno.id} 
                                      bottomDivider  
                                      onPress={()=>props.navigation.navigate("EditAluno", {alunoId:aluno.id})}
                                      containerStyle={{backgroundColor:'#cbdbff31'}}
                            >
                                <ListItem.Chevron  />
                                <Avatar rounded source={{uri: 'https://image.flaticon.com/icons/png/512/64/64495.png' }} />
                                <ListItem.Content>
                                    <ListItem.Title>{aluno.nome} {aluno.sobrenome} </ListItem.Title>
                                    <ListItem.Subtitle>curso: {aluno.curso}</ListItem.Subtitle>
                                    <ListItem.Subtitle>ira: {aluno.ira}</ListItem.Subtitle>

                                </ListItem.Content>
                            </ListItem>
                        )
                    }
                )
            }

        </ScrollView>
       
    )
}

export default ListAluno