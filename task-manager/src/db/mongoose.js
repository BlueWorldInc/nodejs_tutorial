const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
	useNewUrlParser: true,
	useCreateIndex: true
})

// const me = new User({
// 	name: "  a ",
// 	email: "heyman@etoa.com   ",
// 	password: "abcqsdq"
// });

// me.save().then((data) => {
// 	console.log(data);
// }).catch((error) => {
// 	console.log("error: ", error);
// })

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

// const task = new Task({
// 	description: "Aller à l'école ",
// 	completed: false
// })

// task.save().then((data) => {
// 	console.log(data);
// }).catch((error) => {
// 	console.log(error);
// });