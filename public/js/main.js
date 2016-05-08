var Product = React.createClass({
  outPut: function() {
    var outPut = marked(this.props.children.toString(), {sanitize: true});
    return { __html: outPut };
  },

  render: function() {
    return (
      <div className="product">
        <h3 className="productName">
          {this.props.product_name}
        </h3>
        <span dangerouslySetInnerHTML={this.outPut()} />
      </div>
    );
  }
});

var ProductBox = React.createClass({
  getProductsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleProductSubmit: function(product) {
    var products = this.state.data;
    product.id = Date.now(); //might change to Math.random()
    var newProducts = products.concat([product]);
    this.setState({data: newProducts});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: product,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: products});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  deleteProduct: function(product){
    $.ajax({
      url: this.props.url,
      data: product,
      type: 'DELETE',
      dataType: 'json',
      success: function (product) {
        this.setState({comments: comments});
      }.bind(this), 
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
      });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.getProductsFromServer();
    setInterval(this.getProductsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="productBox">
        <h1>Products</h1>
        <ProductList data={this.state.data} />
        <ProductForm onProductSubmit={this.handleProductSubmit} />
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
  getInitialState: function() {
    return {product_name: '', code: ''};
  },
  manageProductChange: function(e) {
    this.setState({product_name: e.target.value});
  },
  manageCodeChange: function(e) {
    this.setState({code: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var product_name = this.state.product_name.trim();
    var code = this.state.code.trim();
    if (!code || !product_name) {
      return;
    }
    this.props.onProductSubmit({product_name: product_name, code: code});
    this.setState({product_name: '', code: ''});
  },
  render: function() {
    return (
      <form className="productForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter product name please" value={this.state.product_name} onChange={this.manageProductChange} />
        <input type="text" placeholder="Enter code please" value={this.state.code} onChange={this.manageCodeChange} />
        <input type="submit" value="Add to Bag" />
      </form>
    );
  }
});

ReactDOM.render(
  <ProductBox url="/api/bags"/>,
  document.getElementById('info')
);