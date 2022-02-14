require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("6203e8a0aee8e40eac3564be").then((deletedTask) => {
// 	console.log(deletedTask);
// 	return Task.countDocuments({completed: false});
// }).then((incompletTaskCount) => {
// 	console.log(incompletTaskCount);
// }).catch((e) => {
// 	console.log(e);
// });

const deleteTaskAndCountIncomplete = async (id) => {
	await Task.findByIdAndDelete(id);
	return Task.countDocuments({completed: false});
}

deleteTaskAndCountIncomplete("62040d4b6a7f824be8298504").then((result) => {
	console.log(result);
}).catch((e) => {
	console.log("e", e);
})