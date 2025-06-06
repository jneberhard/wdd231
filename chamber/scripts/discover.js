document.getElementById("currentYear").innerHTML = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

const discoverurl = 'data/discover.json';
const cardsDiscover = document.querySelector('#discover-cards');

let discoverData = [];

async function getDiscoverData() {
    if (!cardsDiscover) return;
    const response = await fetch(discoverurl); // request
    discoverData = await response.json(); // parse the JSON data
    displayDiscoverCompanies(discoverData);
  }

const displayDiscoverCompanies = (discoveries) => {
    cardsDiscover.innerHTML = '';

    discoveries.forEach((discovery) => {
        let card = document.createElement("section");
        card.classList.add("cards-container");
        let name = document.createElement("h2");
        let figure = document.createElement("figure");
        let address = document.createElement("address");
        let img = document.createElement("img");
        let figcaption = document.createElement("figcaption");
        let description = document.createElement("p");

        let button = document.createElement("button");


        name.textContent = discovery.name;
        address.textContent = discovery.address;
        description.textContent = discovery.description;

        img.setAttribute('src', `images/${discovery.image}`);
        img.setAttribute('alt', discovery.image_figure);
        figcaption.textContent = discovery.image_figure;
        button.textContent = "Learn More";

        name.style.gridArea = "name";
        figure.style.gridArea = 'image';
        description.style.gridArea = "description";
        address.style.gridArea = "address";

        button.addEventListener('click', () => {
            document.getElementById("dialogTitle").textContent = discovery.name;
            document.getElementById("dialogContent").textContent = discovery.long_description;
            document.getElementById('learnMoreDialog').showModal();

        })

        figure.appendChild(img);
        figure.appendChild(figcaption);
        card.appendChild(name);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        cardsDiscover.appendChild(card);

    });
};

getDiscoverData();

document.getElementById('closeDialog').addEventListener('click', () => {
    document.getElementById('learnMoreDialog').close();
});

window.addEventListener("DOMContentLoaded", () => {
    const popup = document.querySelector(".popup");
    const closeBtn = document.querySelector("#popupClose");

    const visitMessage = document.querySelector("#daysVisited");
    const lastVisit = localStorage.getItem("lastVisit")
    const now = Date.now();  //gets today's date

    let message = "";  // holder for the message

    if (!lastVisit) {     //this is for the first viit
        message = "Let us know if you have any questions.";
    }
    else {
        const timeDifference = now - parseInt(lastVisit);  //takes the last visit and compares it to when you visited --- taken from localStorage
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            message = "Back so soon! Awesome! Let us know if you need anything.";
        }
        else if (daysDifference === 1) {
            message = "You last visited one day ago.";
        }
        else {
            message = `You last visited ${daysDifference} days ago.`;
        }
    }
    popup.style.display = "block";
    visitMessage.textContent = message;

    localStorage.setItem("lastVisit", now);  //saving the current visit

    
    closeBtn.addEventListener("click", () => {   // this is to close the window
        popup.style.display = "none";
    });
});

