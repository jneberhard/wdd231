import { displaySpotlight } from './spotlightView.js';

const spotlightContainer = document.querySelector('#spotlight2');
const coinzurl = 'data/coinz.json';

async function getCoinSpotlight() {
  try {
    const response = await fetch(coinzurl); // request
    const data = await response.json(); // parse the JSON data
    const shuffled = data.sort(() => Math.random() - 0.5); //shuffling the coins
    const spotlightCoins = shuffled.slice(0, 4);  //chosing 4 coins
    displaySpotlight(spotlightCoins, spotlightContainer);
  }
  catch (error) {
console.error("Could not fetch spotlight coins:", error);
}

}

getCoinSpotlight();

