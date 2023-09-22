// axios.get("https://jsonplaceholder.typicode.com/users").then(response => console.log(response))

// axios.post("https://reqres.in/api/users", {name: "Bekzod", "job": "developer" }).
// then(response => console.log(response.data))

const apiKey = 'fa39e369b209dee39b97e443dce61b6b'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weaterIcon = document.querySelector('.weater_icon')

async function checkWeather(city_name) {
	const response = await fetch(apiUrl + city_name + `&appid=${apiKey}`)
	let data = await response.json();
	let name = data.name;
	if(data.cod === 200){
		name = data.name;
	} else{
		name = "Hech narsa topilmadi"
	}
	console.log(data)
	document.querySelector('.city_name').innerHTML = name
	document.querySelector('.temp').innerHTML = Math.round(data.main.temp)
	document.querySelector('.namlik').innerHTML = data.main.humidity + '%'
	document.querySelector('.shamol').innerHTML = data.wind.speed + ' km/h'
	var iconurl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
	weaterIcon.src = iconurl
	console.log(iconurl)

	// console.log(data.cod);
	// if(data.cod === 404){
	// 	console.log("sgdfgdf");
	// }
}
checkWeather('New york')
searchBtn.addEventListener('click', () => {
	checkWeather(searchBox.value)
})
