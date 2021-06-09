window.onscroll = function () {
  stickyNavbar();
};

let navbar = document.getElementById("fixed");
let sticky = navbar.offsetTop;

let open = document.getElementById("openbtn");
let close = document.getElementById("closebtn");

open.addEventListener("click", () => {
  document.getElementById("sidebar").style.width = "250px";
});
close.addEventListener("click", () => {
  document.getElementById("sidebar").style.width = "0";
});

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
