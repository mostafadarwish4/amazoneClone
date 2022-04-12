import React from "react";
import {View,Text,Image, StyleSheet, } from 'react-native';
import { cartItemProp } from "../helpers/interfaces";
import EmptyList from "./EmptyList";
const Order=({cartItem}:{cartItem:cartItemProp})=>{
//    console.log('ordercard',cartItem) 
    return(
        
           <View style={styles.root}>
                <View style={styles.row}>
                    <Image style={styles.image}  source={{uri:cartItem.product.image}} />
                    <View style={styles.rightContainer}>
                        <Text numberOfLines={3} style={styles.title}>{cartItem.product.title}</Text>
                        <Text style={styles.price}>${cartItem.product.price} </Text>
                        <Text style={{fontSize:18,margin:5}}>
                            <Text style={{fontWeight:'bold',color:'red'}}>{cartItem.quantity} </Text>
                            items {cartItem.option&&<Text >of color <Text style={{fontWeight:'bold',color:cartItem.option?.toLowerCase()}}>{cartItem.option}</Text></Text>}</Text>
                    </View>
                </View>
        </View>

    )
}



export default Order;
const styles=StyleSheet.create({
    root:{
        margin:10,
         padding:5,
         borderWidth:1,
         borderColor:"#d1d1d1",
         justifyContent:'space-between',
         borderRadius:10,
        // backgroundColor:"#fff",
        
         
    },
    row:{
        flex:1,
        flexDirection:'row',

    },
    image:{       
        height:100,
        flex:1,
        marginHorizontal:5,
        resizeMode:"contain",
        borderRadius:2
    },
    rightContainer:{
        flex:2,
       marginLeft:5

    },
    title:{
        fontSize:18,
        color:'#3f6c91',
        marginBottom:5,
    },
    price:{
        fontSize:18,
        fontWeight:'bold',
        color:'#696a6b'
    },
    oldPrice:{
        color:'#8e9194',
        fontSize:10,
        textDecorationLine:"line-through"
    },
    ratingContainer:{
        flexDirection:'row',
        marginVertical:2,
    },
    ratings:{
        fontSize:15,
        marginLeft:5,
        color:"black"
    },
    footer:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    pressable:{
        padding:5,
        //borderWidth:1,
        //borderColor:"#d1d1d1",
        borderRadius:3,
        height:35,
        
    },
    pText:{
        fontSize:15,
        color:'red',
        fontWeight:'bold'
    }
})