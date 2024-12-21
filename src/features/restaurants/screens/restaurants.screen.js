import { FlatList} from "react-native";
import React, {useContext} from "react";    
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';


import {RestaurantCardInfo} from '../components/restaurants-info.component'
import { RestaurantsContext} from '../../../services/resturants/resturant.context'
import { Spacer } from "../../../components/spacer/spacer.component"
import { SafeArea } from "../../../components/utility/safe-area.component"



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
    const restaurantContext = useContext(RestaurantsContext);
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
    data={restaurantContext.restaurants}
   renderItem={() => (
    <Spacer position="bottom" size="large">
      <RestaurantCardInfo />
    </Spacer>
  )}
  keyExtractor={(item) => item.name}
   />
   </SafeArea>
   )}; 



   