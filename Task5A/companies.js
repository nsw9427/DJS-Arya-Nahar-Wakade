// Question: Make an array: ["Boomerang","Microsoft","Uber","Google","IBM","Netflix"]
// a) Remove the first company from array
// b) Remove Uber and add Ola in its place
// c) Add Amazon at the end

let a1 = ["Boomerang","Microsoft","Uber","Google","IBM","Netflix"];
a1.shift();
a1.splice(a1.indexOf("Uber"),1,"Ola");
a1.push("Amazon");
console.log(a1);