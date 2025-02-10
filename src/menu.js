import "./styles.css";
import { mainPage } from "./home";
import { menuData } from "./data";

const createMenu = (data) => {
  const menuContainer = document.createElement("div");
  const menuWrapper = document.createElement("div");
  const modalMenu = document.createElement("div");

  modalMenu.classList.add("modal");
  menuContainer.classList.add("menu-container");
  menuWrapper.classList.add("menu-border");

  const menuTop = document.createElement("h1");
  menuTop.classList.add("menu-top");
  menuTop.textContent = "Food Menu";
  modalMenu.appendChild(menuTop);

  data.forEach((food) => {
    const menuPart = document.createElement("div");
    menuPart.classList.add("white-menu");

    const nameH1 = document.createElement("h2");
    nameH1.textContent = food.dishName;

    const description = document.createElement("p");
    description.textContent = food.content;

    const price = document.createElement("p");
    price.textContent = food.platterPrice;

    menuPart.appendChild(nameH1);
    menuPart.appendChild(description);
    menuPart.appendChild(price);
    modalMenu.appendChild(menuPart);
  });

  menuWrapper.appendChild(modalMenu);
  menuContainer.appendChild(menuWrapper);
  mainPage.appendChild(menuContainer);

  return mainPage;
};

export const loadMenuPage = () => {
  mainPage.innerHTML = "";
  createMenu(menuData);
};
