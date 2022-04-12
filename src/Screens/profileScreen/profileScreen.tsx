import React, { useContext, useEffect } from "react";
import {View,Text,Image} from 'react-native'
import { useSelector } from "react-redux";
import Btn from "../../components/Button";
import { Context as AuthContext } from "../../store/auth/authContext";
import Move from "./move";
import OutBtn from "./outBtn";
import styles from "./styles";

const ProfileScreen=({navigation})=>{
    const user=useSelector(state=>state.user)
    
    return(
        <View style={styles.root}>
           <View style={styles.picContainer}>
            <Image style={styles.pic} source={require('./imageonline-co-resizedimage.png')} 
            />
            <View>
                <Text style={styles.nametext}>{user.name}</Text>    
                <Text style={{marginLeft:10,fontSize:17,color:'grey'}}>{user.email}</Text>
            </View>
           </View>
           <View style={{flex:3}}>
                <Move icon='location' text='Loaction details' dest={user.address?'address':'form'} />
                <Move icon='archive'text='Orders history' dest={'Orders history'} />
                <Move icon='credit-card'text='Payment card' dest={'Confirm'} />
           </View>
           
           <OutBtn />
        </View>
    )
}
export default ProfileScreen