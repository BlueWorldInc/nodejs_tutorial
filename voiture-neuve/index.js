const express = require("express");
const path = require("path");
require("./src/db/mongoose.js");
const hbs = require("hbs");
const Car = require("./src/models/car.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

console.log(__dirname);

// Define paths for Express config
const path_dir_public = path.join(__dirname, "./public");
const path_dir_views = path.join(__dirname, "./templates/views");
const path_dir_patials = path.join(__dirname, "./templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", path_dir_views)
hbs.registerPartials(path_dir_patials)

// Setup static directory to serve
app.use(express.static(path_dir_public))


// REST API
app.post('/cars', (req, res) => {
	const car = new Car(req.body);

	car.save().then(() => {
		res.status(201).send(car);
	}).catch((e) => {
		res.status(400).send(e);
	});
});

app.get('/cars', (req, res) => {
	Car.find({}).then((cars) => {
		res.status(200).send(cars)
	}).catch((e) => {
		res.status(500).send(e);
	});
});

app.get('/cars/:id', (req, res) => {
	const _id = req.params.id;
	Car.findById(_id).then((car) => {
		if (!car) {
			return res.status(404).send();
		}
		res.send(car)
	}).catch((e) => {
		res.status(500).send(e);
	});
});

// Pages
app.get("", (req, res) => {
	res.render("index", {
		title: 'Car app',
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

app.get("/car_list", (req, res) => {
	res.render("car_list", {
		title: 'List of cars',
		name: 'Cars',
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
