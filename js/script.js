// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// buon viaggio!

const passengerAge = parseInt(prompt("Età passeggero:"));
const tripLenght = parseInt(prompt("Lunghezza viaggio in Km:"));

const pricePerKm = .21;
const underAge = 18;
const overAge = 65;
const under18Price = .2;
const over65Price = .4;
let ageDiscount = 0;
let totalPrice;
let ticketPrice = "";


if(passengerAge < underAge) ageDiscount = under18Price;
else if( passengerAge > overAge) ageDiscount = over65Price;

totalPrice = tripLenght * pricePerKm ;

totalPrice -= (totalPrice * ageDiscount);

ticketPrice = totalPrice.toFixed(2);
console.log("🚀 ~ file: script.js ~ line 29 ~ outputPrice", ticketPrice)

document.getElementById('costo-viaggio').innerHTML +=` 
${ticketPrice}€
`;
