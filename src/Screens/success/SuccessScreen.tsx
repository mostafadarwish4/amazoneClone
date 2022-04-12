import React, { useEffect, useState } from 'react'
import {View,Text,Image, StyleSheet, TouchableOpacity}from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { StackActions, useNavigation } from '@react-navigation/native';


const SuccessScreen=()=>{
    const navigation= useNavigation()
    const[checked,setChk]=useState(false)
    useEffect(()=>{
        if(checked){navigation.dispatch(StackActions.popToTop())}
        
    },[checked])
    
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <View style={styles.top}>
                  <Image  source={require('../../images/check.png')}/>
                  <TouchableOpacity style={styles.pressable}onPress={()=>{
                        setChk(true)
                    }}>
                        <Feather size={30} color='black' name="x"/>
                  </TouchableOpacity> 
                </View>
                <View style={{height:150}}>
                    <Text  style={styles.text}>Your order has been accepted</Text>
                    <Text style={styles.text2}>Your items has been placed and on it's way to be proccessed</Text>
                </View>
                
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    root:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#d7d9d7'
    },
    container:{
        backgroundColor:'white',
        minWidth:'80%',
        borderWidth:1,
        borderColor:'#d7d9d7',
        borderRadius:10,
        },
    top:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#76de9f',
        borderWidth:1,
        borderColor:'#d7d9d7',
        borderRadius:10,
},
    
    text:{
    fontSize:20,
    alignSelf:'center',
    fontWeight:'bold',
    padding:10,
    
    },
    text2:{
    fontSize:18,
    alignSelf:'center',
    marginHorizontal:5,
    color:'grey',
    maxWidth:'90%'
    },
    pressable:{
        padding:5,
        position:'absolute',
        right:5,
        top:5,
        borderRadius:3,
        height:35,
    }
})
export default SuccessScreen;