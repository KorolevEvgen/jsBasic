// ДОМ РОБОТА

// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let hello = 'hello';
// let owu = 'owu';
// let com = 'com';
// let ua = 'ua';
// let one = 1;
// let ten = 10;
// let negativeNumber = -999;
// let oneTwoThree = 123;
// const p = 3.14;
// let numberWithRemainder = 2.7;
// let sixteen = 16;
// let tr = true;
// let fls = false;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// alert(hello);
// console.log(p);
// document.write(tr)

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// negativeNumber = 999
// console.log(negativeNumber)
//
// ten = 11
// alert(ten)
//
// sixteen = 'hi'
// document.write(sixteen)

// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// //     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let yourName = prompt('What\'s your name?');
// let yourLastName = prompt('What\'s your lastname?')
// let yourAge = +prompt('How old are you?')
//
// alert(`Вітаю ${yourName} ${yourLastName}. Тобі ${yourAge} років.`)

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
// let website = owu + '.' + com + '.' + ua;
// console.log(website);
//
// let helloP = hello + ' ' + 'my number is' + ' ' + p;
// document.write(helloP);

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// let numberOne = Number(prompt('Enter number one'));
// let numberTwo = +prompt('Enter number two');
// let numberThree = prompt('Enter number three');
//
// console.log(typeof numberOne);
// console.log(typeof numberTwo);
// console.log(typeof Number(numberThree));

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.
// let promptNumberOne = parseInt(prompt('Enter prompt number one'));
// let promptNumberTwo = parseInt(prompt('Enter prompt number two'));
// let promptNumberThree = parseInt(prompt('Enter prompt number three'));
// let promptNumberFour = parseInt(prompt('Enter prompt number four'));
//
// let sumNumber = promptNumberTwo+promptNumberOne+promptNumberThree+promptNumberFour;
// console.log(sumNumber);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//     Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let promptNumOne = parseFloat(prompt('Enter prompt number one'));
// let promptNumTwo = parseFloat(prompt('Enter prompt number two'));
// let promptNumThree = parseFloat(prompt('Enter prompt number three'));
//
// let sumNumPrompt = promptNumOne+promptNumTwo+promptNumThree;
// console.log(sumNumPrompt);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS").
// Просумувати їх між собою. Результат вивести в консоль.
// let promNumOne = parseFloat(prompt('Enter prompt number one'));
// let promNumTwo = parseFloat(prompt('Enter prompt number two'));
// let promNumThree = parseFloat(prompt('Enter prompt number three'));
//
// let sumNumProm = promNumOne+promNumTwo+promNumThree;
// console.log(Math.round(sumNumProm));

// - За допомогою prompt() отримати 2 цілих числа.
//     Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//     Example. Число 1 = 5. Число 2 = 2. Результат = 25
// let base = +prompt('enter base number')
// let exponent = +prompt('enter exponent number')
//
// console.log(Math.pow(base, exponent));

//     - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof a); //number
// console.log(typeof b); //string
// console.log(typeof c); //boolean

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразаї не використовувати однакові оператори!!!
//
// console.log(5 < 6); //-> true
// console.log(5 > 6); //-> false
// console.log(5 >= 6);//-> false
// console.log(5 === 6); //-> false
// console.log(10 === 10); //-> true
// console.log(10 == 10); //-> true
// console.log(10 !== 10); //-> false
// console.log(10 > 10); //-> false
// console.log(10 != 10); //-> false
// console.log(123 === '123') //-> false
// console.log(123 == '123') //-> true
//

// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 ); // false
// console.log(34 > 33 && 23 < 90 ); // true
// console.log(99 > 100 && 45 > 12 ); // false
// console.log(132 > 100 || 45 < 12 ); // true
// console.log(111 > 11 || 45 < 111 ); // true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); // true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); // true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); //false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // true
// console.log(!!'-1'); // true
// console.log(!!-1); // true
// console.log(!!'0'); // true
// console.log(!!'null'); //true
// console.log(!!'undefined'); // true
// console.log(!!(3/'owu')); // false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); // true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); // false

// ДОДАТКОВА РОБОТА

// Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true». За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
// let str = 'Привіт';
// let num = 123;
// let flag = true;
// let txt = 'true';
//
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof Boolean(txt));

//  Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних операцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11
//
// let a1 = (15 * 2) + 4;
// console.log(a1);
//
// let a2 = 21 + 3 - 12;
// console.log(a2);
//
// let a3 = (22*2)+(44/2);
// console.log(a3);
//
// let a4 = (60/3)+70;
// console.log(a4);
//
// let a5 =Math.pow(9,2) + 6;
// console.log(a5);

// //   Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
// let a6 = 5 % 3; // 2
// let a7 = 3 % 5; // 3
// let a8 = 5 + '3'; //53
// let a9 = '5' - 3; //2
// let a10 = 75 + 'кг'; //75кг

//  Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.
//
// let height = 23;
// let width = 10;
// let s = height*width
// console.log(s)

//  Напиши код, который знаходить объем циліндра высотой 10м (зміна heightC) и діаметром основи 4м (dC),
//    результат покладіть в зміну v.
//
// let heightC = 10;
// let dC = 4;
//
// let v = Math.PI * Math.pow(4, 2) * 10;
// console.log(v);

// Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
// let str1 = `Кто `;
// let str2 = `ты `;
// let str3 = `такой?`;
// let concatenation = str1+str2+str3;
// document.write(concatenation)

//  Три різних числа вводяться через prompt().
//     За допомоги вивести іх в порядку зростання. (відсортувати по зростанню)
//
// let numberOne = +prompt('enter number one');
// let numberTwo = +prompt('enter number two');
// let numberThree = +prompt('enter number three');
//
// let arr = [numberOne, numberTwo, numberThree];
//
// console.log(arr.sort((a, b) => a - b));

// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
// let color = prompt('What color shows the light?');
//
// switch (color) {
//     case 'red':
//         alert('стой');
//         break;
//     case 'yellow':
//         alert('подожди');
//         break;
//     case 'green':
//         alert('иди');
//         break;
//     default:
//         alert('делай что хочешь')
// }










