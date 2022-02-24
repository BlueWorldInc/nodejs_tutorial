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
const propsString = "{\"" + body.slice(body.search("pageProps"), (body.search("{}}}")+4));
const propsData = "let data = " + propsString + "";
// const props = JSON.parse("{\"" + body.slice(body.search("pageProps"), (body.search("{}}}")+4)));
// const attributes = props.pageProps.ad.attributes
// const marque = attributes[0].value;
// const modele = 
// const annee = 

// console.log(marque);

fs.writeFile('../data/data.js', propsData, (e) => {
  if (e) throw e;
  console.log('Updated!');
});