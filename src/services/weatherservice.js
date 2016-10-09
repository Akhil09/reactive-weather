var Fetch = require('whatwg-fetch');
var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=';

// Add Your API Key
var apiKey = 'yourApiKey';

var weatherService = {
	get: function(url) {
		return fetch(baseUrl + url + '&APPID=' + apiKey)
		.then(function(response) {
			return response.json();
		});
	}
}

module.exports = weatherService;