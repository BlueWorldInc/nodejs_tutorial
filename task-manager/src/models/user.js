const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("The email is not valid");
			}
		}
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error("The age must be a positive number");
			}
		}
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
		trim: true,
		validate(value) {
			if (value.toLowerCase().includes("password")) {
				throw new Error("The password must not contain the word 'password' in it");
			}
		}
	}
});

module.exports = User;