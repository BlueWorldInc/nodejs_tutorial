const path = require("path")
const express = require("express")

const app = express()

// Define paths for Express config
const path_dir_public = path.join(__dirname, "../public");
const path_dir_views = path.join(__dirname, "../templates");

// Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", path_dir_views)

// Setup static directory to serve
app.use(express.static(path_dir_public))

app.get("", (req, res) => {
	res.render("index", {
		title: 'Weather appp',
		name: 'Hety'
	})
})

app.get("/help", (req, res) => {
	res.render("help", {
		title: 'Help appp',
		name: 'Hety'
	})
})

app.get("/about", (req, res) => {
	res.render("about", {
		title: 'about appp',
		name: 'Hety'
	})
})

app.get("/weather", (req, res) => {
	res.send({
		location: "Phidelphia",
		temperature: 37
	});
})

app.listen(3000, () => {
	console.log("Server is up on port 3000.");
})