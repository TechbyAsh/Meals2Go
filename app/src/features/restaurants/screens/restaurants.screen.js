import { Text, View, StyleSheet, SafeAreaView,} from "react-native";
import React from "react";    
import { Searchbar } from 'react-native-paper';
import { useState } from "react";


import {RestaurantCardInfo} from '../components/restaurants-info.component'


export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
return ( 
<SafeAreaView style={styles.container}>
    <View style={styles.search}>
    <Searchbar
     placeholder="Search"
     onChangeText={setSearchQuery}
     value={searchQuery}
   />
   </View>
   <View style = {styles.list}>
     <RestaurantCardInfo />
   </View>
   </SafeAreaView>
   )}; 

   const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    search:{
      backgroundColor: 'gold',
      padding: 16
    },
    list: {
      flex: 1,
      padding: 16,
      backgroundColor: 'silver',
  
    }
   })  