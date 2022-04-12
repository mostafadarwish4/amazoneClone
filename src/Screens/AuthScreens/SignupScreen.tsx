import React,{useContext,useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthForm from '../../components/AuthForm'
import {signup} from '../../store/auth/actions'
import { clearErrorMessage } from '../../store/error/error'
const SignupScreen=({navigation}:{navigation:object})=>{
    const dispatch=useDispatch()
    const error =useSelector((state:any)=>state.error)
    useEffect(()=>{
       navigation.addListener('blur',()=>{dispatch(clearErrorMessage())}) 
    },[])
    return (
        <AuthForm  title='Create Account'
                    text='Create your  Account'
                    onSubmit={signup}
                    errMessage={error}
                    navigationText="Aleady have an Account ?Login"
                    navigationAction={()=>{
                        navigation.navigate('login')
                    }}
                     />
        
        
    )
}


export default SignupScreen;