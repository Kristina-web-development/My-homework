/*Read 10 numbers from the user. 
Check each number – if it is even, print it, 
otherwise print a message saying that the number is odd.*/

// const userNumbers = prompt("Enter 10 numbers") //how to change string to numbers
// console.log(userNumbers)

// const evenOrOdd = (numbers) => {
//     const arrOfnumbers = numbers.split(' '); //change the string to array
//     console.log(arrOfnumbers)

//     // let i= 0: start begining
//     // i < 5/arr.lenght: working conditions
//     // i++ : what it do

//     // for(let i=0; i< arrOfnumbers.lenght; i++) {

//     // }

//     arrOfnumbers.forEach(number => {
//         console.log(number)
//         if(number % 2 ==0) {
//             console.log(`the number ${number} is even`)
//         } else {
//             console.log(`the number ${number} is odd`)
//         }
//     });
// }

// evenOrOdd(userNumbers)



// Read 10 numbers from the user and print:
// a. The maximum number.
// b. The minimum number.
// c. The average.

// const userNumbers = prompt("Enter 10 numbers")

// const numbers = ( userNumberInput) => {
//     const arrOfnumbers = userNumberInput.split(' ')  //split(' ') = change the string to array
//     console.log(Math.max(...arrOfnumbers))
//     console.log(Math.min(...arrOfnumbers))

//     const sum = arrOfnumbers.reduce((a, b)=>{
//         return Number(a)+Number(b)
//     },0)
//     console.log(sum)

//     const evr = sum/arrOfnumbers.length
//     console.log(`the everage is ${evr}`) // "the everage is" + " " + evr
// }

// numbers(userNumbers)

/*1. Read numbers from the user, until the number 999 is entered. 
For each number:
a. Print if it is divisible by 3.
b. If it is bigger by more than 10 from the previous number, print a suitable message.*/

// const userNumber = prompt("Enter number from 0 to 999") //we get string from the prompt by default

// const numbers = (userBook) => {
//     //"45 45 48 21" //string
//     //45 // number
//     //["654", "text", true] //arrays

//     // if(userBook % 3 == 0) {
//     //     const divideNum = userBook/3
//     //     console.log(`${userBook} divide by 3, the answer is ${divideNum}`)
//     // }
//     const userLab = userBook.split('')

//     // userLab.forEach(letter => {
//     //   if(letter % 3 == 0) {
//     //       console.log(letter)
//     //   }
//     // });

//     //[3,5,5]
//     if(userLab[1] > userLab[0]) {
//         console.log(`${userLab[1]} is bigger than ${userLab[0]}`)
//     }
//    if(userLab[2] > userLab[1]) {
//        console.log(`${userLab[2]} is bigger than ${userLab[1]}`)
//    }

// }

// numbers(userNumber)


/*2. Try playing around with the function Math.abs() 
and read its documentation on MDN.Implement a function called myAbs(), 
which mimics the behavior of Math.abs().*/

// const userInputs = prompt("enter positive or negative number")

// const user = (userInput) => {
//     return Math.abs(userInput)
// }

// user(userInputs)

//Write A function named getRandomInt (min, max). 
//The function should generate a random integer between min and up to, but not including, max. 
//Tip: use Math.Random and Math.Floor.

// const getRandomInt = (min, max) => {
//     return Math.floor(Math.random() * max);

// }

//я хочу чтбы эта функция сгенерировала целое число получая минимальный и максимальный параметр 

// console.log(Math.floor((Math.random() *5)+1))
// console.log(Math.random() + 1)

const someNum = (min , max) =>{ // 2, 6
    const num = min + Math.random() * (max-min) // 2 + random * (6-2 = 4)
    return num
}

console.log(someNum(2,6))

