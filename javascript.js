


const gameBoard = (() => { 
    const playerFactory = (name, symbol, bot, turn, character) => {
        return {name, symbol, bot, turn, character}
    }

   

    player1 = playerFactory('player 1', 'X', false, true, null)
    player2 = playerFactory('player 2', 'O', false, false, "Sans")
    
    
    let gameStart = false

    const startGame = document.querySelector('#startGame')
    const options = document.querySelector('#options')
    const gameBoard1 = document.querySelector('#gameBoard1')
    const startingScreen = document.querySelector('#startingScreen')
    const initButton = document.querySelector('#initButton')
    const startAnimation = document.querySelector('#animate')
    const startAnimation2 = document.querySelector('#animate2')
    const characterSelection = document.querySelector('#characterSelection')
    const instructions = document.querySelector('#info2')
    const info = document.querySelector('#info')
 //   const CHARACTER1 = document.querySelector('#character1')
  //  const CHARACTER2 = document.querySelector('#character2')
    const TORIEL = document.querySelector('#toriel')
    const PAPYRUS = document.querySelector('#papyrus')
    const UNDYNE = document.querySelector('#undyne')
    const torielPicture = document.querySelector('#toriel2')
    const papyrusPicture = document.querySelector('#papyrus2')
    const undynePicture = document.querySelector('#undyne2')
    const sansPicture = document.querySelector('#sans')
    const sansDialogue = document.querySelector('#sansdialogue')
    const playerCharacterIcon = document.querySelector('#playerCharacter')
    const undyneDialogue = document.querySelector('#undynedialogue')
    const papyrusDialogue = document.querySelector('#papyrusdialogue')
    const torielDialogue = document.querySelector('#torieldialogue')
    const credits = document.querySelector('#credits')
    const continueButton = document.querySelector('#continuebutton')
    const readNote = document.querySelector('#readnote')
    const continueButton2 = document.querySelector('#continuebutton2')
    const quoteContainer = document.querySelector('#quotecontainer')
    console.log(player1.character)
   // TORIEL.addEventListener('click', function(){
    //    player1.character = 'Toriel'
   //     console.log(player1.character)
  //  })
  


    initButton.addEventListener('click',function(){
        startAnimation.style.display = ''
        startGame.style.display = "flex"
        options.style.display = "flex"
        initButton.style.display = "none"
        gameStart = true
        selectionChosenSound()
        loadingHeader();
        playGameMusic()
       // console.log(gameAudio.getElementById)
        
        
    })

    

    function selectionChosenSound() {
        let selectionChosenAudio = new Audio('selectionchosen.wav')
        selectionChosenAudio.play()
        selectionChosenAudio.setAttribute("id", "selectionChosenAudio")
    }

    function playGameMusic() {
        gameAudio = new Audio('game.mp3')
        gameAudio.play()
        gameAudio.setAttribute("id", "gameAudio")
        gameAudio.loop = true
        
    }

    function playGameMusic2() {
        let gameAudio2 = new Audio('hellsong.mp3')
        gameAudio2.play()
        gameAudio2.setAttribute("id", "gameAudio2")
        gameAudio2.loop = true
    }


    function playMenuSound() {
        let menuAudio = new Audio('menu.wav');
        menuAudio.play();
        menuAudio.setAttribute("id", "menuAudio")
      }

      function playSansSound() {
          let sansAudio = new Audio('sansappear.wav')
          sansAudio.play()
          sansAudio.setAttribute("id", "sansAudio")
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
          this.current = document.getElementsByClassName("move")[0];
          
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
                credits.style.display = 'none'
                
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

        ['click','keypress',].forEach( evt => 
            continueButton.addEventListener(evt, function(){
                selectionChosenSound()
                startAnimation.style.display = "none"
                startAnimation2.style.display = "none"
                continueButton.style.display = "none"
                if (player1.character === 'Papyrus') {
                papyrusDialogue.style.display = "none"
                papyrusPicture.classList.add('transition')
                papyrusPicture.classList.add('mover')
                papyrusDialogue.classList.add('mover')
                adventurePartOne()
            } else if (player1.character === 'Undyne') {
                undyneDialogue.style.display = "none"
                undynePicture.classList.add('transition')
            } else if (player1.character === 'Toriel') {
                torielDialogue.style.display = "none"
                torielPicture.classList.add('transition')
            }
                
            })
        );

        ['click','keypress',].forEach( evt => 
            readNote.addEventListener(evt, function(){
                selectionChosenSound()
                noteRead();
                 readNote.style.display = "none"
                 console.log(gameAudio)
                
            })
        );

        ['click','keypress',].forEach( evt => 
            continueButton2.addEventListener(evt, function(){
                selectionChosenSound()
                startAnimation2.style.display = "none"
                 continueButton2.style.display = "none"
                 adventurePartThree()
                 if (player1.character === 'Papyrus') {
                    papyrusDialogue.style.display = "none"
                
                } else if (player1.character === 'Undyne') {
                    undyneDialogue.style.display = "none"
                   
                } else if (player1.character === 'Toriel') {
                    torielDialogue.style.display = "none"
                    
                }
                
            })
        );

   
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



function adventurePartOne() {
    document.body.style.backgroundImage = "url('backgroundpart33.jpg')";
    document.body.classList.add('transition')
    
    if (player1.character === 'Papyrus') {
        startAnimation.style.display = ""
        var header = document.getElementById('animate');
        
        
    
    var typewriter = new Typewriter(header, {
        delay: 70
    });
    
    typewriter.typeString(`THE BORDER`)
    .pauseFor(250)
    .start()
    .changeCursor(' ')
    setTimeout(() => {
        adventurePartTwo()
      }, "3000")
    }     
}

function chooseGender() {
    if (player1.character === "Papyrus") {
        return 'He'
    } else if (player1.character === "Undyne" || player1.character === "Toriel"){
         return 'She'
        }
    }

    function noteRead() {
        startAnimation2.style.display = ""
        var header = document.getElementById('animate2');
        
        
    
    var typewriter = new Typewriter(header, {
        delay: 70
    });
    
    typewriter.typeString(`${player1.character} unravels the note, and it reads:`)
    .pauseFor(750)
    .typeString(` "THE AIRSPEED VELOCITY OF AN UNLADEN SWALLOW, BOTH EUROPEAN AND AFRICAN, IS 24 MILES PER HOUR"`)
    .start()
    .changeCursor(' ')
    setTimeout(() => {
        playerDialogue1()
      }, "8000")
}
    
function playerDialogue1(){
    if (player1.character === 'Papyrus') {
        papyrusDialogue.style.display = "flex"
        var header = document.getElementById('papyrusdialogue');
        
        
    
    var typewriter = new Typewriter(header, {
        delay: 70
    });

    
    typewriter.typeString('')
    .changeCursor(' ')
    .pauseFor(500)
    .typeString(`Interesting... I should probably remember that!`)
    .start()
    setTimeout(() => {
        continueButton2.style.display = "flex"
      }, "8000")
}
}

function adventurePartTwo() {
        startAnimation2.style.display = ""
        var header = document.getElementById('animate2');
        
        
    
    var typewriter = new Typewriter(header, {
        delay: 70
    });
    
    typewriter.typeString(`As ${player1.character} travels by foot into the border of the promised land, ${player1.character} is lost and cold in a dark forest. ${chooseGender()} notices a bright, golden and shiny note hidden in a bush near the path ${chooseGender().toLowerCase()} is taking`)
    .pauseFor(250)
    .start()
    .changeCursor(' ')
    setTimeout(() => {
        readNote.style.display = 'flex'
        readNote.classList.add('transition')
      }, "8000")
}

function adventurePartThree() {
    startAnimation2.style.display = ""
    var header = document.getElementById('animate2');
    var ofs = 0


    

var typewriter = new Typewriter(header, {
    delay: 70
});

typewriter.typeString(`Cold and tired, ${player1.character} starts to see the sun begin to rise. This sign of relief is short lived...`)
.pauseFor(750)
.start()
.changeCursor(' ')
setTimeout(() => {
    console.log(gameAudio)
        gameAudio.pause()
        playSansSound()
        playGameMusic2()
        document.body.classList.add('flash')
        document.body.style.backgroundImage = "none";
        document.body.style.color = "red";
        sansPicture.style.display = "flex"
        sansPicture.classList.add('flash')
        sansPicture.classList.add('mover')
        sansPicture.classList.add('moverX')
        sansDialogue.classList.add('flash')
        sansPicture.classList.add('moverX')
        startAnimation2.classList.add('blink')
        quoteContainer.style.display = "flex"
        sansDialogue.style.display = "flex"
        startAnimation2.style.display = "none"
  }, "10000")
}  



  
function characterDialogue() {
        if (player1.character === 'Undyne') {
            var header = document.getElementById('undynedialogue');
            
            
        
        var typewriter = new Typewriter(header, {
            delay: 70
        });

        
        typewriter.typeString('')
        .changeCursor(' ')
        .pauseFor(10000)
        .typeString(`Hello. You seem rather weak and frail. It's alright, I've trained people like you before. Just to be clear: I make the rules around here.`)
        .start()
        
                     
    } else if (player1.character === 'Papyrus'){
        var header = document.getElementById('papyrusdialogue');
            
            
        
        var typewriter = new Typewriter(header, {
            delay: 70
        });

        
        typewriter.typeString('')
        .changeCursor(' ')
        .pauseFor(16575)
        
        .typeString(`HEY! I'm Papyrus, nice to meet ME! Haha. You're coming with me?! That's great, and don't worry I don't bite!! Just joking, sometimes I bite!`)
        .pauseFor(1000)
        .typeString(` Kidding again! Aren't I the worst?`)
        .start()
        setTimeout(() => {
            continueButton.style.display = 'flex'
            continueButton.classList.add('transition')
          }, "2000")
        
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
