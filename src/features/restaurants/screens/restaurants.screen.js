import { FlatList} from "react-native";
import React, {useContext} from "react";    
import styled from 'styled-components/native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';


import {RestaurantCardInfo} from '../components/restaurants-info.component'
import { Search } from '../components/search.component'
import { RestaurantsContext} from '../../../services/resturants/resturant.context'
import { Spacer } from "../../../components/spacer/spacer.component"
import { SafeArea } from "../../../components/utility/safe-area.component"


      
      const RestaurantList = styled(FlatList).attrs({
        contentContainerStyle: {
          padding: 16,
        },
      })``;
  
    const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
    const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;


export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
   
return ( 
<SafeArea>
{isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
   <Search/>
   <RestaurantList
    data={restaurants}
   renderItem={({ item }) => {
    return (
    <Spacer position="bottom" size="large">
      <RestaurantCardInfo restaurant={item} />
    </Spacer>
)}}
  keyExtractor={(item) => item.name}
   />
   </SafeArea>
   )}; 



   