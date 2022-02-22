const randomNumber = (Math.random() * 10).toFixed(0);
const nbEssai = 3;
let win = false;

for (let i = 0; i < nbEssai; i++) {
	let nb = prompt("Quel est le nombre au hasard ?");
	if (nb === randomNumber) {
		alert("Vous avez gagner");
		win = true;
		break;
	}
}

if (!win) {
	alert("Vous avez perdu");
}

