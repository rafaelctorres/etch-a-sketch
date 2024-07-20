let grid = document.querySelector(".grid");
let arrayOfSquares = [];
let body = document.querySelector("body");

function generateGrid(){
  //generate the rows
  for(let i = 0; i<16; i++){
    
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    grid.appendChild(row);
    
    arrayOfSquares[i] = [];
    
    //generate the squares
    for(let j = 0; j<16; j++){
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("style", "color: blue; background: green; height:20px; width:20px; border: solid black 1px;");
    arrayOfSquares[i][j] = square;
    row.appendChild(square);
    }
  }
}

function addEventListeners(){

    for(let i=0; i<16; i++){
        for (let j = 0; j<16; j++){
            arrayOfSquares[i][j].addEventListener("mouseover", () => {
            arrayOfSquares[i][j].setAttribute("style", "background: black; height: 20px; width: 20px; border: solid black 1px;");
            });
        }
    }
  
}

generateGrid();
addEventListeners();


