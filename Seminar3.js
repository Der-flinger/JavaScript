/* let num = prompt("Enter the number");
console.log(`multiply number ${num} for 3`);
let count = 0;
while (num < 1000) {
	if (num * 3 > 1000) {
		break;
	}
	num *= 3;
	count++;
	console.log(`${count} iteration - ${num}`);
}
console.log(`result value = ${num} lesser 1000`);
console.log(`count of iteration - ${count}`); */

/*Задание 1
	Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
function cubing(num) {
	return num ** 3;
}
console.log(`Ответ: ${cubing(prompt("Введите число для возведения в куб"))}`); */

/*Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

 function salaryCalc(salary) {
	if (typeof salary == "number") {
		console.log(
			`Размер заработной платы за вычетом налогов равен ${Math.floor(salary * 0.87)}`
		);
	} else console.log("Некорректный тип данных");
}
salaryCalc("34300"); */

/* Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
function maxAmongThree(num1, num2, num3) {
	console.log(`The first number equal ${num1}`);
	console.log(`The second number equal ${num2}`);
	console.log(`The third number equal ${num3}`);
	console.log("------------------------------------");
	return Math.max(num1, num2, num3);
}
console.log(
	`Максимальное число среди трех равно ${maxAmongThree(
		prompt("Введите первое число"),
		prompt("Введите второе число"),
		prompt("Введите третье число")
	)}`
) */

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
const sum = (num1, num2) => num1 + num2;
const difference = (num1, num2) => {
	if (num1 > num2) return num1 - num2;
	else return num2 - num1;
};
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
console.log(`The sum of the numbers = ${sum(23, 43)}`);
console.log(`The difference of the numbers = ${difference(51, 42)}`);
console.log(`The multiply of the numbers = ${multiply(10, 48)}`);
console.log(`The divide of the numbers = ${divide(65, 23)}`);
