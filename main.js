const THEME_ICON = document.querySelector(".theme-icon");
const BODY = document.querySelector("body");

let light = true;

THEME_ICON.addEventListener("click", () => {
  light = !light;

  light ? setLightTheme() : setDarkTheme();
});

function setLightTheme() {
  THEME_ICON.src = "img/svg/theme-icon-dark2.png";
  BODY.classList = "light-theme";
}

function setDarkTheme() {
  THEME_ICON.src = "img/svg/theme-icon-light2.png";
  BODY.classList = "dark-theme";
}
