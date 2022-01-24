const fs = require("fs");
const chalk = require("chalk");
// console.log("Using notes.js");

const getNotes = (name) => "Mr." + name + " Your notes ...";

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicatesNotes = notes.filter((note) => note.title === title);
	if (duplicatesNotes.length === 0) {
		notes.push({
			title: title,
			body: body
		})
		saveNote(notes);
	} else {
		console.log("title is already taken");
	}
}

const saveNote = (note) => fs.writeFileSync("notes.json", JSON.stringify(note));

const deleteNote = (title) => {
	const notes = loadNotes();
	const duplicatesNotes = notes.filter((note) => note.title !== title);
	if (duplicatesNotes.length !== notes.length) {
		saveNote(duplicatesNotes);
		console.log(chalk.green("Deleting the note with the title: " + title));
	} else {
		console.log(chalk.red("There is no note with this title"));
	}
}

const loadNotes = () => {
	try {
		const notes = fs.readFileSync("notes.json");
		return JSON.parse(notes.toString());
	} catch(e) {
		return [];
	}
}

const listNotes = () => {
	const notes = loadNotes();
	if (notes.length > 0) {
		console.log(chalk.blue("Yours notes titles:"));
		notes.forEach(note => {
			console.log(chalk.grey(note.title));
		});
	} else {
		console.log(chalk.red("There is no notes"));
	}
}

const readNote = (title) => {
	const notes = loadNotes();
	const duplicateNote = notes.find((note) => note.title === title);
	if (duplicateNote) {
		console.log(chalk.inverse("Title: " + duplicateNote.title));
		console.log(chalk.grey("Body: " + duplicateNote.body));
	} else {
		console.log(chalk.red("There is no note with this title!"));
	}
}

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	deleteNote: deleteNote,
	listNotes: listNotes,
	readNote: readNote
};