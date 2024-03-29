const User = require("../models/user.js");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.js");

router.post('/users', async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		const token = await user.generateAuthToken();
		res.status(201).send({ user, token });
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post('/users/login', async (req, res) => {
	try {
		const user = await User.findByCredentials(req.body.email, req.body.password);
		const token = await user.generateAuthToken();
		res.send({ user, token });
	} catch (e) {
		res.status(400).send();
	}
});

router.post('/users/logout', auth, async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return (token.token !== req.token);	// <-- si le token qui est fournit en post par l'utilisateur est égale à un 
												// ^-- token dans la liste on le vire.
		});
		await req.user.save();
		res.status(200).send();
	} catch (e) {
		res.status(500).send();
	}
});

router.post('/users/logoutAll', auth, async (req, res) => {
	try {
		req.user.tokens = [];
		await req.user.save();
		res.send();
	} catch (e) {
		res.status(500).send();
	}
})

router.get('/users/me', auth, async (req, res) => {
	res.send(req.user);
});

router.patch('/users/me', auth, async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["name", "email", "age", "password"];
	const isValidOperation = updates.every((update) => {
		return allowedUpdates.includes(update);
	})

	if (!isValidOperation) {
		return res.status(400).send({"error":"Invalid updates"});
	}

	try {

		updates.forEach((update) => req.user[update] = req.body[update]);
		await req.user.save();
		if (!req.user) {
			return res.status(404).send();
		}
		res.send(req.user);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.delete('/users/me', auth, async (req, res) => {
	try {
		await req.user.remove();
		res.send(req.user);
	} catch (e) {
		res.status(500).send(e);
	}
});


module.exports = router;
