const apiKey = "03f7860b678c3b369067db09e27c7363";
const weatherFooter = document.getElementById("weather-footer");

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const temp = data.main.temp.toFixed(1);
            const description = data.weather[0].description;
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            weatherFooter.innerHTML = `<img src="${icon}" alt="${description}" style="width:40px; vertical-align:middle;"> ${location}: ${temp}°C`;
        })
        .catch(() => {
            weatherFooter.textContent = "Unable to load weather";
        });
}

// Call with a fixed city
getWeather("Prizren");