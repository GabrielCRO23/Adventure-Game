const gameBoard = (() => { 

   
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

    const cellElements = document.querySelectorAll('[data-cell]')
    
    
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

        function endGameCheck() {
            if (checkWins(currentClass) == true) {
                alert();
            }
        }

    cellElements.forEach ( cellElements => {
        cellElements.addEventListener('click', function(){
            if (player1.turn == true) {
                currentClass = player1.symbol
                cellElements.textContent = player1.symbol
                cellElements.classList.add('X')
                
                
                swapTurns()
                endGameCheck()
            } else if (player2.turn == true) {
                currentClass = player2.symbol
                cellElements.textContent = player2.symbol
                cellElements.classList.add('O')

                
                swapTurns()
                endGameCheck()
            }
        })
    })





})()
