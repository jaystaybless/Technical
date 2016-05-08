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


var ProductList = React.createClass({
  render: function() {
    var productThing = this.props.data.map(function(product) {
      return (
        <Product product_name={product.product_name} key={product.id}>
          {product.code}
        </Product>
      );
    });
    return (
      <div className="productList">
        {productThing}
      </div>
    );
  }
});

var ProductForm = React.createClass({
  render: function() {
    render: function() {
      return (
        <div className="productList">
        list
        </div>
      )
    }
  }
});



ReactDOM.render(
  <ProductContent url="/api/bags"/>,
  document.getElementById('info')
);