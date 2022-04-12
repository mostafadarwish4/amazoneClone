import React,{useContext, useEffect} from 'react'
import AuthForm from '../../components/AuthForm'
import { useSelector,useDispatch } from 'react-redux'
import { clearErrorMessage } from '../../store/error/error'
import {login} from '../../store/auth/actions'

const SigninScreen=({navigation}:{navigation:object})=>{
    const error =useSelector((state:any)=>state.error)
    const dispatch=useDispatch()
     useEffect(()=>{
        navigation.setOptions({ title: 'Login to your acccount' })
         
     },[])
     
    return (
       <AuthForm  title='Login'
                    onSubmit={login}
                    errMessage={error}
                    navigationText="Don't have an Account ?Register Now"
                    navigationAction={()=>{
                        navigation.navigate('register')
                    }}
                     />
    )
}

export default SigninScreen