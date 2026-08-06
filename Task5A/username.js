// Question:
// Input full name from the user and then generate username for them starting with @ and 
// ending with the full name length


let name = prompt("Enter your full name: ");
name = name.toLowerCase().split(" ").join("");
name = "@" + name + String(name.length);
confirm("Username: "+name);