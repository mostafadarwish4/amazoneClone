import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Pressable, StyleSheet, Text, View} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Btn from '../../components/Button';
import {addOrder,orderProducts} from '../../store/auth/actions'
import {decQnatity} from '../../store/products/actions'
import { clearErrorMessage } from '../../store/error/error';


const ConfirmAddress=()=>{
    const {name,params}=useRoute()
    const user=useSelector(state=>state.user)
    const error=useSelector(state=>state.error)
    const dispatch=useDispatch();
    const {currentCart,address}=user
    const navigation=useNavigation()
    const [clicked,setClicked]=useState(false)
    useEffect(()=>{
        navigation.setOptions({ title: 'Address confirmation' })
    },[])
    useEffect(() => {
        let to=name==='confirm'?'success':'3'
        navigation.navigate(to)
    },[error,clicked])
    
    const move=async()=>{
                    dispatch(clearErrorMessage())
                      name==='confirm'?dispatch(addOrder(currentCart,user._id)):
                    dispatch(orderProducts(user.products,user._id))
                    setClicked(true)
                    setTimeout(, 1000);
                    
                }
    return (
         <View style={{margin:5,flex:1}} >
            <View style={{margin:10,borderRadius:2}}>
                <Text style={styles.name}>{address.fullName}</Text>
                <Text style={styles.text}>{address.city}</Text>
                <Text style={styles.text}>{address.address}</Text>
                <Text style={styles.text}>{address.country}</Text>
                <Text style={styles.text}>Phone number: <Text style={{color:'#2d7cbd',fontWeight:'bold'}}>{address.phoneNumber}</Text></Text>
            </View>
            {clicked?<ActivityIndicator/>:<>
            {name=='address'?<Btn title='Edit Address' color='#3c76a6' onClick={()=>{navigation.navigate('form')}}/>
                :<Btn color='#2a5d87' title='Deliver to this address' onClick={move} />}
            </>
                }
            <Text>{error}</Text>
        </View>
    )
}

export default ConfirmAddress;
const styles=StyleSheet.create({
    name:{fontWeight:'bold',fontSize:20},
    text:{
        fontSize:18,
        marginTop:3
    }
})