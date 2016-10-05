var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=be62a9d7de6b2c8b60e1ce2b89fd4e9a';

// be62a9d7de6b2c8b60e1ce2b89fd4e9a

module.exports = {
	getTemp: function(location){
		let encodedLocation = encodeURIComponent(location);
		let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		
		return axios.get(requestUrl).then(function(res){
			if (res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}else {
				return res.data.main.temp;
			}
		}, function(res){
			throw new Error(res.data.message);
		});
	}
}