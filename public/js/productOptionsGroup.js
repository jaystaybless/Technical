var ProductOptionsGroup = React.createClass({displayName: "ProductOptionsGroup",
	propTypes: {
		name: React.PropTypes.string
	},

	render: function() {
		//obtaining the name of the properties so that it can be passed on
		var name = this.props.name;
		return (
			React.createElement("div", null, 
				this.props.options.map(function (option) {
					return (
						React.createElement(CheckBox, {name: name, value: option.value, key: option.value}, 
			              	option.label
			            )
					);
				})
			)
		);
	}
});