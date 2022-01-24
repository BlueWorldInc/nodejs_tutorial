const https = require("https")
const http = require("http")
const access_tokens = require("../weather/utils/access_tokens");

const url = "http://api.weatherstack.com/current?access_key="+access_tokens.token_weatherstack+"&query=45,-75";

const request = http.request(url, (response) => {
	let data = "";
	response.on("data", (chunk) => {
		data += chunk.toString();
	})
	response.on("end", () => {
		const body = JSON.parse(data).current;
		console.log(body);
	})
})

request.on("error", (error) => {
	console.log(error);
})

request.end()