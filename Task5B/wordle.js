
let h=6;
let w=5;
let r,c;
let gameOver=false;

let validWords = [];


function winner(row)
{
    
    for(let i=0;i<5;i++)
    {
        let currBox = document.getElementById(row.toString() + "-" + i.toString());
        setTimeout(() => {
            
            currBox.classList.add("win");
        }, i*150);
    }
}


function wrong(row)
{
    for(let i=0;i<5;i++)
    {
        let currBox = document.getElementById(row.toString() + "-" + i.toString());
        currBox.classList.add("wrong");
        
        setTimeout(() => {
            currBox.classList.remove("wrong");
        }, 600);
    }   
}


function check(row,word)
{
    let count=0;
    let lcount = {};


    for(let i=0;i<5;i++)
    {
        let currBox = document.getElementById(row.toString()+"-"+i.toString());
        let guess = currBox.innerText.toLowerCase();

        if(guess === word[i])
        {
            currBox.dataset.status ='green';
            count++;
        }

        else
        {
            lcount[word[i]] = (lcount[word[i]] || 0) + 1;
        }
    }


    for(let i=0;i<5;i++)
    {
        let currBox = document.getElementById(row.toString()+"-"+i.toString());
        let guess = currBox.innerText.toLowerCase();
        setTimeout(()=>{

            currBox.classList.add("flip");

            if(currBox.dataset.status=='green')
            {
                currBox.style.backgroundColor="#1fd655";
                currBox.style.border="2px solid #1dba4c";
                currBox.style.color="white";
            }
            else if(lcount[guess]>0)
            {
                currBox.style.backgroundColor="#ff9500";
                currBox.style.border="2px solid #db8000";
                currBox.style.color="white";
                lcount[guess]--;
            }
            else
            {
                currBox.style.backgroundColor="#505050";
                currBox.style.border="2px solid #414141";
                currBox.style.color="white";
            }

            
        },i*500);
        
    }

    setTimeout(() => {
        if (count === 5)
        {

            gameOver = true;
            winner(row);
        }

    }, 2500);
}

function gameStart()
{
    let isAnimating = false;
    let word = validWords[Math.floor(Math.random()*(validWords.length-1))];
    console.log(word);
    r=0;
    c=0;
    document.addEventListener("keyup" , function(e){
        
        if(gameOver || isAnimating) return;


            if(e.code.startsWith("Key"))
            {
                if(c<w)
                {
                    let currBox = document.getElementById(r.toString()+"-"+c.toString());
                    if(currBox.innerText==="")
                    {
                        currBox.innerText=e.code[3];
                        c+=1;
                    }  
                }
            }
    
            else if(e.code === "Backspace")
            {
                if(c > 0)
                {
                    c--;
                    let currBox = document.getElementById(
                        r.toString() + "-" + c.toString()
                    );
    
                    currBox.innerText = "";
                }
            }

            else if(e.code === 'Enter')
            {
                if(r<h && c==w)
                {
                    let guessedWord = "";

                    for(let i = 0; i < 5; i++)
                    {
                        let currBox = document.getElementById(r + "-" + i);
                        guessedWord += currBox.innerText.toLowerCase();
                    }

                    if(!validWords.includes(guessedWord))
                    {
                        wrong(r);
                        return;
                    }
                    isAnimating=true;
                    check(r,word);
                    

                    setTimeout(() => {
                        
                        if(gameOver) return;
                        r+=1;
                        c=0;
                        isAnimating = false;
                    }, 3500);
                }

                setTimeout(() => {
                    
                    if(r==h && !gameOver)
                    {
                            
                        let ans = document.querySelector(".correct-ans");
                        ans.innerText = "Correct Ans: "+word.toUpperCase();
                        ans.style.display="block";
                    }
                }, 3500);
                


            }
    });
}




function initialise()
{
    const container = document.querySelector(".container");
    for(let i=0;i<h;i++)
    {
        for(let j=0;j<w;j++)
        {
            const letterBox = document.createElement("span");
            letterBox.classList.add("letterBoxes");
            container.appendChild(letterBox);
            letterBox.id = i.toString() + "-" + j.toString();
        }
    }

    gameStart();

}

fetch("words.txt")
.then(response => response.text())
.then(data => {

    validWords = data
        .split("\n")
        .map(word => word.trim().toLowerCase())
        .filter(word => word.length === 5);

    console.log(validWords);

    initialise();
});
