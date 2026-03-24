document.addEventListener("DOMContentLoaded", () => {
  // Toggle nav menu
  const menuBtn = document.querySelector("#menuBtn");
  const nav = document.querySelector("#navMenu");
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Weather API
  const weatherWidget = document.getElementById("weather-widget");
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=Lagos&units=metric&appid=YOUR_API_KEY")
    .then(res => res.json())
    .then(data => {
      const today = data.list[0];
      const forecast = data.list.slice(0, 3);
      weatherWidget.innerHTML = `
        <p>${today.main.temp}°C, ${today.weather[0].description}</p>
        <ul>
          ${forecast.map(day => `<li>${day.main.temp}°C - ${day.weather[0].main}</li>`).join("")}
        </ul>
      `;
    })
    .catch(() => {
      weatherWidget.textContent = "Weather data unavailable.";
    });

  // Business Spotlight
  fetch("members.json")
    .then(res => res.json())
    .then(data => {
      const goldSilver = data.members.filter(m => m.membership === "Gold" || m.membership === "Silver");
      const randomMembers = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);
      const spotlight = document.getElementById("spotlight-container");
      spotlight.innerHTML = randomMembers.map(m => `
        <div class="member-card">
          <img src="images/${m.name.toLowerCase().replace(/\s/g,"")}.png" alt="${m.name} Logo">
          <h3>${m.name}</h3>
          <p><a href="${m.website}" target="_blank">${m.website}</a></p>
        </div>
      `).join("");
    });
});