// console.log('global');
"use strict";
"use strict";

/* burger menu */
var nav = document.querySelector("#nav");
var body = document.querySelector("body");
/* open menu */

var burgerBtn = document.querySelector("#burger");
burgerBtn.addEventListener("click", function (e) {
  nav.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
  e.target.closest("#burger").classList.toggle("active");
  nav.closest(".nav-wrapper").classList.toggle("active");
});
/* close menu */

document.addEventListener('click', function (e) {
  if (nav.classList.contains('active')) {
    // если у нав есть класс актив
    var target = e.target;
    var its_menu = target == nav; // место клика равно области нав

    console.log("its_menu", its_menu);
    var its_hamburger = target.closest("#burger") == burgerBtn; // место клика равно области бургера
    // console.log("its_hamburger", its_hamburger);
    // console.log(target);

    if (!its_menu && !its_hamburger) {
      console.log("!its_menu", !its_menu);
      console.log("!its_hamburger", !its_hamburger);
      closeMenu();
    }
  }
});
"use strict";

/* slider custom */
var slider = document.querySelector(".article-info");
var sliderWidth = slider.offsetWidth;

function initSlider() {
  var sliderWidth = slider.offsetWidth; // берем ширину слайдера (ширину родителя с оверлоу хидден)

  var slide = document.querySelectorAll(".article-info__slide");
  slide.forEach(function (elem) {
    elem.style.width = sliderWidth + 'px';
    console.log(elem.style.width);
  });
}

var detailBtn = document.querySelectorAll(".detail-btn-js");
detailBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    var sliderWidth = slider.offsetWidth;
    var target = e.target;
    var article = target.closest(".catalog-article");
    var sliderLine = article.querySelector(".article-info__line");

    if (btn.classList.contains("active")) {
      sliderLine.style.transform = 'translateX(' + 0 + 'px)';
      btn.classList.remove("active");
      this.textContent = "← Детальная информация";
    } else {
      btn.classList.add("active");
      sliderLine.style.transform = 'translateX(' + -sliderWidth + 'px)';
      this.textContent = "← Назад";
    }
  });
});
window.addEventListener("resize", function () {
  initSlider();
  console.log(123);
});
initSlider();
// console.log('');
"use strict";
"use strict";

ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
    center: [49.801504, 73.096993],
    zoom: 18
  }, {
    searchControlProvider: "yandex#search"
  }),
      // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: "значок метки",
    balloonContent: "<img src=\"./img/logo.svg\" class=\"questions__map-logo\" alt=\"map image\"><p class=\"questions__map-text\">\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440\u043E\u0432 \u0438 \u0441\u043F\u043B\u0438\u0442 \u0441\u0438\u0441\u0442\u0435\u043C \u0432 \u041A\u0430\u0440\u0430\u0433\u0430\u043D\u0434\u0435</p>"
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: "default#image",
    // Своё изображение иконки метки.
    iconImageHref: "./img/location.svg",
    // Размеры метки.
    iconImageSize: [34, 48],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-18, -55]
  });
  myMap.geoObjects.add(myPlacemark);
});
"use strict";
"use strict";

var callbackBtn = document.querySelectorAll("button.header-info__btn[data-modal]");
var requestBtn = document.querySelectorAll("button.article-footer__btn");
var agreement = document.querySelectorAll("button.agreement__btn[data-modal]");
var priceBtn = document.querySelectorAll("button.price__btn[data-modal]");
var dataBtn = document.querySelectorAll("button.site-btn--fixed[data-modal]");
var closeBtn = document.querySelectorAll("#modal-form__close");
var body = document.querySelector('body');

function openModal(e) {
  var target = e.target;
  var btnData = target.getAttribute('data-modal');
  var id = "#".concat(btnData);
  console.log(id);
  var modal = document.querySelector(id);
  var overlay = modal.closest(".modal-form__overlay");
  modal.classList.add("active");
  overlay.classList.add("active");
  body.classList.add('overflow-hidden');
}

function closeModal(e) {
  var target = e.target;
  var modal = target.closest(".modal-form");
  var overlay = target.closest(".modal-form__overlay");
  modal.classList.remove('active');
  overlay.classList.remove("active"); // modal.forEach(function(elem) {
  // if (!elem.classList.contains('active')) {
  //   console.log(elem);

  body.classList.remove('overflow-hidden'); // }
  // })
}

callbackBtn.forEach(function (elem) {
  elem.addEventListener("click", openModal);
});
priceBtn.forEach(function (elem) {
  elem.addEventListener("click", openModal);
});
dataBtn.forEach(function (elem) {
  elem.addEventListener("click", openModal);
});
requestBtn.forEach(function (elem) {
  elem.addEventListener("click", openModal);
});
closeBtn.forEach(function (btn) {
  btn.addEventListener("click", closeModal);
});
agreement.forEach(function (elem) {
  elem.addEventListener("click", openModal);
});
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
var swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  //  draggable: false,
  //  allowTouchMove: false,
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  } // scrollbar: {
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
}

;
var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;

    if (anchor) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        closeMenu();
        var blockID = anchor.getAttribute("href").substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    }
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
  /* scrollTop button activation */

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var scrollTop = document.querySelector(".scroll-top");
var introHeight = document.querySelector("#intro").offsetHeight; // console.log("scrollTop", scrollTop);
// console.log("introHeight", introHeight);
// console.log("window.top", window.top);
// console.log("window.scrollTop ", window.scrollTop );
// console.log("window.scrollY", window.scrollY );

document.addEventListener("scroll", function () {
  if (window.scrollY > introHeight) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
});
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
//# sourceMappingURL=main.js.map
