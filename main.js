// Mi riferisco a Container nel DOM

let container = document.getElementById('game-numbers');

// Invoco la funzione per creazione numeri

randomSimon(container, 0, 100)


// Creo funzione per generazione lista random di numeri

function randomSimon(container, min, max){

    // funzione numero random
    function randomNumber(min, max){
        return Math.floor(Math.random() * (max - min+1)+min);
    }
    
    const numbers = [];
    
    for(let i = 0; i < 5; i++){
    
        let number = randomNumber(min,max);
    
        numbers.push(number);
    
    }
    
    console.log(numbers);
    
    let list = document.createElement('ul');
    
    
    numbers.forEach(value =>{
        
        list.innerHTML+=`
        
        <li>${value}</li>
        
        `;
        
    });
    
    container.appendChild(list);
    console.log(list)


}