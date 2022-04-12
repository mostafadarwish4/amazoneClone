import AsyncStorage from '@react-native-async-storage/async-storage'
import server from '../../api/server'

export const login=(email:string,password:string)=>async dispatch=>{
    try {
        
        const {data}=await server.post('/users/login',{email,password})
            await AsyncStorage.setItem('token',data.token)
            dispatch({type:'signin',payLoad:data})  
        
    } catch (e:any) {
        console.log(e.response.data)
        dispatch({type:'add_error',payLoad:e.response.data})
    } 
    
}
export const signup=(email:string,password:string,name:string)=>async dispatch=>{
    try {
        const {data}=await server.post('/users/signup',{email,password,name})
        await AsyncStorage.setItem('token',data.token)
        dispatch({type:'signin',payLoad:data})  
    } catch (e:any) {
        dispatch({type:'add_error',payLoad:e.response.data})
    } 
        
}
export const addProduct=(id,userId)=>async dispatch=>{
    try {
        // console.log(userId)
        const {data}=await server.post(`/users/me/products/${id}`,{userId})
        dispatch({type:'change',payLoad:data})
    } catch (e) {
        console.log(e.message)
        dispatch({type:'add_error',payLoad:e.response.data})
    }
}
export const saveProduct=(id,userId)=>async dispatch=>{
    try {
        const {data}=await server.post(`/users/me/savelater/${id}`,{userId})
        dispatch({type:'change',payLoad:data})
    } catch (e) {
        console.log(e.message)
        dispatch({type:'add_error',payLoad:e.response.data})
    }
}
export const deleteProduct=(id,userId)=>async dispatch=>{
    try {
        let {data}=await server.delete(`/users/me/products/${id}`,{data:{userId}})
        dispatch({type:'change',payLoad:data})
    } catch (e:any) {
        console.log(e.message)
        dispatch({type:'add_error',payLoad:e.response.data})
    }
}
export const deleteSaved=(id,userId)=>async dispatch=>{
    try {
        let {data}=await server.delete(`/users/me/savelater/${id}`,{data:{userId}})
        dispatch({type:'change',payLoad:data})
    } catch (e:any) {
        dispatch({type:'add_error',payLoad:e.response.data})
    }
}
export  const getProduct=(id)=>async dispatch=>{
    try {
        const {data}=await server.get(`/products/${id}`)
        dispatch({type:'add_cart',payLoad:data})
    } catch (e) {
        dispatch({type:'add_error',payLoad:e.response.data})
    }
}

export const addCart=cart=>async dispatch=>{
    dispatch({type:'add_cart',payLoad:cart})
}
export const addAddress=(address,userId)=>async dispatch=>{
    try {
        const {data}=await server.patch(`/users/me/address/${userId}`,{address})
        dispatch({type:'change',payLoad:data})
    } catch (e) {
        dispatch({type:'add_error',payLoad:e.response.data})
    }
}
export const addOrder=(order,userId)=>async dispatch=>{
    try {
        const {data}=await server.post('/users/me/orders',{order,userId})
        dispatch({type:'change',payLoad:data})
    } catch (e) {
         dispatch({type:'add_error',payLoad:e.response.data})
    }
}
export const orderProducts=(products,userId)=>async dispatch=>{
    try {
        
        let {data}=await server.post('/users/me/orders/batch',{userId,products})
        dispatch({type:'change',payLoad:data})
    } catch (e) {
        console.log(e.message)
        dispatch({type:'add_error',payLoad:e.response.data})
    }
}
export const persistLogin=()=>async dispatch=>{
    try {
        const token=await AsyncStorage.getItem('token')
        const {data}=await server.get(`/users/me/${token}`)
        dispatch({type:'signin',payLoad:data})
    } catch (err) {
        console.log(err.message)
        dispatch({type:'add_error',payLoad:err.response.data})
    }
    
    
    
}

export const signout=(userId)=>async dispatch=>{
    try {
        await server.post('/users/me/logout',{userId})
        await AsyncStorage.removeItem('user')
        dispatch({type:'signout'})
    } catch (err) {
        console.log('action out ',err.message)
        dispatch({type:'add_error',payLoad:"Unexpected error try again later"})
    }
    
    
}


