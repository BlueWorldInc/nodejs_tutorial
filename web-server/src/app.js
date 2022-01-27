const path = require("path")
const express = require("express")

const path_dir_public = path.join(__dirname, "../public");
const path_file_about = path.join(path_dir_public, "./about.html");
const path_file_help = path.join(path_dir_public, "./help.html");

const app = express()

app.use(express.static(path_dir_public))
// app.use("/about", express.static(path_file_about))
// app.use("/help", express.static(path_file_help))

app.get("/weather", (req, res) => {
	res.send({
		location: "Phidelphia",
		temperature: 37
	});
})

app.listen(3000, () => {
	console.log("Server is up on port 3000.");
})