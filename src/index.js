import "./styles.css";

import { loadHomePage } from "./home.js";

//loads home page on initial page load
window.addEventListener("load", loadHomePage);
// const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");

//loads home page on home button click
homeBtn.addEventListener("click", () => {
  loadHomePage();
});
