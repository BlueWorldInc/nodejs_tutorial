const fs = require('fs');
const {JSDOM} = require('jsdom')
let data;
try {
	data = fs.readFileSync('./Citroen c3 - Voitures.htm', 'utf8')
  } catch (err) {
}

const { document } = new JSDOM(
	data
).window;

const body = document.querySelector('body').innerHTML;
const titreAnnonce = document.querySelector('h1').innerHTML;
const props = JSON.parse("{\"" + body.slice(body.search("pageProps"), (body.search("{}}}")+4)));
console.log(props);
// const marque = 
// const modele = 
// const annee = 

// console.log(heading);