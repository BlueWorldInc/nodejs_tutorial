// CRUD create read update delete
const {MongoClient, ObjectId} = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
const id = new ObjectId();

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log("unable to connect to database");
	}
	const db = client.db(databaseName);

	db.collection("tasks").find().sort({_id:-1}).limit(1).toArray((error, tasks) => {
		if (error) {
			return console.log("An error occured fetching data");
		}
		console.log(tasks);
	})

	// db.collection("tasks").find({completed: true}).toArray((error, tasks) => {
	// 	if (error) {
	// 		return console.log("An error occured fetching data");
	// 	}
	// 	console.log(tasks);
	// })

});