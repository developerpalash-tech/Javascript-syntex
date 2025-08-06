
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


  return (
    <>
      <h1 className='text-red-400'>My name is </h1>
      <h2 className='font-bold text-blue-600'>I am a programmer</h2>

   
    </>
  )
}

export default App
