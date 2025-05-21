const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDiscr = document.querySelector("figcaption");
const todayHigh = document.querySelector("#today-high");
const todayLow = document.querySelector("#today-low");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const forecastHigh = document.querySelector("#forecast-high");
const tomorrowHigh = document.querySelector("#tomorrow-high");
const twodayHigh = document.querySelector("#twoday-high");




const myKey = "fd4868ea58271cf173b7fe487331db95"
const myLat = "40.24"
const myLong = "-111.71"


const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`


async function apiFetch() {
    try {
        const response = await fetch(urlWeather); // request
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
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDiscr.textContent = data.weather[0].description;
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`   /*source: https://stackoverflow.com/questions/64489039/temperature-without-decimals-21-01-21 */
    todayHigh.innerHTML = `High: ${Math.round(data.main.temp_max)}&deg;F`
    todayLow.innerHTML = `Low: ${Math.round(data.main.temp_min)}&deg;F`
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`

    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {    /*source:https://stackoverflow.com/questions/17913681/how-do-i-use-tolocaletimestring-without-displaying-seconds   times by 1000 to get milliseconds for correct timing after Jan 1 1970*/
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    sunrise.innerHTML = `Sunrise: ${sunriseTime}`
    sunset.innerHTML = `Sunset: ${sunsetTime}`

    forecastHigh.innerHTML = `Today: ${Math.round(data.main.temp_max)}&deg;F`

    
}

const urlFuture = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`


async function apiFetchFuture() {
    try {
        const response = await fetch(urlFuture); // request
        if (response.ok) {
            const data = await response.json(); // parse the JSON data
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
        
    } catch (error) {
        console.log(error);
    }
}
apiFetchFuture();

function displayForecast(data) {
    const forecastList = data.list;

    const forecastTomorrow = forecastList[8];
    const forecastTwoday = forecastList[16];

    tomorrowHigh.innerHTML = `Tomorrow: ${Math.round(forecastTomorrow.main.temp_max)}&deg;F`
    twodayHigh.innerHTML =`2 day: ${Math.round(forecastTwoday.main.temp_max)}&deg;F`
}