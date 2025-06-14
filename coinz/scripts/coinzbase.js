document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu");
    const navMenu = document.querySelector("#navMenu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            menuButton.classList.toggle("open");
            navMenu.classList.toggle("open");
        });
    }

    let currentPage = window.location.pathname.split("/").pop(); // get filename
    if (currentPage === "") currentPage = "index.html";
    currentPage = currentPage.toUpperCase();

    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        const linkHref = link.getAttribute("href").toUpperCase();
        if (linkHref === currentPage) {
            link.classList.add("active");
        }
    });


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



    /// for the number of visits
    const visitsDisplay = document.querySelector(".visits");    //   Initialize display element variable
    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 1589;   //  Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. 
    //      If the numVisits KEY is missing, then assign 0 to the numVisits variable.

    console.log(`Current visit count from localStorage: ${numVisits}`);

    // Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
    if (numVisits !== 0)
    {
        visitsDisplay.textContent = numVisits;
    }
    else
    {
        visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
    }


    numVisits++;   // increment the number of visits by one.


    localStorage.setItem("numVisits-ls", numVisits);    // store the new visit total into localStorage, key=numVisits-ls

    console.log(`Updated visit count: ${numVisits}`);
    
});