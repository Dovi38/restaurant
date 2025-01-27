import "./styles.css";
import paella from "./assets/paella.jpg";
const mainPage = document.querySelector("#content");

export const contents = "Hello js";
export const imageDiv = () => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("imageDiv");
  const myImage = document.createElement("img");
  myImage.src = paella;
  myImage.classList.add("plate");
  imageContainer.appendChild(myImage);
  mainPage.appendChild(imageContainer);
  return mainPage;
};

//create landing page here. export function of loading to index.js
// const pageContent = document.querySelector("#content");
// console.log(pageContent);
const createHeadline = () => {
  const headline = document.createElement("div");
  headline.classList.add("headline");
  const name = document.createElement("h1");
  name.classList.add("text");
  name.textContent = "Marion Restaurant";
  const title = document.createElement("h2");
  title.textContent = "Fresh made for everyone's taste";
  headline.appendChild(name);
  headline.appendChild(title);
  mainPage.appendChild(headline);
  return headline;
};

export const loadContent = () => {
  createHeadline();
};
