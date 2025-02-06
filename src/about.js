import "./styles.css";

import { mainPage } from "./home";

const menuList = () => {};
export const loadAboutPage = () => {
  mainPage.innerHTML = "";
  menuList(menuData);
};
