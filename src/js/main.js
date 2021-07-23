/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */

 const swiper = new Swiper(".swiper-container", {
   direction: "horizontal",
   // loop: true,
   // If we need pagination
   pagination: {
    el: '.swiper-pagination',
    clickable: true,
   },
   // Navigation arrows
   // navigation: {
   //   nextEl: '.swiper-button-next',
   //   prevEl: '.swiper-button-prev',
   // },
   // And if we need scrollbar
   // scrollbar: {
   //   el: '.swiper-scrollbar',
   // },
 });

 const swiper2 = new Swiper(".catalog-article__body", {
   direction: "horizontal",
   // loop: true,
   // If we need pagination
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   // Navigation arrows
   // navigation: {
   //   nextEl: '.swiper-button-next',
   //   prevEl: '.swiper-button-prev',
   // },
   // And if we need scrollbar
   // scrollbar: {
   //   el: '.swiper-scrollbar',
   // },
 });

function closeMenu() {
  nav.classList.remove("active");
  burgerBtn.classList.remove("active");
  body.classList.remove("overflow-hidden");
};

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  if (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      closeMenu();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

/* custom slider */
/* const detailBtn = document.querySelectorAll(".detail-btn-js");
detailBtn.forEach(function(btn) {
  btn.addEventListener("click", function (e) {
    const article = this.closest(".catalog-article");
    const wrapper = article.querySelector(".article-info__wrapper");
    const swiperContainer = document.querySelector('.swiper-container');
    wrapper.classList.toggle("active");
    console.log(wrapper);
    let scrollx = article.offsetWidth - 60;
    console.log(scrollx);
    // let transform = wrapper.style.transform = "translateX(-" + scrollx + "px)";
    wrapper.style.width = article.offsetWidth * 2;
    swiperContainer.style.width = wrapper.style.width;
    wrapper.style.transform = "translateX(-" + scrollx + "px)";
    console.log(transform);

    if (!wrapper.classList.contains('active')) {
      this.textContent = "← Детальная информация";
    } else {
      this.textContent = "← Назад";
    }
  });
}) */

/* burger menu */
const nav = document.querySelector("#nav")
const body = document.querySelector("body");

/* open menu */

const burgerBtn = document.querySelector("#burger");
burgerBtn.addEventListener("click", function (e) {
  nav.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
  e.target.classList.toggle("active");
});

/* close menu */

document.addEventListener('click', function(e) {
  if (nav.classList.contains('active')) {
    let target = e.target;
    let its_menu = target == nav;
    let its_hamburger = target == burgerBtn;

    if (!its_menu && !its_hamburger) {
      closeMenu();
    }
  }
})
