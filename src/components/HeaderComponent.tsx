import React from 'react';
import Feather from 'react-native-vector-icons/Feather'
import {SafeAreaView, StyleSheet, TextInput, View } from 'react-native'; 

interface HeaderComponentProp{
        search:string,
        setSearch:()=> void
    }
const HeaderComponent = ({
  search,
  setSearch,
}: HeaderComponentProp) => {
  return (
    <SafeAreaView style={{backgroundColor: '#3c76a6'}}>
      <View
        style={styles.container}>
        <Feather name="search" size={20} color='snow' />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={search}
          onChangeText={setSearch}
          placeholderTextColor={'snow'}
        />
      </View>
    </SafeAreaView>
  );
};
const styles=StyleSheet.create({
    container:{
        margin: 10,
        padding: 5,
        
        flexDirection: 'row',
        alignItems: 'center',
    },
    input:{
        height: 40, 
        marginLeft: 10,
        borderColor:'snow',
        borderWidth:1,
        borderRadius:3,
        color:'black',
        width:'92%',
        fontSize:18
    }
})

export default HeaderComponent;