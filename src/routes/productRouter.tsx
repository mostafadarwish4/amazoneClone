import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScreen from '../Screens/productDetails/productDetailsScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import HeaderComponent from '../components/HeaderComponent';
import AddressSwitch from '../Screens/addressPage/AddressSwitch';
import ConfirmAddress from '../Screens/addressPage/confirmAddress'
import AddressForm from '../Screens/addressPage/addressForm';
import SuccessScreen from '../Screens/success/SuccessScreen';

const ProductRouter=({navigation})=>{
    const [search,setSearch]=useState('')
    const Stack=createNativeStackNavigator();
   
    return(
        <Stack.Navigator screenOptions={({route})=>({
               headerStyle:{
                backgroundColor:'#3c76a6'
               },
               headerTitleStyle:{
                  color:'white' 
               },
            })}>
            <Stack.Screen name='First'options={{header:()=>(<HeaderComponent setSearch={setSearch} search={search} />)}}>
                {
                    ()=><HomeScreen search={search} navigation={navigation} />
                }
            </Stack.Screen>
            <Stack.Screen name='Details' component={ProductDetailsScreen}/>
            <Stack.Screen name='success'
                options={{headerShown:false}}
                component={SuccessScreen} />
            <Stack.Screen name='set' component={AddressForm}/>
            <Stack.Screen name='confirm' component={ConfirmAddress} />
        </Stack.Navigator>
    )
}

export default ProductRouter;
