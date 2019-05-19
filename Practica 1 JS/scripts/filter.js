const products =[
    { name:'ipad', category :'devices'},
    { name:'Sony 3d', category :'TV'},
    { name:'Samsung', category :'devices'},
    { name:'LG', category :'TV'},
    { name:'mac', category :'devices'}
];


let result = products.filter(function(product){
    return product.category === 'TV';
})

console.log(result);