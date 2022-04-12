import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import {View,Text,FlatList}from 'react-native'
import { useSelector } from 'react-redux'
import ShopCartItem from '../Screens/shopCartItem/ShopCartItem'
import EmptyList from './EmptyList'
import Saved from './saved'

const SavedForLater=()=>{
    const user=useSelector(state=>state.user)
    const navigation =useNavigation()
   useEffect(()=>{
        navigation.setOptions({ headerTitle: 'Saved for later'})
         
     },[])
    return(
           
             user.saveForLater.length==0?<EmptyList s/>:
            <FlatList
                data={user.saveForLater}
                renderItem={({item})=><Saved  key={item._id+'t'} userId={user._id}  cartItem={item} />}
            />
            
    )
}
export default SavedForLater;


