

   // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
   var computerChoices = ["r", "p", "s"];

   // This function is run whenever the user presses a key.
   document.onkeyup = function(event) {



     // Determines which key was pressed.
     var userGuess = event.key;

     // Randomly chooses a choice from the options array. This is the Computer's guess.
     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];




     if (event.key === "r" || event.key === "p" || event.key === "s") {
          if (userGuess =="r" && computerGuess == "s") {
           return alert("You win!")
          } else if (userGuess =="s" && computerGuess == "p") {
           return alert("You win!")                    
        } else if(userGuess =="p" && computerGuess == "r") {
            return alert("You win!")
        } else if (computerGuess =="r" && userGuess == "s") {
            return alert("You win!")
        } else if (computerGuess =="s" && userGuess == "p") {
            return alert("You win!")                    
        } else if(computerGuess =="p" && userGuess == "r") {
             return alert("You win!")
        } else {
            return alert("You tie!")
        }
      }








   };
