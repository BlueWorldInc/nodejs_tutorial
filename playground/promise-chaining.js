const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (a > 5) {
				reject("A too high: " + a);
			}
			resolve(a + b);
		}, 2000);
	})
}

add(2, 3).then((sum) => {
	console.log(sum);
	return add(sum + 1, 8);
}).then((sum) => {
	console.log(sum);
}).catch((e) => {
	console.log(e);
});