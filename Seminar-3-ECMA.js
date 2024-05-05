// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

/* const MusicSeries = {
	model: "muson",
	power: 200,
	batterySize: 1500,
	workTime: 50,
	startCleaning() {
		console.log("Method of musicSeries");
		console.log("Starting cleaning");
	},
};

const Blues = {
	model: "blues-1",
	power: 200,
	batterySize: 1500,
	workTime: 50,
};
Object.setPrototypeOf(Blues, MusicSeries); // prototype of Blues is MusicSeries

function getPrototypeChain(obj) {
	const prototypeChain = [];
	let currentObj = obj;
	while (currentObj !== null) {
		prototypeChain.push(currentObj);
		currentObj = Object.getPrototypeOf(currentObj);
	}
	return prototypeChain;
}

const prototypeChain = getPrototypeChain(Blues);
console.log(prototypeChain); */

// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч."
/* class Animal {
	name = "";
	voice = "aaaaaarrrrrr";
	constructor(name, voice) {
		this.name = name;
		this.voice = voice;
	}
	speak() {
		console.log(`The ${this.name} is speaking ${voice}`);
	}
}

class Dog extends Animal {
	breed = "";
	constructor(name, voice, breed) {
		super(name, voice);
		this.breed = breed;
	}
	fetch() {
		console.log(`The dog ${name} bring the ball`);
	}
}

const dog1 = new Dog("Пёсель", "гав-гав", "Акита");
console.log(dog1);
console.log(dog1.breed); */

// Создать классы продукт и корзина, которые можно использовать для добавления товара
// и выведения информации о пользователе, который совершил покупку
/* class Product {
	name;
	price;
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}

class ShopingCart {
	totalCost;
	items = [];
	constructor(customerName, initialTotalCost = 0) {
		this.customerName = customerName;
		this.totalCost = initialTotalCost;
	}
	addItem(Product, quantity = 1) {
		this.totalCost += Product.price * quantity;
		this.items.push({ Product, quantity });
	}
	getCurrentTotalCost() {
		return this.totalCost;
	}
	checkout() {
		console.log(
			`Thank you for покупку. Заказ оформлен для ${
				this.customerName
			}, the total cost of the order - ${this.getCurrentTotalCost()}`
		);
	}
}

const pants = new Product("Pants", 400);
const sweater = new Product("Sweater", 2300);
const trousers = new Product("Trousers", 1900);
const shoes = new Product("Shoes", 1600);

const cart = new ShopingCart("Johny", 0);
cart.addItem(pants, 3);
cart.addItem(trousers);
cart.addItem(shoes, 2);
cart.checkout(); */
