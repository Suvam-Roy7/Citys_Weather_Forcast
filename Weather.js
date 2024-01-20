async function fetchData(cityname) {

    let p = await fetch(`https://goweather.herokuapp.com/weather/${cityname}`)

    let data = await p.json()
    console.log(data)
    
    let CityName = document.getElementById("CITYname")
    CityName.innerHTML = cityname
    
    let weather = document.getElementById("displayWeather")
    weather.innerHTML = `Temperature : ${JSON.stringify(data.temperature)}<br>Description : ${JSON.stringify(data.description)}<br>Wind Speed : ${JSON.stringify(data.wind)}`

    let inputString = data.temperature;
    let degree = parseInt(inputString.match(/[+-]?\d+/)[0]);
    
    let card = document.getElementById("Card2")
    let descWeather = document.getElementById("displayWeather")
    let heading = document.getElementById("CITYname")

    if(degree >= 25){
        card.style.background = "#fb8500";
        descWeather.style.color = "white"
        heading.style.color = "white"
    }
    else if(degree < 25 && degree >= 10){
        card.style.background = "#ade8f4";
        descWeather.style.color = "white"
        heading.style.color = "white"
    }
    else if(degree < 10 && degree >= 0){
        card.style.background = "#00b4d8";
        descWeather.style.color = "white"
        heading.style.color = "white"
    }
    else if(degree < 0 ){
        card.style.background = "#0077b6";
        descWeather.style.color = "white"
        heading.style.color = "white"
    }
}

function getCity(){

    let getcity = document.getElementById("CityID")

    let cityname = getcity.value;
    
    fetchData(cityname)
    
}

setInterval(() => {
    let d = new Date() ;

    let time = `${d.getHours()} : ${d.getMinutes()}`

    document.getElementById("clock").innerHTML = time
}, 1000);

