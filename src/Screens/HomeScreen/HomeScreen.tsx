import React, { useEffect } from "react";
import {View, StyleSheet, FlatList} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/actions";
import ProductItemScreen from "../productItem/ProductItemScreen";


const HomeScreen=({search,navigation}:any)=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        navigation.addListener('focus',()=>{dispatch(getProducts())})
    },[])
    const products=useSelector((state:{products:any})=>state.products)
    return(
        <View style={styles.page}>
            <FlatList
                data={products.filter(product=>(product.title.toLowerCase().match(new RegExp(search.toLowerCase()))))}
                renderItem={({item})=><ProductItemScreen key={item.id} item={item} />}
            />
           
        </View>
    )
}

const styles=StyleSheet.create({
   page:{
       padding:10,
       fontWeight:'normal',
   } 
})

export default HomeScreen;