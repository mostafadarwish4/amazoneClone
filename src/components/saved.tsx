import React, { useRef, useState } from "react";
import {View,Text,Image, Pressable,TouchableOpacity, StyleSheet, } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch } from "react-redux";
import { cartItemProp } from "../helpers/interfaces";
import {deleteSaved,addProduct} from '../store/auth/actions'
const Saved=({cartItem, userId}:{cartItem:cartItemProp,userId:string})=>{
    const [quantity,setQuantity]=useState(cartItem.quantity)
    const dispatch=useDispatch()
   // console.log('cartItem',cartItem)
    
    let trigger=(func:(cartid:string,userid:string)=>any)=>{
         dispatch(func(cartItem._id,userId))
    }
    return(
        
            <View style={styles.root}>
                <View style={styles.row}>
                    <Image style={styles.image}  source={{uri:cartItem.product.image}} />
                    <View style={styles.rightContainer}>
                        <Text numberOfLines={3} style={styles.title}>{cartItem.product.title}</Text>
                        <Text style={styles.price}>${cartItem.product.price}
                            {cartItem.product.oldPrice && (
                            <Text style={styles.oldPrice}> ${cartItem.product.oldPrice.toFixed(2)}</Text>)}
                        </Text>
                        <Pressable style={styles.pressable}
                    onPress={()=>{
                    trigger(addProduct)
                }}>
                    <Text style={styles.pText}>{'Add to cart'}</Text>
                </Pressable>
                    </View>
                    <TouchableOpacity style={styles.pressable}onPress={()=>{
                        trigger(deleteSaved)
                    }}>
                        <Feather size={20} color='grey' name="x"/>
                    </TouchableOpacity> 
                </View>
                
                {/* <View style={styles.footer}>
                
                </View> */}
        </View>

    )
}



export default Saved;
const styles=StyleSheet.create({
    root:{
        margin:10,
         padding:5,
         borderWidth:1,
         borderColor:"#d1d1d1",
         justifyContent:'space-between',
         borderRadius:10,
         backgroundColor:"#fff"
         
    },
    row:{
        //flex:1,
        flexDirection:'row',

    },
    image:{       
        height:'80%',
        flex:2,
        marginHorizontal:2,
        resizeMode:"contain",
        borderRadius:2
    },
    rightContainer:{
        flex:3,
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