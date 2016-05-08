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