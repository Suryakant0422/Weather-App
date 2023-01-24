const input = document.getElementById("input")
const submitButton= document.getElementById("submitButton");

submitButton.addEventListener("click", async () => {

    const location = input.value
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`);
    // console.log(response);
    const data = await response.json()
    // console.log(data);
    const cardContainer = document.getElementById("cardContainer");
    cardContainer. innerHTML =`
          <h1 id="dynamicHeading"> Weather of <span class="color"> ${location}<span></h1>
          <div class="cardbody"
                 <div id="conditions">Sky Conditions: <span class="colorchange"> ${data.weather[0].description}</span>
                <div id="windSpeed">Temperature: <span class="colorchange">${data.main.temp} C</span>
                 <div id="temprature">Wind Speed: <span class="colorchange">${data.wind.speed} km/h</span>
          </div>

    `

})

