const s11 = document.querySelector(".s1 .anim1");
const s12 = document.querySelector(".s1 .anim2");
const s13 = document.querySelector(".s1 .anim3");
const s14 = document.querySelector(".s1 .anim4");

const t11 = document.querySelector(".s2 .anim1");
const t12 = document.querySelector(".s2 .anim2");
const t13 = document.querySelector(".s2 .anim3");

const u11 = document.querySelector(".s3 .anim1");
const u12 = document.querySelector(".s3 .anim2");
const u13 = document.querySelector(".s3 .anim3");

const v11 = document.querySelector(".s4 .anim1");
const v12 = document.querySelector(".s4 .anim2");
const v13 = document.querySelector(".s4 .anim3");
const v14 = document.querySelector(".s4 .anim4");

const w11 = document.querySelector(".s5 .anim1");
const w12 = document.querySelector(".s5 .anim2");
const w13 = document.querySelector(".s5 .anim3");

const w1 = document.querySelector(".s6 .anim1");
const w2 = document.querySelector(".s6 .anim2");
const w3 = document.querySelector(".s6 .anim3");

const x1 = document.querySelector(".s7 .anim1");
const x2 = document.querySelector(".s7 .anim2");
const x3 = document.querySelector(".s7 .anim3");

const y1 = document.querySelector(".s8 .anim1");
const y2 = document.querySelector(".s8 .anim2");
const y3 = document.querySelector(".s8 .anim3");

const m1 = document.querySelector(".m1 .anim1");
const m2 = document.querySelector(".m1 .anim2");
const m3 = document.querySelector(".m1 .anim3");
const m4 = document.querySelector(".m1 .anim4");

const z1 = document.querySelector(".s9 .anim1");
const z2 = document.querySelector(".s9 .anim2");
const z3 = document.querySelector(".s9 .anim3");

const z11 = document.querySelector(".s10 .anim1");
const z21 = document.querySelector(".s10 .anim2");
const z31 = document.querySelector(".s10 .anim3");

const n1 = document.querySelector(".m2 .anim1");
const n2 = document.querySelector(".m2 .anim2");

const r1 = document.querySelector(".r1 .anim1");
const r2 = document.querySelector(".r1 .anim2");
const r3 = document.querySelector(".r1 .anim3");
const r4 = document.querySelector(".r1 .anim4");

let Width = window.innerWidth;

window.addEventListener("resize", () => {
  return (Width = window.innerWidth);
});

function slide([...el], val) {
  if (Width >= 768) {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      el.forEach((els) => {
        if (els && scroll > val) {
          els.style.transform = `translate(0px,0px)`;
          els.style.opacity = "100";
        }
      });
    });
  } else {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      el.forEach((els) => {
        if (els && scroll >= val - 800) {
          els.style.transform = "translate(0px,0px)";
          els.style.opacity = "100";
        }
      });
    });
  }
}

slide([w1, w2, w3], 545);
slide([x1, x2, x3], 1363);
slide([y1, y2, y3], 2180);
slide([z1, z2, z3], 2800);
slide([z11, z21, z31], 3200);
slide1([w11, w12, w13]);
slide1([r1, r2, r3]);

function scale([...el], val) {
  if (Width >= 768) {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      el.forEach((els) => {
        if (els && scroll >= val) {
          els.classList.add("scale-100");
          els.classList.remove("scale-50");
          // el.style.transform = `scale(100%,100%))`;
          els.style.opacity = "100";
        }
      });
    });
  } else {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      el.forEach((els) => {
        if (els && scroll >= val - 1000) {
          els.classList.add("scale-100");
          els.classList.remove("scale-50");
          // el.style.transform = `scale(100%,100%))`;
          els.style.opacity = "100";
        }
      });
    });
  }
}

function slide1([...el]) {
  window.addEventListener("DOMContentLoaded", () => {
    el.forEach((els) => {
      if (els) {
        els.style.transform = `translate(0px, 0px)`;
        els.style.opacity = "100";
      }
    });
  });
}

const x = "translate";
const y = "translate";

if (window.innerWidth >= 768) {
  slide([s11, s12, s13, s14], 150);
} else {
  slide1([s11, s12, s13, s14]);
}

slide([t11, t12, t13], 750);

slide([u11, u12, u13], 1207);
slide1([m1, m2, m3]);
slide1([n1, n2]);
slide1([r4]);
scale([v11, v12], 1828);
scale([v13, v14], 2219);

const burger = document.querySelector(".burger");
const burger_nav = document.querySelector(".burger-nav");

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

const main_nav = document.querySelector(".main-nav");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  if (scroll >= 75) {
    main_nav.classList.add("shadow-sm");
  } else {
    main_nav.classList.remove("shadow-sm");
  }
});
