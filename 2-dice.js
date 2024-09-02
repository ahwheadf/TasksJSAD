'use strict';

const dices = ['D4', 'D6', 'D8', 'D10', 'D12', 'D16', 'D20']

function diceRoll(dice) {
	if (dices.includes(dice.toUpperCase())) {
		dice = parseInt(dice.replace('d', ''));
		let number = Math.random() * dice + 1;
		return Math.floor(number);
	}
	return false;
}


console.log(diceRoll('d16'));