var InputBox = React.createClass({displayName: "InputBox",
	getInitialState: function() {
		return {
			name: "John Doe",
			content: "I love technology"
		}
	},
	updateName: function(e) {
		this.setState({
			name: e.target.value
		});
	},
	updateContent: function(e) {
		this.setState({
			content: e.target.value
		});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		this.props.handleFormSubmit(this.state.name, this.state.content);
		this.setState({
			name: "John Doe",
			content: "I love technology"
		});
		React.findDOMNode(this.refs.content).value = "";
		React.findDOMNode(this.refs.content).focus();
		React.findDOMNode(this.refs.name).value = "";
		return false;
	},
	render: function() {
		return (
			React.createElement("div", {className: "inputbox"}, 
				React.createElement("input", {type: "text", ref: "content", className: "form-control", placeholder: "What would you like to say?", onChange: this.updateContent}), 
				React.createElement("form", {id: "inputForm", onSubmit: this.handleSubmit, className: "form-inline"}, 
					React.createElement("input", {type: "text", ref: "name", placeholder: "Your name", className: "form-control", onChange: this.updateName}), 
					React.createElement("button", {type: "submit", className: "btn btn-primary"}, "Submit")
				)
			)
		);
	}
});