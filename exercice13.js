// 13. Créez une fonction "calc" qui prend en paramètre un type d’opération ("+", "*", "/", "%", "-") et deux entiers. La fonction retourne le résultat de l’opération en respectant l’ordre des paramètres

// Créatio de ma fonction "calc" avec trois arguments "a" et "b" qui sont des entiers et "n" mon opérateur que je définis en dessous

function calc(a, n, b) {

    // Condition :
    // Si mon opérateur "n" est équivaut à "+" :
        if(n == "+"){

        // J'affiche le résultat de l'addition de mon entier "a" + mon entier "b"
        console.log(a + b);

    }
    // Sinon si mon opérateur "n" est équivaut à "-" :
    else if(n == "-"){

        // J'affiche le résultat de la soustraction de mon entier "a" - mon entier "b"
        console.log(a - b);

    }
    // Sinon si mon opérateur "n" est équivaut à "*" :
    else if(n == "*"){

        // J'affiche le résultat de la multiplication de mon entier "a" * mon entier "b"
        console.log(a * b);

    }
    // Sinon si mon opérateur "n" est équivaut à "/" :
    else if(n == "/"){

        // J'affiche le résultat de la division de mon entier "a" / mon entier "b"
        console.log(a / b);

    }
    // Sinon si mon opérateur "n" est équivaut à "%" :
    else if(n == "%"){

        // J'affiche le résultat du modulo de mon entier "a" % mon entier "b" 
        console.log(a % b);

    }
    

}

// Test appel de ma fonction avec une addition et une multipication
calc(12, "-", 2);
calc(12, "*", 2);