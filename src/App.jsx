
import './App.css'

function App() {
  
// let javascript ={
//   name:'Palash',
//   fruits : ['banana','jackfruit','palm','guava','pineapple'],
//   printFruit:function(){ 
//     this.fruits.forEach((a)=>console.log(`${this.name} loves ${a} `))
//   }
// }
// javascript.printFruit()


// const myTest = "palash"   // false, 0, null, undefine, naN, "" এই ছয়টি থাকলে falsy দেখাবে
// if(myTest){
//  console.log("I am truthy");
// }
// else{
//  console.log("I am falsy");
// }


// const age = 65
// if(age>=60){
//  "he is old man"
// }else{
//   "he is adult"
// }
// // short form
// const type = (age>=60)? "he is old man":(age<=30)?"he is young":"he is adult"
// console.log(type);



// const number = [1,2,3,4,5,6,7,8]
// const result= number.find(function(a){
//   return a>5
// })
// console.log(result);



// const player = ["messi","ronaldo","nymer","embappe","maradona","pele"]
// const team =player.findIndex(a=>a==="pele")
// console.log(team);



// const number = [1,2,3,4,5,6,7,8]
// const result = number.filter((currentValue, index, arr)=>{
//   console.log(index);
//   console.log(arr);
//   return currentValue>4
// })
// console.log(result);



// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);



// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// fruits.splice(2,0,"coconut","jackfruit")
// console.log(fruits);  //splice মূল array কে পরিবর্তন করে দেয় 



// const numbers1 = [1,2,3,4,5]
// const numbers2 = [6,7,8,9,10]
// const total = numbers1.concat(numbers2)
// console.log(total);



// const numbers = [1,2,3,4,5]
// numbers.push(5,6,7,8,9)
// console.log(numbers);  //push মূল array কে পরিবর্তন করে দেয় 



// const numbers = [1,2,3,4,5,6,7,8]
// const result = numbers.map((num)=>{
//  return num*5   // map মূল array কে পরিবর্তন করেনা বরঞ্চ নতুন array তৈরি করে
// })
// console.log(result);



// const numbers = [1,2,3,4,5,6,7,8]
// const sum = numbers.reduce((preveValue, currentValue, currentIndex, arr)=>{
//   return preveValue-currentValue
// },0)
// console.log(sum);



// for(let i=0; i<=5; i++){
//   console.log(i);
// }

// let i=0;
// for(; ;i++){
//  if(i<=5){
//   console.log(i);
//  }else{
//   break
//  }
// }

// const myObject = {
//   "name" : "javascript",
//   "estd" : "1995",
//   "founder" : "brandon eich",
// }
// for(let property in myObject){
//   console.log(property);
//   console.log(myObject[property]);
// }

// const myArray = [1,2,3,4,5,6,7,8,9]
// for(let element of myArray){
//   console.log(element);
// }

// const myString = "My name is Mr. Palash Rakshit"
// for(let element of myString){
//   console.log(element);
// }




// const myObject = {
//   "name" : "javascript",
//   "estd" : "1995",
//   "founder" : "brandon eich",
// }
// const myKeys = Object.keys(myObject)
// console.log(myKeys);
// const myValues = Object.values(myObject)
// console.log(myValues);
// const myEntries = Object.entries(myObject)
// console.log(myEntries);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const myEntries = Object.entries(fruits)
// console.log(myEntries);




// default parameter value of function

// function myFunc(x=10){
//   return x
// }
// console.log(myFunc(undefined));



// spread operator of array

// const numbers = [1,2,3]
// const a = [...numbers]
// const newNumber = [...a,4,5,6]
// console.log(newNumber);
// numbers.push(5)
// console.log(a)


// spread operator of object

// const object1 = {
//   a:1,
//   b:2,
// }
// const object2 = {
//   x:1,
//   y:2,
// }
// console.log({...object1,...object2});




// rest operator 

// function myFunc(a,...params){
//   console.log(a);
//   console.log(params);
// }
// myFunc(1,2,3,4)



// object destructuring

// const myObject = {
//   id:150,
//   name:"palash",
//   age:40,
  // education:{
  //   degree:"masters",
  // }
//}
// const {name} = myObject
//or 
//const {name:title} = myObject
//console.log(title);

// const {education:{degree:x}} = myObject
// console.log(x);

// const {education:{degree:x} = {}} = myObject //error komanor jonno
// console.log(x);



// array destructuring

// const number = [1,2,3,4]
// const [,,a,b] = number
// console.log(a,b);
// or
// const numbers = [1,2,[3,4,5],6,7]
// const [,,[,a,b]] = numbers
// console.log(a,b)



// swap

// var a = 1;
// var b = 2;
// [b,a] = [a,b];
// console.log(a,b);



// Tagged template literal

// function myFunc(strings,...values){
//   const p = strings.reduce((prev, current)=>{
//     return prev + current + (values.length? "Mr. " + values.shift():'')
//   },'')
//   return p
// }
// const actor1 = "Sharukh Khan";
// const actor2 = "Salman Khan";
// console.log(myFunc`Bollywood have two super hero ${actor1} and ${actor2} on their film industries`);




// set

// function myFunc(anything){
//   return console.log(anything);  
// }
// let mySet = new Set()
// myFunc(mySet)

// mySet.add(8)
// mySet.add("Bangladesh")
// mySet.delete("Bangladesh")
// myFunc(mySet.has("Bangladesh"))

// mySet.add(8).add(7).add("Russia")
// myFunc(mySet)

// mySet.add(8).add(7).add("Russia").delete(7)
// myFunc(mySet)

// mySet.add(8).add(7).add("Russia").clear()
// myFunc(mySet)

// mySet.add(8).add(7).add("Russia")
// myFunc(mySet.size)

// let myArray = [1,2,3,4,5]
// let mySet = new Set(myArray)
// myFunc(mySet)

// let myArray = [1,2,3,4,5]
// let mySet = new Set(myArray)
// for(let value of mySet){
//   myFunc(value)
// }
// myFunc(mySet)

// let myArray = [1,2,3,4,5]
// let mySet = new Set(myArray)
// myFunc([...mySet])
// or
// let myArray = [1,2,3,4,5]
// let mySet = new Set(myArray)
// myFunc(Array.from(mySet))

// let myArray = [1,2,3,4,5]
// let mySet = new Set(myArray)
// mySet.add(6)
// myFunc(mySet)

// let myArray = [1,2,3,4,5]
// let mySet = new Set(myArray)
// mySet.add(4)
// myFunc(mySet)

// let mySet = new Set("Bangladesh")
// mySet.add('B')
// myFunc(mySet)

// let myArray = [1,2,3,4,5]
// let mySet = new Set(myArray)
// mySet.add({
//   a:1,
//   b:2,
// })
// mySet.add({
//   a:1,
//   b:2,
// })
// myFunc(mySet)

// let myArray = [1,2,3,4,5]
// let myObject = {
//   a:1,
//   b:2,
// }
// let mySet = new Set(myArray)
// mySet.add(myObject)
// mySet.add(myObject)
// mySet.add(myObject)
// myFunc(mySet)

// let myArray = [1,2,3,4,4,4,5,6,7,8,8,9,9,9]
// myFunc([...new Set(myArray)])

// let a = new Set([1,2,3])
// let b = new Set([3,4,1])
// let union = new Set([...a,...b])
// myFunc(union)

// let a = new Set([1,2,3])
// let b = new Set([3,4,1])
// let intersection = new Set([...a].filter(x=>b.has(x)))
// myFunc(intersection)

// let a = new Set([1,2,3])
// let b = new Set([3,4,1])
// let deference = new Set([...a].filter(x=>!b.has(x)))
// myFunc(deference)



// copyWithin

// copyWithin(target,start,end)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango","jackfruit"];
// fruits.copyWithin(3,0,2)
// fruits.copyWithin(3,2)
// fruits.copyWithin(3)
// const test = fruits.copyWithin(-5,-4,-2)
// console.log(test);


// toReversed method

// const arr = [1,2,3,4,5,6]
// const reverse = arr.toReversed()
// console.log(reverse);
// console.log(arr);



// block scope
// {
//   let x = "this is block scope"   // block scope is not access out side of block
//   console.log(x);
//   const y = "this is also block scope"
//   console.log(y);
// }

// function scope

// function myFunc(){
//   const x = "this is function scope"  // Variables defined inside a function are not accessible (visible) from outside the function
//   console.log(x);
// }
// myFunc()

// global scope
// var x = "this is function scope";   //  Global variables can be accessed from anywhere in a JavaScript program
// console.log(x);

// let y = "this is function scope";
// console.log(y);

// const z = "this is function scope";
// console.log(z);


// const num1 = 2;
// const num2 = 3;
// const sum = function(){
//   return num1 + num2
// }
// console.log(sum);


// const num1 = 2;

// const sum = function(){
//   const num2 = 3;
//   return function(){
//     return num1+num2;
//   }
// }
// const myFunc = sum()
// console.dir(myFunc)



// function backAccount(initialBalance){
//   const balance = initialBalance
//   return function(){
//     return balance
//   }
// }
// const account = backAccount(100000)
// console.dir(account);



// function outer(){
//   var x = 100;
//   function inner(){
//     console.log(x);
//   }
//   x = 50;
//   return inner
// }
// var innerFunc = outer();
// innerFunc()



// function

// function myFunc(){
//   console.log("I am web developer");
//   console.log("I am frontend developer");
// }
// myFunc()

// const myAnotherFunc = function(){
//   console.log("I am web developer");
//   console.log("I am frontend developer");
// }
// console.log(myAnotherFunc)
// myAnotherFunc()

// const myPracticeFunc = function(param1,param2){
//   console.log("printing...",param1,param2)
// }
// myPracticeFunc("I am from","Bangladesh")
// myPracticeFunc("I am from",9043)
// myPracticeFunc("I am from",true)


// function sum(a,b){
//   const res = a + b;
//   return res;
// }
// console.log(sum(4,6));

// function calculation(a , b){
//   return 2*(a + b);
// }
// console.log(calculation(3 , 5));


// function calculation(a = 0 , b = 0){
//   return 2*(a + b);
// }
// console.log(calculation(3 , 5));

// function collectThis(x , ...y){             // rest parameter must be last parameter
//   console.log(x);
//   console.log(y);
// }
// collectThis(1,2,3,4,5,6,7,8,9,10);


// function printThis(a){             // regular process
//   console.log(a)
// }
// printThis("Yes it is")

// const printThis = (a) => {           // new process
//   console.log(a)
// }
// printThis("Yes it is")

// function print(a){                   // regular process
//   return 2*a
// }  
// console.log(print(3));

// const print = (a) => 2*a              // new process
// console.log(print(3));


// function x(){
//   console.log("x", this);
// }
// x()
 

// function outerFunction(){
//   console.log("this is outerfunction");

//   function innerFunction(){
//     console.log("this is innerfunction")
//   }
//   innerFunction()
// }
// outerFunction()


// function outerFunction(a){
//   console.log("this is outerfunction");

//   function innerFunction(){
//     console.log("this is innerfunction")
//     return a * 5
//   }
//     return innerFunction
// }
// console.log(outerFunction(6))
// const result = outerFunction(6)
// console.log(result())


// callback function

// function myFunc(buz){
//   if(timeForBuz){
//     buz()
//   }
// }
// function buz(){
//   console.log("buz");
// }
// myFunc(buz)


// higher order function

// function getCapture(camera){
//   camera()
// }
// getCapture(function(){
//   console.log("canon");
// })

// Higher order function আরেকটা ফাংশনকে return ও করতে পারে

// function returnFunc(){
//   return function(){
//     console.log("Hi")
//   }
// }
// console.log(returnFunc())
// returnFunc()()


// const number = [1,2,3,4]
// const result = [];
// for(let i = 0; i<number.length; i++){
//   result.push(number[i]*2)
// }
// console.log(result);

// uporer example ti ekti traditional/old poddoti
// niche higher order function poddotite  eti kora holo
{
const numbers = [1,2,3,4,5]
const result = numbers.map(function(number){
  return number*2
})
console.log(result);
}

// uporer exampleti latest poddotite niche kora holo

{
  const numbers = [1,2,3,4,5]
  const result = numbers.map((number)=>number*3)
  console.log(result)
}

// nicher example ti ekti traditional/old poddoti
{
  const plyers = [
  { name : 'messi',
    goal : 950
  },
  {
    name : 'ronaldo',
    goal : 1050
  },
  {
    name : 'nymer',
    goal : 540
  },
  {
    name : 'embappe',
    goal : 270
  }
  ]
   const goalAboveNineHundred = [];

   for(let i = 0; i < plyers.length; i++){
      if(plyers[i].goal >= 900){
        goalAboveNineHundred.push(plyers[i])
      }
   }
   console.log(goalAboveNineHundred);
   
}
{
  const plyers = [
  { name : 'messi',
    goal : 950
  },
  {
    name : 'ronaldo',
    goal : 1050
  },
  {
    name : 'nymer',
    goal : 540
  },
  {
    name : 'embappe',
    goal : 270
  }
]
  const goalAboveNineHundred = plyers.filter(num => num.goal >900)
  .map(player => player.name)
  console.log(goalAboveNineHundred);
  
}
{
  const numbers = [5, 12, 8, 20, 7, 15];
  const even = numbers.filter(number => number%2===0)
  console.log(even)
}
{
  const numbers = [5, 12, 8, 20, 7, 15];
  const multiply = numbers.map(num => num*2)
  console.log(multiply)
}
{
  const numbers = [5, 12, 8, 20, 7, 15];
  const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0)
  console.log(sum);
  
}

// group of function

// (function(){
//    alert("I am anonymous function")
// })()


// recurson

// function fetchwater(count){
//   if(count===0){
//     console.log("No more attempt left to fetch water", count)
//     return
//   }
//   console.log("fetching water...");
//   fetchwater(count-1)
// }
// fetchwater(5)


// ============== Prototype

// const captain = {
//   name : "Mashrafi",
//   age : 35,
//   country : "Bangladesh",
// }
// const player = Object.create(captain)
// console.log(player.country)
// console.log(player.name)


// function test(){}
// console.dir(test.prototype);


// function myFunc(name, age){
//   let person = Object.create(myFunc.prototype);
//   person.name = name;
//   person.age = age;
//   return person;
// }
// myFunc.prototype = {
//   eat(){
//     console.log(`person is eating`)
//   },
//   sleep(){
//     console.log("person is sleeping")
//   },
//   play(){
//     console.log("person is playing")
//   }
// }
// const liton = myFunc("Liton", 35)
// liton.eat()

// const mashrafi = myFunc("Mashrafi", 40)
// mashrafi.play()

// or


// function Person(name, age){
//   this.name = name;
//   this.age = age;
// }
// Person.prototype = {
//    eat(){
//     console.log(`person is eating`)
//   },
//   sleep(){
//     console.log("person is sleeping")
//   },
//   play(){
//     console.log("person is playing")
//   }
// }
// const liton = new Person("Liton", 35)
// liton.play()
// const mashrafi = new Person("Mashrafi", 40)
// mashrafi.eat()

// or

// class Person{
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   eat(){
//     console.log(`person is eating`)
//   }
//   sleep(){
//     console.log("person is sleeping")
//   }
//   play(){
//     console.log("person is playing")
//   }
// }
// const liton = new Person("Liton", 35)
// liton.play()
// const mashrafi = new Person("Mashrafi", 40)
// mashrafi.eat()



// let person = []
// let person = new Array()
// console.log(person);


// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Person.prototype.nationality = "English";

// const myFather = new Person("John", "Doe", 50, "blue");
// console.log(myFather.nationality)


// function Person(name, age){
//   this.name = name;
//   this.age = age;
//   } 

//  Person.prototype = {
//      eat : function(){
//     console.log(`${this.name} is eating`);
//   }
//  }
// const palash = new Person("Palash", 40)
// console.log(palash)
// const rakshit = new Person("Rakshit", 40)
// console.log(rakshit)


// var f = function Person(){}

// Object.prototype.palash = function(){
//   console.log("I am Palash")
// }
// var p = {}
// p.palash()

// this keyword

// implicit binding

// const palash = {
//   name : "Palash",
//   age : 40,
//   printPlayerName : function(){
//   console.log(this.name)
// }
// }
// palash.printPlayerName()


// const Person = function(name,age){
//   return {
//     name : name,
//     age : age,
//     printName : function(){
//       console.log(this.name);
//     },
//     brother : {
//       name : "Rakshit",
//       age : 40,
//       printName : function(){
//         console.log(this.name)
//       }
//     }
//   }
// }
// const palash = Person("Palash",40)
// palash.printName()
// palash.brother.printName()


// explicit binding

// var printPlayerNameFunction = function(obj){
//   obj.printPlayerName= function(){
//     console.log(this.name);
//   }
  
// }

// var palash = {
//   name : "Palash",
//   age : 40,
// };
// var rakshit = {
//   name : "Rakshit",
//   age : 40,
// };
// printPlayerNameFunction(palash)
// printPlayerNameFunction(rakshit)
// palash.printPlayerName()
// rakshit.printPlayerName()



// const printName = function(){
//   console.log(this.name)
// }
// const palash = {
//   name : "Palash",
//   age : 40,
// };
// printName.call(palash)


// const printName = function(p1,p2,p3){
//   console.log(`${this.name} is a ${p1} ${p2} from ${p3}`)
// }
// const palash = {
//   name : "Palash",
//   age : 40,
// };
// const p1 = "senior"
// const p2 = "web developer"
// const p3 = "Bangladesh"
// printName.call(palash,p1,p2,p3)


// const printName = function(p1,p2,p3){
//   console.log(`${this.name} is a ${p1} ${p2} from ${p3}`)
// }
// const palash = {
//   name : "Palash",
//   age : 40,
// };
// const p1 = "senior"
// const p2 = "web developer"
// const p3 = "Bangladesh"
// const newFunc = printName.bind(palash,p1,p2,p3)
// newFunc()


// const printName = function(p1,p2,p3){
//   console.log(`${this.name} is a ${p1} ${p2} from ${p3}`)
// }
// const palash = {
//   name : "Palash",
//   age : 40,
// };
// const p1 = "senior"
// const p2 = "web developer"
// const p3 = "Bangladesh"
// const p = [p1,p2,p3]
// printName.apply(palash,p)


// new binding

// function Person(name,age){
//   this.name = name,
//   this.age = age
//   console.log(`${this.name} is ${this.age} years old`);
// }
// new Person("Rakshit", 40)


// window binding

// "use strict"
// function printName(){
//   console.log(this.name);
  
// }
// const palash = {
//   name : "Palash",
// };
// printName()


function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// some code (try to change x to 5)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
console.log(myPromise)
  return (
    <>
      <h1 className='text-red-400'>My name is </h1>
      <h2 className='font-bold text-blue-600'>I am a programmer</h2>


  
   
    </>
  )
}

export default App
