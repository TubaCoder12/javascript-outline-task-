const key_API = "4545885c6857b245bed5582b0212cd6d";

function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key_API}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.cod !== 200) {
        alert(data.message);
        return;
      }

      document.getElementById("city_name").textContent = data.name;
      document.getElementById("temp").textContent = `${Math.round(
        data.main.temp
      )}°C`;
      document.getElementById("desc").textContent = data.weather[0].description;

      // Weather icon
      const iconCode = data.weather[0].icon;
      document.getElementById(
        "icon"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="icon">`;
    })
    .catch((err) => {
      console.error(err);
      alert("Error fetching weather data");
    });
}
