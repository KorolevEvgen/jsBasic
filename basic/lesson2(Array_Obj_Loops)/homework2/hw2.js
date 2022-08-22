// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let arrayNum = [1,2,3,4,5];
// let arrayStr = ['Lenovo','Tanya','Masha','hp','World'];
// let arrayStrNumBool = ['Maryna','iPhone',13,12,false];
// console.log(arrayNum);
// console.log(arrayStr);
// console.log(arrayStrNumBool);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// for (let i = 0; i < 8; i++) {
//     array.push(i)
// }
// console.log(array)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i <10 ; i++) {
//     document.write(`<div>Hello my friend</div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 1; i <=10 ; i++) {
//     document.write(`<div>${i})Ukraine</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Hello, my name is...</h1>`)
//
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 1;
// while (i <= 20) {
//     document.write(`<h1>${i}) Hello, my name is...</h1>`)
//
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrNumber = [5,10,23,45,55,67,89,21,34,67];
// for (let i = 0; i < arrNumber.length; i++) {
//     console.log(arrNumber[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrStr = ['Lenovo','hp','Maryna','Viktor','World','Hello','Anna','apple','orange','case'];
// for (let i = 0; i <arrStr.length ; i++) {
//     console.log(arrStr[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrayTypes = [23,'Viktor',false,45,true,'Masha',67,88,false,'Misha'];
// for (let i = 0; i <arrayTypes.length ; i++) {
//     console.log(arrayTypes[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrayTypes = [23,'Viktor',false,45,true,'Masha',67,88,false,'Misha'];
// for (let i = 0; i < arrayTypes.length; i++) {
//     if (typeof arrayTypes[i] === 'boolean'){
//         console.log(arrayTypes[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrayTypes = [23,'Viktor',false,45,true,'Masha',67,88,false,'Misha'];
// for (let i = 0; i < arrayTypes.length; i++) {
//     if (typeof arrayTypes[i] === 'number'){
//         console.log(arrayTypes[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrayTypes = [23,'Viktor',false,45,true,'Masha',67,88,false,'Misha'];
// for (let i = 0; i < arrayTypes.length; i++) {
//     if (typeof arrayTypes[i] === 'string'){
//         console.log(arrayTypes[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let array = [];
// for (let i = 1; i < 11; i++) {
//     if (i <= 4) {
//         array.push(i);
//     } else if (i>=5 && i<8){
//         array.push(`Hello my number is ${i}`)
//     }else if (i>=8 && i<10){
//         array.push(true)
//     }else if (i === 10){
//         array.push(false)
//     }
// }
// console.log(array);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <=10; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <=100; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <=100; i=i+2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }

//Додаткова РОБОТА

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// const arrABC = ['a', 'b', 'c'];
// for (let i = 1; i <=3 ; i++) {
//     arrABC.push(i)
// }
// console.log(arrABC);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arrOneTwoThree = [1, 2, 3]
// let arr =[]
// for (let i = arrOneTwoThree.length-1; i >= 0; i--) {
//     arr.push(arrOneTwoThree[i])
// }
// console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arrOneTwoThree = [1, 2, 3]
// arrOneTwoThree.push(4,5,6)
// console.log(arrOneTwoThree);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arrOneTwoThree = [1, 2, 3]
// arrOneTwoThree.unshift(4,5,6)
// console.log(arrOneTwoThree);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr = ['js', 'css', 'jq'];
// let shiftItem = arr.shift()
// console.log(shiftItem);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
// let popItem = arr.pop()
// console.log(popItem);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let arrNum = [1, 2, 3, 4, 5];
// for (let i = 0; i <3 ; i++) {
//     arrNum.shift()
// }
// console.log(arrNum);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let arrNum = [1, 2, 3, 4, 5];
// for (let i = 0; i <3 ; i++) {
//     arrNum.pop()
// }
// console.log(arrNum);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
// const readyArray = [1, 2, 3, 4, 5];
// readyArray.splice(3, 0, 'a','b','c');
// console.log(readyArray);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arrNum = [10,23,22,45,66,21,88,54,90,83]
// for (let i = 0; i < arrNum.length; i++) {
//     if (i % 2 === 0){
//        console.log(arrNum[i])
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arrNum = [10,23,22,45,66,21,88,54,90,83];
// let arr = [];
//
// for (let i = 0; i <arrNum.length ; i++) {
//     arr.push(arrNum[i])
// }
// console.log(arr);

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// let arrNum = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while
// let i = 0;
// while (i < arrNum.length) {
//    console.log(arrNum[i])
//
//     i++;
// }

//     2. перебрати його циклом for
// for (let i = 0; i < arrNum.length; i++) {
//     console.log(arrNum[i]);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < arrNum.length) {
//     if (i % 2 !== 0)
//    console.log(arrNum[i])
//
//     i++;
// }
//

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i <arrNum.length ; i++) {
//     if (i %2 !== 0){
//         console.log(arrNum[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < arrNum.length) {
//     if (arrNum[i] % 2 === 0)
//    console.log(arrNum[i])
//
//     i++;
// }
//

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arrNum.length; i++) {
//     if (arrNum[i]%2 === 0 ){
//         console.log(arrNum[i])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arrNum.length; i++) {
//     if (arrNum[i] %3 === 0){
//        arrNum[i] ='okten'
//     }
// }
// console.log(arrNum);

// 8. вивести масив в зворотньому порядку.
// let arr =[]
// for (let i = arrNum.length-1; i >= 0; i--) {
//     arr.push(arrNum[i])
// }
// console.log(arr);

//9.
// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arrEvenNum = []; //a
// let arrOddNum= [];  //b
// let arrRandomNum = []; //c
// let arrRandNumD = []; //d
// for (let i = 1; i <=100 ; i++) {
//     if (i %2 === 0){
//         arrEvenNum.push(i)
//     } else if (i %2 !==0){
//         arrOddNum.push(i)
//     }
// }
// console.log(arrEvenNum);
// console.log(arrOddNum);
//
// for (let i = 0; i <20 ; i++) {
//      let randomNum = Math.round( Math.random() * 50 );
//      arrRandomNum.push(randomNum);
// }
// console.log(arrRandomNum);
// for (let i = 0; i < 20; i++) {
//     let randNum = Math.round(Math.random() * (732 - 8) + 8);
//     arrRandNumD.push(randNum);
// }
// console.log(arrRandNumD);
// 2. Вивести за допомогою console.log кожен третій елемент
// for (let i = 1; i <= arrRandNumD.length; i++) {
//     if (i % 3 === 0) {
//         console.log(arrRandNumD[i]);
//     }
// }
// 3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.
// for (let i = 1; i <= arrRandNumD.length; i++) {
//     if (i % 3 === 0 && arrRandNumD[i] % 2 === 0) {
//         console.log(arrRandNumD[i]);
//     }
// }
// 4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив
// let arr = [];
// for (let i = 1; i <= arrRandNumD.length; i++) {
//     if (i % 3 === 0 && arrRandNumD[i] % 2 === 0) {
//         console.log(arrRandNumD[i]);
//         arr.push(arrRandNumD[i])
//     }
// }
// console.log(arr);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let  example = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i <example.length ; i++) {
//     if (example[i+1] %2===0){
//         console.log(example[i])
//     }
// }
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// const arrNumbers = [100,250,50,168,120,345,188];
// let sum = Math.round(arrNumbers.reduce((a, b) => (a + b)) / arrNumbers.length);
// console.log(sum);
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arrRand = [];
// for (let i = 0; i <5 ; i++) {
//      let randomNum = Math.round( Math.random() * 10 );
//     arrRand.push(randomNum*5);
// }
// console.log(arrRand);

// 10.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arrABC = ['a', 'b', 'c'];
// let str = '';
// for (let i = 0; i <arrABC.length ; i++) {
//     str += arrABC[i]
// }
// console.log(str);
//
// let i = 0;
// while (i < arrABC.length) {
//     str = arrABC[i]+str;
//
//     i++;
// }
// console.log(str);



