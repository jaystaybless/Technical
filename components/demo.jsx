var Demo = React.createClass({
	render: function() {

		var productOptions = [
			{value: 'Isla Bra', label: 'Isla Bra (LN332) - £29'},
			{value: 'Nordic Rose Bra', label: 'Nordic Rose Bra (LN336) - £30'},
			{value: 'Zentangle Bra', label: 'Zentangle Bra (FY240) - £34'},
			{value: 'Clara Bra', label: 'Clara Bra (PN112) - £32'},
			{value: 'Deco Delight Bra', label: 'Deco Delight Bra (FY158) - £34'},
			{value: 'Sienna Bra', label: 'Sienna Bra (LN328) - £32'}
		];

		return (
			<div className="container">
	        	<h1>React.js Demo</h1>

		        <form>
		          <p className="h3"> Please select which items you would like to add to your shopping bag</p>
		        
		        <ProductOptionsGroup options={productOptions} />

		        <p><input type="submit" value="Submit"/></p>
		        </form>
	      </div>
		);
	}
});

var CheckBox = React.createClass({
		render: function() {
			return (
				<p className="checkbox">
			          <label>
			            <input type="checkbox" name="referrer" value={this.props.value}/>
			            {this.props.children}
			          </label>
				</p>
		);
	}
});


var ProductOptionsGroup = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.options.map(function (option) {
					return (
						<CheckBox value={option.value} key={option.value}>
			              	{option.label}
			            </CheckBox>
					);
				})}
			</div>
		);
	}
});