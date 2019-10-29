
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

    apiWeather
    .getThreeDayForecast()
    .then(function(response){
      const data = response.data;

      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
      const temp = data.list[0].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      // Modifier le DOM
      document.getElementById('day1-forecast-main').innerHTML = main;
      document.getElementById('day1-forecast-more-info').innerHTML = description;
      document.getElementById('day1-icon-weather-container').innerHTML = icon;
      document.getElementById('day1-forecast-temp').innerHTML = `${temp}°C`;
      
      const main = data.list[1].weather[0].main;
      const description = data.list[1].weather[0].description;
      const temp = data.list[1].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // Modifier le DOM
      document.getElementById('day2-forecast-main').innerHTML = main;
      document.getElementById('day2-forecast-more-info').innerHTML = description;
      document.getElementById('day2-icon-weather-container').innerHTML = icon;
      document.getElementById('day2-forecast-temp').innerHTML = `${temp}°C`;

      const main = data.list[2].weather[0].main;
      const description = data.list[2].weather[0].description;
      const temp = data.list[2].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      // Modifier le DOM
      document.getElementById('day3-forecast-main').innerHTML = main;
      document.getElementById('day3-forecast-more-info').innerHTML = description;
      document.getElementById('day3-icon-weather-container').innerHTML = icon;
      document.getElementById('day3-forecast-temp').innerHTML = `${temp}°C`;
    })
}
