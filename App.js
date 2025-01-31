import { StatusBar } from 'expo-status-bar'
import React from "react";    
import { ThemeProvider } from "styled-components/native";
import { useFonts } from '@expo-google-fonts/open-sans';
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { PoiretOne_400Regular } from '@expo-google-fonts/poiret-one';
import {  Lemon_400Regular } from '@expo-google-fonts/lemon';




import { AuthenticationContextProvider } from './src/services/authentication/authentication.context'
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
 
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    PoiretOne_400Regular,
    Lemon_400Regular,
  });

  if (!fontsLoaded) {
    return null; }// Return null or a loading spinner until fonts are loaded

  return (
    <>
    <ThemeProvider theme={theme}>
    <AuthenticationContextProvider>
     <Navigation />
     </AuthenticationContextProvider>
    </ThemeProvider>
    <StatusBar style="auto" />
    </>
  );
}




