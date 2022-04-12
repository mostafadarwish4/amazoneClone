import React from "react";
import {View,Text,Image, TouchableOpacity, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import {productItemProp} from '../../helpers/interfaces'
import { useNavigation } from "@react-navigation/native";
   
const ProductItemScreen=({item}:{item:productItemProp})=>{
    
    const navigation=useNavigation();
    const onPress=()=>{
        navigation.navigate('Details',item);
    }
    return(
        <TouchableOpacity style={styles.root} onPress={onPress} >
            <Image style={styles.image}  source={{uri:item.image}} />
            <View style={styles.rightContainer}>
                <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
                
                {/* rate */}
                
            <View style={styles.ratingContainer}>
                {
                    [0,0,0,0,0].map((data,index)=>(
                        <FontAwesome
                        key={`${item._id}-${index}`}
                        name={index < Math.floor(item.avgRatings) ? 'star' : 'star-o'}
                        size={18}
                        color={'#e47911'}
                    />
                        ))
                }
                <Text style={styles.ratings}>{item.ratings}</Text>
            </View>
                <Text style={styles.price}>${item.price}
                    {item.oldPrice && (
                    <Text style={styles.oldPrice}> ${item.oldPrice.toFixed(2)}</Text>)}
                </Text>
            </View>
        </TouchableOpacity>
    )
}



export default ProductItemScreen;