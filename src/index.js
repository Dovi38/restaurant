import "./style.css";

import { contents, loadContent, setImg } from "./content.js";

console.log(contents);

window.addEventListener("load", loadContent);
setImg();
