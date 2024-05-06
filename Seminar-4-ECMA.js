// Создайте функцию delayedMessage(message, delay),
// которая принимает аргументы message (строка) и delay
// (число). Функция должна выводить заданное сообщение в
// консоль через указанную задержку.
// 2. Вызовите функцию delayedMessage() три раза с разными
// сообщениями и задержками. Например:
// a. delayedMessage("Сообщение 1", 2000)
// b. delayedMessage("Сообщение 2", 1000)
// c. delayedMessage("Сообщение 3", 3000)
// 3. После вызова всех функций delayedMessage(), добавьте
// сообщение вида "Конец программы" с помощью
// console.log().
/* function delayedMessage(message, delay) {
	setTimeout(() => {
		console.log(message);
	}, delay);
}
delayedMessage("hello5555", 5000);
delayedMessage("hello3333333", 3000);
delayedMessage("hello222", 2000); */

/* const tasks = [
	{ name: "task1", time: 1000 },
	{ name: "task2", time: 2000 },
	{ name: "task3", time: 3000 },
	{ name: "task4", time: 4000 },
	{ name: "task5", time: 5000 },
];
function taskExecutor(taskArray) {
	// for (let i = 0; i < taskArray.length; i++) {
	// 	const element = taskArray[i];
	// 	setTimeout(() => {
	// 		console.log(element.name);
	// 	}, element.time);
	// }
	taskArray.forEach((element) => {
		setTimeout(() => {
			console.log(element.name);
		}, element.time);
	});
}
taskExecutor(tasks); */

// Напишите программу, которая загружает данные с сервера с
// использованием объекта XMLHttpRequest и отображает полученную
// информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url
// (строка) - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с
// помощью new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который
// будет вызываться при изменении состояния запроса. Проверьте,
// если readyState равен 4 (успешно выполнен запрос) и status равен
// 200 (успешный статус ответа сервера), то выведите полученные
// данные в консоль с помощью console.log(xhr.responseText).
// Задание 2 продолжение
// 4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип
// запроса, url - адрес сервера, true - асинхронный режим запроса.
// 5. Отправьте запрос на сервер с помощью xhr.send().
function loadData(url) {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange;
}
