import { StatusBar } from 'expo-status-bar'
import { Text, View, StyleSheet, SafeAreaView,} from "react-native";
import React from "react";    
import { ThemeProvider } from "styled-components/native";
import {  useFonts as useOpenSans, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import {  useFonts as usePoiret, PoiretOne_400Regular } from '@expo-google-fonts/poiret-one';

import {RestaurantsScreen} from './features/restaurants/screens/restaurants.screen'
import { theme } from './infrastructure/theme/index'



export default function Index() {
 
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
    <RestaurantsScreen />
    </ThemeProvider>
    <StatusBar style="auto" />
    </>
  );
}




