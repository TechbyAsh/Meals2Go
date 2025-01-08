import { StatusBar } from 'expo-status-bar'
import React from "react";    
import { ThemeProvider } from "styled-components/native";
import {  useFonts as useOpenSans, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import {  useFonts as usePoiret, PoiretOne_400Regular } from '@expo-google-fonts/poiret-one';



import {RestaurantsContextProvider} from './src/services/resturants/resturant.context'
import {LocationContextProvider} from './src/services/location/location.context'
import {Navigation} from './src/infrastructure/navigation/index'
import { theme } from './src/infrastructure/theme/index'





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
     <Navigation />
    </RestaurantsContextProvider>
    </LocationContextProvider>
    </ThemeProvider>
    <StatusBar style="auto" />
    </>
  );
}




