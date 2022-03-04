const express = require("express");
const path = require("path");
require("./src/db/mongoose.js");
const hbs = require("hbs");
const routerCar = require("./src/routers/car.js");
const routerPages = require("./src/routers/pages.js");
const routerScrap = require("./src/routers/scrap.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Define paths for Express config
const path_dir_public = path.join(__dirname, "./public");
const path_dir_views = path.join(__dirname, "./templates/views");
const path_dir_patials = path.join(__dirname, "./templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", path_dir_views);
hbs.registerPartials(path_dir_patials);

// Setup static directory to serve
app.use(express.static(path_dir_public));

app.use(routerCar);
app.use(routerScrap);
app.use(routerPages);

app.listen(port, () => {
	console.log("Server is up on port " + port + ".");
})
