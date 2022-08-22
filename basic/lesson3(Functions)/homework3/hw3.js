// 1) створити функцію яка приймає масив та виводить його
// function printFunc(array) {
//     console.log(array);
// }
//
// printFunc(['string', 'number', false, true, 23, 45]);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попередню функцію.
// function getRandArr(limit, n) {
//     let arr = [];
//     for (let i = 0; i < n; i++) {
//         let a = Math.round(Math.random() * limit);
//         arr.push(a);
//     }
//     printFunc(arr);
// }
//
// getRandArr(20, 5);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNum(a,b,c){
//     let min = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (min > arguments[i]){
//             min = arguments[i]
//         }
//     }
//     return min;
// }
// console.log(minNum(5,20,40))

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxNum(a,b,c){
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (max < arguments[i]){
//             max = arguments[i]
//         }
//     }
//     return max;
// }
// console.log(maxNum(20,100,40))

// 5) створити функцію яка повертає найбільше число з масиву
// function maxNumArr(numbers){
//     let max = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if (max < numbers[i]){
//             max = numbers[i]
//         }
//     }
//     return max;
// }
// console.log(maxNumArr([4,5,100,1,43,23,22]))

// 6) створити функцію яка повертає найменьше число з масиву
// function minNumArr(numbers){
//     let min = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if (min  > numbers[i]){
//             min = numbers[i]
//         }
//     }
//     return min;
// }
// console.log(minNumArr([4,5,100,25,33,43]))

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function sumNum(arr){
//     let sum = 0;
//     for (let i = 0; i <arr.length ; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(sumNum([20, 30, 5, 10]));

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function sumNumResult(arr){
//     let sum = 0;
//     for (let i = 0; i <arr.length ; i++) {
//         sum += arr[i]
//     }
//     return sum/arr.length
// }
// console.log(sumNumResult([20, 30, 40, 10]));

// 9) Створити функцію яка приймає масив будь яких объектів,
// та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// function keyObj(array){
//     let arrKeys = []
//     for (const arrayElement of array) {
//         for (const arrayElementKey in arrayElement) {
//             arrKeys.push(arrayElementKey);
//         }
//     }
// return arrKeys
// }
//
// console.log(keyObj(arr));

// 10) Створити функцію яка приймає масив будь яких об'єктів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// function keyObjVal(array){
//     let arrValues = [];
//     for (const arrayElement of array) {
//         for (const arrayElementKey in arrayElement) {
//             arrValues.push(arrayElement[arrayElementKey]);
//         }
//     }
// return arrValues
// }
//
// console.log(keyObjVal(arr));

// 11) створити функцію, яка складає значення елементів з однаковими індексами
// та повертає новий результутатний масив масив.
//     EXAMPLE:
// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];
//
// результат
//     [3,5,7,9]
// function sumArr(arr1, arr2) {
//     let sum = [];
//     for (let i = 0; i < arr1.length; i++) {
//         sum[i] = arr1[i] + arr2[i];
//     }
//     return sum;
// }
//
// console.log(sumArr([1, 2, 3, 4], [2, 3, 4, 5]));

// ============================================================================================

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
// function minNum(a,b,c){
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (min > arguments[i]){
//             min = arguments[i]
//         }else if (max< arguments[i]){
//             max = arguments[i]
//         }
//     }
//     alert(max)
//     return min;
// }
// console.log(minNum(20,40,10))

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені ключі чи значення.
// let obj = { name: 'Dima', age: 13 };
//
// function keyObj(obj, element) {
//     if (element === 'key') {
//         for (const key in obj) {
//             console.log(key);
//         }
//     }else if (element === 'value') {
//         for (const key in obj) {
//             console.log(obj[key]);
//         }
//     }
// }
//
// keyObj(obj, 'value');

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// function myFunc(array, ind) {
//     if (array.length > ind + 1) {
//         let a = array[ind + 1];
//         array[ind + 1] = array[ind]; //[9,9,0,4]
//         array[ind] = a; //[8,9,0,4]
//         return array;
//     }
// }
//
// console.log(myFunc([9, 8, 0, 4], 0));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець масиву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// function trueArray(array) {
//     let num = [];
//     let zero = [];
//     for (const arrElement of array) {
//         if (arrElement === 0) {
//             zero.push(arrElement);
//         } else if (arrElement !== 0) {
//             num.push(arrElement);
//         }
//     }
//     return num.concat(zero);
// }
//
// console.log(trueArray([1, 0, 6, 0, 3]));
// console.log(trueArray([0, 1, 2, 3, 4]));
// console.log(trueArray([0, 0, 1, 0]));

// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//
// let n1 = '    Harry       Potter      ';       // let n1 = 'Harry Potter'
// let n2 = '    Ron       Whisley      ';       // let n2 = 'Ron Whisley'
// let n3 = '    Hermione       Granger      '; // let n3 = 'Hermione Granger'
//
// function nameNormal(name) {
//     let normal = name.replace(/\s+/g, ' ').trim();
//     return normal;
// }
//
// console.log(nameNormal(n1));
// console.log(nameNormal(n2));
// console.log(nameNormal(n3));
