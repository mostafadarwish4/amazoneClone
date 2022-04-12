import React, {useEffect ,useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from "./homeRouter";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from "./authRoute";
import {persistLogin} from '../store/auth/actions'
import { useDispatch, useSelector } from "react-redux";
import { Image, View } from "react-native";


const Stack=createNativeStackNavigator()
export default ()=>{ 
  const dispatch=useDispatch()
  const user=useSelector(state=>state.user)
  const [transition, setTransition] = useState(false)
  useEffect(()=>{
    (async () => {
        dispatch(persistLogin())
       setTimeout(() => {
        setTransition(true)
      }, 2000)
      
    })()
  },[])
  return (
    !transition?null:
      <NavigationContainer>
          <Stack.Navigator >
            {user?.token?
            <Stack.Screen options={{headerShown:false}} name="Main"
             component={HomeNavigator} />:
             <Stack.Screen options={{headerShown:false}} name="Auth"
             component={AuthNavigator} />}
          </Stack.Navigator>
        </NavigationContainer>
   
      
  );
  }