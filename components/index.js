var IndexPage = React.createClass({
  	render: function() {
    	return (
	    	<section>
	    		<Header>{this.props.title}</Header>
	    		<div id="myPost" className="container-fluid">
	    			<Posts />
	    		</div>
	    		<Footer>@CopyRight Shu Zhou 2015</Footer> 
	    	</section>
    	);
  	}
});

React.render(<IndexPage title="Mini Yik Yak" />, document.getElementById("myContainer"));