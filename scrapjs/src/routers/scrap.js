const express = require("express");
const router = express.Router();
const Scrap = require("../controller/scrap");

router.get('/scrap', async (req, res) => {
	console.log("calling scrap");
	try {
		const scrap = new Scrap();
		// scrap.getFile();
		// scrap.extractFileInfo();
		// scrap.saveFileInfo();
		scrap.scrapWebsite();
		const scrapa = {l:"a"};
		res.status(200).send(scrapa);
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;