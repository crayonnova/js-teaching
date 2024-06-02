// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
// Declaration

// function add(firstNumber = 0, secondNumber = 0) { //firstNumber and secondNumber are called parameters
//     return firstNumber + secondNumber;
// }

// function subtract(firstNumber = 0, secondNumber = 0) { //firstNumber and secondNumber are called parameters
//     const validatedFirstNumber = validateInput(firstNumber);
//     const validatedSecondNumber = validateInput(secondNumber);

//     if (validatedFirstNumber.success && validatedSecondNumber.success) {
//         return parseInt(firstNumber) - parseInt(secondNumber);
//     } 
    
//     return "Something went wrong!";
// }

// function validateInput(input) {
//     if(isNaN(parseInt(input))) {
//         return false;
//     } else {
//         return true;
//     }
// }

// function isNoStringNumber(input) {
//     if(isNaN(input)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(subtract("1", "3"))

// function validateInput(input) {
//     if (typeof input != 'number') {
//         const parseIntNumber = parseInt(input);

//         if (isNaN(parseIntNumber)) {
//             return { isSuccess: false, message: "Your input is not a calculable value." }
//         }
//     } else {
//         return { isSuccess: true, message: "" }
//     }
// }

// console.log(validateInput("3"));


// console.log(add(1, 2) + add(2, 2));
// console.log(add(1,2) + add(2, 4));
// console.log(subtract("asdf", 3));
// function add1(firstNumber = 0, secondNumber = 0, thirdNumber = 0) {
//     return firstNumber + secondNumber + thirdNumber;
// }

const contacts = [{ name: 'Mg Mg', age: 23 }, { name: "Kyaw Kyaw", age: 11 }];
console.log(contacts.sort((first, second) => first.name.localeCompare(second.name)));

