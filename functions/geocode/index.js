
const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");

module.exports.geocodeRequest = (request, response) => {
  const { city } = url.parse(request.url, true).query;
  if (!city) {
    return response.status(400).json({ error: "City parameter is required" });
  }

  const locationMock = locationsMock[city.toLowerCase()];

  if (!locationMock) {
    return response.status(404).json({ error: "City not found in mock data" });
  }

  if (!locationMock) {
    return response.status(404).json({ error: "City not found in mock data" });
}


  response.json(locationMock); 
};
