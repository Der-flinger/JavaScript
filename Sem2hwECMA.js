// Задание 1: ""Управление библиотекой книг""
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
class Book {
	constructor(title, author, pages) {
		this.title = title;
		this.author = author;
		this.pages = pages;
	}
	displayInfo() {
		console.log(
			`The book '${this.title}' by the author '${this.author}', number of pages - ${this.pages}`
		);
	}
}
const book1 = new Book("Взломать смерть", "Герман и Тамара Рыльские", 352);
book1.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript
class Student {
	constructor(name, age, grade) {
		this.name = name;
		this.age = age;
		this.grade = grade;
	}
	displayInfo = function () {
		console.log(` The name - ${this.name}\n age - ${this.age}\n grade - ${this.grade}`);
	};
}
const student = new Student("Лайт Ягами", 23, "Kira");
student.displayInfo();
