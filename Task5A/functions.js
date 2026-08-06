// Question1: Given an array [34,98,67,85,91,37]
// Filter out the marks of students scoring more than 90

let arr = [34,98,67,85,91,37];
let newarr = arr.filter(e => {
    if(e>=90)
        return e;
})
console.log(arr);
console.log(newarr);

// Question2: Take a number n from the user 
// create an array from number 1 to n
// use the reduce method to calculalte the sum and product of numbers in array

let n = prompt("Enter a number: ");
let a = [];
for(let i = 1 ;i<=n;i++)
{
    a.push(i);
}
let sum = a.reduce(function(sum,num){
    return sum+num;    
});
let product = a.reduce((prod,num) =>{
    return prod*num;
})
console.log(sum);
console.log(product);