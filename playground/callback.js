const add = (a, b, callback) => {
	setTimeout(() => {
		const sum = a + b;
		callback(sum);
	}, 2000);
};

add(1, 4, (sum) => {
	console.log(sum);
});

const geocode = (city, callback) => {
	setTimeout(() => {
		const location = {
			longitude : 0,
			latitude: 0
		}
		callback(location);
	}, 2000);
	callback(city);
}

geocode("Philadelphia", (location) => {
	console.log(location);
})

console.log("New");