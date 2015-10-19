var Header = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
			  <div className="container">
			    <h1>{this.props.children}</h1>
			  </div>
			</nav>
		);
	}
});