const Task = require("../models/task.js");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.js");

router.post('/tasks', auth, async (req, res) => {
	const task = new Task({
		...req.body,
		owner: req.user._id
	});

	try {
		await task.save();
		res.status(201).send(task);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/tasks', auth, async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).send(tasks)
	} catch (e) {
		res.status(500).send(e);
	}
});

router.get('/tasks/:id', auth, async (req, res) => {
	const _id = req.params.id;
	try {
		const task = await Task.findOne({ _id, owner: req.user._id });
		if (!task) {
			return res.status(404).send();
		}
		res.send(task)
	} catch (e) {
		res.status(500).send(e);
	}
});

router.patch('/tasks/:id', auth, async (req, res) => {
	const _id = req.params.id;
	const updates = Object.keys(req.body);
	const allowedUpdates = ["description", "completed"];
	const isValidOperation = updates.every((update) => {
		return allowedUpdates.includes(update);
	})

	if (!isValidOperation) {
		return res.status(400).send({"error":"Invalid updates"});
	}

	try {
		const task = await Task.findById(_id);
		updates.forEach((update) => task[update] = req.body[update]);
		await task.save();
		// const task = await Task.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true});
		if (!task) {
			return res.status(404).send();
		}
		res.send(task);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.delete('/tasks/:id', auth, async (req, res) => {
	const _id = req.params.id;
	try {
		const task = await Task.findByIdAndDelete(_id);
		if (!task) {
			return res.status(404).send();
		}
		res.send(task);
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;