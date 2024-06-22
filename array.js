// const students = ['mg mg', 'kyaw kyaw' ,'mya'];

// console.log(students.length - 1);
// console.log(students[students.length - 1]);

// const studentsLength = students.length;

// for (let i = 0; i < studentsLength; i++) {
//     console.log(students[students.length - 1] + " will be popped!");
//     students.pop();
// }

// console.log(students);

// const something = [2, 5, 7, 8, 0, 3, 4, 67, 8, 9, 2.2];

// const student = {
//   age: 23,
// };

// for (let i = something.length; i > -1; i--) {
//   console.log(something[i]);
// }
// for (let i = 0; i < something.length; i++) {
//     let value = something[i];

//     if (value % 2 == 0) {
//         console.log("Even!");
//     } else {
//         console.log("Odd!");
//     }
// }


// average = sum of each / number of item
// console.clear();

// const temps = [2,4,4,1];
// const numberOfTotal = temps.length;

// const result = {
//   startWithA: 0,
//   endWithY: 0,
// }

// result.startWithA = 5;
// result.endWithY = 1;

// console.log(result);

// let sumOf = 0;

// for (let index = 0; index < numberOfTotal; index++) {
//   sumOf += temps[index];
// }

// console.log(sumOf);

// console.log("Average of the temp is" , sumOf / numberOfTotal);


// function = Input > logic > Output


// console.log("My name is Mg Mg");
// console.log("My name is Kyaw Kyaw");
// console.log("My name is Mya Mya");


function sayMyName(name) { // parameters
  return "My name is .... " + name;
}


// reuseable

// reuseable

const students = [
  {
    name: "Mg Mg",
    age: 23,
    major: "Myanmar",
    minor: ["Bio", "Physics"]
  },
  {
    name: "Mg Mg",
    age: 23,
    major: "English",
    minor: ["Myanmar", "Bio"]
  },
  {
    name: "Mg Mg",
    age: 23,
    major: "Bio",
    minor: ["Physics"]
  }
];

// let minors = [];
// let majors = [];

// for (let i = 0; i < students.length; i++) {
//   const temporaryMinors = students[i].minor;

//   for (let j = 0; j < temporaryMinors.length; j++) {
//     minors.push(temporaryMinors[j]);
//   }
// }

// console.log(minors);


// function sayMyName() {
//   for(let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }

// sayMyName();
// sayMyName();

function trimAndUpperCaseForMale() {
  for (let i = 0; i < males.length; i++) {
    males[i] = males[i].toUpperCase().trim();
  }
}

function trimAndUpperCaseForFemale() {
  for (let i = 0; i < females.length; i++) {
    females[i] = females[i].toUpperCase().trim();
  }
}

function trimAndUpperCaseForAll(genderArray, isMale, genderPrefix) {
  const resultArray = [];


  for (let i = 0; i < genderArray.length; i++) {
    resultArray.push(genderPrefix + genderArray[i].toUpperCase().trim());
  }

  return resultArray;
}


const males = [" Kyaw Kyaw ", "Mg Mg "];
const females = [" Mya Mya" , "Hla Hla"];

// trimAndUpperCaseForMale();
// trimAndUpperCaseForFemale();

// console.log(trimAndUpperCaseForAll(males, true, "MG "));
// console.log(trimAndUpperCaseForAll(females, false, "MA "));
// console.log('-----');
// console.log(males);
// console.log(females);

// function cleanMyName(name) {
//   return name.trim().toUpperCase();
// }

// console.log(cleanMyName("    Kyaw Kyaw "));



// names.map(callbackFn);
















