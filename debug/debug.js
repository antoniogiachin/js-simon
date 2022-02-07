

let seconds = 10;

let clock = setInterval(function(){

    document.getElementById('timer').innerHTML = seconds;

    // facciamo in modo che termini allo 0 e non vada nei numeri negativi

    if(seconds === 0){
        alert('Buon Anno Nuovo!!!');

        // Fermo contatore
        clearInterval(clock);
        
    } else {

        seconds--;

    }


}, 1000);