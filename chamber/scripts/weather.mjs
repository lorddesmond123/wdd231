
const API_KEY = "5c33d9844b43ae12125ef13519092764";

const CITY = "Jos";
const COUNTRY = "NG";

const currentWeather = document.querySelector("#current-weather");
const weatherForecast = document.querySelector("#weather-forecast");

// ======================================
// CURRENT WEATHER
// ======================================

export async function getWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to load current weather.");
        }

        const data = await response.json();

        currentWeather.innerHTML = `
            <div class="current-weather-info">
                <img
                    src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
                    alt="${data.weather[0].description}"
                    width="80"
                    height="80"
                >

                <div>
                    <p class="temperature">
                        ${Math.round(data.main.temp)}&deg;C
                    </p>
                    <p>${data.weather[0].description}</p>
                    <p>Feels like ${Math.round(data.main.feels_like)}&deg;C</p>
                </div>
            </div>
        `;

        await getForecast();

    } catch (error) {
        console.error("Weather error:", error);

        currentWeather.textContent =
            "Current weather is temporarily unavailable.";

        weatherForecast.textContent =
            "Weather forecast is unavailable.";
    }
}

// ======================================
// THREE-DAY FORECAST
// ======================================

async function getForecast() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY},${COUNTRY}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to load forecast.");
        }

        const data = await response.json();

        const dailyForecasts = {};

        data.list.forEach((item) => {
            const date = new Date(item.dt * 1000);

            const dateKey = date.toLocaleDateString("en-CA", {
                timeZone: "Africa/Lagos"
            });

            const hour = Number(
                new Intl.DateTimeFormat("en-GB", {
                    hour: "2-digit",
                    hourCycle: "h23",
                    timeZone: "Africa/Lagos"
                }).format(date)
            );

            // Choose the forecast closest to noon.
            if (
                !dailyForecasts[dateKey] ||
                Math.abs(hour - 12) <
                Math.abs(dailyForecasts[dateKey].hour - 12)
            ) {
                dailyForecasts[dateKey] = {
                    hour,
                    temperature: item.main.temp,
                    description: item.weather[0].description,
                    icon: item.weather[0].icon
                };
            }
        });

        const nextThreeDays = Object.entries(dailyForecasts).slice(1, 4);

        if (nextThreeDays.length !== 3) {
            throw new Error("Three forecast days are not available.");
        }

        weatherForecast.innerHTML = "";

        nextThreeDays.forEach(([date, forecast]) => {
            const day = new Date(`${date}T12:00:00+01:00`);

            const dayName = day.toLocaleDateString("en-US", {
                weekday: "long",
                timeZone: "Africa/Lagos"
            });

            const card = document.createElement("article");
            card.classList.add("forecast-card");

            card.innerHTML = `
                <h3>${dayName}</h3>

                <img
                    src="https://openweathermap.org/img/wn/${forecast.icon}.png"
                    alt="${forecast.description}"
                    width="50"
                    height="50"
                >

                <p>${Math.round(forecast.temperature)}&deg;C</p>
                <p>${forecast.description}</p>
            `;

            weatherForecast.appendChild(card);
        });

    } catch (error) {
        console.error("Forecast error:", error);

        weatherForecast.textContent =
            "Three-day forecast is currently unavailable.";
    }
}
