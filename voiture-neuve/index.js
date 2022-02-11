const express = require("express");
require("./src/db/mongoose.js");
const Car = require("./src/models/car.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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

app.listen(port, () => {
	console.log("Server is up on port");
});

