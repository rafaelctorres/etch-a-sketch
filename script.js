
let grid = document.querySelector(".grid");
let arrayOfSquares = [];
let body = document.querySelector("body");

function generateGrid(){
  for(let i = 0; i<16; i++){
    
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    grid.appendChild(row);
    
    arrayOfSquares[i] = [];
    
    for(let j = 0; j<16; j++){
    let square = document.createElement("div");
    square.setAttribute("style", "color: blue; background: green; height:20px; width:20px;");
    arrayOfSquares[i][j] = square;
    console.log(arrayOfSquares);
    row.appendChild(square);
    }
  }
}

generateGrid();