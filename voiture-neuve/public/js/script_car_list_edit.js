const table = document.querySelector(".table");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

messageOne.textContent = "Loading...";
// animatedLoading();
fetch("/cars").then((response) => {
	response.json().then((data) => {
		if (data.error) {
			messageOne.textContent = data.error;
		} else {
			data.forEach((car) => {
				addRowToTable(car);
			});
			addAction();
			messageOne.style.display = "none";
			table.style.display = "";
		}
	});
});

function addRowToTable(car) {
	let row = table.insertRow(-1);
	let name = row.insertCell(0);
	let brand = row.insertCell(1);
	let price = row.insertCell(2);
	let action = row.insertCell(3);
	name.innerHTML = car.name;
	brand.innerHTML = car.brand; 
	price.innerHTML = car.price;
	action.innerHTML = `<div data-_id="`+car._id+`" class="centered"><i class="bi bi-pencil icon">
						</i>&nbsp;&nbsp;&nbsp;<i class="bi bi-x-lg icon"></i></div>`;
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

function addAction() {
	const icons = document.getElementsByClassName("icon");
	Array.from(icons).forEach(icon => {
		const _id = icon.parentNode.dataset._id;
		icon.addEventListener("click", () => {
			const type = icon.classList[1].slice(3);
			if (type === "pencil") {
				window.location.href = "/car_edit/"+_id;
			} else if (type === "x-lg") {
				console.log("delete");
			}
		});
	});
}