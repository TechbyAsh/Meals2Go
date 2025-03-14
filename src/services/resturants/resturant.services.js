
import camelize from "camelize"; 
import { Platform } from 'react-native';



export const restaurantsRequest = async (location = "37.7749295,-122.4194155") => {
  const liveHost = "https://placesnearby-jyzaqcbqnq-uc.a.run.app";
const localHost = "http://127.0.0.1:5001/mealstogo-6b10f/us-central1";

 const isDevelopment = process.env.NODE_ENV === "production";
 const host = isDevelopment ? localHost : liveHost;

 //console.log(process.env.NODE_ENV)
 /* const liveHost = "https://placesnearby-jyzaqcbqnq-uc.a.run.app";
const localHost = "http://127.0.0.1:5001/mealstogo-6b10f/us-central1";

const isProduction = process.env.NODE_ENV === "production";
const host = isProduction ? liveHost : localHost; */

  const res = await fetch(
    `${host}/placesNearby?location=${location}`
  );
  return await res.json();
};

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
      
      return camelize({
        ...restaurant,
        isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
        isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        address: restaurant.vicinity,
      });
    });
  
    return mappedResults;
  };

