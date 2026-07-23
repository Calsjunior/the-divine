import { createElement } from "../utils/dom.js";

import "./Home.css";

export function Home(onPrimaryClick, onSecondaryClick) {
  return createElement(
    "section",
    { classes: ["hero"] },
    createElement(
      "div",
      { classes: ["container", "hero__inner"] },
      createElement(
        "span",
        { classes: ["hero__eyebrow"] },
        "EST. 1933 | SUPPER CLUB & LOUNGE",
      ),
      createElement(
        "h1",
        { classes: ["hero__title"] },
        "Leave the restless city behind.",
      ),
      createElement(
        "p",
        { classes: ["hero__description"] },
        "A classic supper club offering a quiet relieve from the noise outside. Settle into a booth at The Divine for exceptional cocktails, and a dining room built for long, uninterrupted evenings.",
      ),
      createElement(
        "div",
        { classes: ["hero__actions"] },
        createElement(
          "button",
          {
            classes: ["hero__btn", "hero__btn--primary"],
            onClick: onPrimaryClick,
          },
          "Reserve a Table",
        ),
        createElement(
          "button",
          {
            classes: ["hero__btn"],
            onClick: onSecondaryClick,
          },
          "View the Menu",
        ),
      ),
    ),
  );
}
