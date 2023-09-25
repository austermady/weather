// function weatherapi() {
//     const getData =(city)=> {
//     fetch("http://api.weatherapi.com/v1/current.json?key=9f0a08842de0475687f51825232509&q="+city,)
//       .then(response => response.json())
//       .then(response => {
//         console.log(response)
//         place.innerHTML = response.location.name
// 		region.innerHTML = response.location.region
// 		country.innerHTML = response.location.country
// 		lat.innerHTML = response.location.lat
// 		lon.innerHTML = response.location.lon
// 		tz_id.innerHTML = response.location.tz_id
// 		localtime.innerHTML = response.location.localtime
//       })

//       sub.catch(err=> console.error(err));
//     }
//     submit.addEventListener("click",()=>{
//         e.preventDefault()
//     getData(location.value)
//     })
//   }
//   weatherapi();
function weatherapi() {
const apiKey = "9f0a08842de0475687f51825232509";
const apiUrl = "http://api.weatherapi.com/v1/forecast.json?&q=London&days=10&aqi=yes&alerts=yes";
async function checkWeather (){
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
}}
weatherapi();