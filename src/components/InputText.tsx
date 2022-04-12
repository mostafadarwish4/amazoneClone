import React, { useState } from 'react';
import {StyleSheet, Text,TextInput,View} from 'react-native';
interface textInputProps{
    text?:string,
    placeholder?:string,
    value:string,
    onChange:(i?:any)=>void,
    KBtype?:string
}
const InputText=({text,placeholder,value,onChange,KBtype}:textInputProps)=>{
    return(
        <View>
            {text?<Text style={styles.text}>{text}</Text>:null }
            <TextInput style={styles.input} 
            placeholder={placeholder||''}
             value={value} 
             onChangeText={onChange}
             keyboardType={KBtype=='n'?'numeric':'default'}
             />
        </View>
    )
}
const styles=StyleSheet.create({
    input:{
        height:50,
        minWidth:'95%',
        borderRadius:3,
        borderWidth:1,
        borderColor:'#8e918f',
        marginVertical:5,
        fontSize:18,
        color:'grey'
        //backgroundColor:'snow'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'grey'
    }
})

export default InputText;