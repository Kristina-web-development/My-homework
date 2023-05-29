// console.log("hello")

// alert("I'm here") //return true
// const userOk = confirm("Are you okey") //true / false
// console.log(userOk)

// const nameUser = prompt("Enter your name")//By default return string
// console.log(nameUser)

// const num = +prompt("Enter number") //return a number - otherwise NaN = Not a Number
// const num2 = Number(prompt("Enter number")) //return a number - otherwise NaN = Not a Number
// console.log(num2)

// ----- Types of variebale -------
// NaN = Not a Number
// string = "text",
// number = 123
// undefined - not found
// null - empty
// boolean = true/false
// Object
// Array
// Date


//------- Const / Let -------
// const - can not change in the future
// let - can change in the future

// const hello = "Hello"
// console.log(hello)

// hello = "Hi"
// console.log(hello)

// let world = "World"
// console.log(world)

// world = "Sky"
// console.log(world)

//------- Operators ----------
// const x = 5
// const y = 3

// const a = x + y
// const a1 = x * y
// const a2 = x - y
// const a3 = x / y
// const a4 = x % y
// const a5 = x ** y
// const a6 = x++
// const a7 = x--

// let z = 5

// z += 1
// z -= 1
// z *= 1
// z /= 1
// z %= 1
// z **= 1

//---- Function ---
/* Regular */
function fun(paramets, paramets1) { //Regular function can return "this"
    return paramets + paramets1
}

/* Anonymous */
(par) => {

}

/* Arrow function */
const fun1 = () => {

}


//1. Write a function that get 2 numbers and return their multiplication.

const multi = ( a, b) => {
return a*b 
}

console.log(multi(3, 8))

//2. Write a function 
//that get a number from the user 
//returns the square of the number.

const square = (a) => {
return Math.pow(a, 2)
}


console.log(square(4))


//3. Write a function 
//get celsius from the user 
//convert  to Fahrenheit.
//(0 °C × 9/5) + 32 = 32 °F

const convert = (cel) => {
return (cel*9/5) + 32 
}

console.log(convert(0))

4. //Create a function 
   //get from the user width, height and length of the room 
   //and return a volume of a room.
   //4.1. Create a function 
   //that gets the sizes of the box 
   //and returns how many boxes that room can include.
   
   let a = 3
   let b = 5
   let c = 9
 const volume = (a, b, c) => {
    
return a*b*c 

 }

 console.log(volume(a, b, c))

let a2 = 2
let b2 = 2
let c2 = 2
 const boxes = (a2, b2, c2) => {
 return volume(a, b, c)/(a2*b2*c2)


 }

 console.log(boxes(a2, b2, c2))