var CheckBox = React.createClass({displayName: "CheckBox",
	// declaring property types
	propTypes: {
		value: React.PropTypes.string,
		name: React.PropTypes.string,
		children: React.PropTypes.node
	},
		render: function() {
			return (
				React.createElement("p", {className: "checkbox"}, 
			          React.createElement("label", null, 
			            React.createElement("input", {type: "checkbox", name: this.props.name, value: this.props.value}), 
			            this.props.children
			          )
				)
		);
	}
});