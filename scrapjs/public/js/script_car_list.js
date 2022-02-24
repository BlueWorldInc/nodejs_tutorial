const table = document.querySelector(".table");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

// messageOne.textContent = "Loading...";
// animatedLoading();


function addRowToTable(car) {
	let row = table.insertRow(-1);
	let name = row.insertCell(0);
	let brand = row.insertCell(1);
	let price = row.insertCell(2);
	name.innerHTML = car.name;
	brand.innerHTML = car.brand; 
	price.innerHTML = car.price; 
}

function animatedLoading() {
	let dot = 1;
	setInterval(() => {
		  messageTwo.textContent = "Loading" + (".".repeat(dot));
		  dot++;
		  if (dot>10) {
			  dot=0;
		  }
	}, 200);
}