import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SigninScreen from '../Screens/AuthScreens/SigninScreen'
import SignupScreen from '../Screens/AuthScreens/SignupScreen'

const Stack=createNativeStackNavigator()

const AuthNavigator=()=>{
    return (
        <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
            <Stack.Screen name='login' component={SigninScreen} />
            <Stack.Screen name='register' component={SignupScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigator