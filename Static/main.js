// SELECTING ELEMENTS
const searchInput = document.querySelector("#searchInput"); 
const cityNameel = document.querySelector(".cityName"); 
const degreeel = document.querySelector(".degree"); 
const descel = document.querySelector(".desc"); 

searchInput.addEventListener("keydown", findWeatherInfo); 

const weatherAPI = new WeatherAPI(); 

function findWeatherInfo(e) {
  if (e.key === "Enter") {
    const cityname = searchInput.value.trim(); 
    weatherAPI
      .getWeatherInfo(cityname)
      .then((data) => {
     //Warn if city not found
        if (data.message == "city not found") {
          alert("Şehir Bulunamadı"); 
        } else {
          display(data); 
        }
      })
      .catch((err) => console.log(err));
  }
}

function display(data) {
  cityNameel.textContent = data.name; 
  degreeel.textContent = Math.round(data.main.temp); 
  descel.textContent = data.weather[0].description; 

 // Clear search entry
  searchInput.value = ""; 
}
