const path = require("path")
const express = require("express")

const path_dir_public = path.join(__dirname, "../public");
const path_file_about = path.join(path_dir_public, "./about.html");
const path_file_help = path.join(path_dir_public, "./help.html");

const app = express()

app.set("view engine", "hbs")

app.use(express.static(path_dir_public))
// app.use("/about", express.static(path_file_about))
// app.use("/help", express.static(path_file_help))

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