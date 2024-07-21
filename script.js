const grid = document.querySelector(".grid");
const body = document.querySelector("body");
const changeResolutionButton = document.querySelector("#changeResolution");

let arrayOfSquares = [];
let numberOfSquares = 16;
let alphaColor = 0;

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

    grid.addEventListener("mouseover", (e)=>{
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        let target = e.target;
        target.setAttribute("style", `background: rgba(${r},${g},${b},${alphaColor}); flex: 1; border: solid black 1px;`);
        if (alphaColor<1){
            alphaColor += 0.1;
        }
    })

    grid.addEventListener("mouseleave", () => alphaColor = 0);
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



