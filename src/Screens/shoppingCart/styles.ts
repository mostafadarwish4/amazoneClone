import {StyleSheet} from 'react-native'

export default StyleSheet.create({
   page:{
       FontColor:"black",
       fontWeight:'normal',
       backgroundColor:"#e4e6eb" ,
       flex:1,
   },
   header:{
      alignItems:'center'
   },
   headerText:{
    margin:10,
    fontSize:18,
    color:'black',
    fontWeight:'bold',
    
   },
   headersubText:{
       fontSize:18,
       color:'red'//'#13599c',

   },
   headerButn:{
       margin:10,
       alignItems:'center',
       justifyContent:'center',
       borderWidth:1,
       borderRadius:5,
       borderColor:"#d1d1d1",
       backgroundColor:"#d4b76a",//
       height:40,
   },
   headerbtnTxt:{
       fontSize:15,
   }
   
})