// Mi riferisco a Container nel DOM

let container = document.getElementById('game-numbers');

// Invoco la funzione per creazione numeri

randomSimon(container, 5, 0, 100);



/* ------ FUNZIONI ----- */

// Creo funzione per generazione lista random di numeri
// container e' il contenitore cui riferirsi per iniettare lista, difficulty e' quanti numeri inserire, min e max sono gli intervalli possibili per i numeri casuali

function randomSimon(container, difficulty, min, max){

    // funzione numero random
    function randomNumber(min, max){
        return Math.floor(Math.random() * (max - min+1)+min);
    }
    
    // Array di 5 numeri random
    const numbers = [];
    
    while(numbers.length< difficulty){
    
        let number = randomNumber(min,max);
        if(!numbers.includes(numbers)){
            numbers.push(number);
        }
    
    }

    
    
    console.log(numbers);
    
    // Creo tag lista non ordinata
    let list = document.createElement('ul');
    
    
    numbers.forEach(value =>{
        
        list.innerHTML+=`
        
            <li>${value}</li>
        
        `;
        
    });
    
    container.appendChild(list);
    console.log(list)

    //Imposto verifica
    // Variabile con secondi
    let seconds = 30;

    
    let clock = setInterval(function(){


        // Mi riferisco allo span secondi
        document.getElementById('timer').innerHTML = seconds;

        // Si ferma allo 0
         if (seconds === 0){

            // Fermo contatore
            clearInterval(clock);
            container.classList.add('d-none');
            
            // Aggiungo ulteriore contatore per far eseguire il codice
            setTimeout(function(){
                // Invoca funzione di verifica
                verify(container,numbers);

            }, 550);

            

        } else{

            //Diminuiscono i secondi
            seconds--;

        }

        
    }, 1000);
    

}



// Funzione di verifica gioco

function verify(container, array){

    // Creo un array con le risposte dell'utente
    const usrNumbers = [];

    while(usrNumbers.length < array.length) {
        
        let number = parseInt(prompt('Inserisci un numero'));

        if(!usrNumbers.includes(number) && !isNaN(number)){
            usrNumbers.push(number);
        } else{
            alert('Inserisci un numero valido')
        }

    };

    console.log(usrNumbers);

    let list = document.createElement('ul');

    let recap =[];

    //Confronto i 2 array
    for(let i =0; i < array.length; i++){

        if(array.includes(usrNumbers[i])){
            list.innerHTML += `<li> ${usrNumbers[i]}</li>`;
            recap.push(usrNumbers[i]);

        }

    }

    const recapString = `<p>HAI INDOVINATO ${recap.length} NUMERI!</p>`
    container.innerHTML = '';
    container.innerHTML = recapString;
    container.appendChild(list);
    container.classList.remove('d-none');
}