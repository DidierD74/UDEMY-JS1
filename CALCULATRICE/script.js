//--------------------------------------------------------------------
//--------------------------------------------------------------------
//------------------SOLUTION COURS UDEMY------------------------------

// Fonction pour additionner
function addition(nombreA, nombreB) {
  return nombreA + nombreB;
}

// Fonction pour multiplier
function multiplication(nombreA, nombreB) {
  return nombreA * nombreB;
}

// Fonction pour soustraire
function soustraction(nombreA, nombreB) {
  return nombreA - nombreB;
}

// Fonction pour diviser
function division(nombreA, nombreB) {
  if (nombreB == 0) {
    throw new Error("Impossible de diviser par 0.");
  }
  return nombreA / nombreB;
}

// On rentre dans la boucle principale
let restart = false; // Cette variable vaut false ce qui veut dire que par défaut, nous ne reproposons par un calcul.
do {
  // Demande un choix
  do {
    var choix = Number(
      prompt(
        "Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"
      )
    );
  } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

  // Demande deux nombres
  do {
    var premierNombre = Number(prompt("Entrez un premier nombre :"));
    var deuxiemeNombre = Number(prompt("Entrez un deuxième nombre : "));
  } while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

  // Appelle la fonction choisie
  try {
    switch (choix) {
      case 1:
        var resultat = addition(premierNombre, deuxiemeNombre);
        break;

      case 2:
        var resultat = multiplication(premierNombre, deuxiemeNombre);
        break;

      case 3:
        var resultat = soustraction(premierNombre, deuxiemeNombre);
        break;

      case 4:
        var resultat = division(premierNombre, deuxiemeNombre);
        break;

      default:
        throw new Error("Une erreur est survenue.");
    }

    // Affiche le résultat
    alert("Voici le résultat : " + resultat);
  } catch (error) {
    alert(error); // Si une erreur est survenue, on affiche l'erreur
  }

  restart = confirm("Souhaitez-vous recommencer un calcul ?"); // On demande grâce à la boîte de dialogue confirm() si l'utilisateur veut recommencer
} while (restart);

//--------------------------------------------------------------------
//--------------------------------------------------------------------
//------------------2EME / MA METHODE (lE 23/06/2022)-----------------

// // Boucle principale :
// function debutcalcul() {
//   do {
//     var choix = prompt(
//       "Que voulez-vous faire :\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division"
//     );
//   } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

//   // 2eme Boucle, celle-ci permet à l'utilisateur de saisir les 2 nombres pour l'"opération :
//   do {
//     var premierNombre = Number(prompt("Saisissez votre 1er nombre : "));
//     var deuxiemeNombre = Number(prompt("Saisissez votre 2eme nombre :"));
//   } while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

//   function addition(nombre1, nombre2) {
//     let result = nombre1 + nombre2;
//     return result;
//   }

//   function multiplication(nombre1, nombre2) {
//     let result = nombre1 * nombre2;
//     return result;
//   }

//   function soustraction(nombre1, nombre2) {
//     let result = nombre1 - nombre2;
//     return result;
//   }

//   function division(nombre1, nombre2) {
//     if (nombre2 == 0) {
//       throw new Error("Impossible de diviser par 0");
//     }
//     let result = nombre1 / nombre2;
//     return result;
//   }

//   // Ici il s'agit du switch permettant de choix du type d'opération, il a était intégré dans un tryCatch afin de capter erreur éventuelle :
//   try {
//     switch (choix) {
//       case "1":
//         var resultat = addition(premierNombre, deuxiemeNombre);
//         break;
//       case "2":
//         var resultat = multiplication(premierNombre, deuxiemeNombre);
//         break;
//       case "3":
//         var resultat = soustraction(premierNombre, deuxiemeNombre);
//         break;
//       case "4":
//         var resultat = division(premierNombre, deuxiemeNombre);
//         break;

//       default:
//         throw new Error("Une erreur est survenu");
//     }
//     alert("Voici le résultat " + resultat);
//   } catch (error) {
//     alert(error);
//   }
// }

// // boucle qui recommence la boucle principale: debutcalcul(), si le confirm est validé par l'utilisateur :
// do {
//   debutcalcul();
// } while (confirm("Voulez-vous recommencer un nouveau calcul ? "));
