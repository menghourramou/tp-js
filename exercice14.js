// 14. Créez une fonction "spupof" qui prend en paramètre une chaine de caractères et qui affiche cette chaine en remplaçant chacun des caractères par le suivant dans l’ordre alphabétique (le "z" devient "a", le “a” devient “b”, etc..).

//  Création de ma fonction "spupof" avec le paramètre "mot"
function spupof(mot) {
    
    // Dans ma fonction "spupof" je crée une deuxième fonction "convLettre" avec le paramètre "lettre"
    function convLettre(lettre) {

        // Déclaration d'une variable "newLettre" qui va contenir mon paramètre "lettre"
        let newLettre = lettre;

        // Début du switch avec la fonction "replace()" appliquée à "lettre"
        switch (lettre.replace()) {
        // cas de la lettre "a" stockée dans "lettre" que je remplace par "b" et que je stocke dans "newLettre"
        case "a":
            newLettre = "b";
            break;
        // ainsi de suite pour chaque lettre
        case "b":
            newLettre = "c";
            break;
        case "c":
            newLettre = "d";
            break;
        case "d":
            newLettre = "e";
            break;
        case "e":
            newLettre = "f";
            break;
        case "f":
            newLettre = "g";
            break;
        case "g":
            newLettre = "h";
            break;
        case "h":
            newLettre = "i";
            break;
        case "i":
            newLettre = "j";
            break;
        case "j":
            newLettre = "k";
            break;
        case "k":
            newLettre = "l";
            break;
        case "l":
            newLettre = "m";
            break;
        case "m":
            newLettre = "n";
            break;
        case "n":
            newLettre = "o";
            break;
        case "o":
            newLettre = "p";
            break;
        case "p":
            newLettre = "q";
            break;
        case "q":
            newLettre = "r";
            break;
        case "r":
            newLettre = "s";
            break;
        case "s":
            newLettre = "t";
            break;
        case "t":
            newLettre = "u";
            break;
        case "u":
            newLettre = "v";
            break;
        case "v":
            newLettre = "w";
            break;
        case "w":
            newLettre = "x";
            break;
        case "x":
            newLettre = "y";
            break;
        case "y":
            newLettre = "z";
            break;
        case "z":
            newLettre = "a";
            break;
        }
        // Je demande à ma fonction "convLettre" de me renvoyer ce qui est stocké dans "newLettre"
        return newLettre;
    }
    // Fin de ma fonction "convLettre"

    // Création de la variable "newMot" que je déclare à vide avec ""
    let newMot = "";

    // Instanciation de ma boucle qui va me permettre de remplacer chaque lettre de mon paramètre "mot" et ensuite les stocker dans "newMot" grâce à la fonction "convLettre" créée au-dessus
    for (const lettre of mot) {
      newMot += convLettre(lettre);
    }
    // J'affiche dans la console mon nouveau mot stocké dans la variable "newMot"
    console.log(newMot);
  }



// Test de ma fonction :
// Appel de ma fonction avec "bonjour" en paramètre
spupof("bonjour");
spupof("world");
spupof("test");