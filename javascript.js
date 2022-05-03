

const gameBoard = (() => { 
    const playerFactory = (name, symbol, bot, turn, character) => {
        return {name, symbol, bot, turn, character}
    }

   

    player1 = playerFactory('player 1', 'X', false, true, null)
    player2 = playerFactory('player 2', 'O', false, false, "Tin'pu")
    
    
    let gameStart = false

    const startGame = document.querySelector('#startGame')
    const options = document.querySelector('#options')
    const gameBoard1 = document.querySelector('#gameBoard1')
    const startingScreen = document.querySelector('#startingScreen')
    const initButton = document.querySelector('#initButton')
    const startAnimation = document.querySelector('#animate')
    const characterSelection = document.querySelector('#characterSelection')
    const instructions = document.querySelector('#info2')
 //   const CHARACTER1 = document.querySelector('#character1')
  //  const CHARACTER2 = document.querySelector('#character2')
    const TORIEL = document.querySelector('#toriel')
    const PAPYRUS = document.querySelector('#papyrus')
    const UNDYNE = document.querySelector('#undyne')
    const torielPicture = document.querySelector('#toriel2')
    const papyrusPicture = document.querySelector('#papyrus2')
    const undynePicture = document.querySelector('#undyne2')
    const playerCharacterIcon = document.querySelector('#playerCharacter')
    const undyneDialogue = document.querySelector('#undynedialogue')
    const papyrusDialogue = document.querySelector('#papyrusdialogue')
    const torielDialogue = document.querySelector('#torieldialogue')
    console.log(player1.character)
   // TORIEL.addEventListener('click', function(){
    //    player1.character = 'Toriel'
   //     console.log(player1.character)
  //  })
  


    initButton.addEventListener('click',function(){
        startAnimation.style.display = ''
        initButton.style.display = "none"
        gameStart = true
        selectionChosenSound()
        loadingHeader();
        playGameMusic()
        
        
    })

    function selectionChosenSound() {
        let selectionChosenAudio = new Audio('selectionchosen.wav')
        selectionChosenAudio.play()
        selectionChosenAudio.setAttribute("id", "selectionChosenAudio")
    }

    function playGameMusic() {
        let gameAudio = new Audio('game.mp3')
        gameAudio.play()
        gameAudio.setAttribute("id", "gameAudio")
        gameAudio.loop = true
    }

    function playMenuSound() {
        let menuAudio = new Audio('menu.wav');
        menuAudio.play();
        menuAudio.setAttribute("id", "menuAudio")
      }
    
    document.onkeydown = function (event) {
        switch (event.keyCode) {
           case 38:
              startGame.focus();
             // CHARACTER1.focus();
              playMenuSound();
              break;
           
           case 40:
              options.focus();
             // CHARACTER2.focus();
              playMenuSound();
              break;
        }
     };

     

     class MoveHandler {
        constructor() {
          //Get the first element of the list and set it as the current
          //TODO: if the DOM doesn't get updated it is also possible to store the .move HTML elements within this instance
          this.current = document.getElementsByClassName("move")[1];
          
          //initially set the first as focus
          this.current.focus();
          
          //event listener on the window for arrow keys
          window.addEventListener("keydown", this.move.bind(this));
        }
      
        move(e) {
        
          //update the current according to the arrow keys.
          //Check to see if the current has a previous or next otherwise do nothing.
        
          switch (e.keyCode) {
            case 39:
              if (this.current.nextElementSibling === null) return;
              this.current = this.current.nextElementSibling;
              playMenuSound();
              break;
            case 37:
              if (this.current.previousElementSibling === null) return;
              this.current = this.current.previousElementSibling;
              playMenuSound();
              break;
            default:
              return;
          }
          this.current.focus();
        }
      }
      new MoveHandler();

/*
     ['click','keypress',].forEach( evt => 
        CHARACTER1.addEventListener(evt, function(){
          console.log('1')
        })
    );

    ['click','keypress',].forEach( evt => 
        CHARACTER2.addEventListener(evt, function(){
          console.log('2')
        })
    );
 */   
      

        ['click','keypress',].forEach( evt => 
            startGame.addEventListener(evt, function(){
                selectionChosenSound()
                // gameBoard1.style.display = 'grid';
                startingScreen.style.display = 'none';
                startAnimation.style.display = 'none';
                
                loadingCharacters()
                
            })
        );

        ['click','keypress',].forEach( evt => 
            TORIEL.addEventListener(evt, function(){
                selectionChosenSound()
                player1.character = 'Toriel'
                startAnimation.style.display = "none"
                characterSelection.style.display = "none"  
                chosenCharacter()
                torielPicture.classList.add('transition')
                torielDialogue.classList.add('transition')
                torielDialogue.style.display = 'flex'
                characterDialogue()
            })
        );

        ['click','keypress',].forEach( evt => 
            PAPYRUS.addEventListener(evt, function(){
                selectionChosenSound()
                player1.character = 'Papyrus'
                startAnimation.style.display = "none"
                characterSelection.style.display = "none"
                chosenCharacter()
                papyrusPicture.classList.add('transition')
                papyrusDialogue.classList.add('transition')
                papyrusDialogue.style.display = 'flex'
                characterDialogue()
                
            })
        );

        ['click','keypress',].forEach( evt => 
            UNDYNE.addEventListener(evt, function(){
                selectionChosenSound()
                player1.character = 'Undyne'
                startAnimation.style.display = "none"
                characterSelection.style.display = "none"
                chosenCharacter()
                undynePicture.classList.add('transition')
                undyneDialogue.classList.add('transition')
                undyneDialogue.style.display = 'flex'
                characterDialogue()
                
                
            })
        );

/*
        function resolveAfter4Seconds() {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('resolved');
              }, 4000);
            });
          }
          
          async function asyncCall3() {
            console.log('calling');
            await resolveAfter4Seconds();
            console.log('called')
            undynePicture.classList.add('transition')
          }
*/

       
        function resolveAfter12Seconds() {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('resolved');
              }, 2000);
            });
          }
          
          async function asyncCall() {
            console.log('calling');
            await resolveAfter12Seconds();
            console.log('called')
            startingScreen.style.display = "grid"
            startingScreen.classList.add('transition')
          }

          function resolveAfter3Seconds() {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('resolved');
              }, 3500);
            });
          }
          
          async function asyncCall2() {
            console.log('calling');
            await resolveAfter3Seconds();
            console.log('called')
            characterSelection.style.display = 'grid'
            characterSelection.classList.add('transition')
            
            
          }

  
function characterDialogue() {
        if (player1.character === 'Undyne') {
            var header = document.getElementById('undynedialogue');
            
            
        
        var typewriter = new Typewriter(header, {
            delay: 75
        });

        
        typewriter.typeString('')
        .changeCursor(' ')
        .pauseFor(10000)
        .typeString(`Hello. You seem rather weak and frail. It's alright, I've trained people like you before. Just to be clear: I make the rules around here.`)
        .start()
        characterStory();
                     
    } else if (player1.character === 'Papyrus'){
        var header = document.getElementById('papyrusdialogue');
            
            
        
        var typewriter = new Typewriter(header, {
            delay: 75
        });

        
        typewriter.typeString('')
        .changeCursor(' ')
        .pauseFor(15500)
        .typeString(`HEY! I'm Papyrus, nice to meet you! You're coming with me?! That's great, and don't worry I don't bite!! Just joking, sometimes I bite! Kidding! Aren't I the worst?`)
        .start()
        characterStory();
    } 
}




          
function chosenCharacter() {
    startAnimation.style.display = ""
    var header = document.getElementById('animate');
    
    

var typewriter = new Typewriter(header, {
    delay: 75
});

typewriter.typeString(`YOU'VE CHOSEN ${player1.character.toUpperCase()}`)
.pauseFor(250)
.start()
.changeCursor(' ')
characterStory();
}    

function characterStory(){
    var header = document.getElementById('animate2')
    var typewriter = new Typewriter(header, {
        delay: 35
    })
    if (player1.character === 'Papyrus') {
    playerCharacterIcon.style.display = "flex"
    undynePicture.style.display = "none"
    papyrusPicture.style.display = "flex"
    torielPicture.style.display = "none"
    typewriter.typeString('Papyrus is a flamboyant skeleton man. He likes materialistic things and can be rather obnoxious, but he is quite lonely. All he wants in life is to join the Royal Guard for friendship and so he can afford a new car. He chooses to go on a journey to the promised land for an opportunity to join the forces. His favorite color is dark purple.')
    .pauseFor(250)
    .start()
    .changeCursor(' ')
} else if (player1.character === 'Toriel') {
    playerCharacterIcon.style.display = "flex"
    undynePicture.style.display = "none"
    papyrusPicture.style.display = "none"
    torielPicture.style.display = "flex"
    typewriter.typeString('Toriel is a loving mother and has adopted many orphaned children. In her free time, she enjoys writing and cooking. She is going on a journey to the promised land in order to find her lost son that she did not see for years. Her favorite color is green.')
    .pauseFor(250)
    .start()
    .changeCursor(' ')
} else if (player1.character === 'Undyne') {
    playerCharacterIcon.style.display = "flex"
    undynePicture.style.display = "flex"
    papyrusPicture.style.display = "none"
    torielPicture.style.display = "none"
    typewriter.typeString('Undyne is a passionate battle-hardened teacher and mentor. She is going on a journey to the promised land in order to a deliver a letter to a battle buddy. Her favorite color is orange.')
    .pauseFor(250)
    .start()
    .changeCursor(' ')
}
}


/*
function torielChosen() {
var header = document.getElementById('animate');

var typewriter = new Typewriter(header, {
    
});

typewriter.typeString(`YOU'VE CHOSEN ${player1.character}`)
.pauseFor(250)
.start()
.changeCursor(' ')
} 

function papyrusChosen() {

}

function undyneChosen() {

}


*/








          
function loadingCharacters() {
    
    asyncCall2()

    instructions.style.display = 'flex'
    startAnimation.style.display = ''
    var header = document.getElementById('animate');

var typewriter = new Typewriter(header, {
    
});

typewriter.typeString('CHOOSE YOUR CHARACTER')
.pauseFor(250)
.start()
.changeCursor(' ')
}         




function loadingHeader() {
   
    asyncCall();
        
var header = document.getElementById('animate');

var typewriter = new Typewriter(header, {
    
});

typewriter.typeString('YOU ARE ABOUT TO GO')
.pauseFor(250)
.start()
.deleteChars(2)
.typeString('EMBARK ON AN ADVENTURE...')
.deleteChars(15)
.typeString('A JOURNEY...')
.changeCursor(' ')

}


  
   
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
