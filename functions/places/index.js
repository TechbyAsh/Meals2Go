const { mocks, addMockImage } = require("./mock");
const url = require("url");

const addGoogleImage = (restaurant, googleApiKey) => {
  const ref = restaurant.photos[0].photo_reference;
  if (!ref) {
    restaurant.photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ];
    return restaurant;
  }
  restaurant.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
      googleApiKey
    }`,
  ];
  return restaurant;
};


module.exports.placesRequest = (request, response, client,  googleApiKey ) => {
  const { location, mock } = url.parse(request.url, true).query;
  if (!location) {
    return response.status(400).json({ error: "location parameter is required" });
  }
  if (mock === "true") {
  const data = mocks[location];
  if (data) {
    data.results = data.results.map(addMockImage);
  }
 return response.json(data);
 }

 client
    .placesNearby({
      params: {
        location: location, // Ensure this is in the correct format "lat,lng"
        radius: 1500,
        type: "restaurant",
        key: googleApiKey,
      },
      timeout: 1000,
    })
    .then((res) => {
      // Check if res.data is present
      if (!res.data) {
        console.error("API response missing 'data' property:", res);
        return response.status(500).json({ error: "API response missing data" });
      }
      
      // Check if results exist
      if (!res.data.results) {
        console.error("API response missing 'results' property:", res.data);
        return response.status(500).json({ error: "API response missing results" });
      }
      
      // Process the results
      res.data.results = res.data.results.map(restaurant => addGoogleImage(restaurant, googleApiKey));
      return response.json(res.data);
    })
    .catch((e) => {
      // Log the full error for debugging
      console.error("Error in places API call:", e);
      const errMsg =
        e.response && e.response.data && e.response.data.error_message
          ? e.response.data.error_message
          : "Failed to fetch data";
      response.status(400);
      return response.send(errMsg);
    });
};


