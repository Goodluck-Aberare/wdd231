document.addEventListener("DOMContentLoaded", () => {
  // Weather widget placeholder
  const weather = document.getElementById("weather-widget");
  if (weather) {
    weather.textContent = "75°F, Partly Cloudy (High: 85°, Low: 52°)";
  }

  // Business spotlight placeholder
  const spotlight = document.getElementById("spotlight-container");
  if (spotlight) {
    spotlight.innerHTML = `
      <section>
        <h3>Featured Partner</h3>
        <p>True Light Analytics collaborates with leading organizations worldwide.</p>
      </section>
    `;
  }
});