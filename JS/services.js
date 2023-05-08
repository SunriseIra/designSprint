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
let popupLinkj = document.querySelectorAll(".popup-linkj");

let closePopup = document.querySelector(".popup_close");
let closePopup1 = document.querySelector(".popup_close1");
let closePopupj = document.querySelector(".popup_closej");

let popup = document.querySelector(".popup");
let popup1 = document.querySelector(".popup1");
let popupj = document.querySelector(".popupj");

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

//
if (popupLinkj.length > 0) {
  for (let i = 0; i < popupLinkj.length; i++) {
    let popupLinksj = popupLinkj[i];
    popupLinksj.addEventListener("click", (e) => {
      e.preventDefault();
      popupj.classList.add("active");
    });
  }
}
closePopupj.addEventListener("click", (e) => {
  e.preventDefault();
  popupj.classList.remove("active");
});

popupj.addEventListener("click", (e) => {
  if (!e.target.closest(".popup_contentj")) {
    popupj.classList.remove("active");
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




//accordion_team

let accordion_in = document.querySelectorAll(".joinacardion_card");

for (let i = 0; i < accordion_in.length; i++) {
  accordion_in[i].onclick = function() {
    this.classList.toggle("content_active");
    hideAall(this);
  };
}
function hideAall(exceptThis) {
  for (var i = 0; i < accordion_in.length; i++) {
    if (accordion_in[i] !== exceptThis) {
      accordion_in[i].classList.remove("content_active");
    }
  }
}

//
function importData() {
  let input = document.createElement("input");
  input.type = "file";
  input.onchange = (_) => {
    // you can use this method to get file and perform respective operations
    let files = Array.from(input.files);
    console.log(files);
  };
  input.click();
}

// developer 1or 2

let applybutAll = document.querySelectorAll(
  ".joinacardion_inner_bottom_CONTACT"
);
let applybut = Array.from(applybutAll);

let joineteamAll = document.querySelectorAll(".joineteam_page_form_inner_dev");
let joineteam = Array.from(joineteamAll);
for (let i = 0; i < applybut.length; i++) {
  let applybut_nav = applybut[i];

  applybut_nav.addEventListener("click", function () {
    for (let i = 0; i < joineteam.length; i++) {
      let joineteam_nav = joineteam[i];
      joineteam_nav.classList.remove("joineteam_devel");

      // console.log(joineteam_nav.id);
      if (joineteam_nav.id == applybut_nav.dataset.name) {
        joineteam_nav.classList.toggle("joineteam_devel");

        // joineteam_nav.classList.remove("joineteam_devel");
      }
    }
  });
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
let formAll = document.querySelectorAll(".subscribe");
let form = Array.from(formAll);
// console.log(form);
let buttonn = document.querySelector("#btn");



form.forEach((elem)=> {
  console.log(elem)

elem.addEventListener("submit", function (event) {
  console.log(11111)

  event.preventDefault();
  let fname = document.querySelector(".contacts_input_name");
  let email = document.querySelector(".contacts_input_email");
  let message = document.querySelector(".form_message");

  if (
    fname.value.length !== 0 &&
    email.value.length !== 0 &&
    message.value.length !== 0
  ) {
    let myelem = document.querySelectorAll(".myelem");
    myelem.forEach( (elem) => {
      elem.parentNode.classList.remove("error");
    });
  } else {
    let myelem = document.querySelectorAll(".myelem");
    // console.log(myelem);

    myelem.forEach( (elem) => {
      if (elem.value.length === 0) {
        elem.parentNode.classList.add("error");
      }
    });
  }
});
})