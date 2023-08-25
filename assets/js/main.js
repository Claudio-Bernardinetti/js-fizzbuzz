// Scriver un for loop per stampare i numeri da 1 a 100 in console.

// Per i multipli di 3 stampi “Fizz” al posto del numero.

// Per i multipli di 5 stampi “Bizz” al posto del numero.

// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


// let listEl = document.querySelector('.list');


// for (var i = 1; i < 101; i++) {
//     if (i % 15 == 0) console.log("FizzBuzz");

//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
    
    

//     const listIt = document.createElement('li');
//     listIt.append(i);
//     listEl.append(listIt);
// }

function fizz (num){
    for (let i = 1; i < num; i++){
      let element = document.createElement('li')
      element.innerText = "";
      if(i % 3 === 0 ) {element.innerText += "Fizz";}
      if(i % 5 === 0 ) {element.innerText += "Buzz";}
      if(element.innerText === ""){element.innerText = i;}
      document.getElementById('output').appendChild(element);
    }
 }
 
 fizz(101);