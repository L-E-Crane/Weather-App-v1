let now = new Date();
function formatDateTime() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let weekday = days[now.getDay()];
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dateTimeFormat = `${weekday} ${hour}:${minutes}`;
  return dateTimeFormat;
}

let dateTimeDisplay = document.querySelector("#date-time");
dateTimeDisplay.innerHTML = formatDateTime();

function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;
  let windspeed = response.data.wind.speed;
  let searchedCity = response.data.name;
  let cityHeading = document.querySelector("#city-header");
  cityHeading.innerHTML = searchedCity;
  let cityTemp = document.querySelector("#big-temp");
  cityTemp.innerHTML = `${temp}°C`;
  let weatherDescription = document.querySelector("#big-descrip");
  weatherDescription.innerHTML = description;
  let thewindspeed = document.querySelector("#windspeed");
  thewindspeed.innerHTML = `windspeed: ${windspeed} mph`;
}

function citySearch(city) {
  let apiKey = `bb0df6985c2eab6a171d64a6bacbb4e1`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
}

function submitSearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city");
  citySearch(cityInput.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", submitSearch);
