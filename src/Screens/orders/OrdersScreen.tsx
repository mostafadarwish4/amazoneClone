import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import {FlatList}from 'react-native'
import { useSelector } from 'react-redux'
import Order from '../../components/orders'
import EmptyList from '../../components/orders'

const OrdersScreen=()=>{
    const user=useSelector(state=>state.user)
    // console.log(user.purchases,'orderScreen')
    const navigation =useNavigation()
   useEffect(()=>{
        navigation.setOptions({ headerTitle: 'Saved for later'})
         
     },[])
    return(
           
             user.purchases.length==0?<EmptyList />:
            <FlatList
                data={user.purchases}
                renderItem={({item})=><Order  cartItem={item} />}
                keyExtractor={(item,index)=>item._id+index}
            />
            
    )
}
export default OrdersScreen;