var Footer = React.createClass({displayName: "Footer",
	render: function() {
		return (
			React.createElement("footer", {className: "navbar navbar-default navbar-fixed-bottom"}, 
		      React.createElement("div", {className: "container"}, 
		        React.createElement("p", {className: "text-muted"}, 
		        	this.props.children
		        )
		      )
		    )
		);
	}
});