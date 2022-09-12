// - Створити довільний елемент с id = text.
// використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
//
// const divTextId = document.createElement('div');
// divTextId.setAttribute('id', 'text');
//
// divTextId.innerText = 'Hello text';
//
// divTextId.onclick = ()=>{
//     divTextId.remove()
// }
//
// document.body.appendChild(divTextId)

// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
//
// document.getElementById('hider').onclick = function() {
//     document.getElementById('hider').hidden = true;
// }

// - При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// let inputAge = document.getElementById('userAge');
// let btnChekAge = document.getElementById('checkAge');
// btnChekAge.onclick = function () {
//     if (inputAge.value < 18) {
//         alert('Sorry your age less eighteen');
//     }
// };

// - Створіть меню, яке розгортається/згортається при клику
//
// let divMenu = document.getElementById('menu');
// let toggleShowMenu = true;
// let mainMenu = document.getElementsByClassName('mainMenu')[0];
//
// divMenu.onclick = () =>{
// toggleShowMenu = !toggleShowMenu
//     console.log(toggleShowMenu)
//     if (!toggleShowMenu){
//         mainMenu.style.display = 'none'
//     } else{
//         mainMenu.style.display = 'block'
//     }
// }

// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// let btnForms = document.getElementsByClassName('btnForms')[0];
// btnForms.onclick = () => {
//     let f1 = document.forms.f1;
//     let f2 = document.forms.f2;
//     let user = {
//         name: f1.userName.value,
//         age: f1.userAge.value,
//         surname: f2.userSurname.value,
//         wife: f2.userWife.value,
//     };
//     console.log(user);
// };

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
// document.forms.table.style.marginTop = '10px'
// document.forms.table.onsubmit = (e) => {
//     e.preventDefault();
//     let rows = e.target.rows.value;
//     let columns = e.target.columns.value;
//     let textTable = e.target.textTable.value;
//     let table = document.createElement('table');
//
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr)
//         for (let j = 0; j < columns; j++) {
//             let td = document.createElement('td');
//             td.innerText = textTable;
//             tr.appendChild(td);
//         }
//     }
//     document.body.appendChild(table);
// };

// Напишіть пагінацію на 2 сторінки с 5 елементами на кожній
//
// let count = 10; //усього записів
// let cnt = 5; //скільки зображень спочатку
// let cnt_page = Math.ceil(count / cnt); //кількість сторінок
//
//виводимо список сторінок
// let paginator = document.querySelector(".paginator");
// let page = "";
// for (let i = 0; i < cnt_page; i++) {
//     page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
// }
// paginator.innerHTML = page;
//
//виводимо перші записи {cnt}
// let div_num = document.querySelectorAll(".num");
// for (let i = 0; i < div_num.length; i++) {
//     if (i < cnt) {
//         div_num[i].style.display = "block";
//     }
// }
//
// let main_page = document.getElementById("page1");
// main_page.classList.add("paginator_active");
//
//перегортаємо
// function pagination(event) {
//     let e = event || window.event;
//     let target = e.target;
//     let id = target.id;
//
//     if (target.tagName.toLowerCase() != "span") return;
//
//     let num_ = id.substr(4);
//     let data_page = +target.dataset.page;
//     main_page.classList.remove("paginator_active");
//     main_page = document.getElementById(id);
//     main_page.classList.add("paginator_active");
//
//     let j = 0;
//     for (let i = 0; i < div_num.length; i++) {
//         let data_num = div_num[i].dataset.num;
//         if (data_num <= data_page || data_num >= data_page)
//             div_num[i].style.display = "none";
//
//     }
//     for (let i = data_page; i < div_num.length; i++) {
//         if (j >= cnt) break;
//         div_num[i].style.display = "block";
//         j++;
//     }
// }
