let tcname = document.getElementById("tcname");
let hcname = document.getElementById("hcname");
let wcname = document.getElementById("wcname");
let cityv = document.getElementById("city");
let submit = document.getElementById("submit");

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "a1d6552721mshecccfb250e90520p1609ddjsnddac7b2810a6",
		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	},
};

const getWeather = (city) => {
	tcname.innerHTML = city;
	hcname.innerHTML = city;
	wcname.innerHTML = city;
	fetch(
		`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
		options
	)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			let cloud_pct = document.getElementById("cloud_pct");
			cloud_pct.textContent = response.cloud_pct;
			let temp = document.getElementById("temp");
			temp.textContent = response.temp;
			let feels_like = document.getElementById("feels_like");
			feels_like.textContent = response.feels_like;
			let humidity = document.getElementById("humidity");
			humidity.textContent = response.humidity;
			let min_temp = document.getElementById("min_temp");
			min_temp.textContent = response.min_temp;
			let max_temp = document.getElementById("max_temp");
			max_temp.textContent = response.max_temp;
			let wind_speed = document.getElementById("wind_speed");
			wind_speed.textContent = response.wind_speed;
			let wind_degrees = document.getElementById("wind_degrees");
			wind_degrees.textContent = response.wind_degrees;
			let sunrise = document.getElementById("sunrise");
			sunrise.textContent = response.sunrise;
			let sunset = document.getElementById("sunset");
			sunset.textContent = response.sunset;
		})
		.catch((err) => console.error(err));
};

submit.addEventListener("click", () => {
	getWeather(cityv.value);
});

getWeather("Delhi");
