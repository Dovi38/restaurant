import "./styles.css";

import { mainPage } from "./home";

const createContacts = () => {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("contact");
  const createHeader = document.createElement("h1");
  createHeader.textContent = "Contact Us";
  mainContainer.appendChild(createHeader);
  mainPage.appendChild(mainContainer);
};

export const loadContactPage = () => {
  mainPage.innerHTML = "";
  createContacts();
};
