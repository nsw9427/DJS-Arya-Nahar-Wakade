// Question:
// Create a toggle button that changes the screen to dark mode when clicked & 
// light mode when clicked again

let button = document.querySelector(".button");
button.addEventListener("click" , function(){
    button.classList.toggle("light");
    button.classList.toggle("dark");
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        button.innerText = "Change to Light Theme";
    } else {
        button.innerText = "Change to Dark Theme";
    }
});