var _ = require('underscore');

let stack = [];

//lägger ett element överst i stacken
exports.push = function (x){
  stack.push(x);
};

//returnerar det översta elementet i stacken och tar bort det
exports.pop = function (){
  return stack.pop();
};

//returnerar det översta elementet i stacken
exports.peek = function (){
  return _.last(stack); 
};
