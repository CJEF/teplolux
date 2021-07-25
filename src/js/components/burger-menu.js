/* burger menu */
const nav = document.querySelector("#nav")
const body = document.querySelector("body");

/* open menu */

const burgerBtn = document.querySelector("#burger");
burgerBtn.addEventListener("click", function (e) {
  nav.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
  e.target.closest("#burger").classList.toggle("active");
});

/* close menu */

document.addEventListener('click', function(e) {
  if (nav.classList.contains('active')) {
    // если у нав есть класс актив
    let target = e.target;
    let its_menu = target == nav; // место клика равно области нав
    console.log("its_menu", its_menu);
    let its_hamburger = target.closest("#burger") == burgerBtn; // место клика равно области бургера
    console.log("its_hamburger", its_hamburger);

    console.log(target);

    if (!its_menu && !its_hamburger) {
      console.log("!its_menu", !its_menu);
      console.log("!its_hamburger", !its_hamburger);
      closeMenu();
    }
  }
})
