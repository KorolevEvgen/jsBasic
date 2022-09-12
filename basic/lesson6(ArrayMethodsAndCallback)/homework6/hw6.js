// Створити масив з 20 чисел та:
// let numbers = [10, 12, 45, 32, 55, 87, 66, 23, 55, 1, 6, 41, 88, 14, 16, 50, 54, 58, 22, 33];
//
// a) відсортувати його від меншого до більшого.
// numbers.sort(function(a, b) {
//     return a - b;
// });
// console.log(numbers);
//
// b) відсортувати його від більшого до меншого.
// numbers.sort(function(a, b) {
//     return b-a;
// });
// console.log(numbers);
//
// c) Відфільтрувати числа які є кратними 3.
// let multipleOfThree = numbers.filter(function(number) {
//     return number % 3 ===0;
// });
//
// console.log(multipleOfThree);
//
// d) Відфільтрувати числа які є більшими за 10.
// let greaterThanTen = numbers.filter(function (number) {
//     return number > 10;
// });
// console.log(greaterThanTen);
//
// e) Проітерувати його forEach та вивести кожен елемент за допомогою console.log
// numbers.forEach(element => console.log(element));
//
// f) За допомогою map збільшити кожен елемент в масиві в три рази.
// const triple = numbers.map((num) => num * 3);
// console.log(triple);
//
// g) Порахувати загальну суму всіх елементів у масиві (reduce)
// const initialValue = 0;
// const sumWithInitial = numbers.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     initialValue
// );
// console.log(sumWithInitial);

// 2) Створити масив з 16 стрічок та:
// let words = ['alena', 'hi', 'monkey', 'big', 'welcome', 'miha', 'masha', 'world', 'word',
//     'number', 'today', 'mike', 'milk', 'ok', 'buy', 'bye'];
//
// a) Відсортувати його в алфавітному порядку
// console.log(words.sort());
//
// b) Відсортувати в зворотному порядку
// console.log(words.sort().reverse());
//
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// const modifiedWords = words.filter((word, index, arr) => {
//     return word.length > 4;
// });
// console.log(modifiedWords);
//
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// const newWords = words.map((word) =>'Sam says '+ word);
// console.log(newWords);

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
// const users = [
//     { name: 'vasya', age: 31, isMarried: false },
//     { name: 'petya', age: 30, isMarried: true },
//     { name: 'kolya', age: 29, isMarried: true },
//     { name: 'olya', age: 28, isMarried: false },
//     { name: 'max', age: 30, isMarried: true },
//     { name: 'anya', age: 31, isMarried: false },
//     { name: 'oleg', age: 28, isMarried: false },
//     { name: 'andrey', age: 29, isMarried: true },
//     { name: 'masha', age: 30, isMarried: true },
//     { name: 'olya', age: 31, isMarried: false },
//     { name: 'max', age: 31, isMarried: true },
// ];
// a) відсортувати його за віком (зростання, а потім окремо спадання)
// let sortUsersUp = users.sort((a, b) => a.age - b.age)
// console.log(sortUsersUp);
// let sortUsersDown = users.sort((a, b) => b.age - a.age)
// console.log(sortUsersDown);
//
// b) відсортувати його за кількістю знаків в імені (зростання , а потім окремо спадання)
// let sortUsersLengthUp = users.sort((a, b) => a.name.length -b.name.length)
// console.log(sortUsersLengthUp);
// let sortUsersLengthDown = users.sort((a, b) => b.name.length - a.name.length)
// console.log(sortUsersLengthDown);
//
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний ідентифікатор
// (По якому принципу його створювати - ваше рішення) та зберегти це в новий масив (первинний масив залишиться без змін)
// let newArrUsers = users.map((value, index) => {
//     let copyUSer = JSON.parse(JSON.stringify(value));
//     copyUSer.id = index + 1;
//
//     return copyUSer;
// });
// console.log(newArrUsers);
// d) Всі хто одружений мають попасти у новий масив та отримати квартиру (reduce)
// let userWithApartment = users.reduce((acc, value) => {
//     let copyUser = JSON.parse(JSON.stringify(value));
//     if (copyUser.isMarried) {
//         copyUser.apartment = true;
//
//         acc.push(copyUser);
//     }
//     return acc;
//
// }, []);
// console.log(userWithApartment);

// 4) Дано масив машин треба виконати усі завдання нижче вказані до нього:
//
// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2.5,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 3,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year:2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
// Відфільтрувати масив за наступними критеріями :
// - двигун більше 3х літрів
// let theEngineMoreThreeL = cars.filter(value => {
// return value.volume > 3;
// })
// console.log(theEngineMoreThreeL);
// - двигун = 2л
// let theEngineTwoL = cars.filter(value => {
//     return value.volume === 2;
// })
// console.log(theEngineTwoL);
// - виробник mercedes
// let producerMercedes = cars.filter(value => {
//     return value.producer === 'mercedes';
// })
// console.log(producerMercedes);
// - двигун більше 2.5х літрів + виробник мерседес
// let producerMercedes = cars.filter(value => {
//     if (value.volume >2.5){
//         return value.producer === 'mercedes';
//     };
// })
// console.log(producerMercedes);
// - двигун більше 2х літрів + виробник субару
// let producerSubaru = cars.filter(value => {
//     if (value.volume >2){
//         return value.producer === 'subaru'
//     };
// })
// console.log(producerSubaru);
// - сили більше ніж 300
// let powerMore300 = cars.filter(value => {
//     return value.power > 300;
// })
// console.log(powerMore300);
// - сили більше ніж 300 + виробник субару
// let producerSubaruPower300 = cars.filter(value => {
//     if (value.power > 300){
//         return value.producer === 'subaru'
//     };
// })
// console.log(producerSubaruPower300);
// - мотор серії ej
// let seriesEj = cars.filter(value => {
//     return value.engine.startsWith('ej');
// })
// console.log(seriesEj);
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let topSubaruEj300 = cars.filter(value => {
//     if (value.power > 300 && value.producer === 'subaru'){
//         return value.engine.startsWith('ej');
//     }
// })
// console.log(topSubaruEj300);
// - двигун менше 3х літрів + виробник мерседес
// let mercedesDown3 = cars.filter(value => {
//     if ( value.producer === 'mercedes'){
//         return value.volume < 3;
//     }
// })
// console.log(mercedesDown3);
// - двигун понад 2 л + сили понад 250
// let power250Volume2 = cars.filter(value => {
//     if (value.power > 250){
//         return value.volume >2;
//     }
// })
// console.log(power250Volume2);
// - сили понад 250 + виробник бмв
// let bmwPowerOver250 = cars.filter(value => {
//     if (value.producer === 'bmw'){
//         return value.power > 250;
//     }
// })
// console.log(bmwPowerOver250);

// 5) Дано масив usersWithAddress треба виконати усі завдання нижче вказані до нього:
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// -- Відсортувати їх по ID
// let sortIdUsers = usersWithAddress.sort((a, b) => {
//    return  a.id - b.id;
// })
// console.log(sortIdUsers);
// -- Відсортувати їх по ID в зворотньому порядку
// let sortIdUsersReverse = usersWithAddress.sort((a, b) => {
//     return  a.id - b.id;
// }).reverse();
// console.log(sortIdUsersReverse);
// -- Відсортувати по віку
// let sortUsersAge = usersWithAddress.sort((a, b) => {
//    return  a.age -b.age;
// })
// console.log(sortUsersAge);
// -- Відсортувати по віку в зворотньому порядку
// let sortUsersAgeReverse = usersWithAddress.sort((a, b) => {
//     return  a.age -b.age;
// }).reverse();
// console.log(sortUsersAgeReverse);
// -- Відсорутвати по імені
// let sortNameUsers = usersWithAddress.sort((a, b) => {
//    if (a.name < b.name){
//        return -1;
//    }
//    return 1;
// })
// console.log(sortNameUsers);
// -- Відсорутвати по назві вулиці
// let sortAddressUsers = usersWithAddress.sort((a, b) => {
//    if (a.address.street < b.address.street){
//        return -1;
//    }
//    return 1;
// })
// console.log(sortAddressUsers);
// -- Відсорутвати по номеру будинку
// let sortAddressNumberUsers = usersWithAddress.sort((a, b) => {
//    if (a.address.number < b.address.number){
//        return -1;
//    }
//    return 1;
// })
// console.log(sortAddressNumberUsers);
// -- Залишити тільки тих, хто молодший ніж 30 (filter)
// let young = usersWithAddress.filter(value => {
//     return value.age < 30;
// })
// console.log(young);
// -- Залишити тільки одружених, які молодні за 30
// let marriedYoung = usersWithAddress.filter(value => {
//     if (value.age < 30){
//         return value.isMarried === true
//     }
// })
// console.log(marriedYoung);
// -- Залишити лише тих, в кого парні номери будинків.
// let evenNumberedHouses = usersWithAddress.filter(value => {
//     return value.address.number % 2 === 0;
// })
// console.log(evenNumberedHouses);
// -- Порахувати загальний вік всіх людей. (reduce)
// let userAgeSum = usersWithAddress.reduce((acc,value)=>{
//     return acc+value.age
// },0)
// console.log(userAgeSum);
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// let usersWithChild = usersWithAddress.reduce((acc, user) => {
//     let copy = JSON.parse(JSON.stringify(user)); // прибираємо мутацію вхідного масива User
//     if (copy.age > 30 && copy.isMarried === true) {
//         copy.child = true;
//
//         acc.push(copy);
//     }
//     return acc;
// }, []);
//
//
// console.log(usersWithChild);
// console.log(usersWithAddress);
