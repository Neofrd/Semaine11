var bouton = document.getElementById('bouton');
var humanchoix = document.getElementById('choix');
var mydiv = document.getElementById('ordichoix');
var mydivresult = document.getElementById('result');
var humanwin = 0;
var computerwin = 0;


bouton.addEventListener('click', function() {
    var valeurchoixhuman = humanchoix.options[humanchoix.selectedIndex].value;
    //var choixordiId=0;
    var choixordiId = Math.ceil(Math.random() * 3); //Math.floor(Math.random() * (2 - 0)) + 1; 
		var myListeChoix = ['None', 'Pierre','Feuille','Ciseaux'];
    var mychoix = myListeChoix[choixordiId];
    
    mydiv.innerHTML = 'Choix de l\'ordi : ' + mychoix;
    
      if (valeurchoixhuman === mychoix) {
          mydivresult.innerHTML = 'Egalité sur ce coup ! \n\n' + 'Humain ' + humanwin + ' Ordinateur ' + computerwin;    
      		} else if (valeurchoixhuman == 'Pierre') { 
          				switch mychoix
                    case 'Feuille': 
                     computerwin++;
                     mydivresult.innerHTML = 'J\'ai gagné ! \n\n Humain ' + humanwin + ' Ordinateur ' + computerwin;
                     break;
                    
                    default:
                     humanwin++;
                     mydivresult.innerHTML = "Vous avez gagné ! \n\n Humain ' + humanwin + 'Ordinateur ' + computerwin;
                    break;
                    
      		} else if (valeurchoixhuman == 'Feuille') { 
          					switch mychoix
                    case 'Ciseaux':
                     computerwin++;
                     mydivresult.innerHTML = 'J\'ai gagné ! \n\n Humain ' + humanwin + ' Ordinateur ' + computerwin;
                     break;
                     
                    default:
                     humanwin++;
                     mydivresult.innerHTML = "Vous avez gagné ! \n\n Humain ' + humanwin + 'Ordinateur ' + computerwin;
                     break;

      		} else if (valeurchoixhuman == 'Ciseaux') { 
          					switch mychoix
                    case 'Pierre':
                     computerwin++;
                     mydivresult.innerHTML = 'J\'ai gagné ! \n\n Humain ' + humanwin + ' Ordinateur ' + computerwin;
                    break;
                    
                    default:
                      humanwin++;
                      mydivresult.innerHTML = "Vous avez gagné ! \n\n Humain ' + humanwin + 'Ordinateur ' + computerwin;

      		}
      }, true)