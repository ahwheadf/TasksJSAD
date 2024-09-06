function Character(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.speak = function() {
    console.log(`${this.name} говорит на ${this.language}`);
};

function Orc(name, weapon) {
    this.race = 'Орк';
    this.name = name;
    this.language = 'Орочий';
    this.weapon = weapon;
}

Orc.prototype = Object.create(Character.prototype);

Orc.prototype.hit = function() {
    console.log(`${this.name} наносит удар оружием ${this.weapon}`);
};

function Elf(name, bow) {
    this.race = 'Эльф';
    this.name = name;
    this.language = 'Эльфийский';
    this.bow = bow;
}


Elf.prototype = Object.create(Character.prototype);

Elf.prototype.shootArrow = function() {
    console.log(`${this.name} стреляет из лука ${this.bow}`);
};

Elf.prototype.castSpell = function() {
    console.log(`${this.name} применяет заклинание`);
};

Elf.prototype.createSpell = function() {
    console.log(`${this.name} создает новое заклинание`);
};

const orc = new Orc('Гарош', 'Топор');
orc.speak();
orc.hit();

const elf = new Elf('Леголас', 'Длинный Лук');
elf.speak();
elf.shootArrow();
elf.createSpell();
elf.castSpell();

console.log(elf);
console.log(orc);
