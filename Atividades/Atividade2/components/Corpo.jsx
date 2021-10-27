import React, {Component} from "react";
import {Image} from 'react-native';

export default class Corpo extends Component{
    render(){
        let imgAluno ={uri: 'https://image.flaticon.com/icons/png/512/64/64495.png'}

        return (
            <Image 
                source= {imgAluno}
                style={{width:100, height: 100, borderRadius:53, margin:'4px'}}
            />
        )
    }
}