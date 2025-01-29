import "./styles.css";
import { mainPage } from "./home";
const createMenu = () => {
  const mano = document.createElement("h1");
  mano.textContent = "hello you";
  mano.style.color = "white";
  mainPage.appendChild(mano);
};

export const loadMenuPage = () => {
  mainPage.innerHTML = "";
  createMenu();
};
