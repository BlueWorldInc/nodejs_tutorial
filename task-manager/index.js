const express = require("express");
require("./src/db/mongoose.js");
const User = require("./src/models/user.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
	const user = new User(req.body);

	user.save().then(() => {
		res.send(user);
	}).catch((e) => {
		res.status(418).send(e);
	});
	// res.send(req.body);
});

// app.get('/', (req, res) => {
// 	res.send("testing");
// });

app.listen(port, () => {
	console.log("Server is up on port");
});

