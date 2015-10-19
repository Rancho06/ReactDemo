var Header = React.createClass({displayName: "Header",
	render: function() {
		return (
			React.createElement("nav", {className: "navbar navbar-default navbar-fixed-top"}, 
			  React.createElement("div", {className: "container"}, 
			    React.createElement("h1", null, this.props.children)
			  )
			)
		);
	}
});