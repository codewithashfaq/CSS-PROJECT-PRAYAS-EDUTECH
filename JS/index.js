let lastScrollY = window.scrollY;
const header = document.querySelector(".header");
let ticking = false;

if (header) {
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY - lastScrollY > 50) {
          header.classList.add("hide");
        } else if (lastScrollY - window.scrollY > 50) {
          header.classList.remove("hide");
        }
        lastScrollY = window.scrollY;
        ticking = false;
      });
      ticking = true;
    }
  });
}
