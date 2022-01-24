const geocode = require("./utils/geocode.js")
const forecast = require("./utils/forecast.js")

const city = process.argv[2];

if (!city) {
	return console.log("Please provide an address");
}

geocode(city.toString(), (error, data) => {
	if (error) {
		return console.log(error);
	}
	forecast(data, (error, data) => {
		if (error) {
			return console.log(error);
		}
		console.log(data);
	})
})

