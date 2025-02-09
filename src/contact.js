import "./styles.css";

import { mainPage } from "./home";

const createContacts = () => {
  const mainContainer = document.createElement("div");
  const modalContact = document.createElement("div");
  const createHeader = document.createElement("h1");
  const subHeader = document.createElement("h3");
  const subHeader2 = document.createElement("h3");
  const subHeader3 = document.createElement("h3");
  const phoneNumber = document.createElement("p");
  const location = document.createElement("p");
  const workingHours = document.createElement("p");

  mainContainer.classList.add("contact");
  modalContact.classList.add("modal-container");
  createHeader.classList.add("contactUs");

  createHeader.textContent = "Contact Us";
  subHeader.textContent = "Call us:";
  phoneNumber.textContent = "+4478 64837007, +4467 75758390";
  subHeader2.textContent = "Location:";
  location.textContent = " 56 Walnuts Street, London, SP3 9GH";
  subHeader3.textContent = "Working-Hours:";
  workingHours.textContent = "Mon-Sun 10am-9pm";

  modalContact.appendChild(createHeader);
  modalContact.appendChild(subHeader);
  modalContact.appendChild(phoneNumber);

  modalContact.appendChild(subHeader2);
  modalContact.appendChild(location);

  modalContact.appendChild(subHeader3);
  modalContact.appendChild(workingHours);

  mainContainer.appendChild(modalContact);
  mainPage.appendChild(mainContainer);
};

export const loadContactPage = () => {
  mainPage.innerHTML = "";
  createContacts();
};
