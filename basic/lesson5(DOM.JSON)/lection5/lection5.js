//DOM – це об'єктна модель документа, яку браузер створює в пам'яті комп'ютера
// на основані HTML-кода, отриманого їм від сервера.
// HTML-код – это текст сторінки, а DOM – это набір пов'язаних об'єктів,
// створених браузером при парсінзі її тексту.

// Методи пошуку елементів в DOM :
//
// querySelector:
// -- допомагає шукати необхідні об'єкти у HTML файлі
//.querySelector - повертає перший знайдений item
//.querySelectorAll - повертає завжди масив навіть з 1 елементом
// шукає завжди усіх item
// let shots = document.querySelectorAll('#Hello p.myClassP');
// console.log(shots);
// let shotOne = document.querySelector('div#Hello div p.myClassP');
// console.log(shotOne);
// let shotTwo = document.querySelector('div#Hello div');
// shotTwo.classList.add('divHelloDiv'); // додає даному <div> заданий class
// shotTwo.classList.add('divHelloDivTwo');
// shotTwo.classList.remove('divHelloDivTwo');
// console.log(shotTwo.classList);
//
// Перший метод .getElementById:
// document.getElementById - шукає елемент за id в document
// За даним методом повертається лише один єдиний елемент і не більше
// div - с даним id ('Hello') створений у HTML файлі
//
// let helloById = document.getElementById('Hello');
// console.log(helloById);
//
// helloById.style.background = 'red'; // за допомогою змінної змінили колір у <div>
// helloById.innerText = 'Hello people'; // за допомогою змінної змінили текст самого <div>
//
// Другий метод .getElementsByClassName:
// document.getElementsByClassName - шукає елементи за ім'ям класу в document
// За даним методом повертається завжди масив
// div - с даним id ('Apple') створений у HTML файлі
//
// let classApple = document.getElementsByClassName('Apple');
// console.log(classApple);
//
// Перебираємо масив елементів і даємо кожному дані стилі
// for (const classAppleElement of classApple) {
//     classAppleElement.style.background = 'blue'
//     classAppleElement.style.margin = '10px'
//     classAppleElement.style.color = 'white'
// }
//
// classApple[2].style.color = 'pink'; // звернулися на пряму за [i] масива
//
// Третій метод .getElementsByTagName:
// document.getElementsByTagName - шукає елементи за ім'ям самого тега в document
// За даним методом повертається завжди масив елементів
// div - усі <p> створені у HTML файлі
//
// let arrP = document.getElementsByTagName('p');
// console.log(arrP);

//Створення елемента в HTML за допомогою js:
//
// let createdElement = document.createElement('p'); // створюємо element
// let needDiv = document.querySelector('div#Hello div');
//
// createdElement.innerText = 'I am from JS';  // передані дані приймає як текст
// createdElement.style.background = 'green'; // задаємо стилі нашому елементу
// createdElement.style.color = 'white';     // задаємо стилі нашому елементу
//
// needDiv.appendChild(createdElement); // додаємо його за допомогою змінної в <div>
// document.body.appendChild(createdElement); // додаємо його у body
//

//Робота з масивом через DOM:
//
// let arrUser = [
//     { name: 'Dima', age: 25 },
//     { name: 'Oleg', age: 28 },
//     { name: 'Mike', age: 29 },
//     { name: 'Misha', age: 31 },
// ];
//
// for (const user of arrUser) {
//     const userDiv = document.createElement('div'); // створення елемента <div>
//
//     userDiv.style.background = 'green'; // стилізація
//     userDiv.style.color = 'white';      // стилізація
//     userDiv.style.margin = '10px';      // стилізація
//     userDiv.style.padding = '10px';     // стилізація
//
//     userDiv.innerHTML = `Hello my name is ${user.name} <br>
//     I am ${user.age} years old`; // передані дані приймає як звичайний HTML файл
//
//     userDiv.setAttribute('id', 'hello'); // створює атрибут с переданими даними
//     // userDiv.removeAttribute('id') // стирає у даного елемента переданий
//
//     document.body.appendChild(userDiv); // додаємо наш елемент body
// }

// Приклад роботи різних (on) пов'язаних з мишкою:
//
// Onclick:
// -- виконує функція по кліку миші
// let divHello = document.getElementById('Hello');
//
// divHello.style.background = 'red';
// divHello.style.color = 'white';
//
// divHello.onclick = () => {
//     divHello.style.background = 'blue';
// }
//
// Onmousemove:
// -- слідкує за кожним рухом курсора миші (в даному випадку по body)
// document.body.onmousemove = () => {
//     console.log('move');
// };
//
// коли event трекається передає усі дані, що сталося прямо зараз
// document.body.onmousemove = (ev)=>{
//     console.log(ev);
// }
//
// event.target - виводить дані по елементу, що трекається
// document.body.onmousemove = (ev)=>{
//     console.log(ev.target);
// }
//
// ev.preventDefault() - прибирає оновлення сторінки (наприклад: на кліку)

// Робота з формами (forms):
// усі звертання робимо по name
//
// const form = document.forms.myForm2; // доступаємось до нашої форми за її ім'ям
//
// console.log(form.someText);
// console.log(form.check1);
// console.log(form.rad);
// console.log(form.okBtn);
//
// for (const checkbox of form.check1) {
//     console.log(checkbox.checked);
// }
//
// for (const checkbox of form.rad) {
//     console.log(checkbox.checked);
// }
//
// console.log(form.someText)
//
// form.someText.oninput = () =>{
//     console.log(`Input`)
// }

// Об'єкти вебсховища (localStorage та sessionStorage):
// Local Storage:
// - це об'єкт вебсховища, який дозволяє зберігати пари ключ(name)/значення('Marina') в браузері.
//  -- дані, які в них записані, зберігаються після оновлення сторінки та навіть після перезапуску браузера
//
// localStorage.setItem('name','Marina'); // збереже переданні дані в LocalStorage
//
// Session Storage:
// - це об'єкт вебсховища, який дозволяє зберігати пари ключ(name)/значення('Marina') в браузері.
//  -- дані, які в них записані, зберігаються після оновлення сторінки, але до повного завершення сесії
//
// sessionStorage.setItem('age', '28');

// JSON - JavaScript Object notation (нотації об'єкта в JS), ще можна сказати що це праивльний об'єкт
// -- текстовый формат обміну даними, заснований на JavaScript.
// -- Но при цьому формат незалежний від JS та може використовуватися в будь-якій мові програмування.
//
// let user = {
//     name: 'Marina',
//     age: 27,
//     children: undefined,
//     payment: NaN,
//     goToSchool: () => {
//         console.log('I go to school');
//     },
// };
//
// let s = JSON.stringify(user);
//
// console.log(s); // виводить стрінгу, але схожий на наш об'єкт
// // (не показує значення undefined та функція(метод) та NaN перетворює на null)
//
// console.log(user); // виводить наш об'єкт
//
// localStorage.setItem('girl', user);
// localStorage.setItem('girlJSON', s);
//
// let girl2 = localStorage.getItem('girlJSON'); // отримує дані з local storage за заданим ключем
// let parsedGirl = JSON.parse(girl2);  // розбирає строку JSON
// console.log(parsedGirl);









