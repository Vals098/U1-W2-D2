/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const firstNumber = 5
const secondNumber = 23

if (firstNumber < secondNumber) {
  console.log(
    "risposta esercizio 1:",
    secondNumber + " is bigger than " + firstNumber,
  )
} else {
  console.log(
    "risposta esercizio 1:",
    secondNumber + " is smaller than " + firstNumber,
  )
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x = 4

if (x !== 5) {
  console.log("risposta esercizio 2:", "not equal")
}
//if const x = 5 // console.log doesn't paste anything

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const y = 75

if (y % 5 === 0) {
  console.log("risposta esercizio 3:", "divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const z = 4
const v = 11

if (z === 8 || v === 8 || z + v === 8 || z - v === 8 || v - z === 8) {
  console.log("risposta esercizio 4:", "verified")
} else {
  console.log("risposta esercizio 4:", "not verified")
}
// if I put const v = 12 // the console gives 'verified'

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 52
const shippingFee = 10
let totalAmount

if (totalShoppingCart >= 50) {
  totalAmount = totalShoppingCart
  console.log(
    "risposta esercizio 5:",
    "shipping fee is free!" + " Total: " + totalAmount,
  )
} else {
  totalAmount = totalShoppingCart + shippingFee
  console.log(
    "risposta esercizio 5:",
    "shipping fee is added!" + " Total: " + totalAmount,
  )
}
//shopping fee is free!
//careful, const totalAmount cannot be reassigned, here you must use let totalAmount

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const blackFridayDeal = 0.2
let discountedCart = totalShoppingCart * (1 - blackFridayDeal)

if (discountedCart >= 50) {
  totalAmount = discountedCart
  console.log(
    "risposta esercizio 6:",
    "shipping fee is free!" + " Total: " + totalAmount,
  )
} else {
  totalAmount = discountedCart + shippingFee
  console.log(
    "risposta esercizio 6:",
    "shipping fee is added!" + " Total: " + totalAmount,
  )
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const a = 2
const b = 29
const c = 17

if (a > b && a > c && b > c) {
  console.log("risposta esercizio 7:", a, ">", b, ">", c)
}
if (c > b && c > a && b > a) {
  console.log("risposta esercizio 7:", c, ">", b, ">", a)
}
if (b > a && b > c && c > a) {
  console.log("risposta esercizio 7:", b, ">", c, ">", a)
}
if (a > b && a > c && c > b) {
  console.log("risposta esercizio 7:", a, ">", c, ">", b)
}
if (b > a && b > c && a > c) {
  console.log("risposta esercizio 7:", b, ">", a, ">", c)
}
if (c > b && c > a && a > b) {
  console.log("risposta esercizio 7:", c, ">", a, ">", b)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("risposta esercizio 8:", typeof a)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (c % 2 === 0) {
  console.log("risposta esercizio 9:", "è pari")
} else {
  console.log("risposta esercizio 9:", "è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (5 <= val <= 10) {
  console.log("risposta esercizio 10:", "Tra 5 e 10")
} else if (val < 5) {
  console.log("risposta esercizio 10:", "Meno di 5")
} else {
  console.log("risposta esercizio 10:", "Uguale a 10 o maggiore")
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
  city: "Toronto",
}
console.log(me) //verified

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
// array --> me.splice(1,1)
console.log(me) //verified

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop()
//does not work untill you put brackets at the end
//me is an obj, skills is an array. To delete we use .pop
console.log(me) //verified

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numbers = []
numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(numbers) //verified

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numbers[9] = 100
console.log(numbers) //verified
