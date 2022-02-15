const submitButton = document.querySelector("#submit");

fetchOptions = {
	method: "POST",
	// body: JSON.stringify({ "name": "m4", "brand": "mazda", "price": 45000 }),
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
	await fetch("/cars", fetchOptions);
	console.log("done");
	// Simulate a mouse click:
	window.location.href = "/car_list";
})


