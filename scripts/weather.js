// Get temp h1
let change = t => {
    temp_heading = document.getElementById("temp");
    t = t - 273.15;
    t = Math.round(t);
    temp_heading.innerHTML = t;
}

// Coordinates
let lat, longi;

// Retrieve user coordinates
let obtain = () => {
    navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        longi = position.coords.longitude;
        lat = Math.round(lat);
        longi = Math.round(longi);
        
        // Consume the API
        let apikey = "1b03107903aa41c9654fefe8a6775b7a";
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&appid=${apikey}`)
            .then(response => response = response.json())
            // .then(data => change(data.main.temp))
            .then(data => console.log(data))
            .catch(err => console.log(err));
    });
}

obtain();