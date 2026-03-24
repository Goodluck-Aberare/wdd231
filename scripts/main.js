document.addEventListener("DOMContentLoaded", () => {
  // Toggle nav menu for mobile
  const menuBtn = document.querySelector("#menuBtn");
  const nav = document.querySelector("#navMenu");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Weather API integration
  const weatherWidget = document.getElementById("weather-widget");
  if (weatherWidget) {
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const city = "Lagos"; // Change to your preferred city

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        if (data.list && data.list.length > 0) {
          const today = data.list[0];
          const forecast = data.list.slice(0, 3);

          weatherWidget.innerHTML = `
            <p><strong>Today:</strong> ${today.main.temp}°C, ${today.weather[0].description}</p>
            <ul>
              ${forecast.map(day => `
                <li>${new Date(day.dt_txt).toLocaleDateString()} - ${day.main.temp}°C, ${day.weather[0].main}</li>
              `).join("")}
            </ul>
          `;
        } else {
          weatherWidget.textContent = "Weather data unavailable.";
        }
      })
      .catch(() => {
        weatherWidget.textContent = "Unable to fetch weather data.";
      });
  }

  // Business Spotlight
  const spotlight = document.getElementById("spotlight-container");
  if (spotlight) {
    fetch("members.json")
      .then(res => res.json())
      .then(data => {
        if (data.members && data.members.length > 0) {
          const goldSilver = data.members.filter(m => m.membership === "Gold" || m.membership === "Silver");
          const randomMembers = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);

          spotlight.innerHTML = randomMembers.map(m => `
            <div class="member-card">
              <img src="${m.image}" alt="${m.name} Logo">
              <h3>${m.name}</h3>
              <p><a href="${m.website}" target="_blank">${m.website}</a></p>
            </div>
          `).join("");
        } else {
          spotlight.textContent = "No spotlight members available.";
        }
      })
      .catch(() => {
        spotlight.textContent = "Unable to load business spotlight.";
      });
  }
});
