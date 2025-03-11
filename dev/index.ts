import Permissions from '../src';


const permissions = new Permissions([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
]);

const bitwisePerms = permissions.to(["1", "4", "2"]);
console.log(bitwisePerms); // Output: 5 (1 | 4)

const permsArray = permissions.from(11);
console.log(permsArray); 