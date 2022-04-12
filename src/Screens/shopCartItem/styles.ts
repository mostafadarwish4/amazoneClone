import{StyleSheet} from 'react-native';

 export default StyleSheet.create({
     root:{
         margin:5,
         borderWidth:1,
         borderColor:"#d1d1d1",
         justifyContent:'space-between',
         borderRadius:10,
         backgroundColor:"#fff"
         
    },
    row:{
        //flex:1,
        flexDirection:'row',

    },
    image:{       
        height:'90%',
        flex:2,
        marginHorizontal:2,
        resizeMode:'contain',
        borderRadius:5,
        alignSelf:'center'
    },
    rightContainer:{
        flex:3,
       marginLeft:5

    },
    title:{
        fontSize:18,
        color:'black',
        marginBottom:5,
    },
    price:{
        fontSize:18,
        color:'black',
        fontWeight:'bold',
        marginBottom:5,
    },
    oldPrice:{
        fontSize:10,
        textDecorationLine:"line-through",
        marginLeft:5,
        color:'#9da0a3'
    },
    ratingContainer:{
        flexDirection:'row',
        marginVertical:2,
    },
    ratings:{
        fontSize:15,
        marginLeft:5,
        color:"black"
    },
    footer:{
        flexDirection:'row',
        justifyContent:'space-between',
        //position:'relative',
        margin:4
    },
    pressable:{
        padding:5,
        borderWidth:1,
        borderColor:"white",
        borderRadius:3,
        height:35,
        backgroundColor:'#3c76a6',
        
    },
    pText:{
        fontSize:15,
        color:'white',
        fontWeight:'bold',
    }
})
