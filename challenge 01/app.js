// const fs = require("fs");
// fs.appendFileSync("notes.txt", "hey what's up ?\n");

// const notes = require("./notes.js");
// const msg = notes("Zangieff");
// console.log(msg);

// CHALK

// const chalk = require("chalk");

// console.log(chalk.red("Success!"));
// console.log(chalk.bold("Hello"));
// // console.log(chalk.inverse.green("Hello"));
// // Nest styles
// console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// // Nest styles of the same type even (color, underline, background)
// console.log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));

// YARGS

// const yargs = require("yargs");

// yargs.version("1.1.0");
// // console.log(process.argv);
// // console.log(yargs.argv);


// yargs.command({
// 	command: "add",
// 	describe: "Add a new note!",
// 	builder: {
// 		title: {
// 			describe: "Note title",
// 			demandOption: true,
// 			type: "string"
// 		},
// 		body: {
// 			describe: "Note body",
// 			demandOption: true,
// 			type: "string"
// 		}
// 	},
// 	handler: function(argv) {
// 		console.log("Title: " + argv.title);
// 		console.log("Body: " + argv.body);
// 	}
// })

// yargs.command({
// 	command: "remove",
// 	describe: "Remove note!",
// 	handler: function() {
// 		console.log("Removing a note");
// 	}
// })

// yargs.command({
// 	command: "list",
// 	describe: "Add a new note!",
// 	handler: function() {
// 		console.log("Adding a new note");
// 	}
// })

// yargs.command({
// 	command: "read",
// 	describe: "Add a new note!",
// 	handler: function() {
// 		console.log("Adding a new note");
// 	}
// })

// yargs.parse()


// JSON

// const fs = require("fs");

// const book = {
// 	name: "Andrew",
// 	planet: "earth",
// 	age: "27"
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("book.json", bookJSON);

// const bookJSON2 = fs.readFileSync("book.json");
// const book2 = JSON.parse(bookJSON2.toString());

// console.log(book2);

// book2.name = "Neo";
// book2.age = 30;

// console.log(book2);
// fs.writeFileSync("book.json", JSON.stringify(book2))

// JSON ADD notes

const notes = require("./notes.js");
const yargs = require("yargs");

yargs.command({
	command: "add",
	describe: "Add a new note!",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string"
		},
		body: {
			describe: "Note body",
			demandOption: true,
			type: "string"
		}
	},
	handler: (argv) => {
		notes.addNote(argv.title, argv.body);
	}
})

yargs.command({
	command: "delete",
	describe: "Delete a note!",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string"
		}
	},
	handler: (argv) => {
		notes.deleteNote(argv.title);
	}
})

yargs.command({
	command: "read",
	describe: "Read a note!",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string"
		}
	},
	handler: (argv) => {
		notes.readNote(argv.title);
	}
})

yargs.command({
	command: "list",
	describe: "List the notes!",
	handler: () => notes.listNotes()
})

yargs.parse();

// Challenge

//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

// const tasks = {
//     tasks: [{
//         text: 'Grocery shopping',
//         completed: true
//     }, {
//         text: 'Clean yard',
//         completed: false
//     }, {
//         text: 'Film course',
//         completed: false
//     }],
// 	getTasksToDo() {
// 		return this.tasks.filter((task) => !task.completed);
// 	}
// }

// console.log(tasks.getTasksToDo())