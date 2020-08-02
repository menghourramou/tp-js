// 13. Créez une fonction "calc" qui prend en paramètre un type d’opération ("+", "*", "/", "%", "-") et deux entiers. La fonction retourne le résultat de l’opération en respectant l’ordre des paramètres

// Création de ma fonction "calc" avec trois arguments "x" et "y" qui sont des entiers et "n" mon opérateur que je définis en dessous

function calc(x, n, y) {

    // Condition :
    // Si mon opérateur "n" est équivaut à "+" :
        if(n == "+"){

        // J'affiche le résultat de l'addition de mon entier "x" + mon entier "y"
        console.log(x + y);

    }
    // Sinon si mon opérateur "n" est équivaut à "-" :
    else if(n == "-"){

        // J'affiche le résultat de la soustraction de mon entier "x" - mon entier "y"
        console.log(x - y);

    }
    // Sinon si mon opérateur "n" est équivaut à "*" :
    else if(n == "*"){

        // J'affiche le résultat de la multiplication de mon entier "x" * mon entier "y"
        console.log(x * y);

    }
    // Sinon si mon opérateur "n" est équivaut à "/" :
    else if(n == "/"){

        // J'affiche le résultat de la division de mon entier "x" / mon entier "y"
        console.log(x / y);

    }
    // Sinon si mon opérateur "n" est équivaut à "%" :
    else if(n == "%"){

        // J'affiche le résultat du modulo de mon entier "x" % mon entier "y"
        console.log(x % y);

    }
    

}

// Test appel de ma fonction avec une addition et une multipication
calc(12, "-", 2);
calc(12, "*", 2);