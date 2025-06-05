//------------------------ Join Page -----------------//


import {membership} from '../data/membership.js'


const showHere = document.querySelector("#showHere")
const mydialog = document.querySelector("#mydialog")
const mytitle = document.querySelector("#mydialog h2")
const myclose = document.querySelector("#mydialog button")
const mybenefits = document.querySelector("#benefits")
const myprice = document.querySelector("#price")

myclose.addEventListener("click", () => mydialog.close())

//----------------loop through the array of json items---------------
function displayItems(data) {
    //console.log(data)
    data.forEach(x => {
        console.log(x)
        const card = document.createElement('div');
        card.classList.add('card');
        card.addEventListener('click', () => showStuff(x));
        
        const photo = document.createElement('img')
        photo.src = x.path;
        photo.alt = `${x.level} Membership`;
        
        
        const title = document.createElement('h3');
        title.textContent = x.level + x.details;

        const starContainer = document.createElement("div");
        starContainer.classList.add("star-container");

        for (let i = 0; i < x.stars; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
            star.textContent = "⭐";
            starContainer.appendChild(star);
        }

        card.appendChild(photo);
        card.appendChild(title);
        card.appendChild(starContainer);
        showHere.appendChild(card);

    });  // end loop
}   //end function



function showStuff(x) {
    mytitle.innerHTML = x.level
    mybenefits.innerHTML = `Benefits: ${x.benefits}`
    myprice.innerHTML = `Price: ${x.price}`
    mydialog.showModal()

}

///start displaying allitems in the json file
displayItems(membership)



document.addEventListener('DOMContentLoaded', () => {
const timestamp = new Date().toISOString();
document.getElementById('timestamp').value = timestamp;
});
