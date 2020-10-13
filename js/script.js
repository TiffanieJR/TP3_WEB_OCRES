// Fonction appelée lors du click du bouton
function start(input)
{
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(input);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response)
    {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const input = data.name;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
     
    })
    .catch(function(error)
    {
      // Affiche une erreur
      console.error(error);
    });

}

/*
function start2(input)
{
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(input);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      //boucle qui permet d'afficher les 3 premiers jours
      //on démarre à 1 car il ne peut pas y avoir de jour 0
      for(let i=1; i<4; i++)
      {
        // On récupère l'information principal
        const main = data.list[i].weather[0].main;
        const description = data.list[i].weather[0].description;
        const temp = data.list[i].temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);


        if(i==1)
        {
          document.getElementById('demain-forecast-main').innerHTML = main;
          document.getElementById('demain-forecast-more-info').innerHTML = description;
          document.getElementById('icon2-weather-container').innerHTML = icon;
          document.getElementById('demain-forecast-temp').innerHTML = `${temp}°C`;
        }

        else if(i==2)
        {
          document.getElementById('demain2-forecast-main').innerHTML = main;
          document.getElementById('demain2-forecast-more-info').innerHTML = description;
          document.getElementById('icon3-weather-container').innerHTML = icon;
          document.getElementById('demain2-forecast-temp').innerHTML = `${temp}°C`;
        }

        else if
        {
          document.getElementById('demain3-forecast-main').innerHTML = main;
          document.getElementById('demain3-forecast-more-info').innerHTML = description;
          document.getElementById('icon4-weather-container').innerHTML = icon;
          document.getElementById('demain3-forecast-temp').innerHTML = `${temp}°C`;
        }
      }
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

}
*/


function getValue()
{
  var input=document.getElementById("city-input").value;

  start(input);

  alert(input);   //affiche une boîte de dialogue pour être sûr que la ville a bien été renseignée

  //start2(input);

  
}