
import React, { useEffect } from 'react';
import {Pressable, Text, View} from 'react-native';
import { useSelector } from 'react-redux';
import ConfirmAddress from './confirmAddress';

import AddressForm from './addressForm';


const AddressSwitch=({navigation})=>{
    const user=useSelector(state=>state.user)
   useEffect(()=>{
       navigation.navigate(user.address?'Confirm':'Address')
       //navigation.addListener('blur',()=>{})
   },[]) 

    return(
        null
    )
}
export default AddressSwitch;