import "./styles.css";

import { mainPage } from "./home";

const createContacts = () => {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("contact");
  const modalContact = document.createElement("div");
  modalContact.classList.add("modal-container");
  const createHeader = document.createElement("h1");
  createHeader.classList.add("contactUs");
  createHeader.textContent = "Contact Us";
  const subHeader = document.createElement("h3");
  subHeader.textContent = "Call us:";
  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "+4478 64837007, +4467 75758390";

  const subHeader2 = document.createElement("h3");
  subHeader2.textContent = "Location:";
  const location = document.createElement("p");
  location.textContent = " 56 Walnuts Street, London, SP3 9GH";

  const subHeader3 = document.createElement("h3");
  subHeader3.textContent = "Working-Hours:";
  const workingHours = document.createElement("p");
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
