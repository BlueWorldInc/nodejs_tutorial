const path = require("path")
const express = require("express")
const hbs = require("hbs")

const app = express()

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
	res.send({
		location: "Phidelphia",
		temperature: 37
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

app.listen(3000, () => {
	console.log("Server is up on port 3000.");
})