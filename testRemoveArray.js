console.log('something')


var foundProduct = [
    {
        "id": 1462481527397,
        "product_name": "test 1",
        "date": "test date 1"
    },
    {
        "id": 1462481555490,
        "product_name": "test 2",
        "date": "test date 2"
    },
    {
        "id": 1462640555180,
        "product_name": "test 3",
        "date": "test date 3"
    },
    {
        "id": 1462640693274,
        "product_name": "test 4",
        "date": "test date 4"
    },
    {
        "id": 1462640713835,
        "product_name": "test 5",
        "date": "test date 5"
    }
]

var found = [{}]

//console.log(foundProduct)

for (i in foundProduct) {
	//console.log(foundProduct[i])
	var convert = foundProduct[i];
	//console.log(convert[i])
	//console.log(convert)
	
	var id = convert.id
	var product_name = convert.product_name
	var date = convert.date
	found.push(convert)
	
	//foundProduct.push(convert)
	var user = 'test 3'
	//console.log(user)
	
	if (convert.product_name === user) {
		console.log('found')
		//console.log(foundProduct[i])
		//console.log(convert)
		delete foundProduct[i]
		console.log(foundProduct)
		//delete convert
		//conso
		
		
	}
	
}
//console.log(found)
//console.log(product_name)
//console.log(foundProduct[i])

/*
var test = ['1', '2', '3']

var n = '4'
var x = '5'
//test += n;
test.push(n);
test.push(x);

console.log(test)

for (i in test) {
	console.log(test[i])
	if (test[i] === '3') {
		console.log('found ' + test[i])
		console.log(test)
		delete test[i]
		console.log(test)
	}
	console.log(test)
}

console.log(test)
var s = test.indexOf(n);
console.log(s)
var a = test.splice(0, s);
console.log(a)
*/
