var userName = "2342342";
var user = {
    name: "Kristina",
    age: 18
};
var user123 = {
    name: "Kristina"
};
var todo = {
    date: "123",
    title: "234234",
    done: true
};
var todosList = [];
var todosList2 = [];
var todo1 = {
    date: "123",
    title: "234234",
    done: true
};
var fun1Const = {
    name: "erhgeorg",
    getName: function () {
        return "user name is :  " + this.name;
    }
};
//console.log(fun1Const.getName())
/* Example */
//  const userNumbers: string = prompt("Enter 10 numbers") //prompt return string
// const numbers = ( userNumberInput: string) => {
//     const arrOfnumbers: Array<string> = userNumberInput.split(' ')  //split(' ') = change the string to array //["","",""]
//     //console.log(Math.max(...arrOfnumbers)) //The error is because the array is with strings -> ["","",""]
//     const newArr = arrOfnumbers.map((item)=>{ //You can use map() to cheng the type of value to type number
//         return Number(item)
//     })
//     // console.log(newArr);
//     // console.log(arrOfnumbers);
//     console.log(Math.min(...newArr))
//     const sum: number = arrOfnumbers.reduce((a, b)=>{
//         return Number(a)+Number(b)
//     },0)
//     console.log(sum)
//     const evr: number = sum/arrOfnumbers.length
//     console.log(`the everage is ${evr}`) // "the everage is" + " " + evr
// }
// numbers(userNumbers)
/* HOMEWORK */
/* chenge all what you can to typescript */
// ------- 1 ------- //
// const userNumbers: string = prompt("Enter 10 numbers") //how to change string to numbers
// const evenOrOdd = (numbers: string) => {
//     const arrOfnumbers: Array<string> = numbers.split(' '); //change the string to array
//     const newArr: Array<number> = arrOfnumbers.map((item)=> {
//     return Number(item)
//      })
//        newArr.forEach(number => {
//        if(number % 2 ==0) {
//             console.log(`the number ${number} is even`)
//         } else {
//             console.log(`the number ${number} is odd`)
//         }
//     });
// }
//  evenOrOdd(userNumbers)
// --------- 2 --------//
// const userNumber: string = prompt("Enter number from 0 to 999"); //we get string from the prompt by default
// const numbers = (userBook: string) => {
//   //"45 45 48 21" //string
//   //45 // number
//   //["654", "text", true] //arrays
//   const userLab: Array<string> = userBook.split("");
//   const newUserLab: Array<number> = userLab.map((item) => {
//     return Number(item);
//   });
//   newUserLab.forEach((letter) => {
//     if (letter % 3 == 0) {
//       console.log(letter);
//     }
//   });
//   //[3,5,5]
//   if (userLab[1] > userLab[0]) {
//     console.log(`${userLab[1]} is bigger than ${userLab[0]}`);
//   }
//   if (userLab[2] > userLab[1]) {
//     console.log(`${userLab[2]} is bigger than ${userLab[1]}`);
//   }
// };
// numbers(userNumber);
// ------ 3 ------ //
// const userInputs: string = prompt("enter positive or negative number")
// const userii = (userInput: string) => {
//     const abs: number = Math.abs(Number(userInput))
//     console.log(abs)
// }
// userii(userInputs)
// ------ 4 -----//
// const someNum = (min:number , max:number): number =>{ // 2, 6
//     const num:number = min + Math.random() * (max-min) // 2 + random * (6-2 = 4)
//     return num
// }
// console.log(someNum(2,6))
