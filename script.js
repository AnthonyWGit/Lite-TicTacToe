function putMark(squareQuerySelector)
{
    if (player1Mark == "X" && active == true && (squareQuerySelector.innerHTML == "" ))             //Check if the game is active and if there is nothing in 
    {
        if (turn == 0 || turn == 2 || turn ==  4|| turn == 6 || turn == 8)                          //the cell
        {
            turnMessage = turnMessageQuerySelector.innerHTML = "X turn"
            squareQuerySelector.innerHTML = player1Mark
        }
        else
        {
            turnMessage = turnMessageQuerySelector.innerHTML = "O turn"            
            squareQuerySelector.innerHTML = player2Mark   
        }
        turn++        
        placeholder = placeholderSelector.innerHTML = turn
    }
    else if (player1Mark == "O" && active == true && (squareQuerySelector.innerHTML == ""))
    {
        if (turn == 0 || turn == 2 || turn ==  4|| turn == 6 || turn == 8)        
        {
            turnMessage = turnMessageQuerySelector.innerHTML = "O turn"   
            squareQuerySelector.innerHTML = player1Mark
        }
        else
        {
            turnMessage = turnMessageQuerySelector.innerHTML = "X turn"
            squareQuerySelector.innerHTML = player2Mark  
        }        
        turn++
        placeholder = placeholderSelector.innerHTML = turn        
    }
    else
    {

    }
    winSituation()
}
function player1chooseX()                  
{
    player1Mark = "X"
    player2Mark = "O"
    active = true
    console.log("isse")
    return [player1Mark, player2Mark]
}
function player1chooseO()
{
    player1Mark = "O"
    player2Mark = "X"
    active = true
    console.log("ayay")
    return [player1Mark, player2Mark]
}

function winSituation() 
{
    if (((document.querySelector(".sq1").innerHTML == "O" && document.querySelector(".sq2").innerHTML== "O" && document.querySelector(".sq3").innerHTML == "O") ||
        (document.querySelector(".sq4").innerHTML == "O" && document.querySelector(".sq5").innerHTML== "O" && document.querySelector(".sq6").innerHTML == "O") ||
        (document.querySelector(".sq7").innerHTML == "O" && document.querySelector(".sq8").innerHTML== "O" && document.querySelector(".sq9").innerHTML == "O") ||
        (document.querySelector(".sq1").innerHTML == "O" && document.querySelector(".sq5").innerHTML == "O" && document.querySelector(".sq9").innerHTML == "O")||
        (document.querySelector(".sq3").innerHTML == "O" && document.querySelector(".sq5").innerHTML == "O" && document.querySelector(".sq7").innerHTML == "O")||        
        (document.querySelector(".sq1").innerHTML == "O" && document.querySelector(".sq4").innerHTML == "O" && document.querySelector(".sq7").innerHTML == "O")||
        (document.querySelector(".sq2").innerHTML == "O" && document.querySelector(".sq5").innerHTML == "O" && document.querySelector(".sq8").innerHTML == "O")||
        (document.querySelector(".sq3").innerHTML == "O" && document.querySelector(".sq6").innerHTML == "O" && document.querySelector(".sq9").innerHTML == "O"))
        && active == true)
    {
        alert(" O : You W I N")
        active =false           //Ends the game
    }
    else if (((document.querySelector(".sq1").innerHTML == "X" && document.querySelector(".sq2").innerHTML== "X" && document.querySelector(".sq3").innerHTML == "X") ||
    (document.querySelector(".sq4").innerHTML == "X" && document.querySelector(".sq5").innerHTML== "X" && document.querySelector(".sq6").innerHTML == "X") ||
    (document.querySelector(".sq7").innerHTML == "X" && document.querySelector(".sq8").innerHTML== "X" && document.querySelector(".sq9").innerHTML == "X") ||
    (document.querySelector(".sq1").innerHTML == "X" && document.querySelector(".sq5").innerHTML == "X" && document.querySelector(".sq9").innerHTML == "X")||
    (document.querySelector(".sq3").innerHTML == "X" && document.querySelector(".sq5").innerHTML == "X" && document.querySelector(".sq7").innerHTML == "X")||        
    (document.querySelector(".sq1").innerHTML == "X" && document.querySelector(".sq4").innerHTML == "X" && document.querySelector(".sq7").innerHTML == "X")||
    (document.querySelector(".sq2").innerHTML == "X" && document.querySelector(".sq5").innerHTML == "X" && document.querySelector(".sq8").innerHTML == "X")||
    (document.querySelector(".sq3").innerHTML == "X" && document.querySelector(".sq6").innerHTML == "X" && document.querySelector(".sq9").innerHTML == "X"))
    && active == true)
    {
        alert("X : You W I N")
        active = false          //Ends the game
    }
}
//________________________________________________VARIABLES_____________________________________________________
let mark = ["X","O"]
let player1Mark 
let player2Mark
let active = false                                                      //The player has to choose X or O first to begin the game
let turn = 0
let placeholder                                                         //Placeholder is the turn counter
let turnMessage
//_________________________________________________CONST___________________________________________________________
const squareQuerySelector = document.querySelectorAll(".square")
const xMarkQuerySelector = document.querySelector(".Xbutton")
const oMarkQuerySelector = document.querySelector(".Obutton")
const placeholderSelector = document.querySelector(".placeholder")
const turnMessageQuerySelector = document.querySelector(".message")
const xMarkQuery = squareQuerySelector.forEach(squareQuerySelector =>    
    {
        squareQuerySelector.addEventListener("click", () => putMark(squareQuerySelector))           //Makes so the player can click a cell 
    })
const cells = [...document.querySelectorAll(".square")]    
const xButtonClick = xMarkQuerySelector.addEventListener("click", player1chooseX)
const oButtonClick = oMarkQuerySelector.addEventListener("click", player1chooseO)
console.log(cells)
