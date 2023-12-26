let userScore=0;
let compScore=0;



const genCompChoice = () => {
    const options =["Rock","Scissor","Paper"];
     let ind = Math.floor(Math.random()*3);
    //  console.log(ind);
     return options[ind];
}

const result = (userWin, userChoice, compChoice) => {
    if(userWin)
    {   
        userScore++;
        document.querySelector(".msg").innerText=`Congratulations! You Win. ${userChoice} beats ${compChoice}`;
        document.querySelector(".msg").style.backgroundColor="green";
        document.querySelector(".userScore").innerText=userScore;
    }
    else
    {
        compScore++;
        document.querySelector(".msg").innerText=`Opps You Lose. ${compChoice} beats ${userChoice}`;
        document.querySelector(".msg").style.backgroundColor="red";
        document.querySelector(".compScore").innerText=compScore;
    }
    
    
}

const playGame = (userChoice) => {
     
    const compChoice = genCompChoice();

    if(userChoice===compChoice)
    {
        document.querySelector(".msg").innerText="Game Draw. Play again!";
        document.querySelector(".msg").style.backgroundColor= "#081b31";
    }
    
    else
    {
        let userWin = true;
        if(userChoice==="Rock")
        {
            userWin = compChoice==="Paper"? false : true;
        }
        else if(userChoice==="Paper")
        {
            userWin = compChoice==="Scissor"? false : true;
        }
        else
        {
            userWin = compChoice==="Rock"? false : true;
        }
        result(userWin, userChoice, compChoice);

    }
}

const choices=document.querySelectorAll(".choice");
for(let i=0; i<choices.length; i++)
{   
    choices[i].addEventListener("click", () => {
            const userChoice=choices[i].getAttribute("id");
            // console.log("choice was clicked" , userChoice);

            playGame(userChoice);
    })
}