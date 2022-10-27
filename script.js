// board starts as 16x16
createGrid(16)

let boardDraw = true;

// enter and exit drawing mode
boardClick.addEventListener("click", () => {
    if(boardDraw === true) {
        boardDraw = false;
    }
     else {
        boardDraw = true;
    }
})

// apply size change
sizeApply.addEventListener("click", () => {
    let slider = document.querySelector(".slider");
    changeSize(slider.value);
})

// square color black
black.addEventListener("click", () => {
    squareColor = "black";
})

// square color white
eraser.addEventListener("click", () => {
    squareColor = "white";
})

random.addEventListener("click", () => {
    randomColor();
})

let squareColor = "black";
let draw = true;

//creates board
function createGrid(size){

    // selecting the board
    let grid = document.querySelector(".board");

    // selecting squares then clearing any existing ones
    let squares = grid.querySelectorAll('div');
    squares.forEach((div)=> div.remove());

    // creating columns and rows
    grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    let amount = size * size;

    //inserts squares into grid
    for(let i = 0; i<amount; i++) {

        let square = document.createElement("div");

        // set background color to white
        square.style.backgroundColor = "white";
        
        // when mouse is over square make it colorSquare
        square.addEventListener("mouseover", colorSquare)

        // insert square
        grid.insertAdjacentElement("beforeend", square);

        // resets grid
        reset.addEventListener("click", () => {
        square.style.backgroundColor = "white";
        })
    }
    
}

// change size of board
function changeSize(input){
    // if input is 2-100 create new grid
    if  (input >= 2 & input <=100){
    createGrid(input);
    }
    // if not then say  too many or not enough squares
    else {
        console.log("Too many or not enough squares")
    }
}


// colors square
function colorSquare() {
    if(boardDraw === true) {
        this.style.backgroundColor = squareColor; 
    }
}

function randomColor() {
    let rgb1 = Math.floor((Math.random() * 255) + 1);
    let rgb2 = Math.floor((Math.random() * 255) + 1);
    let rgb3 = Math.floor((Math.random() * 255) + 1);
    squareColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    console.log(squareColor)
}