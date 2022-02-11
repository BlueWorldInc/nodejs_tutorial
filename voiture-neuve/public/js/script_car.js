const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

messageOne.textContent = "Loading...";
messageTwo.textContent = "";
fetch("/cars").then((response) => {
	// console.log(response.json());
	response.json().then((data) => {
		if (data.error) {
			messageOne.textContent = data.error;
		} else {
			messageOne.textContent = "Car name: " + data[0].name + " Brand: " + data[0].brand + " Price: " + data[0].price + "€";
			messageTwo.textContent = "Car name: " + data[1].name + " Brand: " + data[1].brand + " Price: " + data[1].price + "€";
			// messageTwo.textContent = "Temperature: " + data.temperature + "°C. " + "La vitesse du vent est de " + data.wind_speed + " km/h.";
		}
	});
});