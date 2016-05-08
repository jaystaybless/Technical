var Product = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="product">
        <h3 className="productName">
          {this.props.product_name}
        </h3>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});



ReactDOM.render(
  <ProductContent url="/api/bags"/>,
  document.getElementById('info')
);