var React = require('react');
var WeatherFutureItem = require('./WeatherFutureItem.jsx');
var moment = require('moment');

var tableStyle = {
	background: '#ffffff',
	marginBottom: '0px',
}

var tempEval = function(unit) {
	if(unit == 'metric') {
		return '°C';
	} else if(unit == 'imperial') {
		return '°F';
	}
}

var refactorDate = function(unix_time) {
	var t = new Date(unix_time * 1000);
	return moment(t).format('dddd');
}

var WeatherFuture = React.createClass({

	render: function() {
		var weatherFutureItem = this.props.tempList.map(function(item, key) {
			if(item.dt_txt.substring(11, 13) == "15"){
				return (
					<WeatherFutureItem
					key={key}
					date={refactorDate(item.dt)}
					temp={Math.round(item.main.temp)}
					icon={item.weather[0].icon}
					units={this.props.units}
					description={item.weather[0].description}
					/>
					);
			}
		}.bind(this));

		return (
			<div className="row">
			<div className="col-xs-12">
			<table style={tableStyle} className="table table-striped text-center">
			<thead>
			<tr>
			<th className="col-md-3 text-center">Day</th>
			<th className="col-md-3 text-center">Temperature</th>
			<th className="col-md-3 text-center">Description</th>
			</tr>
			</thead>
			<tbody>
			{weatherFutureItem}
			</tbody>
			</table>
			</div>
			</div>
			);
	}
});

module.exports = WeatherFuture;