// class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika menu di klik
document.querySelector("#humbarger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan navnya
const menu = document.querySelector("#humbarger-menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
