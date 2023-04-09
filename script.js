function putt(squareQuerySelector)
{
    squareQuerySelector.innerHTML = mark
    mark == "X" ? mark = "O" : mark="X"
}

const squareQuerySelector = document.querySelectorAll(".square")
const xMarkQuery = squareQuerySelector.forEach(squareQuerySelector =>    
    {
        squareQuerySelector.addEventListener("click", () => putt(squareQuerySelector) )
    })
var mark = "X"
