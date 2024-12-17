import { SafeAreaView, StatusBar, FlatList} from "react-native";
import React from "react";    
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';


import {RestaurantCardInfo} from '../components/restaurants-info.component'
import { Spacer } from "../../../components/spacer/spacer.component"

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px` };
`;

const SearchBox = styled.View `
background-color: ${(props) => props.theme.colors.ui.header};
      padding: ${(props) => props.theme.space[3]}; 
      `
      
      const RestaurantList = styled(FlatList).attrs({
        contentContainerStyle: {
          padding: 16,
        },
      })``;
  

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
   <RestaurantList
    data={[
      { name: 1 },
      { name: 2 },
      { name: 3 },
      { name: 4 },
      { name: 5 },
      { name: 6 },
      { name: 7 },
      { name: 8 },
      { name: 9 },
      { name: 10 },
      { name: 11 },
      { name: 12 },
      { name: 13 },
      { name: 14 },
    ]}
   renderItem={() => (
    <Spacer position="bottom" size="large">
      <RestaurantCardInfo />
    </Spacer>
  )}
  keyExtractor={(item) => item.name}
   />
   </SafeArea>
   )}; 



   