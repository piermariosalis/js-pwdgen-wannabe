var benvenuto;
benvenuto = 'Ciao, benvenuto!';
alert(benvenuto);


var userName = prompt("Come ti chiami?");
console.log(userName);

var userSurName = prompt("Qual'è il tuo cognome?");
console.log(userSurName);

var userColor = prompt("Qual'è il tuo colore preferito?");
console.log(userColor);


document.getElementById('name').innerHTML = "Ciao, ti chiami: " + userName;
document.getElementById('surname').innerHTML = "Il tuo cognome è: " + userSurName;
document.getElementById('color').innerHTML = "Il tuo colore preferito è: " + userColor;
document.getElementById('password').innerHTML = "Password Generata: " + userName + userSurName + userColor + 20;
