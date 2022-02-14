require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("6203e8a0aee8e40eac3564be").then((deletedTask) => {
	console.log(deletedTask);
	return Task.countDocuments({completed: false});
}).then((incompletTaskCount) => {
	console.log(incompletTaskCount);
}).catch((e) => {
	console.log(e);
});