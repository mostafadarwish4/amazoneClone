import React, { useEffect, useRef, useState } from "react";
import {View,Text,Image, Pressable, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from "react-redux";
import QuantitySelector from "../../components/quantitySelector";
import {cartItemProp} from '../../helpers/interfaces'
import styles from './styles' 
import {saveProduct,deleteProduct} from '../../store/auth/actions'

const ShopCartItem=({cartItem, userId,setTotal,index}:{cartItem:cartItemProp,userId:any,setTotal:any,index:number})=>{
    const [quantity,setQuantity]=useState(cartItem.quantity)
    const dispatch=useDispatch()
    
    return(
        
            <View style={styles.root}>
                <View style={styles.row}>
                    <Image style={styles.image}  source={{uri:cartItem.product.image}} />
                    <View style={styles.rightContainer}>
                        <Text numberOfLines={3} style={styles.title}>{cartItem.product.title}</Text>
                        
                        {/* rate */}
                        
                    <View style={styles.ratingContainer}>
                        {
                            [0,0,0,0,0].map((data,index)=>(
                                <FontAwesome
                                key={`${cartItem.product._id}-${index}`}
                                name={index < Math.floor(cartItem.product.avgRatings) ? 'star' : 'star-o'}
                                size={18}
                                color={'#e47911'}
                            />
                                ))
                        }
                        <Text style={styles.ratings}>{cartItem.product.ratings}</Text>
                    </View>
                        <Text style={styles.price}>${cartItem.product.price}
                            {cartItem.product.oldPrice && (
                            <Text style={styles.oldPrice}> ${cartItem.product.oldPrice.toFixed(2)}</Text>)}
                        </Text>
                        <QuantitySelector index={index} maxQuantity={cartItem.product.quantity} setTotal={setTotal} price={cartItem.product.price} quantity={quantity} setQuantity={setQuantity}/>
                        <View style={styles.footer}>
                            <Pressable style={[styles.pressable,]}onPress={()=>{
                             setTotal(total=>(total-(cartItem.quantity*cartItem.product.price)))
                            dispatch(deleteProduct(cartItem._id,userId))
                        }}>
                                <Text style={styles.pText}>Delete</Text>
                            </Pressable> 
                            <Pressable style={[styles.pressable,]}
                                onPress={()=>{
                                setTotal(total=>(total-(cartItem.quantity*cartItem.product.price)))
                                dispatch(saveProduct(cartItem._id,userId))
                            }}>
                                <Text style={styles.pText}>{'Save for later'}</Text>
                            </Pressable>
                    </View>
                </View>
                </View>
                
                {/* {save?null:<QuantitySelector  quantity={quantity} setQuantity={setQuantity} setTotal={setTotal} price={cartItem.price} />} */}
               
        </View>

    )
}



export default ShopCartItem;