var Demo = React.createClass({
	render: function() {
		return (
			<div className="container">
	        	<h1>React.js Demo</h1>

		        <form>
		          <p className="h3"> Please select which items you would like to add to your shopping bag</p>
		        
		        <CheckBox value="Isla Bra">
		        	Isla Bra (LN332) - £29
		        </CheckBox>

		       	<CheckBox value="Nordic Rose Bra">
		        	Nordic Rose Bra (LN336) - £30
		        </CheckBox>

		        <CheckBox value="Zentangle Bra">
		        	Zentangle Bra (FY240) - £34
		        </CheckBox>

		        <CheckBox value="Clara Bra">
		        	Clara Bra (PN112) - £32
		        </CheckBox>

		        <CheckBox value="Deco Delight Bra">
		        	Deco Delight Bra (FY158) - £34
		        </CheckBox>

		        <CheckBox value="Sienna Bra">
		        	Sienna Bra (LN328) - £32
		        </CheckBox>
		        
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