/* Bank System
• Initialize a variable named currBalance with the value: 1000
• Initialize a constant named PIN with the value: ‘0796'
• Prompt the user to enter a secret pin code.
• If the user entered the correct pin code, ask him how much he would like to withdraw. 
Print a nice message with the new balance.
• If the pin code was wrong, alert the user with a different message, and don’t allow him make a withdrawal.
• Add a feature: don’t let the user withdraw more than he has in his account.
*/

// const currBalance = 1000
// const PIN = '0796'

// const userPinCode = prompt("enter your secret pin code", "0000")

// if (PIN == userPinCode) {
//     const mounthToWithdraw = +prompt("Enter how much you would lide to withdraw")

//     if (mounthToWithdraw > currBalance) {
//         alert("You can not withdraw more than your balance")
//     } else {
//         const newBalance = currBalance - mounthToWithdraw
//         alert(`Your new balance is: ${newBalance}`)
//     }
// }

// if (PIN !== userPinCode) {
//     alert(`Your pin code is not correct`)
// }


/* Guess Who
• Use the alert function, and ask the user to think about an actor
• Use the confirm function and ask the user 2 yes/no questions:
Question 1: Is he a man?
▪ Yes:
● Question 2: Is he Blonde?
○ Yes: Philip Seymour!
○ No: Tom Cruise!
▪ No:
● Question 2: Is she English?
○ Yes: Keira Knightley!
○ No: Natalie Portman!
• Print the answer to the console
*/

// alert(`Can you think about an actor?`)
// const genderMan = confirm(`Is he a man?`) //yes/no - true/false

// if (genderMan) {
//     const hearColor = confirm("Is he Blonde?")
//     if (hearColor) {
//         alert("Philip Seymour!")
//     } else {
//         alert("Tom Cruise!")
//     }
// } else {
//     const english = confirm("Is she English?")
//     if(english) {
//         alert("Keira Knightley!")
//     } else {
//         alert("Natalie Portman!")
//     }
// }

/*Read a number from the user (keep it as a string such as “24367”) and then:
Basic operations:
i. Print each of its digits in a separate line.
ii. Calculate the sum of its digits.
iii. Calculate the multiplication of its digits.
iv. Sum its first and last digits.*/


//"5-5-5-5"- [5,5,5,5] - split('-')
//"25*48*78*54 "- [25,48,78,54] - split('*')


// const userNumber = prompt('Enter your number') //"5264"

// const arrayString = userNumber.split('') // ["5","2","6","4"]

/*console.log(arrayString[0])
console.log(arrayString[1])
console.log(arrayString[2])
console.log(arrayString[3])*/

//for
//do while
//while
//foreach

// const aaa = arrayString.forEach(i => {
//     return i
// })
// //console.log(aaa); //undefined

// arrayString.forEach(i => {
//     console.log(i)
// })

// console.log(arrayString.reduce((acc, curr) =>  Number(acc) + Number(curr) , 0))

// console.log(arrayString.reduce((acc, curr) =>  Number(acc) * Number(curr) ))

// console.log(Number(arrayString[0]) + Number(arrayString[arrayString.length - 1]))


// /*v. Print the number reversed.
// vi. BONUS: Print the number reversed as a number and not as string.*/
// //["4","6","2","5"] - join() => "4,6,2,5"
// //["4","6","2","5"] - join("") => "4625"
// const reverseNumber = arrayString.reverse().join("")
// console.log(reverseNumber)
// console.log(Number(reverseNumber))





