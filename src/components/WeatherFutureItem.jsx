var React = require('react');

var tempEval = function(unit) {
	if(unit == 'metric') {
		return '°C';
	} else if(unit == 'imperial') {
		return '°F';
	}
}

var showIcon = function(icon) {
	return 'http://openweathermap.org/img/w/'+ icon + '.png';
}

var WeatherFutureItem = React.createClass({

	render: function() {
		return (
			<tr>
			<td>{this.props.date}</td>
			<td>{this.props.temp} {tempEval(this.props.units)}</td>
			<td><img height='20px' src={showIcon(this.props.icon)} /> {this.props.description}</td>
			</tr>
			);
	}
});

module.exports = WeatherFutureItem;