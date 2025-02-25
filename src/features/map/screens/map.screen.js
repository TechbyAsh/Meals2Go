import React, { useContext, useState, useEffect } from "react";
import MapView, {Marker , Callout} from "react-native-maps";
import styled from "styled-components/native";

import { Search } from "../components/search.component"


import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/resturants/resturant.context";
import { MapCallout } from '../components/map-callout.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const RestaurantMap = ({ navigation }) => {
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);
  
    const [latDelta, setLatDelta] = useState(0);
  
    const { lat, lng, viewport } = location;
  
    useEffect(() => {
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;
  
      setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);
  
    return (
      <>
        <Search />
        <Map
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
          }}
        >
          {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
                <Callout
                 onPress={() =>
                    navigation.navigate("Restaurants", {
                        screen: "RestaurantDetail", 
                        params:{
                      restaurant,
                  }})
                } >
                <MapCallout restaurant={restaurant} />
                </Callout>

            </Marker>
          );
        })}
        </Map>
      </>
    );
  };

  export const MapScreen = ({navigation}) => {
    const { location, error } = useContext(LocationContext);
    if (!location || error) {
      return (
        <Map
          region={{
            latitude: 0,
            longitude: 0,
          }}
        />
      );
    }
    return <RestaurantMap navigation={navigation} />;
  };