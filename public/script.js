function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener(
    "scroll",
    () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 0){
            header.classList.remove("hidden");
        } else if (currentScrollY > lastScrollY){
            header.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
        }

        lastScrollY = currentScrollY;
    }, {passive: true}
);
