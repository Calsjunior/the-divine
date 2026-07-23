import { Navbar } from "./components/Navbar.js";
import { Home } from "./pages/Home.js";
import { Menu } from "./pages/Menu.js";

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

const loadMenu = () => {
  clearContent();
  content.append(Menu());
};

const navComponent = Navbar(loadHome, loadMenu);
document.body.append(navComponent, content);

loadHome();
