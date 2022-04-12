import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PriceContainer=({price,oldPrice}:any)=>{
    return(
        <View style={styles.root}>
             
              <Text style={styles.price}>Buy price: <Text style={{color:'#0f5edb'}}>${price}</Text></Text>
              {(oldPrice&&<Text style={styles.oldPrice}>${oldPrice}</Text>)}
              <Text numberOfLines={3}></Text>
          </View> 
    )
}
const styles=StyleSheet.create({
    root:{
        padding:5,
        alignItems:"center",
        flexDirection:"row"
    },
    price:{
        marginRight:5,
        fontWeight:"bold",
        fontSize:18,
    },
    oldPrice:{
        color:"grey",
        fontSize:12,
        textDecorationLine:"line-through",
    }
})
export default PriceContainer;



