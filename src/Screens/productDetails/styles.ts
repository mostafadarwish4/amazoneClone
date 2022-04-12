import { StyleSheet } from "react-native";

export default StyleSheet.create({
    root:{
        margin:5,
       
    },
    title:{
        marginVertical:10,
        fontSize:18,
        fontWeight:"bold",
        color:'#3f6c91',
         borderWidth:2,
         borderColor:"#dfe4e8",
         alignSelf:'center',
         padding:10,
         borderRadius:10,
         backgroundColor:'white'
    },
    descHeader:{padding:5,
        color:"black",
        fontSize:20,
        fontWeight:'bold'
    },
    description:{marginHorizontal:10,
        color:'grey',
        fontSize:15
    },
   optionContainer:{
        flexDirection:'row',
        alignItems:"center",
        borderRadius:5,
        color:"red",
        marginBottom:3,
       
    },
    Pressable:{
       backgroundColor:'#d1d1d1',
       height:35,
       width:35,
       alignItems:'center',
       justifyContent:'center',
       marginHorizontal:5,
       
       
    },
    text:{
        fontWeight:"normal",
        fontSize:15,
        marginHorizontal:15,
    },
    quantity:{
        fontSize:20,
        padding:5,
        fontWeight:'bold'
    },
    cart:{
        margin:5,
        fontSize:18,
        fontWeight:'bold',
        color:'#2d7cbd'
    },
    before:{
        margin:5,
        fontSize:18,
        color:'grey'
    },
})
