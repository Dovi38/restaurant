import "./styles.css";
import Plate from "./assets/plate.jpg";
const mainPage = document.querySelector("#content");

export const contents = "Hello js";
export const setImg = () => {
  console.log(mainPage);
  const myImage = new Image();
  myImage.src = Plate;
  myImage.classList.add("plate");
  mainPage.appendChild(myImage);
  return mainPage;
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
