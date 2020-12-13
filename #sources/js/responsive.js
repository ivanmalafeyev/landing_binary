let wo, ho, wi, hi;
wo = window.outerWidth;
ho = window.outerHeight;
wi = window.innerWidth;
hi = window.innerHeight;

function resize() {
  document.querySelector(".mainblock").style.minHeight = hi + "px";
}

window.addEventListener("resize", () => {
  wo = window.outerWidth;
  ho = window.outerHeight;
  wi = window.innerWidth;
  hi = window.innerHeight;
  resize();
});

resize();
