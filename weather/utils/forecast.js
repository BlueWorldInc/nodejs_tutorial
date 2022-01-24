const request = require("request");
const access_tokens = require("./access_tokens.js");

const forecast = (data, callback) => {
	const cityLat = data.latitude;
	const cityLon = data.longitude;
	const placeName = data.location;
	const url = "http://api.weatherstack.com/current?access_key="+access_tokens.token_weatherstack+"&query="+cityLat+","+cityLon+"";
	
	request({ url: url, json: true}, (error, response) => {
		if (error) {
			callback("Unable to connect to the weather service!", undefined);
		} else if (response.body.error) {
			callback(response.body.error.info, undefined);
		} else {
			const current = response.body.current;
			callback(undefined, "The weather is: " + current.weather_descriptions[0] + " in "+ placeName + ". The current degree is: " + current.temperature + "°C. It's feel like: " + current.feelslike + "°C.");
		}
	})
}

module.exports = forecast;
