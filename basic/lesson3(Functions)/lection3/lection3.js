// function - це ключева концепція в JavaScript.
// Будь-яка функція це об'єкт, нею можна маніпулювати як об'єктом, а саме:
//  -- передавати як аргумент і повертати в якості результата при визові інших функцій (функцій вищого порядку);
// -- створювати анонімно і присвоювати в якості значення змінних чи властивостей об'єкта.

// Приклад function:
// function myFunc(name, age = 18) {
//     document.write(`<div>Hello ny name is ${name}</div>`);
//     document.write(`<div>I am ${age} years old</div>`);
//     document.write('<hr>')
// }
//
// myFunc('Maryna', 27);
// myFunc('Viktor', 16);
// myFunc('Tanya');
// myFunc (['Tanya','Valera','Masha'])
//
// myFunc - назва функції ,
// (name, age) - зміні(arguments), які вона приймає,
// {} - дія даної ф-ції, що саме вона виконує
// (age = 18) - якщо ми не передамо значення (arguments) до функції воно виконає дефолтне значення

// Використання у функції дефолтного значення (default value):
// -- Якщо не водити дефолтне значення повернеться undefined
//
// let karina = {
//     name:'Masha',
//     age: 21,
//     car: true
// }
//
// function myUser(user = {}, note = '', phone = '') {
//     console.log(user);
//     console.log(note);
//     console.log(phone);
//     console.log('--------------')
//
// }
//
// myUser('Misha', 'Hello', '+380987763234323222');
// myUser('Anya', '+3809555555323222');
// myUser(karina, 'Hi');

//Робота з масивом obj через функцію:
// let arrayUsers = [
//     {
//         id: 1,
//         name: 'Tanya',
//         age: 25,
//         car: true,
//     },
//     {
//         id: 2,
//         name: 'Masha',
//         age: 21,
//         car: true,
//     },
//     {
//         id: 3,
//         name: 'Alla',
//         age: 31,
//         car: true,
//     },
// ];
//
// function findUserById(userId) {
//     for (const user of arrayUsers) {
//         if (user.id === userId) {
//             console.log(user);
//             break;
//         }
//     }
// }
//
// findUserById(3)

// arguments в функції:
// -- це псевдо масив, по суті як об'єкт, але так написаний під капотом, що поводить себе як масив
// -- існує лише в середині функції, приймає в себе абсолютно всі передані йому параметри
// -- методи масива до нього не використовуються
// -- цикли for, for of, while, for in (index от 0) можна застосовувати
//
// function someName() {
//     for (const argument of arguments) {
//         console.log(argument);
//     }
// }
//
// someName(1, 'Viktor', 23, false, 'iPhone', 'Samsung', 'Masha', [1, 2, 3]);
//
// function emailSender(){
//     for (let i = 0; i < arguments.length; i++) {
//         const userMail = arguments[i];
//
//         if (!userMail.includes('@')){
//             console.log(`${userMail} is  not valid`);
//             continue;
//         }
//         document.write(`Welcome on board, ${userMail}`)
//         document.write(`<hr>`)
//     }
// }
// emailSender(
// 'oleg@gmail.com',
// 'masha234@gmail.com',
// 'viktor777@gmail.com',
// 'oleg',
// 'misha.kipr.gmail.com'
// )

// return in function:
// -- return з функції може передати тільки щось одне (func,array,{},зміну(let,const),...)
// -- return зупиняє виконання функції
//
// function moneyCalculator(dollars, curs) {
//     let uah = dollars * curs;
//
//     return uah;
// }
// let money = 100000;
//
// let changedMoney = moneyCalculator(2000, 25);
//
// money += changedMoney
// console.log(`You have ${money}UAH now`);
//
// let money = 100000;
// function moneyCalculator(dollars, curs) {
//     let uah = dollars * curs;
//     return uah;
// }
//
// let changedMoney = moneyCalculator(500, 30);
//
// let myMoney = money+changedMoney
// console.log(`You have ${myMoney}UAH now`);
//
// function emailValidator(email){
//     if (!email.includes('@')){
//         return 'Wrong email'
//     }
//     return 'This is good email'
// }
//
// let s = emailValidator('carbon@gmail.com');
// let x= emailValidator('carbon.gmail.com')
//
// console.log(s);
// console.log(x);


