import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView,Text, View,ActivityIndicator } from 'react-native';
import styles from './styles';
import PriceContainer from '../../components/price';
import Btn from '../../components/Button';
import OptionSelector from '../../components/optionSelector';
import ImageCarousel from '../../components/imageCarousel';
import { useDispatch, useSelector } from 'react-redux';
import {addProduct,getProduct,addCart} from '../../store/auth/actions'
import Icon from 'react-native-vector-icons/Entypo'

const ProductDetailsScreen=({navigation,route}:{navigation:{navigate:(screen:string,params:any)=>void},route:object})=>{
    const dispatch=useDispatch()
    const [quantity,setQuant]=useState(1)
    const user=useSelector((state:{user:any})=>state.user)
    const userId=user._id
    const{products,currentCart,purchases}=user
    const {_id}=route.params

    let title=currentCart?.product?.title
    const [selectedOption,setSelectedOption]=useState(currentCart?.product?.options[1]||'')
    let maxQuantity=currentCart?.product?.quantity||0
    useEffect(()=>{   
        navigation.addListener('focus',()=>{ dispatch(getProduct(_id))})
            return()=>{
                dispatch({type:'add_cart',payLoad:''})
            }
    },[])
    let addItem=()=>{
        dispatch(addProduct(currentCart._id,userId))
    }
const onPlus=()=>{setQuant((q:number)=>Math.min(currentCart.product.quantity,q+1))}
const onMinus=()=>{setQuant((q:number)=>Math.max(1,q-1) ) }
    return (
        !currentCart?<ActivityIndicator size={20}/>:
        <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
            <Text style={styles.title}>{currentCart.product.title}</Text>
            <ImageCarousel images={currentCart.product.images}/>
            {currentCart.product.options?.length?
            <OptionSelector options={currentCart.product.options}
                            selectedOption={selectedOption} 
                            setSelectedOption={setSelectedOption} />
                            :null}
            <PriceContainer price={currentCart.product.price} 
                oldPrice={currentCart.product.oldPrice}/>

            <Text style={styles.descHeader}>Description:</Text>
            <Text style={styles.description}>{currentCart.product.description}</Text>
            
            <Text style={styles.quantity}>Quantity available is 
            <Text style={{color:'red'}}> {currentCart.product.quantity}</Text> items</Text>
            <View style={styles.optionContainer}>
                <Pressable style={styles.Pressable} onPress={quantity===1?null:onMinus}>
                    <Icon name="minus" size={20} color="black" />       
                </Pressable > 
                <Text style={styles.text}>{quantity}</Text>
                <Pressable style={styles.Pressable} onPress={quantity===maxQuantity?null:onPlus}  >
                    <Icon name='plus' size={20} color='black'/>
                </Pressable>
                
            </View>
            {purchases?.filter(i=>i._id===currentCart._id).length !==0?
                <Text style={styles.before}>Note: You have ordered this product before.</Text>:null
            }
            <View style={{marginVertical:10}}>
                {products?.filter(i=>i._id===currentCart._id).length==0?
                <Btn title="Add To Cart" color="#2f80c2" onClick={addItem} />
                :<Text style={styles.cart}>This item is at your cart now.</Text>}
                
                <Btn title="Buy Now" color="#2a5d87" onClick={()=>{
                    //console.log(typeof quantity,quantity)
                    dispatch(addCart({...currentCart,quantity,option:selectedOption}))
                    navigation.navigate(user.address?'confirm':'set',{dest:'confirm'})
                }} />
                
            </View>
        </ScrollView>

    )
}


export default ProductDetailsScreen;


                
