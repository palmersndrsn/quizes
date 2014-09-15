var Person = function(name, height, age, sleeping) {
	this.name = name;
	this.height = height;
	this.age = age;
	this.sleeping = false;
};


Person.prototype.eat = function () {
	return "chomp";
};

Person.prototype.sleep = function () {
	if (this.sleeping === false) {
		this.sleeping = true;
	} else {
		console.log(this.name + " is already sleeping");
	}

};

Person.prototype.wakeUp = function () {
	if (this.sleeping === true) {
		this.sleeping = false;
	} else {
		console.log(this.name + " is already awake");
	}
};

var Student = function (studying) {
	this.studying = false;
	// not sure how to inherit from Person,
};

Student.prototype.study = function () {
	if (this.study === false) {
		this.study = true;
	} else {
		console.log(this.name + " is already studying");
	}
};

Student.prototype.stopStudy = function () {
	if (this.study === true) {
		this.study = false;
	} else {
		console.log(this.name + " is already stopped");
	}
};

Student.prototype.sleep = function () {
	if (this.studying === false) {
		this.sleep = true;
	} else {
		console.log(this.name + " is studying and cannot sleep");
	}
};