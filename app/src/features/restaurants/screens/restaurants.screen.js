import { Text, View, StyleSheet, SafeAreaView,} from "react-native";
import React from "react";    
import { Searchbar } from 'react-native-paper';
import { useState } from "react";
import styled from 'styled-components/native';


import {RestaurantCardInfo} from '../components/restaurants-info.component'

const SearchBox = styled.View `
background-color: gold;
      padding: 16px `
      
      const ListBox = styled.View `
      flex: 1;
      padding: 16px;
      background-color: silver;
  `

export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
return ( 
<SafeAreaView style={styles.container}>
    <SearchBox>
    <Searchbar
     placeholder="Search"
     onChangeText={setSearchQuery}
     value={searchQuery}
   />
   </SearchBox>
   <ListBox>
     <RestaurantCardInfo />
   </ListBox>
   </SafeAreaView>
   )}; 

   const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    
   })  