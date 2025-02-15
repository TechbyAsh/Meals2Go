import camelize from "camelize";



export const locationRequest = async (searchTerm) => {
  const res = await fetch(
    `https://geocode-jyzaqcbqnq-uc.a.run.app/geocode?city=${searchTerm}`
  );
  return await res.json();
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng , viewport: geometry.viewport};
};



//http://127.0.0.1:5001/mealstogo-6b10f/us-central1