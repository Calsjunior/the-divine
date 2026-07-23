import { SectionHeader } from "../components/SectionHeader.js";
import { menuData } from "../data/menuData.js";
import { createElement } from "../utils/dom.js";

import "./Menu.css";

export function Menu() {
  const menuCategories = menuData.map((section) =>
    createElement(
      "section",
      { classes: ["menu__category"] },
      createElement("h3", { classes: ["menu__title"] }, section.category),
      createElement(
        "ul",
        { classes: ["menu__list"] },
        ...section.items.map((item) =>
          createElement(
            "li",
            { classes: ["menu__item"] },
            createElement("h4", { classes: ["menu__name"] }, item.name),
            createElement("p", { classes: ["menu__desc"] }, item.desc),
          ),
        ),
      ),
    ),
  );

  return createElement(
    "main",
    { classes: ["menu"] },
    createElement(
      "div",
      { classes: ["container", "menu__inner"] },
      SectionHeader({
        eyebrow: "After Hours",
        title: "Uncompromising Classics",
      }),
      createElement("div", { classes: ["menu__grid"] }, ...menuCategories),
    ),
  );
}
