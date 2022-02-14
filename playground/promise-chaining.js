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

add(2, 3).then((sum) => { // <= fait une erreur si 2 sup à 5
	console.log(sum);
	return add(sum + 1, 8);	// <= fait une erreur car 2+3+1 > 5
}).then((sum) => {
	console.log(sum);
}).catch((e) => {
	console.log(e);
});