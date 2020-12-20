// Weather Fetch From API
class Weather {
    constructor(city) {
        this.location = city;
        this.appId = '788964a6a4e16f9a3a36c6c84bf8b491';
    }
    // Fetch Api from Weatherappmap
    async getWeather(){
        const resData = await (await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.location}&APPID=${this.appId}`)).json();
        return resData;
    }
}
