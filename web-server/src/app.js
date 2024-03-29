const path = require("path")
const express = require("express")
const hbs = require("hbs")
const geocode = require("./utils/geocode.js")
const forecast = require("./utils/forecast.js")

const app = express()
const port = process.env.PORT || 3000;

// Define paths for Express config
const path_dir_public = path.join(__dirname, "../public");
const path_dir_views = path.join(__dirname, "../templates/views");
const path_dir_patials = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", path_dir_views)
hbs.registerPartials(path_dir_patials)

// Setup static directory to serve
app.use(express.static(path_dir_public))

app.get("", (req, res) => {
	res.render("index", {
		title: 'Weather appp',
		name: 'Hety',
		creator: 'ocal'
	})
})

app.get("/help", (req, res) => {
	res.render("help", {
		title: 'Help is down there',
		name: 'Hetya',
		creator: 'ocal'
	})
})

app.get("/about", (req, res) => {
	res.render("about", {
		title: 'About Us',
		name: 'Hety',
		creator: 'ocal'
	})
})

app.get("/weather", (req, res) => {
	if (!req.query.address) {
		return res.send({
			error: "You must provide an address!"
		})
	}
	const city = req.query.address;
	geocode(city.toString(), (error, data) => {
		
		if (error) {
			return res.send({error});
		}

		forecast(data, (error, data) => {
		
			if (error) {
				return res.send({error});
			}	
		
			res.send({
				location: data.placeName,
				temperature: data.temperature,
				wind_speed: data.wind_speed,
				data: data
			});
		
		})
	})
})

app.get("/products", (req, res) => {
	if (!req.query.search) {
		return res.send({
			error: "You must provide a search term"
		})
	}
	res.send({
		products: []
	});
})

app.get("/help/*", (req, res) => {
	res.render("404", {
		title: '404',
		error_msg: '404 the help page you searched doesn\'t exist',
		creator: 'ocal'
	})
})

app.get("*", (req, res) => {
	res.render("404", {
		title: '404',
		error_msg: '404 the page doesn\'t exist',
		creator: 'ocal'
	})
})

app.listen(port, () => {
	console.log("Server is up on port " + port + ".");
})