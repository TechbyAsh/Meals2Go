import { StatusBar } from 'expo-status-bar'
import { Text, View, StyleSheet, SafeAreaView,} from "react-native";
import React from "react";    
import { ThemeProvider } from "styled-components/native";
import {  useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import {  useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import {RestaurantsScreen} from './features/restaurants/screens/restaurants.screen'
import { theme } from './infrastructure/theme/index'



export default function Index() {
 
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded ) {
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




