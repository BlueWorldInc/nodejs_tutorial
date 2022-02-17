const submitButton = document.querySelector("#submit");
const _id = document.querySelector("#_id").value;

fetchOptions = {
	method: "PATCH",
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
};

submitButton.addEventListener("click", async (e) => {
	e.preventDefault();
	body = {
		"name": document.querySelector("#name").value,
		"brand": document.querySelector("#brand").value,
		"price": document.querySelector("#price").value
	}
	fetchOptions.body = JSON.stringify(body);
	await fetch("/cars/"+_id, fetchOptions);
	// Simulate a mouse click:
	window.location.href = "/car_list";
});

const fetchCar = async (_id) => {
	const carJson = await fetch("/cars/"+_id);
	const car = await carJson.json();
	document.querySelector("#name").value  = car.name;
	document.querySelector("#brand").value = car.brand;
	document.querySelector("#price").value = car.price;
};

fetchCar(_id);
