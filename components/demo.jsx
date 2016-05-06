var Demo = React.createClass({
	render: function() {
		return (
			<div className="container">
	        	<h1>React.js Demo</h1>

		        <form>
		          <p className="h3"> Please select which items you would like to add to your shopping bag</p>
		        <p className="checkbox">
		          <label>
		            <input type="checkbox" name="referrer" value="Isla Bra">
		            Isla Bra (LN332) - £29
		          </label>
		        </p>
		          <p className="checkbox">
		          <label>
		            <input type="checkbox" name="referrer" value="Nordic Rose Bra">
		            Nordic Rose Bra (LN336) - £30
		          </label>
		        </p>
		        <p className="checkbox">
		          <label>
		            <input type="checkbox" name="referrer" value="Zentangle Bra">
		            Zentangle Bra (FY240) - £34
		          </label>
		        </p>
		        <p className="checkbox">
		          <label>
		            <input type="checkbox" name="referrer" value="Clara Bra">
		            Clara Bra (PN112) - £32
		          </label>
		        </p>
		        <p className="checkbox">
		          <label>
		            <input type="checkbox" name="referrer" value="Deco Delight Bra">
		            Deco Delight Bra (FY158) - £34
		          </label>
		        </p>className
		        <p className="checkbox">
		          <label>
		            <input type="checkbox" name="referrer" value="Sienna Bra">
		            Sienna Bra (LN328) - £32
		          </label>
		        </p>
		        <p><input type="submit" value="Submit"></p>
		        </form>
	      </div>
		);
	}
});