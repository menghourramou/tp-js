// 12. Créez une fonction "array_key" qui devra retourner la valeur de l’élément du tableau situé à l’index "key".

// Déclaration de la fonction nommée array_key avec le paramètre key
function array_key(key) {

    // Création de mon tableau array qui contient trois valeurs
    array = ["Hello", "World", "!"];

    // Affichage dans la console de l'élement de mon tableau situé à l'index de mon paramètre "key"
    console.log(array[key]);
}

// Appel de la fonction avec les trois index;
array_key(0);
array_key(1);
array_key(2);