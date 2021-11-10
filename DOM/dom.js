// Check if an element is focused
const hasFocus = (ele) => ele === document.activeElement;

// Get all siblings of an element
const siblings = (ele) =>
  [].slice.call(ele.parentNode.children).filter((child) => child !== ele);

// Get selected text
const getSelectedText = () => window.getSelection().toString();

// Clear all cookies
const clearCookies = () =>
  document.cookie
    .split(";")
    .forEach(
      (c) =>
        (document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`))
    );

// Convert cookie to object
const cookies = document.cookie
  .split(";")
  .map((item) => item.split("="))
  .reduce((acc, [k, v]) => (acc[k.trim().replace('"', "")] = v) && acc, {});
