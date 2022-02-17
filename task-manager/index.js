const express = require("express");
require("./src/db/mongoose.js");
const routerUser = require("./src/routers/user.js");
const routerTask = require("./src/routers/task.js");
const routerTask = require("./src/middleware/auth.js");

const app = express();
const port = process.env.PORT || 3000;


// Permet d'ajouter un middleware qui s'éxécute entre une request (de l'utilisateur) et une route
// app.use((req, res, next) => {
// 	if (req.method === "GET") {
// 		res.send("GET requests are disabled");
// 	} else {
// 		next();
// 	}
// });

// app.use((req, res, next) => {
// 	res.status(503).send("The site is under maintenance");
// });



app.use(express.json());
app.use(routerUser);
app.use(routerTask);

app.listen(port, () => {
	console.log("Server is up on port");
});

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {

// 	const token = jwt.sign({_id: "abc123"}, "isthisarealsecret", { expiresIn: "7 days"});
// 	console.log(token);
// 	const data = jwt.verify(token, "isthisarealsecret");

// 	console.log(data);

// }

// myFunction();