var alphabet = ['a','b','c'];
console.log(alphabet)
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var lettersGuessed = [];
    var randomNumber = Math.floor(Math.random() * alphabet.length) 
    var cpuGuess  = alphabet[randomNumber]
    console.log(randomNumber)

    

    console.log(cpuGuess)
    
    document.onkeyup = function(event){
   
    var userGuessed = event.key
    if (cpuGuess == userGuessed){
        console.log("correct guess")
        wins = wins+1
        console.log(wins) 
        refreshGame ()
    }

    else if (guesses>0) { 
        console.log("incorrectGuess")
        guesses = guesses-1 
        lettersGuessed.push(userGuessed)
        console.log(guesses)
    }
    
    else {losses =losses+1
        refreshGame ()
        
    } 

    console.log(userGuessed)
    document.getElementById("wins").innerHTML=wins;
    document.getElementById("losses").innerHTML=losses;
    document.getElementById("guesses").innerHTML=guesses;
    document.getElementById("lettersGuessed").innerHTML=lettersGuessed;
}

function refreshGame(){
    guesses = 9 
    lettersGuessesd =[]
    document.getElementById("lettersGuessed").innerHTML=lettersGuessed;
    document.getElementById("guesses").innerHTML=guesses;
    randomNumber = Math.floor(Math.random() * alphabet.length) 
    cpuGuess = alphabet[randomNumber]
console.log(cpuGuess)
}