import React from 'react'
import { Pressable, StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Btn=({title,color,onClick}:{title:string,color:string,onClick:(i?:any)=>void})=>{
    return(
            <TouchableOpacity style={[styles.button,{backgroundColor:color}]} onPress={onClick} >
              <Text style={styles.text}>{title}</Text> 
            </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    root:{
        margin:5,
    },
    button:{
        marginBottom:10,
        borderRadius:5,
        backgroundColor:"#f0ca95",//
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"#aec5eb",
        borderWidth:1,
        margin:5
    },
    text:{
        fontSize:20,
        fontWeight:'500',
        color:'snow'
    }

})

export default Btn;