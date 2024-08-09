const links = document.querySelectorAll("nav li");

let icons = document.getElementById('icons');

console.log(icons);

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});