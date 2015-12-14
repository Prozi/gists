// for nodejs

// define module singleton
var Singleton = function (name, body) {
	this.body = body;
	this.name = name;
};

// getter for instance
Singleton.prototype.init = function () {
	if (!this.instance) {
		this.instance = this.body();
		console.log('module [' + this.name + '] loaded');
	}
	return this.instance;
};

// export modules
module.exports = {
	Singleton : Singleton
};
