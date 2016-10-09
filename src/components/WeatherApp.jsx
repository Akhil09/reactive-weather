var React = require('react');
var HTTP = require('../services/weatherservice.js');
var WeatherToday = require('./WeatherToday.jsx');
var WeatherFuture = require('./WeatherFuture.jsx');
var SearchField = require('./SearchField.jsx');
var CityField = require('./CityField.jsx');


var WeatherApp = React.createClass({


	getInitialState: function() {
		return (
		{
			weather: null,
			units: "metric",
			search: '',
			icon: ''
		}
		);
	},

	handleSearch: function(search) {
		HTTP.get(search + '&units=' + this.state.units).then(function(data) {
			this.setState({weather: data, search: search});
		}.bind(this));
	},

	changeUnits: function(temp) {
		if(temp == '°C') {
			this.setState({units: 'metric'}, function(search) {
				HTTP.get(this.state.search + '&units=' + this.state.units).then(function(data) {
					this.setState({weather: data});
				}.bind(this));
			})
		} else if(temp == '°F') {
			this.setState({units: 'imperial'}, function(search) {
				HTTP.get(this.state.search + '&units=' + this.state.units).then(function(data) {
					this.setState({weather: data});
				}.bind(this));
			})

		}
	},

	render: function() {

		var weatherHeader = {

		}

		if (this.props.appBackground) {
			weatherHeader.background = this.props.appBackground;
		}

		if (this.state.weather) {
			var splitDate = this.state.weather.list[0].dt_txt.split(' ',1);
			var weatherIcon = 'http://openweathermap.org/img/w/' + this.state.icon;
		}

		return (
			<div style={weatherHeader}>
			<SearchField ref="searchSection" onNewSearch={this.handleSearch} />
			{(() => {
				if (this.state.weather) {
					return (
						<div className="weather-widget ">
						<WeatherToday 
						cityName={this.state.weather.city.name} 
						countryCode={this.state.weather.city.country}
						date={this.state.weather.list[0].dt_txt}
						temperature={this.state.weather.list[0].main.temp}
						description={this.state.weather.list[0].weather[0].description}
						changeUnits={this.changeUnits}
						units={this.state.units}
						icon={this.state.weather.list[0].weather[0].icon}
						/>
						<WeatherFuture
						tempList={this.state.weather.list}
						units={this.state.units}
						/>
						</div>
						);
				}
			})()}

			</div>
			);
	}
});

module.exports = WeatherApp;