import { SectionHeader } from "../components/SectionHeader.js";
import { createElement } from "../utils/dom.js";

import "./About.css";

export function About() {
  return createElement(
    "main",
    { classes: ["about"] },
    createElement(
      "div",
      { classes: ["container", "about__inner"] },
      SectionHeader({
        eyebrow: "EST. 1933",
        title: "Some things shouldn't change.",
      }),
      createElement(
        "div",
        { classes: ["about__content"] },
        createElement(
          "p",
          { classes: ["about__text"] },
          "Opened in the winter of 1933, The Divine was built on a simple premise: a good drink, a great cut of meat, and absolute privacy.",
        ),
        createElement(
          "p",
          { classes: ["about__text"] },
          "We aren't interested in culinary trends or chasing the modern pace of the city. Behind our doors, time slows. The dining room is deliberately kept dark, the booths are built for long evenings.",
        ),
        createElement(
          "div",
          { classes: ["about__rules"] },
          createElement("h3", { classes: ["about__title"] }, "House Rules"),
          createElement(
            "p",
            { classes: ["about__text", "about__text--secondary"] },
            "Smart attire is requested. Jackets are preferred for gentlemen; athletic wear is politely declined. We ask that guests keep their voices low and take phone calls outside. The dining room is for those who are present.",
          ),
        ),
      ),
    ),
  );
}
