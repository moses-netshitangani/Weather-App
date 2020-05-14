// Coordinates
let lat, longi;

// DOM elements
let temp_heading = document.getElementById("temp");
let type_heading = document.getElementById("type");
let degree_display = document.getElementById("degrees");
let temperature = 0;

let loc = () => {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${longi}&zoom=18&addressdetails=1`)
    .then(data => data = data.json())
    .then(data => {
        location_heading = document.getElementById("location");
        suburb = data.address.suburb;
        city = data.address.city;
        town = data.address.town;
        second_value = ""
        if(city != undefined)
        {
            second_value = city;
        }else if(town != undefined)
        {
            second_value = town;
        }
        else{
            second_value = suburb;
        }
        state = data.address.state;
        location_heading.innerHTML = `${state}, ${second_value}`;
    })
    .catch(err => console.log(err));
}

// Update the DOM
let change = (t,w) => {
    temperature = t;
    temperature = Math.round(temperature - 273.15);
    temp_heading.innerHTML = temperature;
    type_heading.innerHTML = w[0].main;
}

// Switching between Fahrenheit and degrees Celsius
let degrees = () => {
    if(degree_display.innerHTML == "C"){
        temperature_f = temperature*(9/5)+32;
        temp_heading.innerHTML = temperature_f.toFixed(1);
        degree_display.innerHTML = "F";
    }
    else{
        temp_heading.innerHTML = temperature;
        degree_display.innerHTML = "C";
    }
}
// Retrieve user coordinates
let obtain = () => {
    navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        longi = position.coords.longitude;
        lat = lat.toFixed(4);
        longi = longi.toFixed(4);

        loc();
        
        // Consume the API
        let apikey = "1b03107903aa41c9654fefe8a6775b7a";
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&appid=${apikey}`)
            .then(response => response = response.json())
            .then(data => change(data.main.temp, data.weather))
            .catch(err => console.log(err));
    },
    err => {
        alert("Please refresh page and ensure that your browser has permission to access the device location.");
    },
    {   
        enableHighAccuracy: true,
    }
    );
}

obtain();