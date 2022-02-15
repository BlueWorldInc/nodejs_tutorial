const submitButton = document.querySelector("#submit");

fetchOptions = {
	method: "POST",
	// body: JSON.stringify({ "name": "m4", "brand": "mazda", "price": 45000 }),
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
};

submitButton.addEventListener("click", (e) => {
	e.preventDefault();
	body = {
		"name": document.querySelector("#name").value,
		"brand": document.querySelector("#brand").value,
		"price": document.querySelector("#price").value
	}
	fetchOptions.body = JSON.stringify(body);
	fetch("/cars", fetchOptions).then((response) => {
		console.log(response);
	});
	
})


