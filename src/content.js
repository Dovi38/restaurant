import "./style.css";
import plate from "./assets/plate";
const mainPage = document.querySelector("#content");

export const contents = "Hello js";
export const setImg = () => {
  mainPage.style.backgroundImage = plate;
  mainPage.style.backgroundSize = "cover";
  mainPage.style.backgroundPosition = "center";
};

//create landing page here. export function of loading to index.js
// const pageContent = document.querySelector("#content");
// console.log(pageContent);
const createHeadline = () => {
  const headline = document.createElement("div");
  headline.classList.add("headline");
  const title = document.createElement("h1");
  title.classList.add("text");
  title.textContent = "Fresh made for everyone's taste";
  headline.appendChild(title);
  mainPage.appendChild(headline);
  return headline;
};

export const loadContent = () => {
  createHeadline();
};
