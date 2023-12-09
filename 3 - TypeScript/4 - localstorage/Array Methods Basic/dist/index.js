// ----- 1 ----- //
//const numbersArray = [2, 56, 44, 66, 5, 3];
// ----- 1.1. ----- //
//1.1. Define the array type and use the declaration.
var numbersArray = [2, 56, 44, 66, 5, 3];
// ----- 1.2. ----- //
//1.2. Check the length of the array
// const arrayLength: number = numbersArray.length;
// console.log("The length of the array is:", arrayLength);
// ----- 1.3. ----- //
//1.3. Return the last index of the array - use at least 3 options on how we can return it.
// 1 option 
// const lastIndex1: number = numbersArray[numbersArray.length -1];
// console.log("Option 1 - Last Index:", lastIndex1);
// //2 option 
// const lastIndex2: number = numbersArray.slice(-1)[0];
// console.log("Option 2 - Last Index:", lastIndex2);
// //3 option 
// const lastIndex3: number = numbersArray.pop();
// console.log("Option 3 - Last Index:", lastIndex3);
// ----- 1.4. ----- //
//Return all the numbers that are bigger than 10.
// const biggerThen10: Array<number> = numbersArray.filter(number => number > 10);
// console.log("Numbers bigger than 10:", biggerThen10);
// // ----- 1.5. ----- //
// //1.5. Return all the numbers that are divisible by 2.
// const numbersDivby2: Array<number>= numbersArray.filter(number => number % 2 === 0);
// console.log("Numbers divisible by 2:", numbersDivby2);
// // ----- 1.6. ----- //
// //1.6. Return all the odd numbers.
// const oddNumbers: Array<number> = numbersArray.filter(number => number % 2 !== 0)
// console.log("Odd numbers:", oddNumbers)
// // ----- 1.7. ----- //
// // 1.7. Return a new array (use numbersArray) with all the numbers multiplied by 4.
// const numbersMultipliedBy4: Array<number> = numbersArray.map(number => number * 4)
// console.log("numbers multiplied by 4:", numbersMultipliedBy4)
// // ----- 1.8. ----- //
// //1.8. Return a new array (use numbersArray) where all the numbers will type string 
// const stringNumbersArray: Array<string> = numbersArray.map(number => String(number));
// console.log("Numbers as strings:", stringNumbersArray);
// // ----- 1.9. ----- //
// //1.9. Return a new array (use numbersArray) where all numbers get key - example : [{key: number}, {key: number}]
// interface KeyInt { //always object
//     key: number
// }
// // type KeyType = { //string/number/object/array
// //     key: number
// // }
// const newArrayWithKeys: Array<KeyInt> = numbersArray.map(number => ({ key: number })); // {} = object
// console.log("Array with keys:", newArrayWithKeys);
// // ----- 1.10. ----- //
// // 1.10. Return descending sorted array.
var descendingSortedArray = numbersArray.sort(function (a, b) { return b - a; });
var escendingSortedArray = numbersArray.sort(function (a, b) { return a - b; });
console.log("Descending sorted array:", descendingSortedArray);
