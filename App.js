import React, { Component } from 'react';
import { StyleSheet, Text, View, styles} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './Component/Login';
import Register from './Component/Register';
import Landing from './Component/Landing';
import RegisterBerhasil from './Component/RegisterBerhasil';
import HomeScreen from './Component/HomeScreen';
import Profile from './Component/Profile';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Landing' component={Landing}></Stack.Screen>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='Register' component={Register}></Stack.Screen>
        <Stack.Screen name='RegisterBerhasil' component={RegisterBerhasil}></Stack.Screen>
        <Stack.Screen name='HomeScreen' component={TabScreen}></Stack.Screen>
        <Stack.Screen name='Profile' component={Profile}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabScreen(){
  return(
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: '#80DE68' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="feed" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    
  );
}
