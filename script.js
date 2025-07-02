let ville= "Paris"
let apiKey=""
let url=`https:\\api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&lang=fr&units=metric`

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
