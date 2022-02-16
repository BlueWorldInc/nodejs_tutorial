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

const bcrypt = require("bcryptjs");

const myFunction = async () => {
	const password = "Red12345!";
	const hashedPassword = await bcrypt.hash(password, 8);
	const hashedPassword2 = await bcrypt.hash(password, 8);

	console.log(password);
	console.log(hashedPassword);
	console.log(hashedPassword2);

	const isMatch = await bcrypt.compare("Red12345!", hashedPassword);
	console.log(isMatch);
}

myFunction();