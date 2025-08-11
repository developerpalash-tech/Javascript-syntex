
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
// const citrus = fruits.splice(2,0,"coconut","jackfruit")
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

function myFunc(anything){
  return console.log(anything);  
}
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

let a = new Set([1,2,3])
let b = new Set([3,4,1])
let deference = new Set([...a].filter(x=>!b.has(x)))
myFunc(deference)
  return (
    <>
      <h1 className='text-red-400'>My name is </h1>
      <h2 className='font-bold text-blue-600'>I am a programmer</h2>


  
   
    </>
  )
}

export default App
