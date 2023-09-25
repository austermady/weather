const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c9feab4654msh185c19ade714d5fp1f6829jsn9bc1b6e8cbd7',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
const getData = (city)=> {
	cityname.innerHTML = city
fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' +city, options)
	.then(response => response.json())

	.then(response => {
		console.log(response)
		// location = response.location 
		place.innerHTML = response.location.name
		region.innerHTML = response.location.region
		country.innerHTML = response.location.country
		lat.innerHTML = response.location.lat
		lon.innerHTML = response.location.lon
		tz_id.innerHTML = response.location.tz_id
		localtime.innerHTML = response.location.localtime

		// current.innerHTML = response.current 
		
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click",()=>{
	e.preventDefault()
getData(submit.value)

})
getData("New Delhi")