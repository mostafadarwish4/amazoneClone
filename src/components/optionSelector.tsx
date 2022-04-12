import React,{useState} from 'react';
import {View,Text, StyleSheet, Pressable} from 'react-native'
import{Picker} from '@react-native-picker/picker'
const OptionSelector=({options,selectedOption,setSelectedOption}:any)=>{
   const [x,setX]=useState(false)
  
    return(
        <View style={styles.root}>
                <Text style={styles.text}>Colors: </Text>
               
               {
                options.map(o=>(<Pressable key={o} onPress={()=>{
                    setSelectedOption(o)
                }} style={{backgroundColor:o.toLowerCase()==='space grey'?'grey':o.toLowerCase(),
                    height:selectedOption==o?55:40,
                    width:selectedOption==o?55:40,
                    borderRadius:selectedOption==o?55:40,
                    borderWidth:selectedOption==o?2:1,
                    borderColor:selectedOption==o?'black':'grey',
                    alignItems:'center',
                    justifyContent:'center',
                    marginRight:3
                    }}>
                      {selectedOption===o&& <Text style={{fontSize:25,
                        color:selectedOption.toLowerCase()=='white'?'black':'white'
                        }}>✓</Text>}
                </Pressable>))
                } 
        </View>
    ) 
}
export default OptionSelector;
const styles=StyleSheet.create({
    root:{
        marginLeft:5,
        marginVertical:10,
        flexDirection:'row',
        alignItems:'center',
    },
    text:{
        fontWeight:'bold',
        fontSize:20,
        
    },
    
})
