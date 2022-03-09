const fs = require('fs');
const http = require("http");
const request = require("request");
const puppeteer = require('puppeteer');
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
	scrapWebsite() {
		// var options = {
		// 	host: 'www.google.com',
		// 	port: 80,
		// 	path: '/index.html'
		// };
		  
		// http.get(options, function(res) {
		// 	// console.log(res.window);
		// 	console.log(res);
		// }).on('error', function(e) {
		// 	console.log("Got error: " + e.message);
		// });

		const url = "https://www.leboncoin.fr/voitures/2122225401.htm";
		console.log(url);
		// request({ url }, (error, {body} = {}) => {
		// 	if (error) {
		// 		console.log(error);
		// 		// callback("Unable to connect to the weather service!", undefined);
		// 	} else if (body.error) {
		// 		console.log(body.error);
		// 		// callback(body.error.info, undefined);
		// 	} else {
		// 		console.log(body);
		// 	}
		// });

		

		puppeteer
		.launch({ headless: false })
		.then(async (browser) => {
			console.log(await browser.userAgent());
			return browser.newPage();
		})
		.then(function(page) {
			return page.goto(url).then(function() {
			return page.content();
			});
		})
		.then(function(html) {
			console.log(html);
		})
		.catch(function(e) {
			console.log(e);
		});


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
		this.documentPropsAd = JSON.parse(this.documentPropsString).pageProps.ad;
		this.documentPropsAttributes = this.documentPropsAd.attributes;
		this.documentPropsAttributes.price = this.documentPropsAd.price[0];
	}
	async saveFileInfo() {
		const car = new Car();
		car.brand = this.documentPropsAttributes[0].value;
		car.model = this.documentPropsAttributes[1].value;
		car.mileage = this.documentPropsAttributes[4].value;
		car.fuel = this.documentPropsAttributes[5].value_label;
		car.horsepower = this.documentPropsAttributes[11].value;
		car.horse_power_din = this.documentPropsAttributes[12].value;
		car.price = this.documentPropsAttributes.price;
		try {
			await car.save();
		} catch (e) {
			throw new Error(e);
		}
	}
};

module.exports = Scrap;