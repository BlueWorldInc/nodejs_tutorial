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