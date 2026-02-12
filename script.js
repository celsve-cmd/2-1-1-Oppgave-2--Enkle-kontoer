/*Lag et objekt som representerer en bankkonto med:
   navn
   saldo
   Legg til en metode endreSaldo(beløp) som:
   bruker this for å oppdatere saldoen
   bruker if/else til å sjekke om saldoen blir negativ: hvis ja, vis advarsel; hvis nei, oppdater saldoen
   vis resultatet på siden*/




let navn = ''
let password = ''

let correctName = 'Navn Navnesen'
let correctPassword = 'SterktPassord123.'




updateView()
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
            username: <input onchange = "setUserName(this.value)">
            <br>
            password: <input onchange = "setPassword(this.value)">
            <br>
            <button onclick ="logIn()">Logg in</button>
            `
}


function setUserName(userInput) {
    userName = userInput
}

function setPassword(passwordInput) {
    userPassword = passwordInput
}


function logIn() {
if(navn == correctName){
console.log('Hei!')
}
}