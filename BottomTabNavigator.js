import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
        screenOptions ={({route})=>({
          tabBarIcon:({focused,color,size})=>{
            let iconName 
            if(route.name==="Transaction"){
              iconName="book"
            }
            else if(route.name==="Search"){
              iconName="search"
            }
            return(
              <Ionicons name={iconName}
              size ={size}
              color={color}/>
           )
           }
        
           })}
        tabBarOptions={{
          activeTintColor:"tomato",
          inactiveTintColor:"grey",
          style:{
            height:130,
            borderTopWidth:0,
            backgroundColor:'black',
            },
        labelStyle:{
          fontSize:20,
          fontFamily:"Rajhdhani_600SemiBold",

        },
        labelPosition:"beside-icon",
        tabStyle:{
          marginTop:25,
          marginLeft:10,
          marginRight:10,
          borderRadius:30,
          borderWidth:2,
          alginItems:"center",
          justifyContent:"center",
          backgroundColor:"white"
        }

        }}
>
          <Tab.Screen name="Transaction" component={TransactionScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
