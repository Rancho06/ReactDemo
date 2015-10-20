var IndexPage = React.createClass({displayName: "IndexPage",
  	render: function() {
    	return (
	    	React.createElement("section", null, 
	    		React.createElement(Header, null, this.props.title), 
	    		React.createElement("div", {id: "myPost", className: "container-fluid"}, 
	    			React.createElement(Posts, null)
	    		), 
	    		React.createElement(Footer, null, "@CopyRight Shu Zhou 2015")
	    	)
    	);
  	}
});

React.render(React.createElement(IndexPage, {title: "Mini Yik Yak"}), document.getElementById("myContainer"));