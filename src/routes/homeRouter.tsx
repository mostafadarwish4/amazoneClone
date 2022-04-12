import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProductRouter from './productRouter';
import ProfileScreen from '../Screens/profileScreen/profileScreen';
import CheckRouter from './checkRoute';
import SavedForLater from '../components/SavedForLater';
import MoreRouter from './moreRoute';

const HomeNavigator=()=>{
    const Tab=createBottomTabNavigator();
    return(
            <Tab.Navigator screenOptions={({route})=>({
               // tabBarShowLabel:false,
                headerTitleAlign:'center',
                headerStyle:{
                backgroundColor:'#3c76a6'
               },
               headerTitleStyle:{
                  color:'white' 
               },
               tabBarLabelStyle:{
                 fontSize:10
               },
                tabBarActiveTintColor: '#3c76a6',
                tabBarInactiveTintColor: 'grey',
            })}
             >
                <Tab.Screen options={{headerShown:false,
                  tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused? 'home': 'home-outline'} size={size} color={color} />
                }}
                 name='Home' 
                component={ProductRouter} />
                <Tab.Screen name='ShopCart'
                 component={CheckRouter}
                  options={{
                    headerShown:false,
                  tabBarIcon: ({ focused, color, size }) =><MaterialCommunityIcons name={focused?'shopping':'shopping-outline'} size={size} color={color} />
                }}
                  />
                  <Tab.Screen name='Likes'
                 component={SavedForLater}
                  options={{
                  tabBarIcon: ({ focused, color, size }) =><MaterialIcons name={focused?'favorite':'favorite-border'} size={size} color={color} />
                }}
                  />
                   <Tab.Screen name='More'
                 component={MoreRouter}
                  options={{
                    headerShown:false,
                  tabBarIcon: ({ focused, color, size }) =><Feather name={'more-vertical'} size={size} color={color} />
                }}
                  />
            </Tab.Navigator>
    )
}
export default HomeNavigator;