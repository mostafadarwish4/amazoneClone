import React from 'react'
import {View,Text,Image, StyleSheet}from 'react-native'

const EmptyList=()=>{
    
    //let text=props.s?'Your saved list is empty':'Your shopping cart list is empty'
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={require('../images/empty.png')}/>
            <View style={{flex:1}}>
                <Text style={styles.text}>{`You haven't added any items`}</Text>
                <Text style={styles.text2}>{`No items added yet, start explore and add what you want`}</Text>

            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    root:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white'
    },
    image:{
         height:'50%',
         width:'90%',
        marginRight:5,
        position:'relative',
        top:50,
        flex:2,
        //backgroundColor:''
        
    },
    text:{
    fontSize:20,
    maxWidth:'90%',
    fontWeight:'bold',
    padding:10,
    
    },
    text2:{
    fontSize:20,
    // alignSelf:'center',
    maxWidth:'80%',
    color:'grey'
    }
})
export default EmptyList;