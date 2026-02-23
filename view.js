/*Lag et objekt som representerer en bankkonto med:
   navn
   saldo
   Legg til en metode endreSaldo(beløp) som:
   bruker this for å oppdatere saldoen
   bruker if/else til å sjekke om saldoen blir negativ: hvis ja, vis advarsel; hvis nei, oppdater saldoen
   vis resultatet på siden*/

logInPage()
function logInPage() {
    siden.innerHTML = /*HTML*/ `
            username: <input onchange = "setUserName(this.value)">
            <br>
            password: <input type="password" onchange = "setPassword(this.value)">
            <br>
            <button onclick ="logIn()">Logg inn</button>
            `
}

function loggedInPage() {
    siden.innerHTML = /*HTML*/`
    <div>Hei, ${correctName}!</div>
    <div id="saldo">Din saldo er ${balance}</div>
    <input id="money">
    <br>
    <button id="addMoneyBtn" onclick ="addMoney()">Legg til penger</button>
    <br>
    <button id="removeMoneyBtn" onclick ="removeMoney()">Trekk fra penger</button>
    <br>
    <button id="logOut" onclick = "logOut()">Logg ut</button>`
}