$(document)
  .ready(function () {
    $(".slider_slick_image").slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      // autoplay: true,
      // speed: 1000,
    });
  })
  .slickAnimation();



let slick_imageAll = document.querySelectorAll(".slick_image");
let slick_images = Array.from(slick_imageAll);
// console.log(slick_images);
slick_images.forEach((el) => {
  // console.log(el.classList.toggle("slick-active"));

  if (el.classList.toggle("slick-active") == true) {
    // console.log(1111);
  }
  
});




// box-shadow

let shadowAll = document.querySelectorAll(".partners_card");
let shadow = Array.from(shadowAll);

for (let i = 0; i < shadow.length; i++) {
  let shadows = shadow[i];

  setInterval(function () {
    for (let i = 0; i < shadow.length; i++) {
      let shadows = shadow[i];
      shadows.classList.add("part_card_shadow");
      setTimeout(function () {
        shadows.classList.remove("part_card_shadow");
      }, 5500);
    }
  }, 5000);
}

//// change nav color when scrolling
let header_ass = document.querySelector(".header_assets");
const changeColor = () => {
  if (window.scrollY < 450) {
    header_ass.classList.remove("new_color");
  } else {
    header_ass.classList.add("new_color");
  }
};
window.addEventListener("scroll", changeColor);

/////dinamyc data footer
var d = new Date();
document.getElementById("yearFooter").innerHTML = d.getFullYear();

//////

$(".slider_slick_image").on(
    "init reInit afterChange",
  function (event, slick, currentSlide, nextSlide) {
    let currentSl = slick.$slides[currentSlide];
    let slick_imag = $(currentSl).find(".slick_imag");
    let text_clide = slick.$slider[0];
    $(".slick_imag").toggleClass("slick_imag_active");
    let slick_image_act = $(slick.$slider[0]).find("slick_image_text");
    // console.log(slick_image_act);

    // console.log(text_clide);

    if (!slick_image_act.hasClass("animate__animated")) {
      slick_image_act.addClass("animate__animated");
      setTimeout(() => {
        slick_image_act.removeClass("animate__animated");
      }, 1600);
    }
  }
);



// $(".slider_slick_image").on("click touch", function (e) {
//   e.preventDefault();

//   // console.log($(this));
//   let arrow = $(this);
//   if (!arrow.hasClass("animate__animated")) {
//     arrow.addClass("animate__animated");
//     setTimeout(() => {
//       arrow.removeClass("animate__animated");
//     }, 1600);
//   }
// });

// setTimeout(setTimeout(
//     shadows.classList.add('part_card_shadow'), 5000),
//   2000)

// );
// }
// shadows();
// function shadowNone() {
//   shadow.forEach((elem) => {

//     elem.classList.remove("part_card_shadow");

//   });
// }
// shadowNone();
// setTimeout(shadows, 2000);
// setTimeout(shadowNone, 2500);

// $(".slider_slick_image").on(
//   "init reInit afterChange",
//   function (event, slick, currentSlide, nextSlide) {
//     let currentSl = slick.$slides[currentSlide];
//     let slick_imag = $(currentSl).find(".slick_imag");

//     $(".slick_imag").toggleClass("slick_imag_active");

//   }
// );