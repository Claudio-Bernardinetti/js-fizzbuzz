// Scriver un for loop per stampare i numeri da 1 a 100 in console.

// Per i multipli di 3 stampi “Fizz” al posto del numero.

// Per i multipli di 5 stampi “Bizz” al posto del numero.

// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


function fizz (num){
    for (let i = 1; i < num; i++){
      let element = document.createElement('li')
      element.innerText = i;
      
      if (i % 3 === 0 && i % 5 === 0 ) {
        element.innerText = "FizzBuzz";
        element.classList.add('red');

      } else if (i % 3 === 0 ) {
        element.innerText = "Fizz";
        element.classList.add('purple');
      
      } else if(i % 5 === 0 ) {
        element.innerText = "Buzz";
        element.classList.add('yellow');
      }

      document.getElementById('output').appendChild(element);
  
    }
 }
 
 fizz(101);