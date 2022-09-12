// Реалізовуємо свій компютерний магазин!!!
//
// Необхідно реалізувати базовий клас комп'ютера. Який має лише параметри:
//     Назва
//     Оперативна пам'ять
//     Потужність процесора. (цифра від 0 до 1000)
//     В кожного комп'ютера має бути метод включання
//
// class Computer {
//     constructor(model, ram, cpuPressure) {
//         this.model = model;
//         this.ram = ram;
//         this.cpuPressure = cpuPressure;
//     }
//
//     inclusion() {
//         console.log(`My model is ${this.model}. I turn on. Pls wait.`);
//     }
// }
//
// const hp = new Computer('Hp', 2, 678);
// const macbook = new Computer('MacBook', 4, 838);
//
// console.log(macbook);
// hp.inclusion();
// macbook.inclusion();

// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
//
// class Laptop extends Computer {
//     constructor(model, ram, cpuPressure, inch, batteryLife) {
//         super(model, ram, cpuPressure);
//         this.inch = inch;
//         this.batteryLife = Math.round(this.cpuPressure / (this.inch * this.ram));
//
//     }
//
// }
//
//
// const macbookAir = new Laptop('MacBook Air', 4, 833, 13);
// const lenovo = new Laptop('Lenovo Tab', 2, 347, 13);
//
// console.log(macbookAir);
// console.log(lenovo);
// macbookAir.inclusion();

// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якщо вага більша за 2 кг та батарея тримаж менше ніж 8 години.
//
// class Ultrabook extends Laptop {
//     constructor(model, ram, cpuPressure, inch, weight, batteryLife) {
//         super(model, ram, cpuPressure, inch, batteryLife);
//         this.weight = weight;
//     }
//
//     inclusion() {
//         if (this.weight > 2 && this.batteryLife < 8){
//             console.log(`Error!!! Your ultrabook ${this.model} is dead. Go to service!`);
//         } else {
//             console.log(`My model is ${this.model}. I turn on. Pls wait.`);
//         }
//     }
// }
//
// const macbookPro = new Ultrabook('MacBook Pro', 4, 988, 16,4);
// const xiaomi = new Ultrabook('Xiaomi', 3, 300, 16,3);
//
// console.log(macbookPro);
// macbookPro.inclusion()
// console.log(xiaomi);
// xiaomi.inclusion()

// Від базового класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / оперативку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FPS`
//
// Базовий ПК можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеристик мають бути свої методи. Міняти змінну "в лоб" заборонено.
//
// class Pc extends Computer {
//     constructor(model, ram, cpuPressure, fps) {
//         super(model, ram, cpuPressure);
//         this.fps = Number((cpuPressure / ram).toFixed(1));
// }
//
// playTheGame(gameName) {
//     console.log(`You are playing ${gameName} with ${this.fps} FPS`);
// }
//
// upgradeCp(upgrade) {
//
//     if (upgrade === 'upgrade') {
//         this.fps = (this.fps * 110 / 100);
//     } else {
//         return this.fps;
//     }
// }
//
//     upgradeRam(upgrade) {
//         if (upgrade === 'upgrade') {
//             this.ram = this.ram * 2;
//         } else {
//             return this.ram;
//         }
//     }
// }
//
//
// const samsung = new Pc('Samsung', 4, 898);
// const asus = new Pc('Asus',3,688);
//
// console.log(samsung);
// samsung.playTheGame('Hearthstone');
// samsung.upgradeCp('upgrade');
// samsung.upgradeRam('upgrade');
// console.log(samsung);
//
// console.log(asus);
// asus.playTheGame('Dota 2')
// asus.upgradeCp('upgrade');
// asus.upgradeRam();
// console.log(asus);
// asus.upgradeRam('upgrade');
// console.log(asus);

// Від базового ПК необхідно зробити ігровий ПК.
//   Кількість ФПС має бути рівно у 2 рази більший ніж в звичайного ПК.
//   При запуску однієї гри потужність процесора має падати на 0.1%.
//   Якщо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
//   що на цьому відрі ігри не запускаються.
//
// class PlayPc extends Pc {
//     constructor(model, ram, cpuPressure, fps) {
//         super(model, ram, cpuPressure, fps);
//         this.fps = Number(((cpuPressure / ram) * 2).toFixed(1));
//     }
//
//     playTheGame(gameName) {
//         if (this.cpuPressure < 500 && this.ram < 8) {
//             console.log(('The game does not run on this computer'));
//         } else {
//             this.cpuPressure = this.cpuPressure * 90 / 100;
//             console.log(`You are playing ${gameName} with ${this.fps} FPS`);
//         }
//     }
// }
//
// const lenovo = new PlayPc('Lenovo', 6, 900);
// const macbook = new PlayPc('MacBook', 7, 490);
//
// console.log(lenovo);
// lenovo.playTheGame('CS go');
// console.log(lenovo);
// lenovo.playTheGame('Dota 2');
// console.log(lenovo);
// lenovo.playTheGame('Super Mario');
// console.log(lenovo);
// console.log(`=======================`);
// console.log(macbook);
// macbook.playTheGame('HoN');

//  - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// -- з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна(engineVolume).
//  - Додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// function Car(model, manufacturer, year, maxSpeed, engineVolume, driver) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.driver = {};
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function () {
//         console.log(`
//          Model: ${this.model}
//          Manufacturer: ${this.manufacturer}
//          Year: ${this.year}
//          Max Speed: ${this.maxSpeed}
//          Engine Volume: ${this.engineVolume}
//         `);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// const honda = new Car('Honda', 'Japan', 2020, 230, 2);
//
// console.log(honda);
// honda.drive();
// honda.info();
// honda.increaseMaxSpeed(30);
// honda.changeYear(2021);
// honda.addDriver({ name: 'Vasya', age: 39 });
// console.log(honda);

// - Створити клас який дозволяє створювати об'єкти car,
// -- з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// - Додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додати його в поточний об'єкт car
//
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineVolume, driver) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//         this.driver = {};
//
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info() {
//         console.log(`
//           Model: ${this.model}
//           Manufacturer: ${this.manufacturer}
//           Year: ${this.year}
//           Max Speed: ${this.maxSpeed}
//           Engine Volume: ${this.engineVolume}
//          `);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//
//     changeYear(newValue) {
//         this.year = newValue;
//     };
//
//     addDriver(name,age) {
//         this.driver = new Driver(name,age);
//     };
// }
//
// class Driver {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// const toyota = new Car('Toyota', 'Japan', 2018, 200, 1.8);
//
// console.log(toyota);
// toyota.drive();
// toyota.info();
// toyota.increaseMaxSpeed(50);
// toyota.changeYear(2022);
// toyota.addDriver('Maryna',27);
// console.log(toyota);

// - Створити клас попелюшка з полями ім'я, вік, розмір ноги
// -- Створити 10 попелюшок, покласти їх в масив
// -- Створити об'єкт класу "принц" за допомоги класу який має поля:
// --- ім'я, вік, туфелька яку він знайшов.
// -- за допомоги циклу знайти яка попелюшка повинна бути з принцом
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// const cinderellas = [
//     new Cinderella('Anna', 30, 8),
//     new Cinderella('Mary', 27, 6.5),
//     new Cinderella('Kira', 22, 6),
//     new Cinderella('Lilu', 24, 9),
//     new Cinderella('Masha', 25, 10),
//     new Cinderella('Ira', 25, 5),
//     new Cinderella('Kristy', 24, 7),
//     new Cinderella('Iona', 26, 5),
//     new Cinderella('Vita', 29, 8),
//     new Cinderella('Bunny', 31, 7),
// ];
//
// class Prince {
//     constructor(name, age, sizeShoes) {
//         this.name = name;
//         this.age = age;
//         this.sizeShoes = sizeShoes;
//     }
// }
//
// const evgen = new Prince('Evgen',30,6.5);
//
// for (const cinderella of cinderellas) {
//     if (evgen.sizeShoes === cinderella.footSize){
//         console.log(`${cinderella.name}, you are my Cinderella:)`)
//     }
// }

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//
// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
//
//     }
//
// const cinderellas =[
//     new Cinderella('Anna', 30, 8),
//     new Cinderella('Marina', 27, 6.5),
//     new Cinderella('Kira', 22, 6),
//     new Cinderella('Lilu', 24, 9),
//     new Cinderella('Masha', 25, 10),
//     new Cinderella('Ira', 25, 5),
//     new Cinderella('Kristy', 24, 7),
//     new Cinderella('Iona', 26, 5),
//     new Cinderella('Vita', 29, 8),
//     new Cinderella('Bunny', 31, 7)
// ]
//
// function Prince(name, age, sizeShoes) {
//     this.name = name;
//     this.age = age;
//     this.sizeShoes = sizeShoes;
// }
//
// const evgen = new Prince('Evgen',30,6.5)
//
// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === evgen.sizeShoes){
//         console.log(`${cinderella.name}, you are my Cinderella:)`)
//     }
// }



