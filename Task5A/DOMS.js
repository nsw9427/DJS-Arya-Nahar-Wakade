// Question: 
// Create 3 divs with common class name and then access them to add
// some styles and features in them using js
let boxes = document.querySelectorAll(".box");
boxes.forEach(function(box){
    box.style.color="white";
    box.style.backgroundColor="blue";
    box.style.border="2px solid black"
    box.style.margin="10px"
    box.style.height="100px"
    box.style.width="100px"
    box.style.textAlign="center"
    box.style.display="flex"
    box.style.alignItems="center"
    box.style.justifyContent="center"
})