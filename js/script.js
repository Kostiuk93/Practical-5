/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const //promoAdv = document.getElementsByClassName('promo__adv'), способ через елемент классов
      adv = document.querySelectorAll('.promo__adv img'), //способ через css селектор
      bg = document.querySelector('.promo__bg'),
      genre = bg.querySelector('.promo__genre'),
      interList = document.querySelector('.promo__interactive-list');

// (1)
// promoAdv[0].remove(); способ через елемент классов
adv.forEach(item =>{
    item.remove();
}); ////способ через css селектор

// (2)
genre.textContent = 'драма'; 

// (3)
bg.style.backgroundImage = `url("img/bg.jpg")`;

// (4)
interList.innerHTML = ""; // очистили статичный код. удалили строки HTML

movieDB.movies.sort(); //сортировка внутри массива свойства movies

// (5)
movieDB.movies.forEach((film, i) => {
    interList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

// += дополнительное присваивание. ПРИМЕР:
// a = a + 1;
// РАВНО
// a += 1;
// +38-099-73-066-10 - Женя