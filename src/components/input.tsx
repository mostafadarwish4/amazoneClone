import React, { useState } from 'react';
import {StyleSheet, Text,TextInput,View} from 'react-native';
interface textInputProps{
    text?:string,
    placeholder?:string,
    value:string,
    onChange:(i?:any)=>void,
    KBtype?:string
}
const Input=({text,placeholder,value,onChange,KBtype}:textInputProps)=>{
    return(
        <View style={styles.root} >
            {text?<Text style={styles.text}>{text}*</Text>:null }
            <TextInput style={styles.input} 
            placeholder={placeholder||''}
            placeholderTextColor='grey'
             value={value} 
             onChangeText={onChange}
             keyboardType={KBtype=='n'?'numeric':'default'}
             />
        </View>
    )
}
const styles=StyleSheet.create({
    root:{
        
    },
    input:{
        height:45,
        width:'90%',
        borderRadius:3,
        borderBottomWidth:1,
        borderColor:'#8e918f',
        marginVertical:5,
        //fontSize:15,
        color:'black'
        
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'grey'
    }
})

export default Input;