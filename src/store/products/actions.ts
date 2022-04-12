import { useDispatch } from 'react-redux'
import server from '../../api/server'
export const getProducts=()=>async dispatch=>{
    try {
        const {data}=await server.get('/products')
        dispatch({type:'get_products',payLoad:data})
    } catch (e) {
        dispatch({type:'add_error',payLoad:e.response.data})
    }
}
export const decQnatity=(q,id)=>async dispatch=>{
    try {
        const {data}=await server.patch(`/products/${id}/dec`,{q})
        
    } catch (e) {
        dispatch({type:'add_error',payLoad:e.response.data})
    }
}
