import { Text, View, SafeAreaView, StatusBar,} from "react-native";
import React from "react";    
import { Searchbar } from 'react-native-paper';
import { useState } from "react";
import styled from 'styled-components/native';


import {RestaurantCardInfo} from '../components/restaurants-info.component'

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px` };
`;

const SearchBox = styled.View `
background-color: ${(props) => props.theme.colors.ui.header};
      padding: ${(props) => props.theme.space[3]}; 
      `
      
      const ListBox = styled.View `
      flex: 1;
      padding: ${(props) => props.theme.space[3]};
      background-color: ${(props) => props.theme.colors.bg.secondary};
  `

export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
return ( 
<SafeArea>
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
   </SafeArea>
   )}; 



   