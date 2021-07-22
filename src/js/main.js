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

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  if (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      body.classList.remove("overflow-hidden");
      nav.classList.remove("active");

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

/* custom slider */
const detailBtn = document.querySelectorAll(".detail-btn-js");
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
})

/* burger menu */
const nav = document.querySelector("#nav")
const body = document.querySelector("body");

const toggleMenu = () => {
  nav.classList.toggle('active');
}

const burgerBtn = document.querySelector("#burger");
burgerBtn.addEventListener("click", function() {
  toggleMenu();
  body.classList.toggle("overflow-hidden")
})

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == nav || nav.contains(target);
  let its_hamburger = target == burgerBtn;
  let menu_is_active = nav.classList.contains('active');
  
  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
})