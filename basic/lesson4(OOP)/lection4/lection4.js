// OOP (object oriented programming) - об'єктно орієнтоване програмування.
// - На чому стоїть наше OOP:
// -- наслідування - це властивість дочірнього класу успадковувати батьківські властивості.
// -- інкапсуляція - це властивість ховати більш складну поведінку (логіку) в більш просту функцію
// -- поліморфізм - це властивість, коли об'єкт може вести себе по різному в залежності від певних йому параметрів
// -- абстракція - що є певний абстрактний клас, екземпляр класу якого ви не можете зробити

// Функція конструктор:
// - це функція, яка приймає в себе якісь передані дані і повертає нам готовий об'єкт.
// -- функції конструктори заведено записувати з великої букви
// -- функція в середині неї називається метод (приклад: this.greeting = function (){})
//
// -- this - це вказівка на поточний елемент, який прям зараз будується у нашій функції.
// -- new User () - під капотом формує object і повертає на зовні, працює лише в функціях конструкторах, там де є this.
// -- User - вказує нам, що цей об'єкт побудований на основі екземпляра User. (console.log)
//
// function User(name,age,gender,skill){
//     this.name = name;
//     this.age = age;
//     this.gender =gender;
//     this.skill = skill;
//
//     this.greeting = function (){
//         console.log(`Hello, My name is ${this.name}`)
//     }
// }
//
// const karina = new User('Karina',18,'female','React');
//
// const oleg = new User('Oleg',22,'male','JavaScript');
//
// console.log(karina); // console.log нашого User
// karina.greeting(); // Виконання нашої функції (метода) c посиланням на поточного вказаного User
// oleg.greeting();

// Class - під капотом переробляється в функцію конструктор
// -- має у собі конструктор (constructor), який приймає в себе аргументи (arguments)
// -- ми можемо в Class створювати ще Class, але не треба це робити;)
// -- метод (функція) прописується нижче ( приклад: eat(){}  /  goWork(cash){} )
// -- Human - це екземпляр, який показує на основі чого побудуваний наш об'єкт
// -- можна задати дефолтне значення, яке потім можемо використати (this.money)
// -- поведінкова зміна чи функція - це та, яка залишається майже без змін для всіх об'єктів (this.money/eat()/goWork())
// class Human {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.money = 0;
//     }
//
//     eat() {
//         console.log('Om nom nom');
//     }
//
//     goWork(cash) {
//         this.money += cash;
//     }
// }
//
// const dima = new Human('Dima', 22, 'male'); // створення нашого Human
// //
// console.log(dima); // вивод в консоль нашого Human
// dima.eat(); // визов нашого метода для поточного Human
// dima.goWork(200); // виконання метода для нашого Human
// console.log(dima); // при повторному лог ми бачимо, що money збільшилось на 200

// Наслідування (extends) класу від іншого:
// -- яка кількість параметрів у батьківського класу така має передаватись насліднику, бо поверне undefined
// -- нові параметри ми можемо додавати класу наслідника, алу у батька вони не з'являться
// -- дефолтне значення також переходить до наслідника автоматом
// -- методи також переприсвоються від батьківського класу і їх можна використати, та їх функціонал можна змінювати
// -- у конструкторі приймаються параметри конструктора батьківського класу ( name, age, gender )
// -- super -  що всі мої props (параметри) будуть наслідувати від батьківського класу (під капотом сам пропише this)
//
// class Developer extends Human {
//     constructor(name, age, gender, skill) {
//         super(age, name, gender);
//         this.skill = skill;
//     }
//
//     goWork() {
//         this.money += 777;
//     }
//
//     codding() {
//         console.log(`I am codding on ${this.skill}`);
//     }
// }
//
// const anna = new Developer('Anna',21,'female','React')
//
// console.log(anna);
// anna.eat()
// anna.goWork()
// console.log(anna)
// anna.codding()

// Наслідування від наслідника (приклад):
//
// class TeamLeader extends Developer{
//     constructor(name, age, gender,skill,slaves =[]) {
//         super(name, age, gender,skill,slaves);
//         this.slaves = slaves
//     }
//     showSlaves(){
//         for (const slave of this.slaves) {
//             console.log(`Good morning boss. Slave ${slave.name} listen to you!!!`)
//                 this.money += 750
//         }
//     }
// }
//
// const mary = new TeamLeader('Marry',27,'female',['Java','React','JavaScript'],[anna, dima])
//
// console.log(mary)
// mary.showSlaves()
// console.log(mary)

// Prototype (прототип) та як робити наслідування з ним:
//
// function Animal(name) {
//     this.name = name;
//
// this.run = function () {
//     console.log(`${this.name} is running`);
// }; // поганий приклад, тому що кожного разу робиться копія function
// }
//
// При прототипі (prototype) дана функія буде створена лише раз і потім лише перевиконується для всіх інших
// В Class вона робиться автоматично під капотом
//
// Animal.prototype.run = function () {
//     console.log(`${this.name} is running`);
// };
//
// Наслідування з prototype
// function Hamster(name, speed) {
//     this.name = name;
//     this.speed = speed;
// }
//
// -- Перший спосіб наслідування (самий поганий підхід)
//  якщо змінимо у наслідника цю функцію, вона зміниться і в наслідника і батьківського класу
// Hamster.prototype = Animal.prototype;
//
// -- Другий спосіб наслідування (відбувається мутація)
// так функція працює для кожного своя, але не добре, бо міняється прототип прототипа
// так ми залазимо прям у під капот самого прототипа
// Hamster.prototype.__proto__ = Animal.prototype;
//
// -- Третій спосіб наслідування (найкращий спосіб) без мутації
// Hamster.prototype = Object.create(Animal.prototype)
//
// Hamster.prototype.run = function () {
//     console.log(`Daba-du-du-du`);
// }
//
// let semka = new Animal('Semka');
// let grushka = new Animal('Grushka');
//
// let zakolka = new Hamster('Zakolka');
//
// console.log(semka);
// semka.run();
// grushka.run();
// zakolka.run();

// Основна суть prototype (плюси і мінуси):
//
// function Hamster(name) {
//     this.name = name;
//     this.stomach = []; // так для кожного свій
// }
// // Мінус в тому, що прототип буде один для всіх
// // Hamster.prototype.stomach = [];
//
// Hamster.prototype.findFood = function (food) {
//     this.stomach.push(food);
// };
//
// let toshik = new Hamster('Toshik');
// let barabashka = new Hamster('Barabashka');
//
// toshik.findFood('Apple');
// toshik.findFood('Peach');
//
// console.log(toshik.stomach)
// console.log(barabashka.stomach)

