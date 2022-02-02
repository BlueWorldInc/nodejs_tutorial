// Promise

const doWorkPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("You earned 2300 €");
		reject("This is my error");
	}, 2000);
});

doWorkPromise.then((data) => {
	console.log(data);
}).catch((error) => {
	console.log(error);
}).finally((data) => {
	console.log("find", data);
});

// Callback
const doWorkCallBack = (callback) => {
	setTimeout(() => {
		callback('This is my error', undefined);
		callback(undefined, 'You earned 2300 €');
	}, 2000);
}

doWorkCallBack((error, result) => {
	if (error) {
		return console.log(error);
	}
	console.log(result);
});