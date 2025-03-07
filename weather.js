const apikey = "fedd821463a7ab371cc525b2b555557a"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const ic = document.querySelector(".icon")
const error = document.querySelector(".error")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{

        var data = await response.json();
        console.log(data)
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
            
    if(data.weather[0].main == "Clouds"){
        ic.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        ic.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        ic.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        ic.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        ic.src = "mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        ic.src = "snow.png";
    }
    
    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
    
    }
    }

searchbtn.addEventListener("click", ()=> {
    checkWeather(searchbox.value)
})


