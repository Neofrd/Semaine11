var propal = document.getElementById("propal");
var bouton = document.getElementById("bouton");
var tentative = document.getElementById("tentative");
//var affichagetentative = tentative.display.style;
var resultat = document.getElementById("resultat");
var nbessai = 0;

reponse = Math.ceil(Math.random() * 100);

affichetentative;

function affichetentative() {
	if (nbessai = 0) {
		tentative.display.style = 'none' ;
	} else {
		tentative.display.style = 'block';
	}
}


function verifier() {
	nbessai++ ;
	affichetentative;
		tentative.innerHTML = "Nombre de tentatives : " + nbessai;

    if (propal.value < reponse) {
        resultat.innerHTML = "Insuffisant !";
    }
    if (propal.value == reponse) {
        resultat.innerHTML = "Gagné en " + nbessai;
    }
    if (propal.value > reponse) {
        resultat.innerHTML = "Trop !";
    }
}

bouton.onclick = verifier;