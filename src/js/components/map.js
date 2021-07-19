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
