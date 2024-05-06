const serverUrl = "https://jsonplaceholder.typicode.com/users";
const xhr = new XMLHttpRequest(); // создаем новый запрос с помощью переменной

// GET - при открытии любого сайта мы отправляем этот запрос и видим на экране страницу сайта
// POST - нужен для создания данных, то есть например заполняем форму на старнице и отправляем веденные данные
// DELETE - запрос, необходимый для удаления данных
// PUT - полное обновление элемента
// PATCH - частичное обновление данных

// все вышеуказанные запросы лежат во вкладке Network отладчика браузера
// (там также есть DOM структура, Sourceы и прочие полезные данные)

// xhr.open("GET", serverUrl); //открыть новое соединение, создать запрос

// xhr.responseType = "json"; // указываем тип для response json, ответ будет приходить в виде json файла

// // добавляем слушатель, который показывает, что там в xhr.request,
// // который возвращается с сервера в виде типа (string)
// xhr.onload = () => {
// 	// Можем обращаться к свойствам xhr,
// 	// чтобы например проверить на другие ошибки
// 	if (xhr.status >= 400) {
// 		console.error(xhr.response);
// 	} else console.log(xhr.response);
// };
// xhr.onerror = () => {
// 	console.log(xhr.response); //выводим на экран инфу в случае ошибки
// };

// xhr.send(); //Отправка запроса на сервер

// ----------------------------------------------------------------------------------------------

// ИСПОЛЬЗОВАНИЕ ПРОМИСОВ (promise)

// function sendRequest(method, url, body = null) {
// 	return new Promise((resolve, reject) => {
// 		// возвращает promise который принимает в себя 2 метода, которые нужны для обозначения того,
// 		// что должно быть выполнено и что вернет ошибку
// 		xhr.open(method, url);

// 		xhr.responseType = "json";
// 		xhr.setRequestHeader("Content-Type", "application/json"); // так как мы работаем с JS обьектом здесь,
// 		// указываем в header тип данных json

// 		xhr.onload = () => {
// 			if (xhr.status >= 400) {
// 				reject(xhr.response);
// 			} else resolve(xhr.response);
// 		};
// 		xhr.onerror = () => {
// 			reject(xhr.response);
// 		};

// 		xhr.send(JSON.stringify(body)); // Отправляем наши данные на сервер через send, но нужно
// 		// отправлять именно строковое значение, так как и принимаем мы тоже строку от сервера
// 	});
// }

// // sendRequest("GET", serverUrl) // У Promise есть методы 'then' и 'catch' например,
// // 	// которые принимают данные и что то можно потом с ними сделать
// // 	.then((data) => console.log(data)) //принимает переменную и выводит в консоль
// // 	.catch((error) => console.log(error)); // принимает ошибку и выводит в консоль

// obj = {
// 	// тестовый обьект, который нужен для передачи POST
// 	name: "John Silverhand",
// 	age: 34,
// };
// sendRequest("POST", serverUrl, obj) // Для POST запроса, нужно передавать еще какой-либо body
// 	// в котором у нас данные, которые мы передаем на сервер
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error));

// ----------------------------------------------------------------------------------------------

// Использование FETCH
function fetchRequest(method, url, body = null) {
	const headers = {
		"Content-Type": "application/json",
	}; // fetch принимает url по которому мы делаем запрос
	return fetch(url, {
		method: method, // и конфигурационный обьект, внутри которого указываем метод, body для POST,
		body: JSON.stringify(body),
		headers: headers, // header тоже можно указать
	}).then((response) => {
		// возвращает ответ от fetch в виде json файла
		if (response.ok) return response.json();
		else {
			return response.json().then((error) => {
				const e = new Error("Что-то пошло не так");
				throw e;
			});
		}
	});
}
// fetchRequest("GET", serverUrl)
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error));

const obj = {
	name: "John Silverhand",
	age: 34,
};
fetchRequest("POST", serverUrl, obj)
	.then((data) => console.log(data))
	.catch((error) => console.log(error));
