var Footer = React.createClass({
	render: function() {
		return (
			<footer className="navbar navbar-default navbar-fixed-bottom">
		      <div className="container">
		        <p className="text-muted">
		        	{this.props.children}
		        </p>
		      </div>
		    </footer>
		);
	}
});