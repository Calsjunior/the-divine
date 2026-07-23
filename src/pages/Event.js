import { SectionHeader } from "../components/SectionHeader.js";
import { createElement } from "../utils/dom.js";

import "./Event.css";

export function Event() {
  return createElement(
    "main",
    { classes: ["event"] },
    createElement(
      "div",
      { classes: ["container", "event__inner"] },
      SectionHeader({
        eyebrow: "The place that never sleeps.",
        title:
          "Discover new live performances, and many exclusive experiences.",
      }),
      createElement(
        "div",
        { classes: ["event__content"] },
        createElement(
          "p",
          { classes: ["event__text"] },
          "No events this third weekend of July 2026 due to unfortunate circumstances.",
        ),
      ),
    ),
  );
}
