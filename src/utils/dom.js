// https://kyleshevlin.com/how-to-write-your-own-javascript-dom-element-factory/
export const createElement = (type, props = {}, ...children) => {
  const element = document.createElement(type);

  for (const key in props) {
    if (key.startsWith("on")) {
      element.addEventListener(key.slice(2).toLowerCase(), props[key]);
    } else if (key === "classes") {
      element.classList.add(...props[key]);
    } else {
      element.setAttribute(key, props[key]);
    }
  }

  children.flat().forEach((child) => {
    if (child) {
      element.appendChild(
        typeof child === "string" ? document.createTextNode(child) : child,
      );
    }
  });

  return element;
};
