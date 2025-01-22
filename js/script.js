/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  /* window.onscroll = () => { ... }:

    Это означает, что каждый раз, когда пользователь прокручивает страницу (событие scroll), выполняется указанная функция.
    Функция, заключенная в () => { ... }, является стрелочной функцией, которая не имеет своего собственного контекста this, а использует контекст внешней области. */

  sections.forEach((sec) => {
    let top = window.scrollY; // Получаем текущую вертикальную позицию прокрутки окна
    let offset = sec.offsetTop - 150; //Получаем положение верхней части секции относительно начала страницы
    let height = sec.offsetHeight; //Получаем высоту секции
    let id = sec.getAttribute("id"); //Получаем ID текущей секции

    if (top >= offset && top < offset + height) {
      //top >= offset (прокрутка вошла в секцию) и top < offset + height (прокрутка еще не вышла за пределы секции).
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector(`header nav a[href*="${id}"]`).classList.add("active"); // Добавляем класс active на ссылку, которая соответствует текущей секции
      });
    }
  });

  /*========== sticky navbar ==========*/

  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100); /* Если window.scrollY > 100 (то есть, когда страница прокручена более чем на 100 пикселей вниз), то класс sticky добавляется к элементу .header.
  Если window.scrollY <= 100, класс sticky удаляется. */

  /*========== remove menu icon navbar when click navbar link (scroll) ==========*/

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*========== swiper ==========*/

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*========== dark light mode ==========*/

let darkModeIcon = document.querySelector("#darkMode-icon");
darkModeIcon.addEventListener("click", () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
});

/*========== scroll reveal ==========*/

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home__content, .contacts heading", { origin: "top" });
ScrollReveal().reveal(".home__img img, .services__container, .portfolio__box, .feedbacks__wrapper, .contacts form", { origin: "bottom" });
ScrollReveal().reveal(".home__content h1, .about__img img", { origin: "left" });
ScrollReveal().reveal(".home__content h3, .home__content p, .about__content", { origin: "right" });
