function putMark(squareQuerySelector)
{
    if (player1Mark == "X")
    {
        if (tour == 0 || tour == 2 || tour ==  4|| tour == 6 || tour == 8)        
        {
            squareQuerySelector.innerHTML = player1Mark
        }
        else
        {
            squareQuerySelector.innerHTML = player2Mark   
        }        
    }
    else
    {
        if (tour == 0 || tour == 2 || tour ==  4|| tour == 6 || tour == 8)        
        {
            squareQuerySelector.innerHTML = player1Mark
        }
        else
        {
            squareQuerySelector.innerHTML = player2Mark  
        }        
    }
}
function player1chooseX()
{
    player1Mark = "X"
    player2Mark = "O"
    console.log("isse")
    return [player1Mark, player2Mark]
}
function player1chooseO()
{
    player1Mark = "O"
    player2Mark = "X"
    console.log("ayay")
    return [player1Mark, player2Mark]
}

let player1Mark 
let player2Mark
const squareQuerySelector = document.querySelectorAll(".square")
const xMarkQuerySelector = document.querySelector(".Xbutton")
const oMarkQuerySelector = document.querySelector(".Obutton")
const xMarkQuery = squareQuerySelector.forEach(squareQuerySelector =>    
    {
        squareQuerySelector.addEventListener("click", () => putMark(squareQuerySelector))
    })
const xButtonClick = xMarkQuerySelector.addEventListener("click", player1chooseX)
const oButtonClick = oMarkQuerySelector.addEventListener("click", player1chooseO)
let tour = 0