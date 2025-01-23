import "./styles.css";

import { contents, loadContent, setImg } from "./content.js";

console.log(contents);
document.addEventListener("DOMContentLoaded", setImg);
window.addEventListener("load", loadContent);
