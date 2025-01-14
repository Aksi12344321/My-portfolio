/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  /* window.onscroll = () => { ... }:

    Это означает, что каждый раз, когда пользователь прокручивает страницу (событие scroll), выполняется указанная функция.
    Функция, заключенная в () => { ... }, является стрелочной функцией, которая не имеет своего собственного контекста this, а использует контекст внешней области. */
  /*========== sticky navbar ==========*/

  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100); /* Если window.scrollY > 100 (то есть, когда страница прокручена более чем на 100 пикселей вниз), то класс sticky добавляется к элементу .header.
  Если window.scrollY <= 100, класс sticky удаляется. */

  /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
};

/*========== swiper ==========*/

/*========== dark light mode ==========*/

/*========== scroll reveal ==========*/
