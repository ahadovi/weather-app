// UI Dom
class UI {
    constructor() {
        this.wCity = document.querySelector('#w-city');
        this.wDesc = document.querySelector('#w-desc');
        this.wTemp = document.querySelector('#w-temp');
        this.wIcon = document.querySelector('#img-icon');
        this.wHumidity = document.querySelector('.humidity');
        this.wPressure = document.querySelector('.pressure');
        this.wWind = document.querySelector('.wind');
        this.searchCity = document.querySelector('#searchCity');
    }

    domShow(weatherApp){
        this.wCity.textContent = weatherApp.name;
        this.wDesc.textContent = weatherApp.weather[0].description;
        this.wTemp.textContent = Math.floor(weatherApp.main.temp - 273.15) + ' °C';
        this.wIcon.src = `https://openweathermap.org/img/w/${weatherApp.weather[0].icon}.png`;
        this.wHumidity.textContent = `Humidity ${weatherApp.main.humidity}%`;
        this.wPressure.textContent = `Air Pressure ${weatherApp.main.pressure}°`;
        this.wWind.textContent = `Wind ${weatherApp.wind.speed} km/h`;
    }

    notFound() {
        this.wCity.textContent = '';
        this.wDesc.textContent = '';
        this.wTemp.textContent = '';
        this.wIcon.src = '';
        this.wHumidity.textContent = '';
        this.wPressure.textContent = '';
        this.wWind.textContent = '';
    }
}
