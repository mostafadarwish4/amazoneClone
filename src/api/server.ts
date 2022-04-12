import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


const instance=axios.create({
    baseURL:'http://192.168.1.2:5000'
})
instance.interceptors.request.use( 
    async(config)=>{
        const token =await AsyncStorage.getItem('token')
        // console.log(token)
        if(token!==null){
            //console.log('header',token)
            config.headers.Authorization=`Bearer ${token}`
        }
        return config
    },
    // function to handle error
    (err)=>{
        return Promise.reject(err)
    }
)
export default instance 