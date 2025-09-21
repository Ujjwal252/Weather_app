async function checkWeather(city){
    try {
        const response = await fetch(`http://localhost:3000/weather?city=${city}`);
        if(!response.ok) throw new Error("City not found");
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        const weatherIcon = document.querySelector(".weather-icon");
        const main = data.weather[0].main;

        if(main === "Clouds") weatherIcon.src = "images/cloud.webp";
        else if(main === "Clear") weatherIcon.src = "images/clear.webp";
        else if(main === "Drizzle") weatherIcon.src = "images/drizzle.webp";
        else if(main === "Mist") weatherIcon.src = "images/mist.webp";
        else if(main === "Rain") weatherIcon.src = "images/rain.webp";

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    } catch(err) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}