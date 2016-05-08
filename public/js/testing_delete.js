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