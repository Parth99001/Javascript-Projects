const apiKey = "3c48235d6407bd6b134253fa36098b90"; 
const getWeatherButton = document.getElementById('getWeather');
const weatherResult = document.getElementById('weatherResult');

getWeatherButton.addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeather(city);
    } else {
        weatherResult.innerHTML = '<p class="error">Please enter a city name.</p>';
    }
});

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherResult.innerHTML = `<p class="error">${error.message}</p>`;
    }
}

function displayWeather(data) {
    const temp = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const cityName = data.name;

    weatherResult.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">Weather in ${cityName}</h2>
                <p class="card-text">Temperature: ${temp}°C</p>
                <p class="card-text">Condition: ${weatherDescription}</p>
            </div>
        </div>
    `;
}

