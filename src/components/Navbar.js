import { createElement } from "../utils/dom.js";

import "./Navbar.css";

export function Navbar(onLogoClick, onMenuClick, onAboutClick, onEventClick) {
  const closeMenu = () => {
    navList.classList.remove("nav__list--open");
    btnToggle.classList.remove("nav__toggle--open");
  };

  const navItems = [
    { text: "Menu", onClick: onMenuClick },
    { text: "About", onClick: onAboutClick },
    { text: "Events", onClick: onEventClick },
  ];

  const navList = createElement(
    "ul",
    { classes: ["nav__list"] },
    navItems.map((item) =>
      createElement(
        "li",
        {},
        createElement(
          "button",
          {
            classes: ["nav__button"],
            onClick: () => {
              item.onClick();
              closeMenu();
            },
          },
          item.text,
        ),
      ),
    ),
  );

  const btnToggle = createElement(
    "button",
    {
      classes: ["nav__toggle"],
      onClick: (e) => {
        e.currentTarget.classList.toggle("nav__toggle--open");
        navList.classList.toggle("nav__list--open");
      },
    },
    createElement("span", { classes: ["nav__line"] }),
    createElement("span", { classes: ["nav__line"] }),
    createElement("span", { classes: ["nav__line"] }),
  );

  return createElement(
    "header",
    { classes: ["nav"] },
    createElement(
      "nav",
      { classes: ["container", "nav__inner"] },
      createElement(
        "button",
        {
          classes: ["nav__logo"],
          onClick: () => {
            onLogoClick();
            closeMenu();
          },
        },
        "The Divine",
      ),
      btnToggle,
      navList,
    ),
  );
}
