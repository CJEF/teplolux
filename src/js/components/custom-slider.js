/* slider custom */
const slider = document.querySelector(".article-info");
let sliderWidth = slider.offsetWidth;

function initSlider() {
    let sliderWidth = slider.offsetWidth; // берем ширину слайдера (ширину родителя с оверлоу хидден)
  const slide = document.querySelectorAll(".article-info__slide");
  slide.forEach(elem => {
    elem.style.width = sliderWidth + 'px';
    console.log(elem.style.width);
  })
}

const detailBtn = document.querySelectorAll(".detail-btn-js");
detailBtn.forEach(btn => {

  btn.addEventListener("click", function(e) {
    let sliderWidth = slider.offsetWidth;
    const target = e.target;
    let article = target.closest(".catalog-article")
    let sliderLine = article.querySelector(".article-info__line")
    
    if (btn.classList.contains("active")) {
      sliderLine.style.transform = 'translateX(' + 0 + 'px)';
      btn.classList.remove("active")
      this.textContent = "← Детальная информация";
    } else {
      btn.classList.add("active")
      sliderLine.style.transform = 'translateX(' + -sliderWidth + 'px)'
      this.textContent = "← Назад";
    }

  })
})

window.addEventListener("resize", function() {
    initSlider();
    console.log(123);
})

initSlider();