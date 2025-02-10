import "./styles.css";
import { mainPage } from "./home";
import { contactData } from "./data";

const createContacts = (infoData) => {
  const mainContainer = document.createElement("div");
  const modalContact = document.createElement("div");
  const createHeader = document.createElement("h1");

  mainContainer.classList.add("contact");
  modalContact.classList.add("modal-container");
  createHeader.classList.add("contactUs");

  createHeader.textContent = "Contact Us";
  modalContact.appendChild(createHeader);

  infoData.forEach((elem) => {
    const subHeader = document.createElement("h2");
    subHeader.textContent = elem.header;

    const textInfo = document.createElement("p");
    textInfo.textContent = elem.information;

    modalContact.appendChild(subHeader);
    modalContact.appendChild(textInfo);
  });

  mainContainer.appendChild(modalContact);
  mainPage.appendChild(mainContainer);

  return mainPage;
};

export const loadContactPage = () => {
  mainPage.innerHTML = "";
  createContacts(contactData);
};
