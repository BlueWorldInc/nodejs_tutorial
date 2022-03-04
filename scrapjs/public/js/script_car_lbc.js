const table = document.querySelector(".styled-table");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const btnGetNewCars = document.querySelector("#get-new-cars");

messageOne.textContent = "Loading...";

fetch("/cars").then((response) => {
	response.json().then((data) => {
		if (data.error) {
			messageOne.textContent = data.error;
		} else {
			data.forEach((car) => {
				if (car.brand==="Citroen") {
					addRowToTable(car);
				}
			});
			messageOne.style.display = "none";
			table.style.display = "";
		}
	});
});

function addRowToTable(car) {
	let row = table.insertRow(-1);
    let brand = row.insertCell(0);
	let model = row.insertCell(1);
	let price = row.insertCell(2);
    let mileage = row.insertCell(3);
    let fuel = row.insertCell(4);
    let horsepower = row.insertCell(5);
    let horse_power_din = row.insertCell(6);
	brand.innerHTML = car.brand;
	model.innerHTML = car.model;
	price.innerHTML = car.price + " €";
	mileage.innerHTML = car.mileage + " km";
	fuel.innerHTML = car.fuel;
	horsepower.innerHTML = car.horsepower + " cv";
	horse_power_din.innerHTML = car.horse_power_din + " Ch";
}

btnGetNewCars.addEventListener("click", () => {
	fetch("/scrap").then((response) => {
		console.log(response);
		response.json().then((data) => {
			if (data.error) {
				messageOne.textContent = data.error;
			} else {
				console.log(data);
			}
		});
	});
});