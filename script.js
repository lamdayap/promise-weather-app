const button = document.getElementById("searchButton")
const temp = document.getElementById("temp");
const city = document.getElementById("city")
const key = "1bcf4e4f9e57cdb673a9e60e43a54268";

async function getTemp() {
    try {
        const search = document.getElementById("search");
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search.value},au&units=metric&appid=${key}`, {mode: 'cors'})
        const currentTemp = await response.json();
        console.log(currentTemp)
        temp.innerHTML = currentTemp.main.temp;
        city.innerHTML = currentTemp.name    
    }
    catch (err) {
        console.log(err)
    };
};

button.addEventListener('click', () => {
    getTemp();
});