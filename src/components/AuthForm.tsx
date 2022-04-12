import React, { useState,useContext, useEffect } from 'react'
import {View,Text,TouchableOpacity,StyleSheet, TextInput} from 'react-native'
import { useDispatch } from 'react-redux'
import Break from './break'
import Btn from './Button'
import {clearErrorMessage} from '../store/error/error'
import { useNavigation } from '@react-navigation/native'
interface authFormProps{
    title:string,
    onSubmit:(email:string,password:string,name?:string,callBack?:authFormProps["callBack"])=>void,
    errMessage:string,
    callBack?:()=>void,
    navigationText:string,
    navigationAction:()=>void
}

const AuthForm=({title,onSubmit,errMessage,navigationText,navigationAction}:authFormProps)=>{
    const dispatch=useDispatch()
    const navigation=useNavigation()
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [check,setCheck] =useState('')
    const [first,second]=navigationText.split('?')
    const validateEmail=()=>{
        if(email){
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)?
                        setCheck(''):
                        setCheck("You have entered an invalid email address!")        
                    }
                }
    useEffect(()=>{
        navigation.addListener('blur',()=>{ dispatch(clearErrorMessage())})
        navigation.addListener('focus',()=>{ dispatch(clearErrorMessage())})
    },[])
    return (
            <View style={styles.main}>         
                <Break/>
                {title==='Login'?null:<View>
                    <Text style={styles.label}>Full Name *</Text>
                    <TextInput placeholder='Enter your name'
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={setName}
                    value={name}
                    placeholderTextColor={'gray'}
                />
                    </View>}
                <Text style={styles.label}>Email *</Text>
                <TextInput placeholder='Enter your email'
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={setEmail}
                    value={email}
                    onBlur={validateEmail}
                    onFocus={()=>{
                        setCheck('')
                        dispatch(clearErrorMessage())
                    }}
                    placeholderTextColor={'gray'}
                />
                {check?<Text style={styles.errMessage}>⚠️{check}</Text>:null}
                <Text style={styles.label}>Password *</Text>
                <TextInput placeholder='Enter your password'
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password} 
                    placeholderTextColor={'gray'}
                />
                {errMessage ? <Text style={styles.errMessage}>⚠️{errMessage}</Text>:null}
                <Break/>
                <Btn title={title} 
                    color={'#3c76a6'}
                        onClick={()=>{
                            if(check){
                                return
                            }
                            title==='Login'? dispatch(onSubmit(email,password)):dispatch(onSubmit(email,password,name))
                        
                        }}
                />
                <View style={{marginTop:20,flexDirection:'row'}}>
                <Text style={styles.alert} >{first}?</Text>
                <TouchableOpacity    
                onPress={navigationAction}>
                    <Text style={styles.navText}>{second}</Text>
                </TouchableOpacity>
            </View>
                </View>
                   
        // </View>
    )
}
const styles=StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#e3e3e3'
    },
    main:{
        flex:1,
        //width:'90%',
        padding:20,
        backgroundColor:'#deddd9',
        borderWidth:1,
        borderRadius:5,
        borderColor:'#c0cccb',
        
        
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        alignSelf:'center'
        // marginLeft:10
    },
    label:{
        fontSize:18,
        color:'#4f4f4c'
    },
    input:{
        height:50,
        borderRadius:3,
        borderWidth:1,
        borderColor:'#8e918f',
        marginVertical:5,
        fontSize:15,
        fontWeight:'normal',
        minWidth:100,
        //backgroundColor:'snow',
        color:'black'
    },
    errMessage:{
        color:'red',
        fontSize:15,
        //fontWeight:'bold'
    },
    alert:{
        color:'gray',
        fontSize:18
    },
    navText:{
        marginLeft:5,
        color:'#4b85e3',    
        fontSize:18
    },
    
   
})
export default AuthForm