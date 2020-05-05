// Coordinates
let lat, longi;

// Obtaining user location using their public IP address
let loc = () => {
    let location_heading = document.getElementById("location");
    let apikey = "at_zAnO9POHbSZ0131bwimuwllUv9Mm4";

    fetch(`https://geo.ipify.org/api/v1?apiKey=${apikey}`)
    .then(response => response = response.json())
    .then(response => location_heading.innerHTML = `${response.location.region}, ${response.location.city}`)
    .catch(err => console.log(err));
}
// Update the DOM
let change = (t,w) => {
    temp_heading = document.getElementById("temp");
    type_heading = document.getElementById("type");
    t = t - 273.15;
    t = Math.round(t);
    temp_heading.innerHTML = t;
    type_heading.innerHTML = w[0].description;
}

// Retrieve user coordinates
let obtain = () => {
    navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        longi = position.coords.longitude;
        lat = lat.toFixed(4);
        longi = longi.toFixed(4);
        
        // Consume the API
        let apikey = "1b03107903aa41c9654fefe8a6775b7a";
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&appid=${apikey}`)
            .then(response => response = response.json())
            .then(data => change(data.main.temp, data.weather))
            .catch(err => console.log(err));
    });
}

loc();
obtain();