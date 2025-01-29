import "./styles.css";

import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";

//loads home page on initial page load
window.addEventListener("load", loadHomePage);
// const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");

//loads home page on home button click
homeBtn.addEventListener("click", () => {
  loadHomePage();
});
menuBtn.addEventListener("click", () => {
  loadMenuPage();
});
