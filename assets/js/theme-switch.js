//  ------------------------------------------------------------
//  Theme switch
//  Adapted from https://gui-challenges.web.app/theme-switch/dist/
//  IMPORTANT: Load script in <head> prior to CSS for no FOUC.
//  ------------------------------------------------------------
const storageKey = "theme-preference",

onClick = () => {
  (theme.value = "light" === theme.value ? "dark" : "light"), 
  setPreference();
},

getColorPreference = () => (localStorage.getItem(storageKey) 
  ? localStorage.getItem(storageKey) 
  : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),

setPreference = () => {
  localStorage.setItem(storageKey, theme.value),
  reflectPreference();
},

reflectPreference = () => {
  document.firstElementChild.style.setProperty("color-scheme", theme.value);
},

theme = {
  value: getColorPreference()
};

reflectPreference(),

(window.onload = () => {
  reflectPreference(), 
  document.querySelector("#themes").addEventListener("click", onClick);
}),

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({matches: e}) => {
  (theme.value = e ? "dark" : "light"),
  setPreference();
});
