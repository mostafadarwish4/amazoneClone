export const clearErrorMessage=()=>dispatch=>{
    dispatch({type:'add_error',payLoad:null})
}
export const errReducer=(state='',action:any)=>{
    switch(action.type){
        case 'add_error':
            return action.payLoad
        default:
            return state
    }
}