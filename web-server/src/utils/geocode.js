const request = require("request");
const access_tokens = require("./access_tokens.js");

const geocode = (address, callback) => {
	const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token="+access_tokens.token_mapbox+"&limit=1";

	request({ url, json: true}, (error, {body} = {}) => {
		if (error) {
			callback("Unable to connect to the weather service!", undefined);
		} else if (body.features[0] === undefined) {
			callback("Unable to find the location", undefined);
		} else {
			const geoinfo = {
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name
			}
			callback(undefined, geoinfo)
		}
	})
}

module.exports = geocode;