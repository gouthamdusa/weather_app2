const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

searchButton.addEventListener('click', fetchWeather);

function fetchWeather() {
  const apiKey = 'dca2e05cead0a0f83c37e7df5dd4da4a'; // Replace with your actual API key
  const cityName = cityInput.value;

  if (cityName === '') {
    alert('Please enter a city name.');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        weatherInfo.innerHTML = '<p>City not found.</p>';
      } else {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      weatherInfo.innerHTML = '<p>An error occurred. Please try again later.</p>';
    });
}
