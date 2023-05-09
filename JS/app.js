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
//
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
let footerAll = document.querySelectorAll(".footer_inner_bottoms");
let footer = Array.from(footerAll);
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

footer.forEach((elem) => {
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


////accordion

let accordion_card = document.querySelectorAll(".FAQ_accordion_card");

for (let i = 0; i < accordion_card.length; i++) {
  accordion_card[i].onclick = function() {
    this.classList.toggle("content_active");
    hideAll(this);
  };
}
function hideAll(exceptThis) {
  for (var i = 0; i < accordion_card.length; i++) {
    if (accordion_card[i] !== exceptThis) {
      accordion_card[i].classList.remove("content_active");
    }
  }
}

///validation email
const email = document.querySelector('input[name=email]');
const button = document.querySelector('#btn');
const text =  document.querySelector('#message');

const validateEmail= (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

button.addEventListener('click',()=>{
    if(validateEmail(email.value)){
      text.innerText="Valid email";
    }else{
      text.innerText="Invalid email";
    }
})


//// form

// let formAll = document.querySelectorAll(".subscribe");
// let form = Array.from(formAll);
// // console.log(form);
// // let buttonn = document.querySelector("#btn");



// form.forEach((elem)=> {
//   console.log(elem)

// elem.addEventListener("submit", function (event) {
//   console.log(this)
//   event.preventDefault();
//   let fname = document.querySelector(".contacts_input_name");
//   let email = document.querySelector(".contacts_input_email");
//   let message = document.querySelector(".form_message");

//   let parentAdd = event.target.parentElement;
//   let myelempa= parentAdd.querySelectorAll(".myelem");
//   let myelem = Array.from(myelempa);
//   console.log(myelem);

//   if (
//     fname.value.length !== 0 &&
//     email.value.length !== 0 &&
//     message.value.length !== 0
//   ) {
//     myelem.forEach(function (elem) {
//       elem.parentNode.classList.remove("error");
//     });
//   } else {
    
//     myelem.forEach(function (elem) {
//       if (elem.value.length === 0) {
//         // console.log(elem);
//         elem.parentNode.classList.add("error");
//       }

//     });
//   }
//      elem.parentNode.classList.remove("error");

// });
// })

