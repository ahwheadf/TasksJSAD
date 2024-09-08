'use strict';

class Car {
	#mark;
	#model;
	#_run;
	constructor(mark, model, run) {
		this.#mark = mark;
		this.#model = model;
		this.#run = run;
	}

	set #run(run) {
		run >= 0 ? this.#_run = run : this.#_run = '0';
	}

	get #run() {
		return this.#_run;
	}

	info() {
		console.log(`mark: ${this.#mark}\nmodel: ${this.#model}\nrun: ${this.#run}`);
	}
}

const bmw = new Car('bmw', 'm5', '100.000');
console.log(bmw);

bmw.info();