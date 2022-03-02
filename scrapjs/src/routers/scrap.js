const express = require("express");
const router = express.Router();
const Scrap = require("../controller/scrap");

router.get('/scrap', async (req, res) => {
	try {
		const scrap = new Scrap();
		scrap.getFile();
		scrap.extractFileInfo();
		res.status(200).send("cars");
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;