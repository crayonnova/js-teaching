
console.log(2 > 1);

// empty string "" => false
// zero => false
// null => false
// undefined => false

// console.log(names.map(function (name, index, names) {
//     return name;
// }));



const universityUsers = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
  { id: 4, name: "David", isActive: false },
];

const schoolUsers = [
    { id: 1, name: "DD", isActive: true },
    { id: 2, name: "BB", isActive: false },
    { id: 3, name: "CC", isActive: true },
    { id: 4, name: "KK", isActive: false },
  ];

function getActiveUserNames(users) { // users => parameter
    const filteredUsers = users.filter(function (user) {
        return user.isActive;
    });

    const userNames = filteredUsers.map(function (user) {
        return user.name;
    });

    return userNames;

    // return users.filter((user) => user.isActive).map((user) => user.name);
}

// console.log(getActiveUserNames(universityUsers));
// console.log(getActiveUserNames(schoolUsers));

//   console.log(getActiveUserNames(users));
// if no one is active: output => ":'( No Active."
// if someone is found active: output => "{username} is active."
// if more than one user is found active: output => "{username1}, {username2} are active."

// console.log(filteredNames);

// const names = ['kyaw', 'mya'];
const name = 'kyaw';
const splittedName = name.split('');

splittedName[0] = splittedName[0].toUpperCase();

console.log(splittedName.join(''));






