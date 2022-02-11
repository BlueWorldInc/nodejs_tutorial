const table = document.querySelector(".table");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

messageOne.textContent = "Loading...";
animatedLoading();
fetch("/cars").then((response) => {
	response.json().then((data) => {
		if (data.error) {
			messageOne.textContent = data.error;
		} else {
			data.forEach((car) => {
				addRowToTable(car);
			});
			messageOne.style.display = "none";
			table.style.display = "";
		}
	});
});

function addRowToTable(car) {
	var row = table.insertRow(-1);
	var name = row.insertCell(0);
	var brand = row.insertCell(1);
	var price = row.insertCell(2);
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