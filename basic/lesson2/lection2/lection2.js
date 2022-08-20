// При перевірці boolean typeof:
// Завжди дають  false: ( 0,null,undefined,NaN,'')
// Усі інші дають значення true.

// Цикл for має 3 опції :
// -- точка відліку (і)
// -- зона виходу (і<n), коли буде false
// -- що робити при ітерації (i++ -- означає збільшити на 1 (i = і+1))
// const names = ['Rostik', 'Ellen', 'Lenovo'];
//
// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }
//
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
//array.length (names.length) -- довжина усього даного масиву (скільки у нього iтемів(i))
//
// let a = 0;
// let x = 0;
//
// let b = a++; // тут передає потім збільшує на 1 (b одразу присвоюється до a)
// let z = ++x; // тут збільшує на 1 потім передає (x спочатку збільшиться на 1 і потім присвоїть до z)
//
// console.log(a, b);
// console.log(x, z);

// Цикл for of (виконує завжди ітерацію від початку до кінця):
// const names = ['Rostik', 'Ellen', 'Lenovo'];
// for (const name of names) {
//     console.log(name)
// }

//Цикл for in (єдиний цикл, що може працювати з об'єктами):
// Цикл for in дивиться на ключі
// const names = ['Rostik', 'Ellen', 'Lenovo'];
// for (const name in names) {
//     console.log(name)
// } // for in в даному випадку піде по [i]
//
// let obj = {
//     name:'Vasya',
//     age: 25,
//     girl: false
// }
//
// for (const key in obj) {
//     console.log(key)
//     console.log(obj[key])
// } // obj[key] повертає усі значення ключів (key - це динамічна string('name'/'age'/'girl'))
//

// Цикл while:
// -- зміний стан ітераціє приходить за межами циклу (let i = n),
// -- i++ - умова виходу прописується прям у тілі циклу.
//
// const names = ['Rostik', 'Ellen', 'Lenovo','Tanya','Anya']; //array
//
// let i = 0;
// while (i < names.length) {
//     console.log(names[i]);
//
//     i++;
// }

// Робота з циклами for:
// -- continue - пропускає/скіпає (skip) одну ітерацію і продовжує цикл
// -- break - вбиває цикл повністю
// Зараз можна виконати лише один, або continue, або break!!!
//
// const names = ['Rostik', 'Ellen', 'Lenovo', 'Tanya', 'Anya']; //array
//
// for (let i = 0; i < names.length; i++) {
//     if (names[i] === 'Rostik') {
//         console.log('Rostik is found');
//         continue;
//         break;
//     }
//     console.log(names[i]);
// }

//Робота з об'єктом:
//(присвоєння,видалення,динамічне додавання key)
// let obj = {
//     name: 'Vasya',
//     age: 25,
//     girl: false,
// };
//
// obj.car = 'Toyota'; // присвоєння об'єкту нового ключа
//
// delete obj.name; // видалить даний ключ у об'єкта (використовується тільки до об'єкта!!!)
//
// console.log(obj)
//
// let enteredKey = prompt('Enter key'); // якого ключа потрібні данні
//
// console.log(obj[enteredKey]); виведе данні ключа
//
//Динамічне додавання ключа і його даного до ключа:
// let key = prompt('Enter key'); // ведення ключа
//
// if (obj[key] === undefined) {
//     let value = prompt('Enter value'); // ведення даного ключа
//
//     obj[key] = value;
// }
//
// console.log(obj);

// Прості(primitives) та силочні(reference) типи даних:

//Прості типи даних:
// Робиться копія потім переприсвоюється
// let name = 'Tanya';
//
// let nameCopy = name;
//
// nameCopy = 'Marina';
//
// console.log(name);
// console.log(nameCopy);

// Силочні типи даних:

// -- object (об'єкт)
// - коли ми робимо копію об'єкта і змінюємо дані одного об'єкта
// - вони тако ж  змінюються і у його копії
// - копії об'єкта бувають однорівневі та глибокі (глибока копія допомогає обійти мутацію )
//
// const obj = {
//     name: 'Maryna',
//     age: 25,
//     girl: false,
// };
//
// let keys = Object.keys(obj); // достає масив ключів (key) даного об'єкта [name,age,girl]
// let values = Object.values(obj); // достає масив значень (value) даного об'єкта ['Maryna',25,false]
// let entries = Object.entries(obj); // дістане масив масивів  [['name','Maryna'],[key,value],...]
//
// console.log(keys);
// console.log(values);
//
// const obj2 = {
//     name: 'Maryna',
//     age: 25,
//     girl: false,
// };
//
// console.log(obj === obj2) // false, тому що перевірка йде не по даних в середині, а по силці
//
// const objCopy = obj; // тут не робиться копія як у простого типа даних,
//                      // objCopy бере силку як і для obj та приймає його усі дані(повна копія)
//
// objCopy.age = 77;    // мутація - коли ми змінюємо, щось у objCopy,
//                      // насправді ми одразу змінюємо ці дані в силці obj і вони приймаються для обох
//
// console.log(obj);
// console.log(objCopy);

// Об'єкт - описує одну дану сутність (user,book)
// Масив - зберігає певну кількість сутностей (users,books)

// -- array (масив) - являється одним з підвидів object
//
// const names = ['Rostik', 'Ellen', 'Lenovo']; //масив
// console.log(typeof names); //  тип: object
//
// names[100] = 'Ihor'; // присвоїть даному масиву не достатню к-ть item (empty - пустота)
//                      // і останнім зробить 'Ihor'
// console.log(names);

// Методи array (масива):
//  const names = ['Ivan', 'Ellen', 'Lenovo','Maks']; // array
//
// names.push('Egor');            // додасть у кінець масива даний item('Egor')
// names.unshift('Nadya','Masha'); // додасть у початок масива даний item/items ('Nadya','Masha')
//
// names.pop(); // автоматично витягує один item(element) с кінця масива;
// const deletedItem = names.pop() // повертає той item який видалив ('Maks)
// names.shift(); // автоматично витягує один item(element) с початку масива;
// const deleteItem = names.shift() // повертає той item який видалив ('Ivan')
//









