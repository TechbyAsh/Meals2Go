import {TouchableOpacity } from "react-native";
import React, {useContext, useState} from "react";    
import styled from 'styled-components/native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';


import {RestaurantCardInfo} from '../components/restaurants-info.component'
import {RestaurantList} from '../components/restaurant-list.styles'
import { Search } from '../components/search.component'
import { RestaurantsContext} from '../../../services/resturants/resturant.context'
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { LocationContext } from "@/src/services/location/location.context";
import { Spacer } from "../../../components/spacer/spacer.component"
import { Text } from "@/src/components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component"
import { FadeInView } from '../../../components/animations/fade.animation'
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";


      
      
  
    const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
    const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;


export const RestaurantsScreen = ({navigation}) => {
    const { isLoading,  restaurants, error } = useContext(RestaurantsContext);
    const { error: locationError} = useContext(LocationContext);
    const [isToggled, setIsToggled] = useState(false);
    const { favourites } = useContext(FavouritesContext);

    const hasError = !!error || !!locationError;

return ( 
<SafeArea>
{isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
   <Search
   isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
      )}

{hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">Something went wrong retrieving the data</Text>
        </Spacer>
      )}
       {!hasError && (
   <RestaurantList
    data={restaurants}
   renderItem={({ item }) => {
    return (
      <TouchableOpacity
              onPress={() => navigation.navigate("RestaurantDetail" , {
                restaurant: item,
    })}
            >
    <Spacer position="bottom" size="large">
      <FadeInView>
      <RestaurantCardInfo restaurant={item} />
      </FadeInView>
    </Spacer>
    </TouchableOpacity>
)}}
  keyExtractor={(item) => item.name}
   />
    )}
   </SafeArea>
   )}; 



   