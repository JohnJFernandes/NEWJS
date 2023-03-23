let activePlayer = 'X';

let selectedSquares = [];

function placeXOrO(squareNumber)  {
    if (!selectedSquares.some(element => element.includes(squareNumber)))  {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X')  {
            select.style.backgroundImage = 'url("images/bluelex.jpg")';
        } else {
            select.style.backgroungImage =- 'url("images/redimp.jpg")';
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        audio('./media/completed.mp3');
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () {computersTurn(); }, 1000);
        }
        return true;
    }
    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success)  {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare))  {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }

}
//This function parses the selectedSquares array to search for win conditions.
//drawLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    // X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X')) {drawWinline(50, 100, 558, 100) }
    // X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinline(50, 304, 558, 304) }
    // X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinline(50, 508, 558, 508) }
    // X 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinline(100, 50, 100, 558) }
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinline(304, 50, 304, 558) }
    // X 2, 5, 8 condtion.
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinline(508, 50, 508, 558) }
    // X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinline(100, 508, 510, 90) }
    // X 0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinline(100, 100, 520, 520) }
    // O 0, 1, 2 condtion.
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinline(50, 100, 558, 100) } 
    // O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '50')) {drawWinline(50, 304, 558, 304) }
    // O 6, 7, 8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinline(50, 304, 558, 508) }
    // O 0, 3, 6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinline(100, 50, 100, 558) }
    // O 1, 4, 7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinline(304, 50, 304, 558) }
    // O 6, 4, 2 condition.
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinline(508, 50, 508, 558) }
    // O 6, 7, 8 condition.
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinline(100, 508, 510, 90) }
    // O 0, 4, 8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinline(100, 100, 520, 520) }
    //This condition checks for a tie. If none of the above conditions are met and 
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound.
        audio('.media/fireball.mp3');
        //This funciton sets a .3 second timer before the resetGame is called.
        setTimeout(function () {resetGame(); }, 500);
    }
//This function checks if an array includes 3 strings. It's use to check win condition

    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to checke for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array then
        //true is returned and our else if condition executes the drawLine() function.
        if (a === true && b === true && c === true) {return true; }
    }
}

//This function makes our body element temporatily unclickable.
function disableClick() {
    //This makes our body unclickable.
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second.
    setTimeout(function () {body.style.pointerEvents = 'auto'; }, 1000);
}

//This function takes a string parameter of the path you set earlier for
//placement sound('.media/place.mp3)
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound.
    audio.play();
} 
//This function utilizes HTML canvas to draw win lines.
function drawWinline (coordX1, coordY1, coordX2, coordY2)  {
    //This line acceses our HML canvas element
    const canvas = document.getElementById('win-lines');
    //This line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the start of ta line x axis is.
    let x1 = coordX1,
    //This line idicates where the the start of a lines y axis is.
        y1 = coordY1,
        //This line indicates where the end of a line x axis is.    
        x2 = coordX2,
        //This line idicates where the end of a lines x axis is
        y2 =coordY2,
        //This variable stores temporary x axis data we update in our animation loop.
        x = x1,
        //This variable stores temporary y axis data we update in our animation loop.
        y = y1;
    //This function interacts with the canvas.
    function animateLineDrawing()  {
        //This variable creates a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from the last loop iteration.
        c.clearRect(0, 0, 608, 608);
        //This method starts a new path.
        c.beginPath();
        //This method moves us to a starting point in our line.
        c.moveTo(x1, y1);
        //This method indicates the end point in our line.
        c.lineTo(x, y);
        //This method sets the color of our line.
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //This method draws everything we laid out above.
        c.stroke();
        //This condition checks if we-ve reached the endpoints.
        if (x1 <= x2 && y1 <=y2) {
            //This condition adds 10 to the previous end x endpoint.
            if (x < x2) {x += 10; }
            //This condition add 10 to the previous end y endpoint.
            if (y < y2)  { y += 10; }
            //This condition is similar to the one above.
            //This is necessary for the 6, 4, 2 win conditions.
            if (x >= x2 && y>= y2)  {cancelAnimationFrame(animationLoop); }
        }
        //This condtion is similar to the one above
        //This is necessary for the 6, 4, 2 wind condition. 
        if (x1 <= x2 && y1 > y2) 
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >=x2 && y <=y2) {cancelAnimationFrame(animationLoop); }
        }
    

    //This function clears our canvas after our win line is drawn
    function clear() {
        //This line starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        //This line clears our canvas
        c.clearRect(0, 0, 608, 608);
        //This line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //This line disallows clicking while the win sound is playing
    disableClick();
    //This line palys the win sound
    audio('./media/bubbles.mp3');
    //This line calls our main animation loop.
    animateLineDrawing();
    //This line waits 1 second. Then clears canvas, ersets game, an allows clicking again.
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//This function resets the game in the event of a tie or a win.
function resetGame() {
    //This for loop iterates through each HTML square element.
    for(let i = 0; i < 9; i++) {
        //This variable gets the HTML element i.
        let square = document.getElementById(String(i));
        //This removes our elements backgroundImage.
        square.style.backgroundImage = '';
    }
    //This resets our array so it is empty and we can start over.
    selectedSquares = [];
}
