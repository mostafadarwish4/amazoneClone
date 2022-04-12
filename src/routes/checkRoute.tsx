import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingCartScreen from '../Screens/shoppingCart/ShoppingCartScreen';
import ConfirmAddress from '../Screens/addressPage/confirmAddress'
import AddressForm from '../Screens/addressPage/addressForm';
import SuccessScreen from '../Screens/success/SuccessScreen';

const CheckRouter=()=>{
    const [search,setSearch]=useState('')
    const Stack=createNativeStackNavigator();
   
    return(
        <Stack.Navigator 
            screenOptions={({route})=>({
               headerTitleAlign:'center',
               headerStyle:{
                backgroundColor:'#3c76a6'
               },
               headerTitleStyle:{
                  color:'white' 
               }
            })}
        >
            <Stack.Screen name='My Cart'
             component={ShoppingCartScreen} />
            <Stack.Screen name='1' component={ConfirmAddress} />
            <Stack.Screen name='2' component={AddressForm}/>
            <Stack.Screen name='3' component={SuccessScreen} />
        </Stack.Navigator>
    )
}

export default CheckRouter;