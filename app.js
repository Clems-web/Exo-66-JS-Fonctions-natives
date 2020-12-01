let para1 = document.getElementById("entier");
let para2 = document.getElementById("flottant");
let para3 = document.getElementById("non-numerique");
let para4 = document.getElementById("random");
let para5 = document.getElementById("trunc");
let para6 = document.getElementById("replace");
let operande = 10;
let numberEntier = parseInt(para1.innerHTML);
let numberFlottant = parseFloat(para2.innerHTML);

para1.innerHTML = numberEntier*operande;
para2.innerHTML = numberFlottant*operande + parseInt(para1.innerHTML);

if (isNaN(para3.innerHTML)) {
    para3.innerHTML = 0;
}

para4.innerHTML = Math.trunc((Math.random()*100));

para5.innerHTML = Math.trunc(para5.innerHTML);

para6.innerHTML = para6.innerHTML.replace("world", "Clement Servais");
