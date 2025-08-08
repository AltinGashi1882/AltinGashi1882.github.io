const apiKey = "03f7860b678c3b369067db09e27c7363";
const weatherFooter = document.getElementById("weather-footer");

function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    fetch(url)
    .then(respone => respone.json())
    .then(data => {
        const location = data.name;
        const temp = data.main.temp.toFixed(1);
        const description = data.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        weatherFooter.innerHTML = `<img src="${icon}" alt="${description}"> ${location}: ${temp}°C`;
    })
    .catch(() => {
        weatherFooter.textContent = "Unable to load weather";
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => 
        {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeather(lat, lon);
        },
         () => {
            weatherFooter.textContent = "Location access denied";
         }
    );
    } else {
        weatherFooter.textContent = "Geolocatio not supported";
    }
}

getLocation();