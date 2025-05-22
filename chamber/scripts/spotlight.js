const highCompany = document.querySelector('#spotlight2');




async function getCompanySpotlight() {
    const response = await fetch(url); // request
    const data = await response.json(); // parse the JSON data
    const filtered = data.filter(company => company.membership_level === 1 || company.membership_level === 2); //filtering for level 1 and 2
    const shuffled = filtered.sort(() => Math.random() - 0.5); //shuffling the companies
    const spotlightCompanies = shuffled.slice(0, 3);  //chosing 3 companies

    displaySpotlight(spotlightCompanies);

  }

if (highCompany) {
    getCompanySpotlight();
  }


//getCompanySpotlight();


const displaySpotlight = (companies) => {
    highCompany.innerHTML = '';

    companies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement("h3");
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');


        name.textContent = company.name;
        address.textContent = company.addresses;
        phone.textContent = `Phone: ${company.phone_number}`;
        website.href = company.website;
        website.textContent = "Company Website";
        website.target = "_blank";

        image.setAttribute('src', `images/${company.image}`);
        image.setAttribute('alt', `Image for ${company.name}`);
        image.style.maxHeight = '100px';
        image.style.width = 'auto';

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        highCompany.appendChild(card);
    });
};