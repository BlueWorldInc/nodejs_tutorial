const express = require("express");
const router = express.Router();

// Pages
router.get("", (req, res) => {
	res.render("index", {
		title: 'Car app',
		name: 'Hety',
		creator: 'ocal'
	})
})

router.get("/help", (req, res) => {
	res.render("help", {
		title: 'Help is down there',
		name: 'Hetya',
		creator: 'ocal'
	})
})

router.get("/car_list", (req, res) => {
	res.render("car_list", {
		title: 'List of cars',
		name: 'Cars',
		creator: 'ocal'
	})
})

router.get("/car_add", (req, res) => {
	res.render("car_add", {
		title: 'Add a car',
		name: 'Cars',
		creator: 'ocal'
	})
})

router.get("/car_edit/:id", (req, res) => {
	res.render("car_edit", {
		title: 'Edit a car',
		name: 'Cars',
		id: req.params.id,
		creator: 'ocal'
	})
})

router.get("/about", (req, res) => {
	res.render("about", {
		title: 'About Us',
		name: 'Hety',
		creator: 'ocal'
	})
})

router.get("/products", (req, res) => {
	if (!req.query.search) {
		return res.send({
			error: "You must provide a search term"
		})
	}
	res.send({
		products: []
	});
})

router.get("/help/*", (req, res) => {
	res.render("404", {
		title: '404',
		error_msg: '404 the help page you searched doesn\'t exist',
		creator: 'ocal'
	})
})

router.get("*", (req, res) => {
	res.render("404", {
		title: '404',
		error_msg: '404 the page doesn\'t exist',
		creator: 'ocal'
	})
})

module.exports = router;