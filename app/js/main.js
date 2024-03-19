const headerElement = document.querySelector(".header");
const hamburgerIconEl = headerElement.querySelector("#hamburger-icon");
const floatingMenuEl = headerElement.querySelector(".header__floating-menu");
const heroImageElem = document.querySelector(".hero__image");

hamburgerIconEl.addEventListener("click", () => {
  const isOpen = headerElement.classList.contains("open");
  headerElement.parentElement.classList.toggle("no-scroll", !isOpen);
  headerElement.classList.toggle("open", !isOpen);
  floatingMenuEl.classList.toggle("open", !isOpen);
  heroImageElem.classList.toggle("open", !isOpen);
  headerElement.classList.toggle("close", isOpen);
});
