const Car = require("../models/car.js");
const express = require("express");
const router = express.Router();

// REST API
router.post('/cars', async (req, res) => {
	const car = new Car(req.body);
	try {
		await car.save();
		res.status(201).send(car);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.patch('/cars/:id', async (req, res) => {
	const _id = req.params.id;
	const updates = Object.keys(req.body);
	const allowedUpdates = ["name", "brand", "price"];
	const isValidOperation = updates.every((update) => {
		return allowedUpdates.includes(update);
	})

	if (!isValidOperation) {
		return res.status(400).send({"error":"Invalid updates"});
	}

	try {
		const car = await Car.findById(_id);
		updates.forEach((update) => car[update] = req.body[update]);
		await car.save();
		if (!car) {
			return res.status(404).send();
		}
		res.send(car);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.get('/cars', async (req, res) => {
	try {
		const cars = await Car.find({});
		res.status(200).send(cars);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.get('/cars/:id', async (req, res) => {
	const _id = req.params.id;

	try {
		const car = await Car.findById(_id);
		if (!car) {
			return res.status(404).send();
		}
		console.log(car);
		res.send(car);
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;
