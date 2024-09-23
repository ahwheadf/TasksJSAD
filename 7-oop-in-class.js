class Character {
	constructor(race, name, language) {
		this.race = race;
		this.name = name;
		this.language = language;
	}

	#speak() {
		console.log(`${this.name} говорит на ${this.language}`);
	}
}

class Orc extends Character {
	constructor(race, name, language, weapon) {
		super(race, name, language);
		this.weapon = weapon;
	}

	speak() {
		console.log(`${this.name} говорит на ${this.language} и является орком`);
	}

	hit() {
		console.log(`${this.name} наносит удар оружием ${this.weapon}`);
	}
}

class Elf extends Character {
	constructor(race, name, language, spell) {
		super(race, name, language);
		this.spell = spell;
	}

	speak() {
		console.log(`${this.name} говорит на ${this.language} и является эльфом`);
	}

	createSpell() {
		console.log(`${this.name} создает новое заклинание ${this.spell}`);
	}
}

const orc = new Orc('Орк', 'Гарош', 'Орочий', 'Топор');
const elf = new Elf('Эльф', 'Леголас', 'Эльфийский', 'Огненный шар');

orc.speak();
orc.hit();
console.log(orc);
elf.speak();
elf.createSpell();
console.log(elf);
