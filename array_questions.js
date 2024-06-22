const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 72 },
  { name: "Charlie", score: 90 },
  { name: "David", score: 78 },
];

const consoleForEachCallbackFunction = (student, index, students) => {
  console.log(`Student Name: ${student.name} , Score: ${student.score}`);
}

// const consoleMapCallbackFunction = (student, index, students) => {
//   return { name: student.name, status: (student.score < 75) ? "Fail" : "Pass" };
// }

const consoleMapCallbackFunction = (student) => {
  return {
    name: student.name, 
    status: (student.score < 75) ? "Fail" : "Pass"
  };
}

// students.forEach(consoleForEachCallbackFunction);
// console.log(students.map(consoleMapCallbackFunction));

const salesData = [
  { 
    salesperson: "Alice", 
    region: "North", 
    sales: [
      { item: "Laptop", quantity: 5 },
      { item: "Phone", quantity: 10 },
      { item: "Tablet", quantity: 3 }
    ] 
  },
  { 
    salesperson: "Bob", 
    region: "South", 
    sales: [
      { item: "Laptop", quantity: 2 },
      { item: "Phone", quantity: 5 },
      { item: "Tablet", quantity: 7 }
    ] 
  },
  { 
    salesperson: "Charlie", 
    region: "East", 
    sales: [
      { item: "Laptop", quantity: 8 },
      { item: "Phone", quantity: 7 },
      { item: "Tablet", quantity: 2 }
    ] 
  }
];

// [
//   { salesperson: "Alice" },
//   { salesperson: "Bob"},
//   { salesperson: "Charlie"}
// ]

// [
//   { salesperson: "Alice", summary: "Laptop: 5, Phone: 10, Tablet: 3" },
//   { salesperson: "Bob", summary: "Laptop: 2, Phone: 5, Tablet: 7" },
//   { salesperson: "Charlie", summary: "Laptop: 8, Phone: 7, Tablet: 2" }
// ]

console.log('asdf')

const mappedResult = salesData.map(function(record) {
  const mappedSummaryData = record.sales.map(function (saleRecord) {
    return `${saleRecord.item}: ${saleRecord.quantity}`;
  });

  return { salesperson: record.salesperson, summary: mappedSummaryData.join(', ') };
});
console.log(mappedResult);
console.clear();

const school = [
  { name: "Mg Mg" , gender: 'Male' },
  { name: "Mya" , gender: 'Female' },
  { name: "Kyaw" , gender: 'Male' },
  { name: "Kaung" , gender: 'Male' },
];

// const filteredSchoolWithMale = school.filter(function(student, index, school) {
//     return student.gender == "Male"
// });

// const filteredSchoolWithFemale = school.filter(function(student, index, school) {
//   return student.gender == "Female"
// });

function calculateGender(genderType) {
  let result = school.filter(function (student, index, school) {
    return student.gender == genderType;
  });

  return result.length;
}

const maleCount = calculateGender("Male"); // 3
const femaleCount = calculateGender("Female"); // 1

console.log(`Male: ${maleCount}, Female: ${femaleCount}`); // Male: 3, Female 1

// console.log(`Male: ${filteredSchoolWithMale.length}, Female ${filteredSchoolWithFemale.length}`);
