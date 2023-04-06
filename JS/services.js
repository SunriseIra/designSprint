// burger menu
let inner_nav_white = document.querySelector(".header_inner_nav_white");
let toggle_white = document.querySelector(".nav-toggle_white");

toggle_white.addEventListener("click", function () {
  toggle_white.classList.toggle("active");
  inner_nav_white.classList.toggle("active");
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
let popupLinkss = document.querySelectorAll(".popup-links");

let closePopup = document.querySelector(".popup_close");
let closePopup1 = document.querySelector(".popup_close1");

let popup = document.querySelector(".popup");
let popup1 = document.querySelector(".popup1");

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

if (popupLinkss.length > 0) {
  for (let i = 0; i < popupLinkss.length; i++) {
    let popupLinki = popupLinkss[i];
    popupLinki.addEventListener("click", (e) => {
      e.preventDefault();
      popup1.classList.add("active");
    });
  }
}
closePopup1.addEventListener("click", (e) => {
  e.preventDefault();
  popup1.classList.remove("active");
});

popup1.addEventListener("click", (e) => {
  if (!e.target.closest(".popup_content1")) {
    popup1.classList.remove("active");
  }
});
// services_serv_card
let cardAll = document.querySelectorAll(".services_serv_card");
let cardA = Array.from(cardAll);
let developA = document.querySelectorAll(".development_colon_all");
let develop = Array.from(developA);
// console.log(develop);

cardA.forEach((elem) => {
  elem.addEventListener("click", function () {
    console.log(elem.dataset.name);

    for (let i = 0; i < develop.length; i++) {
      let developi = develop[i];
      // console.log(developi);
      developi.classList.remove("develact");
      if (elem.dataset.name === developi.dataset.name) {
        developi.classList.add("develact");
      }
    }
  });
});

let submenuAll = document.querySelectorAll(".sub_header_inner_bottoms_white");
let submenu = Array.from(submenuAll);
let submenuAl = document.querySelectorAll(".sub_header_inner_bottoms");
let submenuind = Array.from(submenuAl);
// console.log(submenu);

submenuind.forEach((elem) => {
  elem.addEventListener("click", function () {
    console.log(elem.dataset.name);

    for (let i = 0; i < develop.length; i++) {
      let developi = develop[i];
      // console.log(developi);
      developi.classList.remove("develact");
      if (elem.dataset.name === developi.dataset.name) {
        developi.classList.add("develact");
      }
    }
  });
});
submenu.forEach((elem) => {
  elem.addEventListener("click", function () {
    console.log(elem.dataset.name);

    for (let i = 0; i < develop.length; i++) {
      let developi = develop[i];
      // console.log(developi);
      developi.classList.remove("develact");
      if (elem.dataset.name === developi.dataset.name) {
        developi.classList.add("develact");
      }
    }
  });
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
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          vertical: true,
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  });
});

////accordion

let accordion_card = document.querySelectorAll(".FAQ_accordion_card");

for (let i = 0; i < accordion_card.length; i++) {
  let accordion_card_nav = accordion_card[i];
  // console.log(accordion_card_nav);
  accordion_card_nav.addEventListener("click", function () {
    for (let i = 0; i < accordion_card.length; i++) {
      // console.log(this);
      let accord_card_nav = accordion_card[i];
      accord_card_nav.classList.remove("content_active");
    }

    this.classList.toggle("content_active");
  });
}
