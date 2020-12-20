// Init UI
const ui = new UI;

// Fetch Location (ipstack.com)
async function getLocation(){
    const location = await fetch('http://api.ipstack.com/43.245.123.190?access_key=466ca8b396e60680f0ebaefe09000aaf');
    const data = await location.json();

    return data;
}


getLocation().then( data => {
    console.log(data);
    // Init Weather
    const weather = new Weather(data.continent_name);
    weather.getWeather().then( data => {
        console.log(data);
        ui.domShow(data);
    }).catch( err => {
        console.log(err);
        ui.notFound();
    });
});

document.querySelector('#change-location').addEventListener('click', ()=> {
    const cityValue = this.searchCity.value;
    if (cityValue === '') {
        alert('Please Enter Correct Value');
    } else {
        // Init Weather
        const weather = new Weather(cityValue);
        weather.getWeather().then( data => {
            ui.domShow(data);
        }).catch( err => {
            console.log(err);
            ui.notFound();
        });
    }
});
