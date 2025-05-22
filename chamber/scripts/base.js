document.getElementById("currentYear").innerHTML = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;




const url = 'data/members.json';


//--------------------for directory page --------------------//
const cards = document.querySelector('#cards');
const cardView = document.getElementById("cardView");
const listView = document.getElementById('listView');


let companyData = [];

async function getCompanyData() {
    if (!cards) return;
    const response = await fetch(url); // request
    const data = await response.json(); // parse the JSON data
    companyData = data;
    displayCompanies(companyData);

  }

const displayCompanies = (companies) => {
    cards.innerHTML = '';

    companies.forEach((company) => { 
        let card = document.createElement('section');
        let name = document.createElement("h2");
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');
        let genre = document.createElement('p');
        let description = document.createElement('p');


        name.textContent = company.name;
        address.textContent = company.addresses;
        phone.textContent = `Phone: ${company.phone_number}`;
        website.href = company.website;
        website.textContent = "Company Website";
        website.target = "_blank";
        genre.textContent = company.business_type;
        description.textContent = company.description;

        image.setAttribute('src', `images/${company.image}`);
        image.setAttribute('alt', `Image for ${company.name}`);
        image.style.maxHeight = '200px';
        image.style.width = 'auto';

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        if (!cards.classList.contains("listView")) {
            card.appendChild(image);
            card.appendChild(genre);
            card.appendChild(description);
        }

        cards.appendChild(card);
    });
};

getCompanyData();

if (cardView && listView) {
    cardView.addEventListener('click', () => {
        cards.classList.remove('listView');
        cardView.classList.add('active');
        listView.classList.remove('active')
        displayCompanies(companyData);
    });

    listView.addEventListener('click', () => {
        cards.classList.add('listView');
        listView.classList.add('active');
        cardView.classList.remove('active')
        displayCompanies(companyData);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split('/').pop().toUpperCase();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute("href").toUpperCase === currentPath) {   //checks to see what page it's on
            link.classList.add("active")
        }
    });
});