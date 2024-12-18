import { StatusBar } from 'expo-status-bar'
import { Text } from "react-native";
import React from "react";    
import { ThemeProvider } from "styled-components/native";
import {  useFonts as useOpenSans, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import {  useFonts as usePoiret, PoiretOne_400Regular } from '@expo-google-fonts/poiret-one';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen'
import { theme } from './src/infrastructure/theme/index'
import { SafeArea } from './src/components/utility/safe-area.component'

const Tab = createBottomTabNavigator();

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
    <NavigationContainer>
    <Tab.Navigator>
       <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
       <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
    </ThemeProvider>
    <StatusBar style="auto" />
    </>
  );
}




