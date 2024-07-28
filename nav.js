const burger = document.querySelector(".burger");
const burger_nav = document.querySelector(".burger-nav");
const main_nav = document.querySelector(".main-nav");

burger.addEventListener("click", () => {
  burger_nav.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  const check =
    burger.contains(event.target) || burger_nav.contains(event.target);
  if (!check) {
    burger_nav.classList.add("hidden");
  }
});

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  if (scroll >= 75) {
    main_nav.classList.add("shadow-sm");
  } else {
    main_nav.classList.remove("shadow-sm");
  }
});

const a1 = document.querySelector(".stickk");
const a3 = document.querySelector(".stickkk");
window.addEventListener("resize", function () {
  const b2 = window.innerWidth;
  a1.innerText = b2;
});
window.addEventListener("scroll", () => {
  const b3 = window.scrollY;
  a3.innerText = b3;
});
