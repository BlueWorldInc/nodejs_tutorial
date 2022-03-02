const fs = require('fs');
const {JSDOM} = require('jsdom')

// fs.writeFile('../data/data.js', propsData, (e) => {
//   if (e) throw e;
//   console.log('Updated!');
// });

class Scrap  {
	constructor(filePath = "'./Citroen c3 - Voitures.htm'") {
		this.filePath = filePath;
		this.file;
		this.document;
		this.documentBody;
		this.documentPropsString;
		this.documentPropsData;
		console.log("init");
	}
	getFile() {
		try {
			this.file = fs.readFileSync(this.filePath, 'utf8')
		  } catch (e) {
			  throw new Error(e);
		}
	}
	extractFileInfo() {
		this.document = new JSDOM(this.file).window;
		this.documentBody = this.document.querySelector('body').innerHTML;
		this.documentPropsString = "{\"" + this.documentBody.slice(body.search("pageProps"), (this.documentBody.search("{}}}")+4));
		this.documentPropsData = "let data = " + this.documentPropsString + "";
		console.log(this.documentPropsString());
	}
	saveFileInfo() {

	}
};

module.exports = Scrap;