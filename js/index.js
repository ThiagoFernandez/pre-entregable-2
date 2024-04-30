const darkTheme = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "dark");
  document.querySelector("#dl-icon").setAttribute("class", "fa fa-sun");
}

const lightTheme = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "light");
  document.querySelector("#dl-icon").setAttribute("class", "fa fa-moon");
}

const changeTheme = () => {
  document.querySelector("body").getAttribute("data-bs-theme") === "light"?
  darkTheme() : lightTheme();
}

//la segunda no se usa
const darkThemeC = () => {
  document.querySelector("header").setAttribute("data-bs-theme", "dark");
  document.querySelector("#dl-icon").setAttribute("class", "fa fa-sun");
}

const lightThemeC = () => {
  document.querySelector("header").setAttribute("data-bs-theme", "light");
  document.querySelector("#dl-icon").setAttribute("class", "fa fa-moon");
}

const changeThemeC = () => {
  document.querySelector("header").getAttribute("data-bs-theme") === "light" ?
    darkThemeC() : lightThemeC();
}
