import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../Screens/profileScreen/profileScreen';
import AddressForm from '../Screens/addressPage/addressForm';
import ConfirmAddress from '../Screens/addressPage/confirmAddress';
import OrdersScreen from '../Screens/orders/OrdersScreen';


const MoreRouter=()=>{
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
            <Stack.Screen name='Profile'
             component={ProfileScreen} />
            <Stack.Screen name='address' component={ConfirmAddress} />
            <Stack.Screen name='form' component={AddressForm}/>
            <Stack.Screen name='Orders history' component={OrdersScreen}/>
        </Stack.Navigator>
    )
}

export default MoreRouter;