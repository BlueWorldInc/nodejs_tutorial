const path = require("path")
const express = require("express")

const path_dir_public = path.join(__dirname, "../public");

const app = express()

app.use(express.static(path_dir_public))

app.get("", (req, res) => {
	res.send("hello world");
})

app.get("/help", (req, res) => {
	res.send("Help page");
})

app.get("/about", (req, res) => {
	res.send("<title>About page</title><h1>Abouts</h1>");
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