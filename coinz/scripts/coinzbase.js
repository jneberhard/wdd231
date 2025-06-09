document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu");
    const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navMenu.classList.toggle("open");
  });

  const currentPage = window.location.pathname.split("/").pop(); // get filename
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const currentPage = location.pathname.split("/").pop();
    document.querySelectorAll(".menuLinks a").forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
});