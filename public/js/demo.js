var Demo = React.createClass({displayName: "Demo",
	render: function() {
		//list of products to be render in the DOM
		var productOptions = [
			{value: 'Isla Bra', label: 'Isla Bra (LN332) - £29'},
			{value: 'Nordic Rose Bra', label: 'Nordic Rose Bra (LN336) - £30'},
			{value: 'Zentangle Bra', label: 'Zentangle Bra (FY240) - £34'},
			{value: 'Clara Bra', label: 'Clara Bra (PN112) - £32'},
			{value: 'Deco Delight Bra', label: 'Deco Delight Bra (FY158) - £34'},
			{value: 'Sienna Bra', label: 'Sienna Bra (LN328) - £32'}
		];

		return (
			React.createElement("div", {className: "container"}, 
	        	React.createElement("h1", null, "Bravissimo"), 

		        React.createElement("div", {}, 
		          React.createElement("p", {className: "h3"}, " Please select which items you would like to add to your shopping bag"), 
		        
		        React.createElement(ProductOptionsGroup, {options: productOptions}), 

		       // React.createElement("p", null, React.createElement("input", {type: "submit", value: "Submit"}))
		        )
	      )
		);
	}
});