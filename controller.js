function setUserName(userInput) {
    userName = userInput
}

function setPassword(passwordInput) {
    userPassword = passwordInput
}

function logIn() {
    if (userName == correctName && userPassword == correctPassword) {
        loggedInPage()
    } else {
        alert('Feil brukernavn eller passord!')
    }
}

function addMoney() {
    let input = document.getElementById("money").value
    balance += Number(input)

    document.getElementById("saldo").innerHTML =
        `Din saldo er ${balance} kr`
}

function removeMoney() {
    let input = document.getElementById("money").value
    balance -= Number(input)
    document.getElementById("saldo").innerHTML =
        `Din saldo er ${balance} kr`
}

function logOut() {
    userName = ''
    userPassword = ''
    logInPage()
}