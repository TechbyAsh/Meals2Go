import { StatusBar } from 'expo-status-bar'
import React from "react";    
import { ThemeProvider } from "styled-components/native";
import {  useFonts as useOpenSans, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import {  useFonts as usePoiret, PoiretOne_400Regular } from '@expo-google-fonts/poiret-one';



import {RestaurantsContextProvider} from './src/services/resturants/resturant.context'
import {LocationContextProvider} from './src/services/location/location.context'
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context'
import {FavouritesContextProvider} from './src/services/favourites/favourites.context'
import {Navigation} from './src/infrastructure/navigation/index'
import { theme } from './src/infrastructure/theme/index'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCke6nj8NVWDya1N7SXmRbFoKXGHrm0RB4",
  authDomain: "mealstogo-6b10f.firebaseapp.com",
  projectId: "mealstogo-6b10f",
  storageBucket: "mealstogo-6b10f.firebasestorage.app",
  messagingSenderId: "417489851286",
  appId: "1:417489851286:web:9e6147d7100a23d5d8c3b7"
};

const app = initializeApp(firebaseConfig);



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
    <AuthenticationContextProvider>
     <FavouritesContextProvider>
      <LocationContextProvider>
      <RestaurantsContextProvider>
     <Navigation />
    </RestaurantsContextProvider>
    </LocationContextProvider>
    </FavouritesContextProvider>
     </AuthenticationContextProvider>
    </ThemeProvider>
    <StatusBar style="auto" />
    </>
  );
}




