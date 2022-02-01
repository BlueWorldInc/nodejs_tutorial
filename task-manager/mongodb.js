// CRUD create read update delete
const {MongoClient, ObjectId} = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
const id = new ObjectId();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log("unable to connect to database");
	}
	const db = client.db(databaseName);

	db.collection('users').insertOne({
		_id: id,
		name: 'Andrew',
		age: 27
	}, (error, result) => {
		if (error) {
			return console.log("A problem appeared when inserting");
		}
		console.log(result.ops);
	});

	// db.collection('users').insertMany([{
	// 	name: "Jen",
	// 	age: 29
	// }, {
	// 	name: "Gunthar",
	// 	age: 45
	// }], (error, result) => {
	// 	if (error) {
	// 		return console.log("A problem appeared when inserting");
	// 	}
	// 	console.log(result.ops);
	// })

	// db.collection('tasks').insertMany([{
	// 	description: "lorem",
	// 	completed: true
	// }, {
	// 	description: "lorem",
	// 	completed: true
	// }, {
	// 	description: "lorem",
	// 	completed: false
	// }], (error, result) => {
	// 	if (error) {
	// 		return console.log("A problem appeared when inserting");
	// 	}
	// 	console.log(result.ops);
	// })

});