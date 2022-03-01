const mongoose = require("mongoose");
const validator = require("validator");

const Car = mongoose.model('Car', {
	model: {
		type: String,
		required: true,
		trim: true
	},
	brand: {
		type: String,
		required: true,
		trim: true
	},
	fuel: {
		type: String,
		required: true,
		trim: true
	},
	price: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error("The price must be a positive number");
			}
		}
	},
	mileage: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error("The mileage must be a positive number");
			}
		}
	},
	horsepower: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error("The mileage must be a positive number");
			}
		}
	},
	horse_power_din: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error("The mileage must be a positive number");
			}
		}
	}
});

module.exports = Car;