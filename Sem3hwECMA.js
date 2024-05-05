// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
class Employee {
	name;
	constructor(name) {
		this.name = name;
	}
	displayInfo() {
		console.log("name:", this.name);
	}
}
class Manager extends Employee {
	department;
	constructor(name, department) {
		super(name);
		this.department = department;
	}
	displayInfo() {
		console.log(`${this.name} from department ${this.department}`);
	}
}
const employee = new Employee("John");
employee.displayInfo();
const manager = new Manager("Josh", "Sales");
manager.displayInfo();

// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}
class Order {
	orderNumber;
	products = [];
	constructor(orderNumber) {
		this.orderNumber = orderNumber;
	}
	addProduct(product) {
		this.products.push(product);
	}
	getTotalPrice() {
		return this.products.reduce((total, product) => total + product.price, 0);
	}
	// reduce((total, product) => total + product.price, 0) - метод reduce принимает два аргумента: функцию обратного вызова и начальное значение аккумулятора (в данном случае 0). Функция обратного вызова принимает два аргумента: total (аккумулятор) и product (текущий элемент массива). В данном случае мы складываем стоимость каждого продукта (product.price) с текущим общим значением (total) и возвращаем новое значение, которое станет новым общим значением для следующей итерации.
}
const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.products);
console.log(order.getTotalPrice()); // Вывод: 600
