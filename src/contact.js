import "./styles.css";

import { mainPage } from "./home";

const createContacts = () => {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("contact");
  mainPage.appendChild(mainContainer);
};

export const loadContactPage = () => {
  mainPage.innerHTML = "";
  createContacts();
};
