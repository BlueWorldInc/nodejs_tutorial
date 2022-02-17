const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
	try {
		const token = req.header("Authorization").replace("Bearer ", "");
		const decoded = jwt.verify(token, "isthisarealsecret");
		const user = await User.findOne({ _id: decoded._id, "tokens.token": token });
		if (!user) {
			throw new Error();
		}
		req.user = user;
		next();
	} catch (e) {
		res.status(401).send({error: "Please authenticate."});
	}
};

module.exports = auth;

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
