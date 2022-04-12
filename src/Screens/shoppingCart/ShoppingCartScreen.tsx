import React, { useEffect, useMemo, useRef, useState } from "react";
import {View, StyleSheet, FlatList,Text, Pressable, Image} from 'react-native';
import { useSelector } from "react-redux";
import styles from "./styles";
import Btn from "../../components/Button";
import EmptyList from "../../components/EmptyList";
import ShopCartItem from "../shopCartItem/ShopCartItem";
import { useNavigation } from "@react-navigation/native";


const ShoppingCartScreen=()=>{
    const navigation=useNavigation()
    const [total,setTotal]=useState(0)
    const user=useSelector(state=>state.user)
    const {products}=user
   const send=()=>{
       const to=user.address?'1':'2'
       navigation.navigate(to)
    }

    return(
        <View style={styles.page}>
       { products.length===0?<EmptyList/>:
       <>
            <Text style={styles.headerText}>Subtotal ({products.length} items) :{' '} 
                <Text style={styles.headersubText}>${total.toFixed(2)}</Text>
            </Text>
            <Btn title="Get to checklist" color="#3c76a6" onClick={send} />
            <FlatList
                data={products}
                renderItem={({item,index})=>(
                <ShopCartItem index={index} setTotal={setTotal} 
                key={item._id} userId={user._id} 
                cartItem={item} />)}
            />
            </>}
        </View>
    )
}


export default ShoppingCartScreen;