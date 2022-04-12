import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from './styles'
import EvilIcons from'react-native-vector-icons/EvilIcons'
 const Move=({dest,text,icon})=>{
     const navigation =useNavigation()
     return(
         <Pressable style={styles.moveContainer}
                    onPress={()=>{
                        navigation.navigate(dest,{dest:'address'})
                        }}>     
                <EvilIcons name={icon} size={40} />
                <Text style={styles.text}>{text}</Text>     
                <EvilIcons name='chevron-right' size={40} />
         </Pressable>
     )
 }
 export default Move;