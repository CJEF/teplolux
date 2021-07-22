const callbackBtn = document.querySelectorAll("button.header-info__btn[data-modal]");
const requestBtn = document.querySelectorAll("button.article-footer__btn");
const agreement = document.querySelectorAll("button.agreement__btn[data-modal]");
const priceBtn = document.querySelectorAll("button.price__btn[data-modal]");
const dataBtn = document.querySelectorAll("button.site-btn--fixed[data-modal]");

const closeBtn = document.querySelectorAll("#modal-form__close");
const body = document.querySelector('body');

function openModal(e) {
    const target = e.target;
    const btnData = target.getAttribute('data-modal');
    let id = `#${btnData}`;
    console.log(id);
    const modal = document.querySelector(id);
    const overlay = modal.closest(".modal-form__overlay");
    modal.classList.add("active");
    overlay.classList.add("active");
    body.classList.add('overflow-hidden')
}

function closeModal(e) {
  const target = e.target;
  const modal = target.closest(".modal-form")
  const overlay = target.closest(".modal-form__overlay");
  modal.classList.remove('active')
  overlay.classList.remove("active");
  // modal.forEach(function(elem) {
    // if (!elem.classList.contains('active')) {
    //   console.log(elem);
      body.classList.remove('overflow-hidden');
    // }
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

requestBtn.forEach(function(elem) {
    elem.addEventListener("click", openModal);
});

closeBtn.forEach(function (btn) {
  btn.addEventListener("click", closeModal);
});

agreement.forEach(function (elem) {
  elem.addEventListener("click", openModal)
});
