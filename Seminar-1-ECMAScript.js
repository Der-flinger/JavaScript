// Создать функцию, которая обьединяет массивы в один
/* const mergeArrays = (array1, array2) => [...array1, ...array2];
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
 */
// Создать функцию, которая принимает неограниченное число аргументов и выводит тольок уникальные элементы
/* const removeDuplicates = (...args) => args.filter((value, index) => args.indexOf(value) === index);
console.log(removeDuplicates(1, 3, 4, 2, 7, 4, 1, 6, 234, 55, 32, 2, 1, 222)); */
// Функция должна принимать именно элементы через запятую, а не массив,
// тогда будет работать правильно, но возвращать будет она массив

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

// в однус строку
console.log(Math.min(...[1, 5, 7, 9]));
// не в одну строку

arr = [1, 5, 7, -22, 74, 9];
const min = Math.min(...arr);
console.log(min);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter(count) {
	let counter = count;

	return {
		increment: () => counter++,
		decrement: () => counter++,
	};
}
// testing
let num = createCounter(13);
console.log(num.decrement());
console.log(num.decrement());
console.log(num.increment());
console.log(num.decrement());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(rootElement, lookingClass) {
	if (rootElement.classList && rootElement.classList.contain(lookingClass)) {
		return rootElement;
	}
	for (let i = 0; i < rootElement.children.length; i++) {
		const childElement = rootElement.children[i];
		const foundElement = findElementByClass(childElement, lookingClass);
		if (foundElement) {
			return foundElement;
		}
	}
	return null;
}
