// Mi riferisco a Container nel DOM

let container = document.getElementById('game-numbers');

// Invoco la funzione per creazione numeri


randomSimon(container, 5, 0, 100);


// Creo funzione per generazione lista random di numeri
// container e' il contenitore cui riferirsi per iniettare lista, difficulty e' quanti numeri inserire, min e max sono gli intervalli possibili per i numeri casuali

function randomSimon(container, difficulty, min, max){

    // funzione numero random
    function randomNumber(min, max){
        return Math.floor(Math.random() * (max - min+1)+min);
    }
    
    // Array di 5 numeri random
    const numbers = [];
    
    for(let i = 0; i < difficulty; i++){
    
        let number = randomNumber(min,max);
    
        numbers.push(number);
    
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

}