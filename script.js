let grid = document.querySelector(".grid");
let arrayOfSquares = [];
let body = document.querySelector("body");
let numberOfSquares = 16;
function generateGrid(){
  //generate the rows
  for(let i = 0; i < numberOfSquares; i++){
    
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    grid.appendChild(row);
    
    arrayOfSquares[i] = [];
    
    //generate the squares
    for(let j = 0; j < numberOfSquares; j++){
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    arrayOfSquares[i][j] = square;
    row.appendChild(square);
    }
  }
}

function addEventListeners(){
    for(let i = 0; i < numberOfSquares; i++){
        for (let j = 0; j < numberOfSquares; j++){
            arrayOfSquares[i][j].addEventListener("mouseover", () => {
            arrayOfSquares[i][j].setAttribute("style", "background: black; flex: 1; border: solid black 1px;");
            });
        }
    }
}


generateGrid();
addEventListeners();


