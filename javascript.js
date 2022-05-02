const gameBoard = (() => { 
    
    const startGame = document.querySelector('#startGame')
    const options = document.querySelector('#options')
    const gameBoard1 = document.querySelector('#gameBoard1')
    const startingScreen = document.querySelector('#startingScreen')
    
    document.onkeydown = function (event) {
        switch (event.keyCode) {
           case 38:
              startGame.focus();
              break;
           
           case 40:
              options.focus();
              break;
        }
     };

    

        ['click','keypress'].forEach( evt => 
            startGame.addEventListener(evt, function(){
                gameBoard1.style.display = 'grid';
                startingScreen.style.display = 'none';

            })
        );

        

var messageArray = ['YOU ARE ABOUT TO EMBARK ON A JOURNEY...']
var textPosition = 0;
var speed = 75;

typeWriter = () => {
    document.querySelector("#animate").
    innerHTML = messageArray[0].substring(0, textPosition);
    if (textPosition++ != messageArray[0].length)
    setTimeout(typeWriter, speed)
}

window.addEventListener("load", typeWriter)
    
    
   
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [0, 4, 8],
        [2, 4, 6],
        [2, 5, 8]
    ]

    const playerFactory = (name, symbol, bot, turn) => {
        return {name, symbol, bot, turn}
    }

   

    player1 = playerFactory('player 1', 'X', false, true)
    player2 = playerFactory('player 2', 'O', false, false)

    const cellElements = document.querySelectorAll('.cell')
    
    
    function swapTurns() {
        if (player1.turn == true) {
            player1.turn = false
            player2.turn = true
        } else if (player2.turn == true) {
            player2.turn = false
            player1.turn = true
        }
    }



    function checkWins(currentClass) {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(currentClass)
            })
        })
    }
    
    
       // function isDraw() {
        //    return [...cellElements].every(cellElements => {
         //       return cellElements.classList.contains(playerFactory.symbol)
        //    })
      //  }

    

    cellElements.forEach ( cellElements => {
        cellElements.addEventListener('click', function(e){
            if (player1.turn == true && player1.bot == false && !e.target.classList.contains(player1.symbol) && !e.target.classList.contains(player2.symbol)) {
                currentClass = player1.symbol
                cellElements.textContent = player1.symbol
                cellElements.classList.add(player1.symbol)
                
                
                swapTurns()
                endGameCheck()
            } else if (player2.turn == true && player2.bot == false && !e.target.classList.contains(player1.symbol) && !e.target.classList.contains(player2.symbol)) {
                currentClass = player2.symbol
                cellElements.textContent = player2.symbol
                cellElements.classList.add(player2.symbol)

                
                swapTurns()
                endGameCheck()
            }
        })
    })

    function endGameCheck() {
        if (checkWins(currentClass) == true) {
            alert();
        }
    }



})()
