// hamburgermenu open/close
const menu = document.querySelector("nav ul");

const button = document.querySelector("nav button");

button.onclick = toggleButton;

function toggleButton() {
  button.classList.toggle("open");
  menu.classList.toggle("open");
}

// reload button toggle
// const button = document.querySelector("ul li");

// const button = document.querySelector("ul li button");

// button.onclick = toggleButton;

