var Posts = React.createClass({displayName: "Posts",
	getInitialState: function() {
		return {
			posts: []
		}
	},
	addPost: function(name, content) {
		var posts = this.state.posts;
		posts.push({
			id: this.nextId(),
			name: name,
			content: content
		});
		this.setState({
			posts: posts
		});
	},
	nextId: function() {
		this.uniqueId = this.uniqueId || 0;
		return this.uniqueId++;
	},
	eachPost: function(post, i) {
		return (
			React.createElement(Post, {handleDelete: this.removePost, index: i, name: post.name, content: post.content})
		);
	},
	removePost: function(index) {
		var posts = this.state.posts;
		posts.splice(index, 1);
		this.setState({
			posts: posts
		});
	},
	render: function() {
		return (
			React.createElement("section", null, 
				this.state.posts.map(this.eachPost), ";", 
				React.createElement(InputBox, {handleFormSubmit: this.addPost})
			)
		);
	}
});