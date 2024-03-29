const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const location = searchElement.value;
	messageOne.textContent = "Loading...";
	messageTwo.textContent = "";
	fetch("/weather?address="+location).then((response) => {
		response.json().then((data) => {
			if (data.error) {
				messageOne.textContent = data.error;
			} else {
				messageOne.textContent = "Location: " + data.location;
				messageTwo.textContent = "Temperature: " + data.temperature + "°C. " + "La vitesse du vent est de " + data.wind_speed + " km/h.";
			}
		});
	});
});