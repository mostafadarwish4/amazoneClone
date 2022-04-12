import React, { useState } from 'react';
import {View,Text, StyleSheet, Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

interface quantityProps{
    quantity:number,
    setQuantity:(q:any)=>void
}
const CartItemFooter=({quantity,setQuantity}:quantityProps)=>{
    const onPlus=()=>{
        setQuantity((q:number)=>q+1)
    }
    const onMinus=()=>{
        setQuantity((q:number)=>Math.max(0,q-1) )
    }
    return(
    <View style={styles.optionContainer}>
        {/* <Text style={[{fontSize:15,fontWeight:'bold',color:'black'}]}>Quantity : </Text> */}
       <Pressable style={styles.Pressable} onPress={onMinus}>
            <Icon name="minus" size={20} color="black" />       
        </Pressable > 
        <Text style={styles.text}>{quantity}</Text>
        <Pressable style={styles.Pressable} onPress={onPlus}  >
            <Icon name='plus' size={20} color='black'/>
        </Pressable>
           
    </View>

    )
}
export default CartItemFooter;
const styles=StyleSheet.create({
    optionContainer:{
        flexDirection:'row',
        alignItems:"center",
        borderRadius:5,
        height:60,
        color:"red"
       
    },
    Pressable:{
       backgroundColor:'#d1d1d1',
       height:35,
       width:35,
       alignItems:'center',
       justifyContent:'center',
       marginHorizontal:5,
       
       
    },
    text:{
        fontWeight:"normal",
        fontSize:15,
        marginHorizontal:15,
    }

})