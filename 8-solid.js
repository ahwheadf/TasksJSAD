class Billing {
	constructor(amount) {
		this.amount = amount;
	}

	CalculateTotal() {
		return this.amount;
	}
}

class FixedBilling extends Billing {
	constructor(amount) {
		super(amount);
	}

	CalculateTotal() {
		return this.amount;
	}
}

class HourBilling extends Billing {
	constructor(amount, hours) {
		super(amount);
		this.hours = hours;
	}
	CalculateTotal() {
		return this.amount * this.hours;
	}
}

class ItemBilling extends Billing {
	constructor(amount, items) {
		super(amount);
		this.items = items;
	}

	CalculateTotal() {
		return this.amount * this.items;
	}
}

const bill = new FixedBilling(300);
console.log(bill.CalculateTotal());
const hoursBill = new HourBilling(300, 2);
console.log(hoursBill.CalculateTotal());
const itemBill = new ItemBilling(300, 25);
console.log(itemBill.CalculateTotal());