var React = require('react');

var fieldWrapper = {
	padding: '0px',
}

var searchSection = {
	borderRadius: 0,
}

var searchButton = {
	borderRadius: 0,
	padding: '6.5px 12px'
}

var SearchField = React.createClass({

	componentDidMount: function() {
		this.refs.searchInput.focus();
	},

	handleSubmit: function(e) {
		e.preventDefault();
		if (this.refs.searchInput.value.trim() && this.props.onNewSearch) {
			this.props.onNewSearch(this.refs.searchInput.value);
			this.refs.searchInput.value = '';
		}
	},

	render: function() {
		return (
			<div className="row">
			<div className="col-md-12">
			<form onSubmit={this.handleSubmit} > 
			<div style={fieldWrapper} className="col-xs-9">
				<input style={searchSection} className="form-control" ref="searchInput" placeholder="Search City" />
			</div>
			<div style={fieldWrapper} className="col-xs-3">
				<button style={searchButton} className="btn btn-primary btn-block">Search</button>
				</div>	
			</form>
			</div>
			</div>
			);
	}

});

module.exports = SearchField;