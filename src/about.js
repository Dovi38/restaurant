import "./styles.css";
import plate from "./assets/res6.jpg";
import { mainPage } from "./home";

const aboutSection = () => {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("image-text");
  const imgContainer = document.createElement("img");
  imgContainer.classList.add("imgRestaurant");
  imgContainer.src = plate;
  contentContainer.appendChild(imgContainer);
  const descriptionText = document.createElement("p");
  descriptionText.classList.add("description");
  descriptionText.textContent =
    "At The Marion restaurant, we're more than just a restaurant; we're a community hub.  We strive to create a warm and inviting atmosphere where friends and families can gather to enjoy delicious food and connect with the source of their meals.  Our commitment to our garden, as we prioritize eco-friendly practices in all aspects of our operations.  Come experience the true taste of our region at The Marion restaurant, where every bite is a celebration of fresh, local flavors.";
  contentContainer.appendChild(descriptionText);
  mainPage.appendChild(contentContainer);
};

export const loadAboutPage = () => {
  mainPage.innerHTML = "";
  aboutSection();
};
