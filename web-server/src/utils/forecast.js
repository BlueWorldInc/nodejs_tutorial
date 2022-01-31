const request = require("request");
const access_tokens = require("./access_tokens.js");

const forecast = ({latitude, longitude, location} = {}, callback) => {
	const cityLat = latitude;
	const cityLon = longitude;
	const placeName = location;
	const url = "http://api.weatherstack.com/current?access_key="+access_tokens.token_weatherstack+"&query="+cityLat+","+cityLon+"";
	
	request({ url, json: true}, (error, {body} = {}) => {
		if (error) {
			callback("Unable to connect to the weather service!", undefined);
		} else if (body.error) {
			callback(body.error.info, undefined);
		} else {
			const current = body.current;
			current.placeName = placeName;
			current.feelslike = body.current.feelslike;
			callback(undefined, current);
		}
	})
}

module.exports = forecast;
