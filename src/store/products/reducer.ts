export default (state=[],action:{type:string,payLoad:any})=>{
    switch(action.type){
        case 'get_products':
            return action.payLoad
        default:
            return state
    }
}