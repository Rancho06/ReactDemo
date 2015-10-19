var Post = React.createClass({displayName: "Post",
	remove: function() {
		this.props.handleDelete(this.props.index);
	},
	render: function() {
		return (
	    	React.createElement("div", {className: "thumbnail"}, 
	      		React.createElement("div", {className: "caption"}, 
	        		React.createElement("h2", null, this.props.name), 
	        		React.createElement("p", null, this.props.content), 
	        		React.createElement("p", null, 
	        			React.createElement("button", {onClick: this.remove, className: "btn btn-danger"}, "Delete")
	        		)
	      		)
	    	)
		);
	}
});