var port = process.env.PORT || 3000;
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//test data. 
var foundProduct = [
    {
        "id": 1462481527397,
        "product_name": "Isla Bra",
        "code": "(LN332)"
    },
    {
        "id": 1462481555490,
        "product_name": "Nordic Rose Bra",
        "code": "(LN336)"
    },
    {
        "id": 1462640555180,
        "product_name": "Zentangle Bra",
        "code": "(FY240)"
    },
    {
        "id": 1462640693274,
        "product_name": "Clara Bra",
        "code": "(PN112)"
    },
    {
        "id": 1462640713835,
        "product_name": "Deco Delight Bra",
        "code": "(FY158)"
    },
    {
        "id": 1462640723835,
        "product_name": "Sienna Bra ",
        "code": "(LN328)"
    }
]


app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/api/bags', function(req, res) {
  data = foundProduct;
  console.log(data);
  res.json(data)
});


app.post('/api/bags', function(req, res) {
  //getting the data from the client and storing it in an object
  var addProduct = {
    id: Date.now(), //Math.random() if Date.now() does not work
    product_name: req.body.product_name,
    code: req.body.code 
  };
  //adding the new product to the global product list (foundProduct)
  foundProduct.push(addProduct);
  //res.json(foundProduct)
  console.log(foundProduct)
  
  res.json(foundProduct)
  //return res.render('index', {products: foundProduct})
});


app.listen(port, function() {
  console.log('Server is now running on port ' + port);
});