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
    let currentPath = window.location.pathname.split('/').pop().toUpperCase();
    if (currentPath === "") currentPath = "index.html";
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute("href").toUpperCase() === currentPath) {   //checks to see what page it's on
            link.classList.add("active")
        }
    });



    // click the sign up to get to the newslwetter page
    const signupBtn = document.getElementById('signup');
    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            window.location.href = 'newsletter.html';
        });
    }
    
});