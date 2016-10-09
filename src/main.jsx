var React = require('react');
var ReactDOM = require('react-dom');
var WeatherApp = require('./components/WeatherApp.jsx');

ReactDOM.render(<WeatherApp appBackground='#000000' />, document.getElementById('reactive-weather'));