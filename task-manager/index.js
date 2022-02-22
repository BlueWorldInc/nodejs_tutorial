const express = require("express");
require("./src/db/mongoose.js");
const routerUser = require("./src/routers/user.js");
const routerTask = require("./src/routers/task.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routerUser);
app.use(routerTask);

app.listen(port, () => {
	console.log("Server is up on port");
});

// pet = {
// 	name: "cat"
// };

// pet.toJSON = function () {
// 	// console.log(this.toJSON);
// 	// console.log(this.toJSON.toString());
// 	// this.toJSON(); // <- maximum call stack size exceeded
// 	this.a = "a";
// 	return this;
// };

// console.log(JSON.stringify(pet));

// Test ref

const Task = require("./src/models/task.js");
const User = require("./src/models/user.js");

const main = async () => {
	const task = await Task.findById('6215252876d8eb55e444f588');
	await task.populate('owner').execPopulate();
	console.log(task.owner);

	const user = await User.findById('621523f75d53c31448eb4cf2');
	await user.populate('tasks').execPopulate();
	console.log(user.tasks);
};

main();