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
console.log(fun1Const.getName());
/* Example */
var userNumbers = prompt("Enter 10 numbers"); //prompt return string
var numbers = function (userNumberInput) {
    var arrOfnumbers = userNumberInput.split(' '); //split(' ') = change the string to array //["","",""]
    //console.log(Math.max(...arrOfnumbers)) //The error is because the array is with strings -> ["","",""]
    var newArr = arrOfnumbers.map(function (item) {
        return Number(item);
    });
    // console.log(newArr);
    // console.log(arrOfnumbers);
    console.log(Math.min.apply(Math, newArr));
    var sum = arrOfnumbers.reduce(function (a, b) {
        return Number(a) + Number(b);
    }, 0);
    console.log(sum);
    var evr = sum / arrOfnumbers.length;
    console.log("the everage is " + evr); // "the everage is" + " " + evr
};
numbers(userNumbers);
/* HOMEWORK */
/* chenge all what you can to typescript */
// ------- 1 ------- //
// const userNumbers: string = prompt("Enter 10 numbers") //how to change string to numbers
// console.log(userNumbers)
// const evenOrOdd = (numbers) => {
//     const arrOfnumbers = numbers.split(' '); //change the string to array
//     console.log(arrOfnumbers)
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
// --------- 2 --------//
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
// ------ 3 ------ //
// const userInputs = prompt("enter positive or negative number")
// const user = (userInput) => {
//     return Math.abs(userInput)
// }
// user(userInputs)
// ------ 4 -----//
// const someNum = (min , max) =>{ // 2, 6
//     const num = min + Math.random() * (max-min) // 2 + random * (6-2 = 4)
//     return num
// }
// console.log(someNum(2,6))
