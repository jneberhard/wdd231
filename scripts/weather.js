const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDiscr = document.querySelector("figcaption");

const myKey = "fd4868ea58271cf173b7fe487331db95"
const myLat = "49.77"
const myLong = "6.64"


const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`


async function apiFetch() {
    try {
        const response = await fetch(url); // request
        if (response.ok) {
            const data = await response.json(); // parse the JSON data
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
        
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc)
    captionDiscr.textContent = data.weather[0].description;
}

