import React, { useEffect, useState } from 'react';
import {ScrollView,Alert,Image, ActivityIndicator} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {getData} from 'country-list';
import styles from './styles';
import InputText from '../../components/InputText';
import Btn from '../../components/Button';
import Break from '../../components/break'
import { useDispatch, useSelector } from 'react-redux';
import { addAddress } from '../../store/auth/actions';
import { useNavigation } from '@react-navigation/native';

interface location{
    fullName:string,
    country:string,
    city:string,
    phoneNumber:string,
    address:string
}

const AddressForm=({route})=>{
    console.log('params')
    const {name,params}=route
    const navigation=useNavigation()
    const user=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const [country,setCountry]=useState('egypt')
    const [fullName,setFullName]=useState('')
    const [phoneNumber,setPhone]=useState('')
    const [address,setAddress]=useState('')
    const [city,setCity]=useState('')
    const [x,y]=useState(false)
    const countries= getData()
    useEffect(()=>{
        navigation.setOptions({title:'Complete your address'})
    },[])
    useEffect(()=>{
         user.address?navigation.navigate(params.dest):null
    },[user.address])
    const onCheckout=()=>{
       if(!(country&&fullName&&phoneNumber&&city) ) return Alert.alert('Fill The Blanks')
        let adrs={fullName,address,country,city,phoneNumber}
        dispatch(addAddress(adrs,user._id))
       y(true)
       setTimeout(() => {
           y(false)
       }, 2000);
    }
    return(
        <ScrollView style={styles.root}>
            <Image style={styles.image} 
            source={{uri:'https://www.xda-developers.com/files/2017/04/Many-of-the-Top-100000-Android-Applications-are-Selling-Your-GPS-Location-Data-e1627558218326-1024x667.png'}}
            defaultSource={require('../../images/address-verification-service-500x500.png')}/>
            <Picker style={styles.picker}
                    selectedValue={country}
                    onValueChange={((value:string)=>{
                        console.log(value)
                        setCountry(value)
                    })}>
                    {
                    countries.map((country:{code:string,name:string},i:number)=><Picker.Item value={country.name} label={country.name} key={i}/>)
                    }
            </Picker>
            <InputText text="Full Name" value={fullName} onChange={(value)=>{setFullName(value)}} />
            <InputText text="Phone Number" KBtype='n' value={phoneNumber} onChange={(value)=>{setPhone(value)}}/>
            <InputText text="Address"  value={address} onChange={(value)=>{setAddress(value)}} />
            <InputText text="City" value={city} onChange={(value)=>{setCity(value)}} />
            <Break space={10}/>
            {x?<ActivityIndicator size={30} />:<Btn title='Confirm your address' color='#3c76a6' onClick={onCheckout} />}
        </ScrollView>
    )
}
export default AddressForm;