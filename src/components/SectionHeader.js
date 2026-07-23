import { createElement } from "../utils/dom.js";

import "./SectionHeader.css";

export function SectionHeader({ eyebrow, title }) {
  return createElement(
    "FRAG",
    null,
    createElement("span", { classes: ["section__eyebrow"] }, eyebrow),
    createElement("h2", { classes: ["section__title"] }, title),
  );
}
