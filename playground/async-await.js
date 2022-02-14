const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (b < 0) {
				reject("B too low: " + a);
			}
			resolve(a + b);
		}, 2000);
	})
};

const sum = async (a, b) => {
	const sum1 = await add(a, b);
	const sum2 = await add(sum1, 50);
	const sum3 = await add(sum2, -1);
	return sum3;
}

sum(1, 9).then((result) => {
	console.log(result);
}).catch((e) => {
	console.log(e);
});

