const fs = require('fs');
const {JSDOM} = require('jsdom');
const Car = require("../models/car.js");

// fs.writeFile('../data/data.js', propsData, (e) => {
//   if (e) throw e;
//   console.log('Updated!');
// });

class Scrap  {
	constructor(filePath = __dirname + "/Citroen c3 - Voitures.htm") {
		this.filePath = filePath;
		this.file;
		this.document;
		this.documentBody;
		this.documentPropsString;
		this.documentPropsData;
	}
	getFile() {
		try {
			this.file = fs.readFileSync(this.filePath, 'utf8');
		  } catch (e) {
			  throw new Error(e);
		}
	}
	extractFileInfo() {
		this.document = new JSDOM(this.file).window.document;
		this.documentBody = this.document.querySelector('body').innerHTML;
		this.documentPropsString = "{\"" + this.documentBody.slice(this.documentBody.search("pageProps"), (this.documentBody.search("{}}}")+4));
		this.documentPropsAttributes = JSON.parse(this.documentPropsString).pageProps.ad.attributes;
		console.log(this.documentPropsAttributes);
	}
	async saveFileInfo() {
		const car = new Car();
		car.brand = this.documentPropsAttributes[0].value;
		car.model = this.documentPropsAttributes[1].value;
		car.mileage = this.documentPropsAttributes[4].value;
		car.fuel = this.documentPropsAttributes[5].value;
		car.horsepower = this.documentPropsAttributes[11].value;
		car.horse_power_din = this.documentPropsAttributes[12].value;
		// car.price = car.price;
		try {
			await car.save();
		} catch (e) {
			throw new Error(e);
		}
	}
};

module.exports = Scrap;