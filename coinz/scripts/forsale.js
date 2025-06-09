const coinzurl = 'data/coinz.json';
const cardsCoinz = document.querySelector('#coinz-cards');

let coinzData = [];

async function getCoinzData() {
    if (!cardsCoinz) return;
    const response = await fetch(coinzurl); // request
    coinzData = await response.json(); // parse the JSON data
    displayCoinzSale(coinzData);
  }

const displayCoinzSale = (coinzs) => {
    cardsCoinz.innerHTML = '';

    coinzs.forEach((coinz) => {
        let card = document.createElement("section");
        card.classList.add("cards-container");
        let name = document.createElement("h2");
        name.textContent = coinz.name;
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        img.setAttribute('src', `images/${coinz.image_url}.webp`);
        img.setAttribute('alt', coinz.name);
        img.setAttribute('loading', 'lazy');
        let figcaption = document.createElement("figcaption");
        figcaption.textContent = coinz.image_figure;
        figure.appendChild(img);
        figure.appendChild(figcaption);

        let type = document.createElement("p");
        type.textContent = `Type: ${coinz.type}`;
        let year = document.createElement("p");
        year.textContent = `Year: ${coinz.year}`;
        let mint_mark = document.createElement("p");
        mint_mark.textContent = `Mint Mark: ${coinz.mint_mark}`;
        let price = document.createElement("p");
        price.textContent = `Price: $${parseFloat(coinz.price_usd).toFixed(2)}`;

        let description = document.createElement("p");
        description.textContent = coinz.description;
        
        let button = document.createElement("button");
        button.textContent = "Learn More";
        button.addEventListener('click', () => {
            document.getElementById("dialogTitle").textContent = coinz.name;
            const dialogContent = document.getElementById("dialogContent");
            dialogContent.innerHTML = `
            <p><strong>Description: </strong> ${coinz.description}</p>
            <p><strong>Type: </strong> ${coinz.type}</p>
            <p><strong>Year: </strong> ${coinz.year}</p>
            <p><strong>Mint Mark: </strong> ${coinz.mint_mark}</p>`;
            
            document.getElementById('learnMoreDialog').showModal();
        });


       
        name.style.gridArea = "name";
        figure.style.gridArea = 'image';
        description.style.gridArea = "description";
        mint_mark.style.gridArea = "mint_mark";
        type.style.gridArea = "type";
        price.style.gridArea = "price";
        year.style.gridArea = "year";
        button.style.gridArea = "button";
        

        card.appendChild(name);
        card.appendChild(figure);
        card.appendChild(price);
        card.appendChild(button);
        cardsCoinz.appendChild(card);

    });
};

getCoinzData();

document.getElementById('closeDialog').addEventListener('click', () => {
    document.getElementById('learnMoreDialog').close();
});