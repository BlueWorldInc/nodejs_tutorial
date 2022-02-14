require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("62040b91fbdfb836d41f72e5", { age: 6 }).then((user) => {
// 	console.log(user);
// 	return User.countDocuments({age: 1});
// }).then((result) => {
// 	console.log(result);
// }).catch((e) => {
// 	console.log(e);
// });

const updateUserAgeAndCount = async (id, age) => {
	const user = await User.findByIdAndUpdate(id, {age});
	const count = await User.countDocuments({age});
	return count;
}

updateUserAgeAndCount("62040b91fbdfb836d41f72e5", 8).then((result) => {
	console.log(result);
}).catch((e) => {
	console.log(e);
});