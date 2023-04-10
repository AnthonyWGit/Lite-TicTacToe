function putMark(squareQuerySelector)
{
    if (player1Mark == "X" && active == true && (squareQuerySelector.innerHTML == "" ))
    {
        if (tour == 0 || tour == 2 || tour ==  4|| tour == 6 || tour == 8)        
        {
            squareQuerySelector.innerHTML = player1Mark
        }
        else
        {
            squareQuerySelector.innerHTML = player2Mark   
        }
        tour++        
        placeholder = placeholderSelector.innerHTML = tour
    }
    else if (player1Mark == "O" && active == true && (squareQuerySelector.innerHTML == ""))
    {
        if (tour == 0 || tour == 2 || tour ==  4|| tour == 6 || tour == 8)        
        {
            squareQuerySelector.innerHTML = player1Mark
        }
        else
        {
            squareQuerySelector.innerHTML = player2Mark  
        }        
        tour++
        placeholder = placeholderSelector.innerHTML = tour        
    }
    else
    {

    }
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

let player1Mark 
let player2Mark
let active = false
let tour = 0
const squareQuerySelector = document.querySelectorAll(".square")
const xMarkQuerySelector = document.querySelector(".Xbutton")
const oMarkQuerySelector = document.querySelector(".Obutton")
const placeholderSelector = document.querySelector(".placeholder")
const xMarkQuery = squareQuerySelector.forEach(squareQuerySelector =>    
    {
        squareQuerySelector.addEventListener("click", () => putMark(squareQuerySelector))
    })
const cells = [...document.querySelectorAll(".square")]    
const xButtonClick = xMarkQuerySelector.addEventListener("click", player1chooseX)
const oButtonClick = oMarkQuerySelector.addEventListener("click", player1chooseO)
console.log(cells)
let placeholder
