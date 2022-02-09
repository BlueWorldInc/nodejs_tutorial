const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
	useNewUrlParser: true,
	useCreateIndex: true
})

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

const me = new User({
	name: "  a ",
	email: "heyman@etoa.com   ",
	password: "abcqsdq"
});

me.save().then((data) => {
	console.log(data);
}).catch((error) => {
	console.log("error: ", error);
})

const Task = mongoose.model('Tasks', {
	description: {
		type: String,
		required: true,
		trim: true
	}, 
	completed: {
		type: Boolean,
		default: false
	}
})

const task = new Task({
	description: "Aller à l'école ",
	completed: false
})

task.save().then((data) => {
	console.log(data);
}).catch((error) => {
	console.log(error);
});