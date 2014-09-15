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
