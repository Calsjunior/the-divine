import { Navbar } from "./components/Navbar.js";
import { Home } from "./pages/Home.js";

import "./styles/reset.css";
import "./styles/global.css";

const content = document.querySelector("#content");
const clearContent = () => {
  content.innerHTML = "";
};

const loadHome = () => {
  clearContent();
  content.append(Home());
};

const navComponent = Navbar(loadHome);
document.body.append(navComponent, content);

loadHome();
