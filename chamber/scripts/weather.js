/*
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
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`    /*source: https://stackoverflow.com/questions/64489039/temperature-without-decimals-21-01-21 */
 /*   todayHigh.innerHTML = `High: ${Math.round(data.main.temp_max)}&deg;F`
    todayLow.innerHTML = `Low: ${Math.round(data.main.temp_min)}&deg;F`
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`

    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {    /*source:https://stackoverflow.com/questions/17913681/how-do-i-use-tolocaletimestring-without-displaying-seconds   times by 1000 to get milliseconds for correct timing after Jan 1 1970*/
 /*       hour: 'numeric',
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

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const mtOptions = { timeZone: 'America/Denver' };

    const todayDate = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(todayDate.getDate() + 1);

    const twoDay = new Date();
    twoDay.setDate(todayDate.getDate() + 2);

    const todayStr = todayDate.toLocaleDateString('en-CA', mtOptions);
    const tomorrowStr = tomorrow.toLocaleDateString('en-CA', mtOptions);
    const twoDayStr = twoDay.toLocaleDateString('en-CA', mtOptions);

    let maxToday = -Infinity;
    let maxTomorrow = -Infinity;
    let maxTwoDay = -Infinity;

    forecastList.forEach(item => {
        const itemDate = new Date(item.dt * 1000);
        const itemDateStr = itemDate.toLocaleDateString('en-CA', mtOptions);

        if (itemDateStr === todayStr) {
            maxToday = Math.max(maxToday, item.main.temp_max);
        }

        else if (itemDateStr === tomorrowStr)
        {
            maxTomorrow = Math.max(maxTomorrow, item.main.temp_max);
        }

        else if(itemDateStr === twoDayStr)
        {
            maxTwoDay = Math.max(maxTwoDay, item.main.temp_max);
        }

    });

    const day0 = weekday[todayDate.getDay()];
    const day1 = weekday[tomorrow.getDay()];
    const day2 = weekday[twoDay.getDay()];

    forecastHigh.innerHTML = `${day0}: ${Math.round(maxToday)}&deg;F`
    tomorrowHigh.innerHTML = `${day1}: ${Math.round(maxTomorrow)}&deg;F`
    twodayHigh.innerHTML = `${day2}: ${Math.round(maxTwoDay)}&deg;F`

}

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_date_weekday
*/

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

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let maxToday = -Infinity;
    let minToday = Infinity;
    let maxTomorrow = -Infinity;
    let maxTwoDay = -Infinity;

    for (let i = 0; i < forecastList.length; i++) {
        const tempMax = forecastList[i].main.temp_max;
        const tempMin = forecastList[i].main.temp_min;

        if (i < 8) {
            maxToday = Math.max(maxToday, tempMax);
            minToday = Math.min(minToday, tempMin);
        } else if (i < 16) {
            maxTomorrow = Math.max(maxTomorrow, tempMax);
        } else if (i < 24) {
            maxTwoDay = Math.max(maxTwoDay, tempMax);
        }
    }

    const today = new Date();
    const tomorrow = new Date();
    const twoDay = new Date();

    tomorrow.setDate(today.getDate() + 1);
    twoDay.setDate(today.getDate() + 2);

    const day0 = weekday[today.getDay()];
    const day1 = weekday[tomorrow.getDay()];
    const day2 = weekday[twoDay.getDay()];

    if (isFinite(maxToday)) {
        forecastHigh.innerHTML = `${day0}: ${Math.round(maxToday)}&deg;F`;
        todayHigh.innerHTML = `High: ${Math.round(maxToday)}&deg;F`;
        todayLow.innerHTML = `Low: ${Math.round(minToday)}&deg;F`;
    }
    if (isFinite(maxTomorrow)) {
        tomorrowHigh.innerHTML = `${day1}: ${Math.round(maxTomorrow)}&deg;F`;
    }
    if (isFinite(maxTwoDay)) {
        twodayHigh.innerHTML = `${day2}: ${Math.round(maxTwoDay)}&deg;F`;
    }
}