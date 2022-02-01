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

	db.collection("users").findOne({_id: new ObjectId("61f95b4e8da72d5ff0f11a37")}, (error, user) => {
		if (error) {
			return console.log("Unable to fetch the user");
		}
		console.log(user);
	})

});