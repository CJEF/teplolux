// console.log('global');
"use strict";
// console.log('');
"use strict";
// ymaps.ready(function () {
//   var myMap = new ymaps.Map(
//       "map",
//       {
//         center: [49.801504, 73.096993],
//         zoom: 18,
//       },
//       {
//         searchControlProvider: "yandex#search",
//       }
//     ),
//     // Создаём макет содержимого.
//     MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//       '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//     ),
//     myPlacemark = new ymaps.Placemark(
//       myMap.getCenter(),
//       {
//         hintContent: "значок метки",
//         balloonContent: "Продажа кондиционеров и сплит систем в Караганде",
//       },
//       {
//         // Опции.
//         // Необходимо указать данный тип макета.
//         iconLayout: "default#image",
//         // Своё изображение иконки метки.
//         iconImageHref: "../img/location.svg",
//         // Размеры метки.
//         iconImageSize: [34, 48],
//         // Смещение левого верхнего угла иконки относительно
//         // её "ножки" (точки привязки).
//         // iconImageOffset: [0, -38],
//       }
//     );
//   myMap.geoObjects.add(myPlacemark)
// });
"use strict";
"use strict";
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
  // loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  } // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

});
var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;

    if (anchor) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
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
  /* custom slider */

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var detailBtn = document.querySelectorAll(".detail-btn-js");
detailBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    var article = this.closest(".catalog-article");
    var wrapper = article.querySelector(".article-info__wrapper");
    wrapper.classList.toggle("active");

    if (!wrapper.classList.contains('active')) {
      this.textContent = "← Детальная информация";
    } else {
      this.textContent = "← Назад";
    }
  });
});
//# sourceMappingURL=main.js.map