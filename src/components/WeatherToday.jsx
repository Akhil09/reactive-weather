var React = require('react');

var Units = require('./Units.jsx');

var weatherToday = {
	color: '#FFFFFF',
	marginTop: '10px',
}

var cityStyle = {
	paddingLeft: '10px',
}

var weatherInfoStyle = {
	padding: '0px'
}

var tempInfo = {
	padding: '0px',
	marginTop: '0px',
	marginBottom: '0px',
	fontSize: '4em',
}

var descriptionInfo = {
	color: '#f4f4f4',
}

var tempEval = function(unit) {
	if(unit == 'metric') {
		return '°c';
	} else if(unit == 'imperial') {
		return '°f';
	}
}

var showIcon = function(icon) {
	return 'http://openweathermap.org/img/w/'+ icon + '.png';
}

var WeatherToday = React.createClass({
	changeTemp: function(unit) {
		this.props.changeUnits(unit);
	},

	render: function() {

		return (
			<div className="row">
			<div style={weatherToday} className="col-md-12">
			<Units changeTemp={this.changeTemp} unit={this.props.units} />
			<div style={cityStyle} className="col-xs-9 col-md-4">
			<h5>{this.props.cityName}, {this.props.countryCode}</h5>
			<p>Today at {this.props.date.substring(11, 16)}</p>
			</div>
			<div style={weatherInfoStyle} className="col-xs-12 text-center">
			<img src={showIcon(this.props.icon)} />
			<h1 style={tempInfo}>{Math.round(this.props.temperature)}{tempEval(this.props.units)}</h1>
			<p style={descriptionInfo}>{this.props.description}</p>
			</div>
			</div>
			</div>
			)

	}
});

module.exports = WeatherToday;