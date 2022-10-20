const API_KEY = "9c35f1b6ac1ab44795ddc13b082a0ed9";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            const weatherSpan = document.querySelector("#weather span:first-child");
            const citySpan = document.querySelector("#weather span:last-child");
            weatherSpan.innerText = `${data.weather[0].main},`;
            citySpan.innerText = data.name;
        }
    )
    ;
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);