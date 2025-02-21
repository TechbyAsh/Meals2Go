import { mocks, mockImages  } from '../../../functions/places/mock/index';
import camelize from "camelize"; 



export const restaurantsRequest = async (location = "37.7749295,-122.4194155") => {
const liveHost = "https://placesnearby-jyzaqcbqnq-uc.a.run.app";
const localHost = " http://127.0.0.1:5001/mealstogo-6b10f/us-central1";

 const isDevelopment = process.env.NODE_ENV === "production";
 const host = isDevelopment ? localHost : liveHost;

 //console.log(process.env.NODE_ENV)

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

 // http://127.0.0.1:5001/mealstogo-6b10f/us-central1