/////Navbar/////

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

////Pop up automatic show after 2 secs////

const popup = document.querySelector(".pop-up");
const closing = document.querySelector(".close");
//window.onload = function () {
  //setTimeout(function () {
    //popup.style.display = "block";
  //}, 2000);
//};

  //closing.addEventListener("click", () => {
   //popup.style.display = "none";
  //});

////Testimonial Slider////

$(document).ready(function () {
  $(".testimonial-content").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});

////FAQs////

let li = document.querySelectorAll(".faq-text li");

for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e) => {
    let clickedLi;
    if (e.target.classList.contains("question-arrow")) {
      clickedLi = e.target.parentElement;
    } else {
      clickedLi = e.target.parentElement.parentElement;
    }
    clickedLi.classList.toggle("showAnswer");
  });
}
