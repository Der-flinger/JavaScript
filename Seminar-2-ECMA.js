// Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");
/* const Person = {
	name: "",
	age: null,
	gender: "",
	introduce() {
		console.log(
			`My name is ${this.name}, i'm ${this.age} years old and i'm a ${this.gender} person`
		);
	},
	changeName(name) {
		this.name = name;
	},
};
Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce();
Person.changeName("Mike");
Person.introduce(); */

//  Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
/* const Animal = {
	name: "Animal",
	eat() {
		console.log(`The ${this.name} is eating right now`);
	},
};
console.log(Animal);
Animal.eat();

const Dog = {
	name: "Rex",
	bark() {
		console.log(`The ${this.name} is barking`);
	},
};
Dog.eat = Animal.eat;
Dog.eat();
 */

// Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.
/* const calculator = {
	add(a, b) {
		return a + b;
	},
	subtract(a, b) {
		return a - b;
	},
	multiply(a, b) {
		return a * b;
	},
};

console.log(calculator.add.call(null, 1, 8));
console.log(calculator.add.call(null, 5, 3));
console.log(calculator.subtract.apply(null, [5, 3])); */

// Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.
/* class Person {
	name = "";
	age = 0;
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	introduce() {
		console.log(`My name is ${this.name} and i'm ${this.age} years old`);
	}
}
const person = new Person("John", 25);
person.introduce(); */

// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета и
// withdraw(amount) для снятия денег со счета. Класс должен иметь
// также статическое свойство bankName, которое содержит название
// банка.
/* class BankAccount {
	accountNumber;
	balance;
	constructor(accountNumber, balance = 0) {
		this.accountNumber = accountNumber;
		this.balance = balance;
	}
	deposit(amount) {
		this.balance += amount;
		console.log(
			`Deposited ${amount} funds into account №${this.accountNumber}, current balance = ${this.balance}`
		);
	}
	withdraw(amount) {
		if (!(this.balance - amount < 0)) {
			this.balance -= amount;
			console.log(
				`Withdrawn ${amount} funds from account №${this.accountNumber}, current balance = ${this.balance}`
			);
		} else console.log(`insufficient funds on account №${this.accountNumber}`);
	}
}
const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account
// 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account
// 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account
// 1234567890
 */
