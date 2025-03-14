import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";


import { RestaurantsNavigator } from './restaurants.navigator';
import { SettingsNavigator } from "./settings.navigator"
import {MapScreen} from "../../features/map/screens/map.screen"
import {CheckoutScreen} from "../../features/checkout/screens/checkout.screen"

import {RestaurantsContextProvider} from '../../services/resturants/resturant.context'
import {LocationContextProvider} from '../../services/location/location.context'
import {FavouritesContextProvider} from '../../services/favourites/favourites.context'





const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Checkout: "cart",
  Settings: "settings",
};



const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
    <Tab.Navigator
      screenOptions={createScreenOptions} 
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} options={{headerShown: false, }} /> 
      <Tab.Screen name="Checkout" component={CheckoutScreen}  options={{headerShown: false, }}/>
      <Tab.Screen name="Map" component={MapScreen}  options={{headerShown: false, }}/>
      <Tab.Screen name="Settings" component={SettingsNavigator}  options={{headerShown: false, }}/> 
    </Tab.Navigator>
    </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);