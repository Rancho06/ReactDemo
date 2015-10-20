var Post = React.createClass({
	remove: function() {
		this.props.handleDelete(this.props.index);
	},
	render: function() {
		return (
	    	<div className="col-xs-12 col-md-6 thumbnail">
	      		<div className="caption">
	        		<h2>{this.props.name}</h2>
	        		<p>{this.props.content}</p>
	        		<p>
	        			<button onClick={this.remove} className="btn btn-danger">Delete</button>
	        		</p>
	      		</div>
	    	</div>
		);
	}
});