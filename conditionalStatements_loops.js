var message
var temparature=35

if(temparature<0){
  message="It's freezing"
}
else if(temparature<16){
  message="It's cold"
}
else if(temparature<26){
  message="It's mild"
}
else{
  message="It's warm"
}
console.log(message)


switch(temparature!=null) {
  case temparature<0:
     message="It's freezing"
    break;
  case temparature<16:
     message="It's cold"
    break;
  case temparature<26:
     message="It's mild"
    break;
  default:
    message="It's warm"
}
console.log(message)


var myNumber = 101
var message

if(myNumber%2 ==0 && myNumber%3 ==0){
  message="divisible by both"
}
else if(myNumber%2==0){
  message="divisible by 2"
}
else if(myNumber%3 ==0){
  message="divisible by 3"
}
else{
  message="not divisible by 2 or 3 "
}

console.log(message)

switch(myNumber!=null){
  case myNumber%2 ==0 && myNumber%3 ==0:
    message="divisible by both"
    break;
  case myNumber%2 ==0:
    message="divisible by 2"
    break;
  case myNumber%3 ==0:
    message="divisible by 3"
    break;
    default:
    message="not divisible by 2 or 3 "
}
console.log(message)



for(var i=0;i<10;i++){
  console.log(i+1)
}

console.log(" ")
for(var i=1;i<=20;i++){
  if(i%2==0){
    console.log(i)
  }
}
console.log(" ")

var sum=0
for(var i=1;i<=100;i++){
  sum +=i
}
 console.log(sum)
 
 console.log(" ")
 
 const numbers=[1,2,3,4,5]
 
 for(var i=0;i< numbers.length;i++){
   console.log(numbers[i])
 }
  console.log(" ")
 
const numbers2=[3,2,5,9,6]

     for(var i=0;i<numbers2.length;i++){
       var large
       if(numbers2[i]>numbers2[i+1]){
         large=numbers2[i]
         console.log(large)
       }
    
     }
    

const numbers2 = [3, 7, 2, 5, 10, 6];
var largest = numbers2[0];

for (var i = 1; i < numbers2.length; i++) {
  if (numbers2[i] > largest) {
    largest = numbers2[i];
  }
}
console.log(largest)

console.log("+++++++++++++++++++++++++")

var limit=1
while(limit<11){
  var count =limit++
  console.log(count)
}

console.log(" ")

var limit=1
while(limit<21){
  var count =limit++
  if(count%2==0){
    console.log(count)
  }
}
console.log(" ")

var limit =1
  var sum =0
while(limit<101){

  sum+=limit++

}
  console.log(sum)
  console.log("")


var limit=1
while(limit<50){
  var count =limit++
  if(count%5==0){
    console.log(count)
  }
}
console.log(" ")

//Do while
limit=1
do{
  console.log(limit)
  limit++
  
}while(limit<11)

console.log(" ")
limit=1
var sum=0
do{
  sum+=limit++

}
while(limit<101)
console.log(sum) 



var isVal=false
do{
  var userInput = prompt("enter a number greater than 10")
  var numberInput = parseInt(userInput);
  
  if(numberInput>10){
    isVal=true
  }
  else{
    isVal
  }
}
while(isVal)

do{
const randomNumber = Math.random(1, 10);
var userInput = prompt("guess the random number")
var isFound=true

  if(randomNumber==userInput){
    isFound=true
  }
  else{
    isFound=false
  }
  
}while(isFound==true)