const grid = document.querySelector(".grid");
const body = document.querySelector("body");
const changeResolutionButton = document.querySelector("#changeResolution");

let arrayOfSquares = [];
let numberOfSquares = 16;

changeResolutionButton.addEventListener("click", () => {
    let newNumberOfSquares = prompt('Please choose a number from 0 to 100.', '16');
    numberOfSquares = newNumberOfSquares;
    deleteGrid();
    generateGrid();
    addEventListeners();
});

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
            let r = Math.floor(Math.random()*255);
            let g = Math.floor(Math.random()*255);
            let b = Math.floor(Math.random()*255);
            arrayOfSquares[i][j].setAttribute("style", `background: rgb(${r},${g},${b}); flex: 1; border: solid black 1px;`);
            });
        }
    }
}

function deleteGrid(){
    //delete the rows
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        grid.removeChild(row);
    });
}



generateGrid();
addEventListeners();


