//------------------------ Join Page -----------------//


import { membership, url } from '../data/membership.js'
//console.log(temples)

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
        
        const photo = document.createElement('img')
        photo.src = x.path;
        photo.alt = `${x.level} Membership`;
        photo.addEventListener('click', () => showStuff(x));
        
        const title = document.createElement('h3');
        title.textContent = x.level;

        card.appendChild(photo);
        card.appendChild(title);

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
