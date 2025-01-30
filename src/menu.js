import "./styles.css";

import { mainPage } from "./home";

const createMenu = () => {
  const menuContainer = document.createElement("div");
  const menuWrapper = document.createElement("div");
  const modalMenu = document.createElement("div");
  modalMenu.classList.add("modal");
  menuContainer.classList.add("menu-container");
  menuWrapper.classList.add("menu-border");
  menuWrapper.appendChild(modalMenu);
  mainPage.appendChild(menuContainer);
  menuContainer.appendChild(menuWrapper);
};

export const loadMenuPage = () => {
  mainPage.innerHTML = "";
  createMenu();
};
