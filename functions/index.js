/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started


const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { defineSecret } = require('firebase-functions/params');
const {Client} = require("@googlemaps/google-maps-services-js");

const client = new Client({});
const googleApiKey = defineSecret("GOOGLE_API_KEY");


exports.geocode = onRequest({secrets: [googleApiKey]}, (request, response) => {
    geocodeRequest(request, response, client, googleApiKey.value() );
});

exports.placesNearby = onRequest({secrets: [googleApiKey]},(request, response) => {
    placesRequest(request, response, client, googleApiKey.value() );
  });


 