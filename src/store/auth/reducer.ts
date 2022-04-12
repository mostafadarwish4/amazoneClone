export default (state=[],action:{type:string,payLoad:any})=>{
    switch(action.type){
        case 'signin':
            return {currentCart:'',...action.payLoad}
        case 'change':
            return {...state,...action.payLoad}
        case 'add_cart':
            return {...state,currentCart:action.payLoad}
        case 'add_quant_current':
            return {...state,currentCart:{...state.currentCart,quantity:action.payLoad}}
        
        case 'signout':
            return null
        default:
            return state
    }
}
