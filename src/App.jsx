
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



const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);


  return (
    <>
      <h1 className='text-red-400'>My name is </h1>
      <h2 className='font-bold text-blue-600'>I am a programmer</h2>

   
    </>
  )
}

export default App
