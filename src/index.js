import { Navbar } from "./components/Navbar.js";
import { About } from "./pages/About.js";
import { Event } from "./pages/Event.js";
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

const loadEvent = () => {
  clearContent();
  content.append(Event());
};

const navComponent = Navbar(loadHome, loadMenu, loadAbout, loadEvent);
document.body.append(navComponent, content);

loadHome();
