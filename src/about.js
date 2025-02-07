import "./styles.css";
import biscuit from "./assets/biscuit.jpg";
import { mainPage } from "./home";

const aboutSection = () => {
  const textContainer = document.createElement("div");
  const imgContainer = document.createElement("img");
  imgContainer.classList.add("imgRestaurant");
  imgContainer.src = biscuit;
  textContainer.appendChild(imgContainer);
  const descriptionText = document.createElement("p");
  descriptionText.classList.add("description");
  descriptionText.textContent =
    "At The Garden Table, we're more than just a restaurant; we're a community hub.  We strive to create a warm and inviting atmosphere where friends and families can gather to enjoy delicious food and connect with the source of their meals.  Our commitment to our garden, as we prioritize eco-friendly practices in all aspects of our operations.  Come experience the true taste of our region at The Garden Table, where every bite is a celebration of fresh, local flavors.";
  textContainer.appendChild(descriptionText);
  mainPage.appendChild(textContainer);
};

export const loadAboutPage = () => {
  mainPage.innerHTML = "";
  aboutSection();
};
