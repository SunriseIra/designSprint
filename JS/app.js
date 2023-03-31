// burger menu
let inner_nav = document.querySelector(".header_inner_nav");
let toggle = document.querySelector(".nav-toggle");
toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  inner_nav.classList.toggle("active");
});

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

///pop up
let popupLink = document.querySelectorAll(".popup-link");
let closePopup = document.querySelector(".popup_close");
let popup = document.querySelector(".popup");
let popupBody = document.querySelector(".popup_body");
// console.log(popupLink);
// let unlock = true;
// let timeout = 800;

if (popupLink.length > 0) {
  for (let i = 0; i < popupLink.length; i++) {
    let popupLinks = popupLink[i];
    popupLinks.addEventListener("click", (e) => {
      e.preventDefault();
      popup.classList.add("active");
    });
  }
}

closePopup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.remove("active");
});

popup.addEventListener("click", (e) => {
  if (!e.target.closest(".popup_content")) {
    popup.classList.remove("active");
  }
});

// box-shadow

let shadowAll = document.querySelectorAll(".partners_card");
let shadow = Array.from(shadowAll);

let i = 0;
const shadowFunc = () => {
  if (i < shadow.length) {
    shadow.forEach((elem) => {
      elem.classList.remove("part_card_shadow");
    });
    shadow[i].classList.add("part_card_shadow");
    i++;
  } else {
    i = 0;
  }
};
setInterval(shadowFunc, 1500);

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
////servises slick_slider

////////////////
$(document).ready(function () {
  var $slider = $(".project_slider_inner");
  var $progressBar = $(".progress");
  var $progressBarLabel = $(".slider_label");

  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = (nextSlide / (slick.slideCount - 1)) * 100;

    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);

    $progressBarLabel.text(calc + "% completed");
  });
  $(".project_slider_inner").slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".slick_prev_arrow",
    nextArrow: ".slick_next_arrow",
  });
});

// $(".slider_slick_image").on(
//   "init reInit afterChange",
//   function (event, slick, currentSlide, nextSlide) {
//     let currentSl = slick.$slides[currentSlide];
//     let slick_imag = $(currentSl).find(".slick_imag");
//     let text_clide = slick.$slider[0];
//     $(".slick_imag").toggleClass("slick_imag_active");
//     let slick_image_act = $(slick.$slider[0]).find("slick_image_text");
//     // console.log(slick_image_act);

//     // console.log(text_clide);

//     if (!slick_image_act.hasClass("animate__animated")) {
//       slick_image_act.addClass("animate__animated");
//       setTimeout(() => {
//         slick_image_act.removeClass("animate__animated");
//       }, 1600);
//     }
//   }
// );
