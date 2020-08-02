// 11. Créez une fonction anonyme qui prend en paramètre une variable de type string et qui retourne son équivalent avec la premiere lettre en majuscule. Vous devrez assigner cette fonction anonyme à une variable "func". 

var func = function(x){

    if (typeof x != "string"){

        return "Erreur";

    } 

    else{

        return x.charAt(0).toUpperCase() + x.slice(1);

    }

}


console.log(func("asmaa"));