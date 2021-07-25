/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */

 const swiper = new Swiper(".swiper-container", {
   direction: "horizontal",
  //  draggable: false,
  //  allowTouchMove: false,
   // loop: true,
   pagination: {
    el: '.swiper-pagination',
    clickable: true,
   },
   // scrollbar: {
   //   el: '.swiper-scrollbar',
   // },
  //  navigation: {
  //   nextEl: ".article-footer__detail-btn",
  //   prevEl: ".article-footer__detail-btn--back",
  // },
 });

 /* close nav menu on mobile phone */
function closeMenu() {
  nav.classList.remove("active");
  burgerBtn.classList.remove("active");
  body.classList.remove("overflow-hidden");
  nav.closest(".nav-wrapper").classList.remove("active");
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


/* scrollTop button activation */
const scrollTop = document.querySelector(".scroll-top");
const introHeight = document.querySelector("#intro").offsetHeight;
// console.log("scrollTop", scrollTop);
// console.log("introHeight", introHeight);
// console.log("window.top", window.top);
// console.log("window.scrollTop ", window.scrollTop );
// console.log("window.scrollY", window.scrollY );

document.addEventListener("scroll", function() {
  if (window.scrollY > introHeight) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
})
























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
})
 */

