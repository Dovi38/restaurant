import "./styles.css";

import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";
import { loadContactPage } from "./contact.js";

//loads home page on initial page load
window.addEventListener("load", loadHomePage);

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const contactBtn = document.querySelector("#contact");

//loads home page on home button click
homeBtn.addEventListener("click", () => {
  loadHomePage();
});
menuBtn.addEventListener("click", () => {
  loadMenuPage();
});
aboutBtn.addEventListener("click", () => {
  loadAboutPage();
});
contactBtn.addEventListener("click", () => {
  loadContactPage();
});
