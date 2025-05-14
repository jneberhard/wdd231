document.getElementById("currentYear").innerHTML = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';



const cards = document.querySelector('#cards');

async function getCompanyData() {
    const response = await fetch(url); // request
    const data = await response.json(); // parse the JSON data
    //console.table(data.companiess);
    displayCompanies(data.companies);

  }
  
getCompanyData();
  

const displayCompanies = (companies) => {
    companies.forEach((company) => { 
        let card = document.createElement('section');
        let name = document.createElement("h2");
        let addresses = document.createElement('p');
        let phone_number = document.createElement('p');
        let website = document.createElement('');
        let image = document.createElement('img');


        companyName.textContent = `${company.name} `;
        addresses.textContent = `${company.addresses}`;
        phone_number.textContent = `${company.phoneNumber}`;
        website.setAttribute('src', company.imageurl);
        image.setAttribute('src', company.imageurl);
        image.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440')

        card.appendChild(name);
        card.appendChild(addresses);
        card.appendChild(phoneNumber);
        card.appendChild(website);
        card.appendChild(image);
        cards.appendChild(card);
    });
  }