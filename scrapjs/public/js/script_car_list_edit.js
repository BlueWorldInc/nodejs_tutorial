const table = document.querySelector(".table");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

messageOne.textContent = "Loading...";
// animatedLoading();

const fetchCars = async () => {
	preloadIcons();
	const response = await fetch("/cars");
	const data = await response.json();
	if (data.error) {
		messageOne.textContent = data.error;
	} else {
		// data.forEach((car) => {
		// 	await addRowToTable(car);
		// 	// addRowToTable(car);
		// });
		for (let i = 0; i < data.length; i++) {
			await addRowToTable(data[i]);
		}
		await addAction();
		messageOne.style.display = "none";
		table.style.display = "";
	}
};

const addRowToTable = async (car) => {
	let row = table.insertRow(-1);
	let name = row.insertCell(0);
	let brand = row.insertCell(1);
	let price = row.insertCell(2);
	let action = row.insertCell(3);
	name.innerHTML = car.name;
	brand.innerHTML = car.brand; 
	price.innerHTML = car.price;
	action.innerHTML = `<div data-_id="`+car._id+`" class="centered">
						<i class="bi bi-pencil icon"></i>&nbsp;&nbsp;&nbsp;<i class="bi bi-x-lg icon"></i></div>`;
};

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

const addAction = async () => {
	const icons = document.getElementsByClassName("icon");
	Array.from(icons).forEach(icon => {
		const _id = icon.parentNode.dataset._id;
		icon.addEventListener("click", () => {
			const type = icon.classList[1].slice(3);
			if (type === "pencil") {
				window.location.href = "/car_edit/"+_id;
			} else if (type === "x-lg") {
				if (window.confirm("Do you want to delete the car ?")) {
					deleteCar(_id);
				}
			}
		});
	});
};

const deleteCar = async (_id) => {
	console.log("del");
	const fetchOptions = {
		method: "DELETE",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	};
	try {
		const deletedCar = await fetch("/cars/"+_id, fetchOptions);
		if (!deletedCar) {
			return console.log("there where no car to delete");
		}
		window.location.href = "/car_list/edit";
	} catch (e) {
		console.log("error deleting car");
	}
};

const preloadIcons = () => {
	const newDiv = document.createElement("div");
	newDiv.innerHTML = `<div id="newDiv" style="visibility:hidden;"><i class="bi bi-pencil icon"></i><i class="bi bi-x-lg icon"></i></div>`;
	document.body.appendChild(newDiv);
	setTimeout(() => {newDiv.remove();}, 10000);
};

fetchCars();