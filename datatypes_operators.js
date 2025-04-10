var numVariable =10
var floatVariable =21.6

var anotherNum = 6

function sum(a, b){
  return a+b
}
var addition = sum(numVariable, anotherNum)
console.log(addition)

function difference(a, b){
  return a-b
}
var subtraction = difference(numVariable, anotherNum)
console.log(subtraction)

function product(a, b){
  return a*b
}
var multiplication= product(numVariable, anotherNum)
console.log(multiplication)


function quotient(a, b){
  return a/b
}
var division= quotient(numVariable, anotherNum)
console.log(division)


function modulus(a, b){
  return a%b
}
var mod= modulus(numVariable, anotherNum)
console.log(mod)

function exponential(a, b){
  return a**b
}
var exponent= exponential(numVariable, anotherNum)
console.log(exponent)


var num1=10
var num2=20
var results=(num1>num2)
console.log(results)

var x=8 
var y=12
var isXgreaterThanY =(x>y)
var isXLessThanY =(x<y)
var isXEqualToY=(x==y)
var XNotEqualToY=(x!=y)
var msg

if(isXgreaterThanY){
  msg="X is greater than Y"
}
else if(isXLessThanY){
  msg="Y is greater than X"
}
else if(isXEqualToY){
  msg="X is equal to Y"
}
else{
  msg="X is not equal to Y"
}

console.log(msg) 

var a=true
var b = false

var AandB=(a && b)
console.log(AandB)

var AorB=(a || B)
console.log(AorB)

var notA=(!b)
console.log(notA)


var p=10
p+=p
console.log(p)

var p=10
p-=p
console.log(p)

var p=10
p*=p
console.log(p)

var p=10
p/=p
console.log(p)

var p=10
p%=p
console.log(p)