/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  const element = pets[i];
  console.log("Here it is:", element);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log("Ordine alfabetico:", pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log("Ordine al contrario:", pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const primoElemento = pets.shift(); /* qui prendi il primo elemento */
console.log(primoElemento);
pets.push(
  primoElemento
); /*qui butti l'elemento che hai preso dentro push però quando metti le cose dentro in questo caso le butta si ma nell'ultima posizione*/
console.log("Dalla prima posizione all'ultima:", primoElemento);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
/*for (let i = 0; i < cars.length; i++) {
  let saettaMcQueen = cars[i];
  saettaMcQueen.licensePlate = prompt("Scrivi la tua targa"); /*qui mettiamo dentro sia la proprietàa "licensePlate" sia i lvalore della proprietà" 
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
  brand: "Ford",
  model: "Mustang",
  color: "red",
  trims: ["gt", "mach 1", "bullitt"],
});
console.log("Nuova Auto in officina:", cars);
/* OPZIONE 1 */
/*for (let i = 0; i < cars.length; i++) {
  const taglioTrims = cars[i];
  taglioTrims.trims.pop();
}
console.log("taglioTrims Opzione1", cars);
/* OPZIONE 2 */
/*Alessio ic hai mesos un po' a capirlo, ricorda trims è un array dentro ad un oggetto però è pursempre un array quindi è un array dentro ad un oggeto dentro ad un array. */
for (let i = 0; i < cars.length; i++) {
  //qui fai scorrere l'array come sempre, l'array cars il principale
  cars[i].trims.pop(); // qui per ogni elemnto dell'array cars, il principale, entra e dammi l'elemento trims che è un array e con pop dici dall'array trims leva l'ultima proprietà
}
console.log("taglioTrims Opzione 2", cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  const propAuto = cars[i];
  justTrims.push(propAuto.trims[0]); // qui prendi il primo elemento di trims da propAuto che abbiamo detto è uguale a cars[i], ricordati la i cambia valore ogni volta basta perderci mezz'ora a guarda per capire "ah vero fa così", sei nel dubbio? e fai un console.log!!
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  const primaLettera = cars[i].color.charAt(0); //qui con charAt(0) prendi la prima lettera della proprietà color, piccola tip in questo caso non serve ma qual'ora dovessi avere valori variabile tipo quando con lettere grandi e quando piccole e ti serve cmq andare a stampare quelle cose puoi urare dopo charAt() il .toLowerCase() per trasformare tutto in piccolo.
  if (primaLettera === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let i = 0;
while (numericArray[i] !== 32) {
  console.log("Stampa senza 32", numericArray[i]); //stampi tutti i numeri finchè l'array non arriva al 32 quando lo trova non lo stampi ma lo trova perchè appunto punta al 32
  i++;
}

console.log("Stampa 32?", numericArray[i]); //dal momento che punta al 32 puoi fare un console.log esterno chiedendo di leggere numericArray che appunto come ultima iterazione è arrivato a puntare al 32------To Doo trovare un modo per rendere visibile il 32 nel ciclo

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const posizioniLettere = [];
for (let i = 0; i < charactersArray.length; i++) {
  //Alessio devi trovare un modo più semplice per farlo//Cerca indexof
  const numeroLettere = charactersArray[i];
  switch (numeroLettere) {
    case "a":
      posizioniLettere.push(1);
      break;
    case "b":
      posizioniLettere.push(2);
      break;
    case "c":
      posizioniLettere.push(3);
      break;
    case "d":
      posizioniLettere.push(4);
      break;
    case "e":
      posizioniLettere.push(5);
      break;
    case "f":
      posizioniLettere.push(6);
      break;
    case "g":
      posizioniLettere.push(7);
      break;
    case "h":
      posizioniLettere.push(8);
      break;
    case "i":
      posizioniLettere.push(9);
      break;
    case "j":
      posizioniLettere.push(10);
      break;
    case "k":
      posizioniLettere.push(11);
      break;
    case "l":
      posizioniLettere.push(12);
      break;
    case "m":
      posizioniLettere.push(13);
      break;
    case "n":
      posizioniLettere.push(14);
      break;
    case "o":
      posizioniLettere.push(15);
      break;
    case "p":
      posizioniLettere.push(16);
      break;
    case "q":
      posizioniLettere.push(17);
      break;
    case "r":
      posizioniLettere.push(18);
      break;
    case "s":
      posizioniLettere.push(19);
      break;
    case "t":
      posizioniLettere.push(20);
      break;
    case "u":
      posizioniLettere.push(21);
      break;
    case "v":
      posizioniLettere.push(22);
      break;
    case "w":
      posizioniLettere.push(23);
      break;
    case "x":
      posizioniLettere.push(24);
      break;
    case "y":
      posizioniLettere.push(25);
      break;
    case "z":
      posizioniLettere.push(26);
      break;
    default:
      console.log("Lettera o Carattere sconosciuto");
  }
}
console.log("Posizioni delle lettere", posizioniLettere);
