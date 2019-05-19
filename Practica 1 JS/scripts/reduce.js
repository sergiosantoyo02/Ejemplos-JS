const previous = 200;
const current = [
    {expense :'guitar', amount :'200'},
    {expense :'guitar', amount :'200'},
    {expense :'guitar', amount :'200'},
];

let result = current.reduce(function(sum,expense){
    return sum + expense.amount

},0);

console.log(result);
