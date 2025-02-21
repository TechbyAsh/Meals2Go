
const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");

module.exports.geocodeRequest = (request, response, client,  googleApiKey) => {
  const { city,  mock } = url.parse(request.url, true).query;
  if (!city) {
    return response.status(400).json({ error: "City parameter is required" });
  }
  if (mock === "true") {
  const locationMock = locationsMock[city.toLowerCase()];

  if (!locationMock) {
    return response.status(404).json({ error: "City not found in mock data" });
  }

  response.json(locationMock); 
}
client
    .geocode({
      params: {
        address: city,
        key: googleApiKey,
      },
      timeout: 1000,
    })
    .then((res) => {
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};
