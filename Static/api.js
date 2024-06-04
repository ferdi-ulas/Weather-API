class WeatherAPI {
  constructor() {
    // openweathermap.org <----Anyone can access the API Web Address.
    this.BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
    this.APIKEY = "4fadecdd233d05d27dd0e2dedfbbd85f";
  }

  async getWeatherInfo(cityname) {
    // Fetch weather information for the specified city
    const response = await fetch(
      `${this.BASE_URL}?q=${cityname}&appid=${this.APIKEY}&units=metric&lang=tr`
    );
    // Convert the API response to JSON format and return
    const data = await response.json();
    return data;
  }
}
