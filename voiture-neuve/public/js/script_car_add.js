const table = document.querySelector(".table");

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
