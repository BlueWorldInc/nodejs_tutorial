const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api3", {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
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



// const task = new Task({
// 	description: "Aller à l'école ",
// 	completed: false
// })

// task.save().then((data) => {
// 	console.log(data);
// }).catch((error) => {
// 	console.log(error);
// });