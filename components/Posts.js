var Posts = React.createClass({
	getInitialState: function() {
		return {
			posts: []
		}
	},
	addPost: function(name, content) {
		var posts = this.state.posts;
		posts.splice(0, 0, {
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
			<Post handleDelete={this.removePost} index={i} name={post.name} content={post.content} />
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
			<section>
				<InputBox handleFormSubmit={this.addPost} />
				<div className="row">
					{this.state.posts.map(this.eachPost)};
				</div>			
			</section>
		);
	}
});