const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Task = require("./task");

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		unique: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("The email is not valid");
			}
		}
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error("The age must be a positive number");
			}
		}
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
		trim: true,
		validate(value) {
			if (value.toLowerCase().includes("password")) {
				throw new Error("The password must not contain the word 'password' in it");
			}
		}
	},
	tokens: [{
		token: {
			type: String,
			required: true
		}
	}]
}, {
	timestamps: true
});

userSchema.virtual("tasks", {
	ref: "Tasks",
	localField: '_id',
	foreignField: 'owner'
});

userSchema.methods.toJSON = function () {
	const user = this;
	const userObject = user.toObject();

	delete userObject.password;
	delete userObject.tokens;

	return userObject;
}

userSchema.methods.getPublicProfile = function () {
	const user = this;
	const userObject = user.toObject();

	delete userObject.password;
	delete userObject.tokens;

	return userObject;
}

userSchema.methods.generateAuthToken = async function () {
	const user = this;
	const token = jwt.sign({ _id: user._id }, "isthisarealsecret", { expiresIn: "7 days" });
	user.tokens = user.tokens.concat({ token });
	await user.save();
	return token;
}

userSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email });

	if (!user) {
		throw new Error("Unable to login");
	}
	
	const isMatch = await bcrypt.compare(password, user.password);
	
	if (!isMatch) {
		throw new Error("Unable to login");
	}

	return user;
};

//To hash the password
userSchema.pre("save", async function (next) {
	const user = this;
	
	if (user.isModified("password")) {
		user.password = await bcrypt.hash(user.password, 8);
	}

	next();
});

//To delete all tasks when deleted user
userSchema.pre("remove", async function (next) {
	const user = this;
	await Task.deleteMany({ owner: user._id });
	next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;