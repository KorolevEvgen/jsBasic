// //Прості типи даних:
//
// let str = 'Hello, my name is ...'; // string(стрічка/слово)
// let age = 24; // number(число)
// let isOld = false; // boolean (true/false)
// let zero = null; // пустота
// let undef = undefined; // undefined
// let obj = {}; // об'єкт
// let s = Symbol(); // символ
// let bInt = BigInt('2321321321312376326721636623'); // число больше 2млрд
//
// // Складні (силочні) типи даних:
//
// // -- Об'єкт:
// let user = {
//     name: 'Maryna',
//     age: 27,
//     car: false,
//     laptops: ['Hp', 'Macbook'],
//     company: {
//         name: 'PPPPPP',
//         address: 'st. Salvado, 47',
//     },
// };
//
// console.log(user.company.address);
//
// // -- Масив:
// let array = ['Maryna', 'Kolya', 'Artem', 22, false, ['cherry', 23], { name: 'Anya', age: 23 }];
//
// // console.log()   -- виводить в консолі
// console.log(array[0]);
//
// // alert()  --  виводить у спливче вікно
// alert(`User: ${user.name}`);
//
// // document.write() -- напряму пише в HTML
// document.write(`
// <h2>Users</h2>
// <div>${array[0]}</div>
// <hr>
// <div>${array[1]}</div>
// <hr>
// <div>${array[2]}</div>
// <hr>
// `);
//
// //  let - це зміна, яку можна переоголосити
// let name = 'Andrey';
// name = 'Viktor';
// console.log(name);
//
// // const - це зміна, яку можна оголосити лише один раз і не можливо переоголосити
// const topNumber = 428;
// console.log(topNumber);
//
// console.log(typeof NaN); // Not-a-Number (але його тип буде number)
// console.log(typeof null); // пустота (але його тип буле obj{})

// Порівняння:
// // > -- більше
// // < -- менше
// // >= -- більше, або дорівнює
// // <= -- менше, або дорівнює
// // != -- не дорівнює (не строга нерівність)
// // == -- дорівнює (не строга рівність)
// // !== -- не дорівнює (строга нерівність)
// // === -- дорівнює (строга рівність)
//
// console.log(2 > 3); // false
// console.log('2' < 3); // true
// console.log('Andriy' < 'Oleg'); // true (в такому випадку воно перевіряє по алфавіту)
// console.log('3' == 3); // true (не строга рівність перевіряє лише зміст, але не тип даних)
// console.log('3' === 3); // false (строга рівність перевіряє як зміст, так і тип даних)

// Використання if else для порівняння:
// const nameUser = 'Mike';
// // prompt - повертає string
// let ageUser = prompt(`${nameUser}, how old are you?`)
//
// // parseInt - перетворює в ціле число
// let ageUser2 = parseInt(prompt(`How old are you?`))
//
// // parseFloat - перетворює в дробове число
// let ageUser3 = parseFloat(prompt(`How old are you?`))
//
// // Number - перетворює просто число (ціле або дробове не важливо)
// let ageUser4 = Number(prompt(`How old are you?`))
//
// // + - перетворює написане у prompt з str в number, при вводі str видасть NaN
// let ageUser5 = +prompt(`How old are you?`)
//
// if (ageUser > 21) {
//     alert(`Welcome to website ${nameUser}`);
// } else {
//     alert(`Goodbye ${nameUser}`);
// }
//
// let age = +prompt('How old are you?');
// let name = prompt('Whats your name?');
//
// if (age > 18) {
//     alert('welcome');
// } else if (name === 'admin') {
//     alert('welcome');
// } else {
//     alert('goodbye');
// }
//
// || -- or
// && -- and
// if (age> 18 || name === 'admin'){
//     alert('welcome')
// } else{
//     alert('goodbye')
// }

// Використання switch case:
// let name = prompt(`Whats your name?`);
//
// switch (name) {
//     case 'Anya':
//     case 'Masha':
//         alert('Hi sister');
//         break;
//     case 'Dima':
//         alert('Hi friend');
//         break;
//     case 'Tanya':
//         alert('Hi mom');
//         break;
//     default:
//         alert('Who are u?')
// }

// Тернарний оператор:
// let nameUser = 'Dima'
//
// if (nameUser === 'Dima'){
//     console.log('Go drink')
// } else{
//     console.log('Go work')
// }
//
// Приклад 1:
// nameUser === 'Dima' ? alert('Go drink') : alert('Go work')
//
// Приклад 2:
// let ageMan = 90;
//
// const isOld = (ageMan > 88) ? true : false;
// console.log(isOld);
//
// ageMan = 22
// const isOldMan = (ageMan > 88);
// console.log(isOldMan);
