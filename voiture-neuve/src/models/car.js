const mongoose = require("mongoose");
const validator = require("validator");

const Car = mongoose.model('Car', {
	name: {
		type: String,
		required: true,
		trim: true
	},
	brand: {
		type: String,
		required: true,
		trim: true
	},
	price: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error("The age must be a positive number");
			}
		}
	}
});

module.exports = Car;