import "./styles.css";
import paella from "./assets/paella.jpg";

const mainPage = document.querySelector("#content");

const imageDiv = () => {
  const imageContainer = document.createElement("div");
  const myImage = document.createElement("img");
  imageContainer.classList.add("imageDiv");

  myImage.classList.add("plate");
  myImage.src = paella;

  imageContainer.appendChild(myImage);
  mainPage.appendChild(imageContainer);
  return mainPage;
};

//create landing page here. export function of loading to index.js

const createHeadline = () => {
  const headline = document.createElement("div");
  const name = document.createElement("h1");
  const title = document.createElement("h2");

  headline.classList.add("headline");
  name.classList.add("text");

  name.textContent = "Marion Restaurant";
  title.textContent = "Fresh made for everyone's taste";

  headline.appendChild(name);
  headline.appendChild(title);
  mainPage.appendChild(headline);
  return headline;
};

export const loadHomePage = () => {
  mainPage.innerHTML = "";
  imageDiv();
  createHeadline();
};

////example
// function loadHome() {
// 	const contentDiv = document.querySelector("#content");
// 	contentDiv.appendChild(createHome());
// }
// function loadHomePage() {
//   const content = document.querySelector("#content");
//   content.textContent = "";

//   content.appendChild(createHomePage());
// }

// export default loadHomePage;
