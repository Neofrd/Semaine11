var bouton = document.getElementById('bouton');
var humanchoix = document.getElementById('choix');
var mydiv = document.getElementById('ordichoix');
var mydivresult = document.getElementById('result');
var humanwin = 0;
var computerwin = 0;

bouton.addEventListener('click', function() {
    var valeurchoixhuman = humanchoix.options[humanchoix.selectedIndex].value;
    var choixordiId = Math.ceil(Math.random() * 2);
		var myListeChoix = ['Pierre','Feuille','Ciseaux'];
    var mychoix = myListeChoix[choixordiId];
    
    mydiv.innerHTML = 'Choix de l\'ordi : ' + mychoix;
    
      if (valeurchoixhuman === mychoix) {
          mydivresult.innerHTML = 'Egalité sur ce coup ' + 'Humain ' + humanwin + ' Ordinateur ' + computerwin;
          
      } else { 
      					switch (valeurchoixhuman) {
                  case 'Pierre': // Humain Pierre
                    if (mychoix = 'Feuille') { // Ordi : Feuille
                            computerwin++;
                            mydivresult.innerHTML = 'J\'ai gagné !';
                            mydivresult.innerHTML = mydivresult.innerHTML + \n + 'Humain ' + humanwin + 'Ordinateur ' + computerwin;
                    } else {  //Humain : Pierre contre Ciseaux
                            humanwin++;
                            mydivresult.innerHTML = 'Vous avez gagné !';
                            mydivresult.innerHTML = mydivresult.innerHTML + \n + 'Humain ' + humanwin + 'Ordinateur ' + computerwin;
                            };
                    break;
                  
                  case 'Feuille': // Humain Feuille
                    if (mychoix = 'Ciseaux') { // Ordi : Ciseaux
                            computerwin++;
                            mydivresult.innerHTML = 'J\'ai gagné !';
                            mydivresult.innerHTML = mydivresult.innerHTML + \n + 'Humain ' + humanwin + 'Ordinateur ' + computerwin;
                    } else { //Ordi : Pierre
                            humanwin++;
                            mydivresult.innerHTML = 'Vous avez gagné !';
                            mydivresult.innerHTML = mydivresult.innerHTML + \n + 'Humain ' + humanwin + 'Ordinateur ' + computerwin;
                            };
                    break;
                            
                   case 'Ciseaux': // Humain Ciseaux
                    if (mychoix = 'Feuille') { // Ordi : Pierre
                            computerwin++;
                            mydivresult.innerHTML = 'J\'ai gagné !';
                            mydivresult.innerHTML = mydivresult.innerHTML + \n + 'Humain ' + humanwin + 'Ordinateur ' + computerwin;
                    } else { //Ordi : Feuille
                            humanwin++;
                            mydivresult.innerHTML = 'Vous avez gagné !';
                            mydivresult.innerHTML = mydivresult.innerHTML + \n + 'Humain ' + humanwin + 'Ordinateur ' + computerwin;
                            };
                    break;
                            
                    default:
                      mydivresult.innerHTML = 'Nous avons un problème !';
                      break;
                   }
                 } 
               },true);
