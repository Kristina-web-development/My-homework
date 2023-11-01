// 1. Read 3 numbers from the user 
// 2. Check if the 3rd is the sum of the first two.
// 3. If it is, print all the numbers to the console like this: 6 + 4 = 10
// 4. If not, print them like this: 3 + 5 != 10

// const userNumbers = prompt("Enter 3 numbers") //return type str
// //console.log(userNumbers)

// const user = (numbers) => {
//     const arrOfnumbers = numbers.split(' ');
//     console.log(arrOfnumbers)



//         const sum = Number(arrOfnumbers[0]) + Number(arrOfnumbers[1])

//  // = заевление
// // == сравнение - сравниваем наше значение => 5 == "5" => true
// // === сравнеине строгое - сравниваем наше значение и тип данных => 5 === "5" => false, 5 === 5 => true

//         if(sum === Number(arrOfnumbers[2])) { //type str => type number
//             console.log(`${arrOfnumbers[0]} + ${arrOfnumbers[1]} = ${arrOfnumbers[2]}`)

//             // console.log("My name is Katya and I love" + " " + 5 + " " + "number");
//             // console.log(`My name is Katya and I love ${arrOfnumbers[0]} number`);       
//         }

//         if(sum !== Number(arrOfnumbers[2])) {
//              console.log(`${arrOfnumbers[0]} + ${arrOfnumbers[1]} != ${arrOfnumbers[2]}`)

//          }
// }



// user(userNumbers)


//2. 
// 1) Read two positive numbers from the user.
// 2) Calculate the difference between them (the absolute value).
// 3) First, check that the input values are numbers (try googling something like ‘javascript
// check if number')
// 4) Print the inputs and the absolute difference between them to the console.
// 5) If the difference is smaller than both input values, print to the console that those
// numbers are relatively close.
// Something like this –
// num1 = 5, num2 = 9, diff = 4 => numbers are relatively close!






// const readNumbers = prompt("Enter 2 positive numbers") 


// const calcNumbers = (numbers) => {
//     const arrOfNumb = numbers.split(' ')
//     // const abs = -(arrOfNumb[0]-arrOfNumb[1])
//     // console.log(abs);

//     console.log(arrOfNumb);

//     const newarr = arrOfNumb.map(el => {
//         if(typeof el == "number") {
//             return el
//         } else {
//             return Number(el)
//         }
//     });

//     console.log(newarr);

//      const mathAbs = Math.abs(newarr[0]-newarr[1])


//      if(mathAbs < newarr[0] && mathAbs < newarr[1]) {
//          return console.log(`num1 = ${newarr[0]}, num2 = ${newarr[1]}, diff = ${mathAbs} => numbers are relatively close!`);
//         } else {
//             console.log(`num1 ${newarr[0]}`)
//             console.log(`num2 ${newarr[1]}`)
//             console.log(`abs ${mathAbs}`);
//         }
// }

// calcNumbers(readNumbers)

// 3. Bank System
// • Initialize a variable named currBalance with the value: 1000
// • Initialize a constant named PIN with the value: ‘0796'
// • Prompt the user to enter a secret PIN code.
// • If the user entered the correct PIN code, ask him how much he would like to withdraw.
// Print a nice message with the new balance.
// • If the pin code is wrong, alert the user with a different message, and don’t allow him
// to make a withdrawal.
// • Add a feature: don’t let the user withdraw more than he has in his account. 
// ----------
// * Each question needs to be in another function (regular or arrow)
// * You can you prompt() to get values from the client
// * Do not forget to use parameters in the function if it needs it.



// const userNumbers = prompt("Enter secret PIN code")


// const pinCode = '0796'
// console.log(pinCode);
// let currBalance = 1000
// console.log(pinCode == '0796')
// const userPin = (userCode) => {
//     //const arrOfNumbers = numbers.split(' ');
//     //console.log(arrOfNumbers)

//     //  if(userCode == pinCode) {
//     //      const userAmount = +prompt("How much he would like to withdrow?")
//     //     if(currBalance < userAmount){
//     //     alert("you can not get the money")
//     //     }
//     //     if(currBalance >= userAmount) {
//     //         currBalance = currBalance-userAmount
//     //         alert(`your current ballens is ${currBalance}`)
//     //     }
//     //  } else {
//     //      alert("your PIN code not correcrtly")
//     //  }

//     if (userCode !== pinCode) {
//         return alert("your PIN code not correcrtly")
//     }

//     const userAmount = +prompt("How much he would like to withdrow?")

//     if (currBalance < userAmount) {
//         return alert("you can not get the money")
//     }

//     currBalance = currBalance - userAmount
//     alert(`your current ballens is ${currBalance}`)
// }

// userPin(userNumbers)

/*
REGEX - test -> true/false
1. проверить если юзер код включает в себя буквы, если да, сообщить об этом юзеру (промпт).
Если юзер вбил цифры, то можно проходить дальше. 

2. Поменять предыдущие функции на if + return (на новый формат)
*/

// pattern.test(text)
// function containsOnlyNumbers(str) {
//     return /^\d+$/.test(str);
//   }


//   function containsOnlyNumbers(str) {
//     return /^[0-9]+$/.test(str);
//   }  //- [0-9] and \d -its the same


// const userCode = prompt("Enter your number code")

// const userValid = (userNumbers) => {
//     if(userNumbers != Number) {
//        return /^\d+$/.test(userNumbers)
//        //console.log(userNumbers)
//     }

//     // const userValidCode = prompt("Your code is not correct")

//     // if(userValidCode == Number) {
//     //     return alert ('your code is right')
//     // }
// }

// userValid(userCode)



/* Условие задачи: 
На вход подаются два строковых массива, ["qwe","qwe"]
необходимо вернуть true, если два массива представляют одну и ту же строку,
или false в противном случае.

Под представлением одной и той же строки подразумевается, 
что после конкатенации всех фрагментов списков, две полученные строки будут идентичными.

 Пример:
 Ввод: word1 = ["ab", "c"], word2 = ["a", "bc"]
 Вывод: true

 Объяснение:
 word1: "ab" + "c" -> "abc"  //["ab", "c"] -> "abc"
 word2: "a" + "bc" -> "abc"

 Ввод: word1 = ["a", "cb"], word2 = ["ab", "c"]
 Вывод: false
 */

const word1 = ["ab", "c"], word2 = ["etethe", "bc"]

const arrCheck = (check1, check2) => {
    // 1 option 
    //  const changedToStr1 = check1.join('') //"abc"
    //  const changedToStr2 = check2.join('') //"abc"

    //  if(changedToStr1 !== changedToStr2) {
    //      return false
    //  }

    //  return true
    // return check1 == check2

    //2 option 

    // let string1 = '';
    // let string2 = '';
    // const qqq1 = check1.forEach((str) => {
    //     return string1 += str
    // })
    // const qqq2 = check2.forEach((str) => {
    //     return string2 += str
    // })

    // if (qqq1 !== qqq2) {
    //     return false
    // }
    // return true

    // 3 option

    // const str1 = check1.toString()
    // const str2 = check2.toString()

    // if(str1 !== str2) {
    //       return false
    // }

    // return true

    // 4 option

    let string1 = ''
    for(let i=0; i<check1.lenght; i++ ) {
        string1 =+ check1[i]
    }
    let string2 = ''
    for(let i=0; i<check2.lenght; i++ ) {
        string2 =+ check2[i]
    }

    if(string1!== string2) return false

    return true
}

console.log(arrCheck(word1, word2));