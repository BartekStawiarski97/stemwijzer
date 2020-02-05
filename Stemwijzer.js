var stelling = [
"Nederland moet terug naar de Gulden", 
"Er moet meer geld naar ontwikkelingshulp", 
"De overheid moet afslanken", 
"De AOW leeftijd moet terug naar 67 jaar",
"Wietteelt moet worden gelegaliseerd",
"We moeten minder geld aan het leger uitgeven",
"Alle werkenden moeten minder loonbelasting betalen",
"Leeftijd rijbewijs moet 18 blijven",
"Leeftijdsgrens alcohol naar 18"];
document.getElementById("stelling");


var btnEens = document.getElementById("btnEens");
var btnOneens = document.getElementById("btnOneens");
var btnVolgende = document.getElementById("btnVolgende");

function vraag1(){
	stelling.style.display = "inline-block";
	btnEens.innerHTML = "Eens";
	btnOneens.innerHTML ="Oneens";
	btnVolgende.style.display ="none";

}

vraag1();
