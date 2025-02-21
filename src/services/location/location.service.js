import camelize from "camelize";



export const locationRequest = async (searchTerm) => {
  const liveHost = "https://geocode-jyzaqcbqnq-uc.a.run.app/";
const localHost = " http://127.0.0.1:5001/mealstogo-6b10f/us-central1";

 const isDevelopment = process.env.NODE_ENV === "production";
 const host = isDevelopment ? localHost : liveHost;

  const res = await fetch(
    `${host}/geocode?city=${searchTerm}`
  );
  return await res.json();
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng , viewport: geometry.viewport};
};



