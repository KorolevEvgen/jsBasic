// Приклад масивів:
//
// let numbers = [21, 8, 9, 25, 0, -22, 12];
// let names = ['Dima', 'Masha', 'Marina', 'Kolya', 'Vladislav', 'Andrew'];

// Методи масива:
// - майже в кожному методі масива приймається 3 параметра:
// -- value - поточне значення
// -- index - індекс масива поточного значення
// -- array - цілий масив

// Сортування масива (sort):
// -- за допомогою прописання в методі compareFunction задаємо йому сенс
// -- ітерує об'єкти масива с кроком в 1
// -- метод sort дивиться на значення яке вертається більше чи менше за 0
//
//  Приклад роботи за масивом number:
// let numbers1 = numbers.sort();
//
// let numbers2 = numbers.sort((a,b)=>{
//     return a-b;
// })
//
// let numbers3 = numbers.sort((a,b)=>{
//     return b-a;
// })
//
// console.log(numbers1); // сортує за своєю методикою
// console.log(numbers2); // сортує від меншого числа до більшого
// console.log(numbers3); // сортує від більшого числа до меншого
//
//  Приклад роботи за масивом string:
// let names1 = names.sort();
//
// let names2 = names.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     }
//     return 1;
// });
//
// let names3 = names.sort((a, b) => {
//     if (a < b) {
//         return -1;
//     }
//     return 1;
// });
//
// let names4 = names.sort((a, b) => {
//     return a.length - b.length
// })
//
// console.log(names1); // сортує по алфавіту по зростанню (a-z)
// console.log(names2); // сортує по алфавіту по зменшення (z-a)
// console.log(names3); // буде те саме що при сорті у names1 (a-z)
// console.log(names4); // сортує кількості символів у стрінги від менше до більше

// Фільтрування масива (filter):
//  - На кожній ітерації ми можемо дістати значення(value), його поточний індекс(index) та масив(array)
// -- частіше за все береться значення, рідко індекс і майже ніколи масив
// -- метод filter повертає новий масив з результатом фільтрації (return value > 10)
// --- якщо умова: true вертає, false не вертає
//
// numbers.filter((value,index,array)=>{
//     console.log(value);
//     console.log(index);
//     console.log(array);
// })
//
//  Приклад роботи:
// const numArrFilter = numbers.filter(value => {
//     return value > 10;
// })
//
// console.log(numArrFilter);

// Розвертання масива (reverse):
// - просто розвертає масив навпаки (дзеркально)
//  Приклад роботи:
// let numReverse = numbers.reverse();
// let strReverse = names.reverse();
// console.log(numReverse);
// console.log(strReverse);

// Методи перевірки (some --- every):
// -- some - перевіряє чи хоча б один елемент з масиву підпадає під умову, повертає true/false
// -- every - перевіряє, щоб усі елементи з масиву підпадали під умову, повертає true/false
//  Приклад роботи:
// let some = numbers.some(value => {
//     return value > 10;
// });
// let every = numbers.every(value => value > 10);
//
// console.log(some); // true
// console.log(every); // false

// Метод знайти (пошуковий) (find --- findIndex):
// - find - перевіряє весь масив і перший елемент який підпадає під умову і повертає його значення (value)
// - findIndex - перевіряє весь масив і перший елемент який підпадає під умову, знаходить і повертає його індекс (index)
// Приклад роботи:
// let m = names.find(value => {
//     return value.startsWith('M'); // знайти елемент який починається з великої букви ('M') - умова
// });
// console.log(m); // 'Masha' - відповідь
//
// let mIndex = names.findIndex(value => {
//     return value.startsWith('M'); // знайти елемент який починається з великої букви ('M') - умова
// });
// console.log(mIndex); // 1 - відповідь

// Метод forEach (заміна нашого for of):
// -- самий стандартний цикл, який перебирає весь масив від першого до останнього елемента
// -- forEach (синхроний) не можна робити асинхроні операції, for of (асинхроний) підтримує асинхроні операції
// -- нічого не return, але return працює як continue у циклі for of (скіпне ітерації по заданій умові)
//
//  Приклад роботи:
// names.forEach(value => {
//     if (value.startsWith('M')){
//         return // заміна continue у циклі for of
//     }
//     console.log(value)
// })

// Метод map:
// -- приймає увесь данний масив та змінює за умовою кожний його елемент і повертає новий змінений масив
// -- не змінює вхідний масив
//  Приклад:
// let mapNew = names.map((value, index) => {
//     return {
//         id: index+1,
//         name: value
//     };
// });
// console.log(mapNew); // повертає масив об'єктів з новою умовою
//
// let users = [
//     { name: 'Viktor', car: true },
//     { name: 'Masha', car: false },
//     { name: 'Olga', car: true },
// ];
//
// let usersNew = users.map((value, index) => {
//     value.id = index + 1;
//
//     return value;
// }); // буде мутація і змінить як вхідний масив, так і новий під задану умову
//
// console.log(users); // новий масив об'єктів с id
// console.log(usersNew); // вхідний масив змінить на масив нового
//
// Той самий приклад без мутації з глибока копія(Deep copy):
// let users = [
//     { name: 'Viktor', car: true },
//     { name: 'Masha', car: false },
//     { name: 'Olga', car: true },
// ];
//
// let usersNew = users.map((value, index) => {
//    let copy = JSON.parse(JSON.stringify(value))
//
//     copy.id = index+1;
//
//    return copy
// });
//
// console.log(usersNew); // новий масив з умовою
// console.log(users); // вхідний масив залишиться без змін

// Метод reduce:
// -- може замінити 2 цикла одним циклом при правильному використанні
// -- приймає в себе (previousValue,currentValue,currentIndex,array)
// -- initialValue - підміняє собою акумулятор на першій ітерації (приклад: ,0)
// -- приймає значення з return как previousValue, або повертає умову
// -- бере на 1й ітерації бере (initial і value)/ 2 елемента масива (acc і value) і запускає цикл
// -- acc (акумулятор) - previousValue та value (значення) - currentValue
//  Приклад роботи:
// numbers.reduce((previousValue, currentValue) => {
//     console.log(previousValue);
//     console.log(currentValue);
//     console.log('--------------------');
//
//     return 3;
// });
//
// let users = [
//     { name: 'Viktor', age: 23 },
//     { name: 'Masha', age: 35 },
//     { name: 'Misha', age: 30 },
//     { name: 'Vadim', age: 10 },
//     { name: 'Mary', age: 27 },
// ];
//
//  let sumAge = users.reduce((acc, value) => {
//     console.log(acc);
//     console.log(value);
//     console.log('------------------');
//
//     return acc+value.age
// },0);
// console.log(sumAge); // зміна буде дорівнювати сумі останньої ітерації (125)
//
//  Приклад роботи с заміною 2 циклів всього 1 циклом:
// let users = [
//     { name: 'Viktor', age: 23 },
//     { name: 'Masha', age: 17 },
//     { name: 'Misha', age: 30 },
//     { name: 'Vadim', age: 10 },
//     { name: 'Mary', age: 27 },
// ];
//
// let filterUsers = users.filter(user => {
//     return user.age > 18;
// });
// let mapUser = filterUsers.map(oldUser => {
//     oldUser.car = true;
//     return oldUser;
// });
// console.log(mapUser);
//
// На 1 кроці наш акумулятор (acc) пустий масив,
// якщо умова виконана (user.age > 18), нашому user додаємо машинку і додаємо його в acc
// і кожний наступний крок буде як acc брати наш масив с user перевіряти і додавати або ні
// поки ми не пройдумо увесь масив users, і в кінці наш acc буду з усіма users, що пройшли умову
//
// let usersWithCars = users.reduce((acc, user) => {
//     let copy = JSON.parse(JSON.stringify(user)); // прибираємо мутацію вхідного масива User
//     if (copy.age > 18) {
//         copy.car = true;
//
//         acc.push(copy);
//     }
//     return acc;
// }, []);
//
//
// console.log(usersWithCars);
// console.log(users);

// Callback:
// - це функція, яка приймає в себе іншу функцію та відпрацьовує її
//
//  Приклад роботи:
// function getTaxi(address, cb,limitTime) {
//     console.log(`Замовлення на ${address} прийнято`);
//     setTimeout(() => {
//         cb();
//     }, limitTime);
//
// }
//
// getTaxi('Наукова 12', () => {
//     console.log(`Наберіть на номер +38067....23`);
// },3000);
// getTaxi('Героїв УПА 73', () => {
//     console.log(`Пришліть смс по приїзду`);
// },2000);

// Promise:
//
// let p1 = function (){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('p1-Masha')
//         },3000)
//     })
// }
//
// let p2 = function (){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             reject('p2')
//         },5000)
//     })
// }
//
// let p3 = function (){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('p3')
//         },2000)
//     })
// }
// Promise.all виконує усі promise за максимальним timeout (5000)
// -- якщо хоча би один promise не виконається падає уся цепочка promise
// Promise.allSettled - не падає, якщо навіть один з promise не виконався
// Promise.race - видає нам promise, який виконався найшвидше
// Promise.all([p1(),p2(),p3()]).then(value => {
//     console.log(value)
// })
// Promise.allSettled([p1(),p2(),p3()]).then(value => {
//     console.log(value)
// })
// Promise.race([p1(),p2(),p3()])
//     .then(value => {
//     console.log(value)
// })
