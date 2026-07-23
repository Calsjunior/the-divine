import { Navbar } from "./components/Navbar.js";
import { About } from "./pages/About.js";
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
  content.append(Home(loadAbout, loadMenu));
};

const loadAbout = () => {
  clearContent();
  content.append(About());
};

const loadMenu = () => {
  clearContent();
  content.append(Menu());
};

const navComponent = Navbar(loadHome, loadMenu, loadAbout);
document.body.append(navComponent, content);

loadHome();
