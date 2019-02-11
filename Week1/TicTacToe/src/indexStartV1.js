// start with these global variables
var xIsNext = true;
var winner = null;
var squares = Array(9).fill(null);
var winningLine = Array();
var lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];
var clicked;
function init()
{
    // Add an onclick handler to all of the squares
    // The name attribute for all of the divs is square
    // Use the function handleClick to handle the event 
    var i;
   
    for(i=0; i<squares.length; i++){
        var clickSquare = document.getElementById(i);
        
        clickSquare.addEventListener("click",handleClick);
     
    }
}

function handleClick() {
 
clicked = event.srcElement.id;
  for(var i =0; i<squares.length; i++){
    if(i == clicked){
        if(xIsNext == true){



        event.srcElement.innerHTML = "X";
        squares[clicked] = "X";
        xIsNext=false;
        event.srcElement.addEventListener("click", doNothing);
        event.srcElement.removeEventListener("click",handleClick);
            if(calculateWinner()==true){
                highlightWinner()
                disableAll();
            }
        }
        else{

        event.srcElement.innerHTML="O";
        squares[clicked] = "O";
        xIsNext=true;
        event.srcElement.addEventListener("click", doNothing);
        event.srcElement.removeEventListener("click",handleClick);
            if(calculateWinner()==true){
                highlightWinner()
                disableAll();
            }
        }
 
    }
    if(calculateWinner()==true){
        disableAll();
    }
    console.log(calculateWinner());
}

  
  
   
    // Get the id from the square and put it in a variable
    // Remember that the id is an integer 0 - 8

    // Set the element in the squares array to the player's symbol
    // Update the inner html for this square in the UI
    // Set the onclick handler for this square in the UI to an empty anonymous function or arrow function
    // Update the variable xIsNext

    // If calculateWinner returns true
    // highlight the winner and disable all of the squares
    // otherwise update the status in the UI to display the player
}
function doNothing(){
    return 0;
}

function calculateWinner() {
    for (var i = 0; i < lines.length; i++) {
        var a = lines[i][0];
        var b = lines[i][1];
        var c = lines[i][2];       
        if (squares[a] && 
        squares[a] === squares[b] && 
        squares[a] === squares[c]) {
            winner = squares[a];
            winningLine = lines[i];
            return true;
        }
    }
    winner = null;
    winningLine = Array();
    return false;
}


function highlightWinner(winner) {

    var winner= document.getElementById("status")

    if(xIsNext == false){
    winner.innerHTML = "X has won!";
    }

    if(xIsNext==true){
    winner.innerHTML = "O has won!";
    }

    for(i = 0; i<winningLine.length; i++){
        square = document.getElementById(winningLine[i]);
        square.className += " red";

    }
    // Update the status in the UI to display the winner
    // Iterate through the winningLine array.  It contains the indices of the winning squares
    //      get the next square using the current index in the winningLine array as the id
    //      add the class red to the square
    // Disable all of the squares

}
 
function disableAll() {

    // Set the onclick handler for all squares to function that does nothing
    // The id of the square is a number 0 - 8
    for(var i =0; i<squares.length; i++){
        clickSquare.addEventListener("click", doNothing);
    }
}

// When the page has finished loading, call the function init    

window.onload = init;