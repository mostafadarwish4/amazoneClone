export  interface productItemProp{
        _id:string,
        title:string,
        image:string,
        price:number,
        ratings:number,
        avgRatings:number,
        oldPrice?:number,
        quantity:number,
}

export interface productPageProp{
    
        _id:string,
        title:string,
        images:string[],
        description:string,
        options:string[],
        price:number,
        ratings:number,
        avgRatings:number,
        oldPrice?:number
   
}
export interface cartItemProp{
   _id:string,
   quantity:number ,
   option?:string,
   product:productItemProp
}
export interface user{
    _id:string,
    email:string,
    name:string,
    password?:string,
    products:[cartItemProp],
    saveForLater:[cartItemProp],
    image?:string,
}
export interface quantityProps{
    quantity:number,
    setQuantity:(q:any)=>void,
    setTotal:(x:any)=>void,
    maxQuantity:number,
    price:number,
    index:number
}