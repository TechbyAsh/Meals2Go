import { StatusBar } from 'expo-status-bar'
import { Text } from "react-native";
import React from "react";    
import { ThemeProvider } from "styled-components/native";
import {  useFonts as useOpenSans, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import {  useFonts as usePoiret, PoiretOne_400Regular } from '@expo-google-fonts/poiret-one';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';


import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen'
import {RestaurantsContextProvider} from './src/services/resturants/resturant.context'
import {LocationContextProvider} from './src/services/location/location.context'
import { theme } from './src/infrastructure/theme/index'
import { SafeArea } from './src/components/utility/safe-area.component'

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant-sharp",
  Map: "map",
  Settings: "settings",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
export default function App() {
 
  const [openSansLoaded] = useOpenSans({
    OpenSans_400Regular,
  });

  const [poiretOneLoaded] = usePoiret({
    PoiretOne_400Regular,
  });

  if (!openSansLoaded|| !poiretOneLoaded ) {
    return null;
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      < LocationContextProvider>
      <RestaurantsContextProvider>
    <NavigationContainer>
    <Tab.Navigator  
         screenOptions={createScreenOptions}
         tabBarOptions={{
              activeTintColor: "red",
              inactiveTintColor: "gray",
            }}
    >
       <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
       <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
    </RestaurantsContextProvider>
    </LocationContextProvider>
    </ThemeProvider>
    <StatusBar style="auto" />
    </>
  );
}




