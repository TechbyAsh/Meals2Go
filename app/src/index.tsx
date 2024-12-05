import { StatusBar } from 'expo-status-bar'
import { Text, View, StyleSheet, SafeAreaView,} from "react-native";
import React from "react";    


import {RestaurantsScreen} from './features/restaurants/screens/restaurants.screen'



export default function Index() {
  

  return (
    <>
    <RestaurantsScreen />
    <StatusBar style="auto" />
    </>
  );
}




